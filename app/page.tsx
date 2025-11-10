'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Heart, 
  Shield, 
  Clock, 
  Users,
  Flame,
  FileText,
  MapPin,
  Mail,
  PhoneCall
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ============================================
          HEADER - Floating Glass Morphism
          ============================================ */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
      >
        <div className="glass border-b border-brand-gold/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-16 h-16 transition-transform group-hover:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="MIKO-RK Logo"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold text-gradient">
                    MIKO-RK
                  </span>
                  <span className="text-sm text-brand-forest/70">
                    Pohrebné služby
                  </span>
                </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link 
                  href="/" 
                  className="text-brand-forest font-medium underline-animation"
                >
                  Domov
                </Link>
                <Link 
                  href="/sluzby" 
                  className="text-brand-forest font-medium underline-animation"
                >
                  Služby
                </Link>
                <Link 
                  href="/kontakt" 
                  className="text-brand-forest font-medium underline-animation"
                >
                  Kontakt
                </Link>
              </nav>

              {/* Emergency Call Button */}
              <motion.a
                href="tel:+421905954044"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-gold to-brand-gold/80 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>0905/954044 NONSTOP</span>
              </motion.a>

              {/* Mobile Menu Toggle */}
              <button className="md:hidden p-2">
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span className="w-full h-0.5 bg-brand-forest"></span>
                  <span className="w-full h-0.5 bg-brand-forest"></span>
                  <span className="w-full h-0.5 bg-brand-forest"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ============================================
          HERO SECTION - Epic Entrance
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-forest/90 via-brand-forest/80 to-brand-beige/60 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000"
            alt="Peaceful nature"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Decorative Element */}
            <motion.div
              variants={fadeIn}
              className="mb-8 flex justify-center"
            >
              <div className="w-16 h-1 bg-brand-gold rounded-full"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              S úctou sprevádzame
              <br />
              <span className="text-brand-gold">poslednou cestou</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed"
            >
              Profesionálne a súcitné pohrebné služby v Ružomberku a okolí.
              <br />
              Sme tu pre Vás 24 hodín denne, 7 dní v týždni.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="tel:+421905954044"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(164, 120, 68, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand-gold text-white rounded-full font-semibold text-lg shadow-2xl flex items-center gap-3 hover:bg-brand-gold/90 transition-colors"
              >
                <PhoneCall className="w-6 h-6" />
                Kontaktujte nás nonstop
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Naše služby
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US - Trust Indicators
          ============================================ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif font-bold text-brand-forest mb-4"
            >
              Prečo nám dôverovať
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-24 h-1 bg-brand-gold mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Clock,
                title: 'Nonstop dostupnosť',
                description: 'Sme k dispozícii 24 hodín denne, 7 dní v týždni.'
              },
              {
                icon: Users,
                title: 'Skúsený tím',
                description: 'Náš profesionálny tím má dlhoročné skúsenosti.'
              },
              {
                icon: FileText,
                title: 'Vybavíme všetko',
                description: 'Od dokumentov až po náhrobné kamene.'
              },
              {
                icon: Heart,
                title: 'S citom a empatiou',
                description: 'Rozumieme Vašej bolesti a sprevádzame Vás s porozumením.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-brand-beige border border-brand-gold/10 hover-lift hover:border-brand-gold/30 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brand-forest to-brand-forest/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-brand-forest mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-brand-forest/70 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SERVICES - Modern Card Grid
          ============================================ */}
      <section id="services" className="py-24 bg-gradient-to-b from-brand-beige to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif font-bold text-brand-forest mb-4"
            >
              Naše služby
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-brand-forest/70 max-w-2xl mx-auto"
            >
              Zabezpečíme všetko, čo potrebujete pre dôstojnú poslednú rozlúčku
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: 'Komplexné pohrebné služby',
                description: 'Zabezpečíme všetky náležitosti od začiatku do konca.',
                gradient: 'from-brand-forest to-brand-forest/80'
              },
              {
                icon: Flame,
                title: 'Kremácia a urny',
                description: 'Ponúkame služby kremácie s výberom rôznych typov urn.',
                gradient: 'from-brand-gold to-brand-gold/80'
              },
              {
                icon: FileText,
                title: 'Administratíva',
                description: 'Vybavíme za Vás všetky potrebné doklady a náležitosti.',
                gradient: 'from-brand-forest/80 to-brand-gold/60'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative h-full p-8 rounded-3xl bg-white border border-brand-gold/10 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-brand-forest mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-brand-forest/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <Link
                      href="/sluzby"
                      className="inline-flex items-center text-brand-gold font-semibold group-hover:gap-3 transition-all"
                    >
                      Zistiť viac
                      <span className="ml-2 group-hover:ml-0">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CONTACT CTA - Final Call to Action
          ============================================ */}
      <section className="py-24 bg-gradient-to-br from-brand-forest to-brand-forest/90 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-brand-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
            >
              Sme tu pre Vás kedykoľvek
            </motion.h2>
            
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/90 mb-12 leading-relaxed"
            >
              Neváhajte nás kontaktovať kedykoľvek. Náš tím je k dispozícii 24 hodín denne, 
              7 dní v týždni, aby Vám poskytol podporu v ťažkých chvíľach.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.a
                href="tel:+421905954044"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-brand-gold text-white rounded-full font-bold text-xl shadow-2xl flex items-center gap-3 hover:bg-brand-gold/90 transition-colors"
              >
                <Phone className="w-6 h-6" />
                0905/954044
              </motion.a>

              <motion.a
                href="mailto:info@miko-rk.sk"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-xl border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-3"
              >
                <Mail className="w-6 h-6" />
                info@miko-rk.sk
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-12 flex items-center justify-center gap-2 text-white/70"
            >
              <MapPin className="w-5 h-5" />
              <span>Muránska 5, 050 01 Revúca • Okružná 428, 049 11 Plešivec</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FOOTER - Elegant & Minimal
          ============================================ */}
      <footer className="py-12 bg-brand-forest text-white/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="MIKO-RK"
                  fill
                  className="object-contain opacity-80"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white">MIKO-RK</div>
                <div className="text-sm">S úctou k životu a spomienkam</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/" className="hover:text-brand-gold transition-colors">Domov</Link>
              <Link href="/sluzby" className="hover:text-brand-gold transition-colors">Služby</Link>
              <Link href="/kontakt" className="hover:text-brand-gold transition-colors">Kontakt</Link>
            </div>

            <div className="text-sm text-center md:text-right">
              © 2025 MIKO-RK, s.r.o.<br />
              Všetky práva vyhradené
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================
          FLOATING ACTION BUTTON - Mobile
          ============================================ */}
      <motion.a
        href="tel:+421905954044"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold/80 rounded-full shadow-2xl flex items-center justify-center z-50 lg:hidden"
      >
        <Phone className="w-8 h-8 text-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </motion.a>
    </main>
  )
}


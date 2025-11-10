# 📐 Website Structure & Navigation Plan
## Pohrebné služby MIKO-RK

---

## 1. Site Architecture Overview

```
HOMEPAGE
├── O NÁS (About Us)
│   ├── Naša filozofia (Our Philosophy)
│   ├── História spoločnosti (Company History)
│   └── Tým (Team)
│
├── SLUŽBY (Services)
│   ├── Kompletné pohrebné služby (Complete Funeral Services)
│   ├── Kremácia (Cremation)
│   ├── Tradičný pohreb (Traditional Burial)
│   ├── Preprava a úprava zosnulých (Transport & Preparation)
│   ├── Administratíva a dokumenty (Administration & Documents)
│   └── Kvetinová výzdoba (Floral Arrangements)
│
├── CENNÍK (Price List)
│   ├── Cenové balíčky (Service Packages)
│   ├── Rakvy a urny (Coffins & Urns)
│   └── Doplnkové služby (Additional Services)
│
├── FOTOGALÉRIA (Gallery)
│   ├── Priestory (Our Facilities)
│   ├── Produkty (Products)
│   └── Kvetinová výzdoba (Floral Designs)
│
├── SMÚTOČNÉ OZNÁMENIA (Obituaries)
│   ├── Aktuálne oznámenia (Current Obituaries)
│   └── Vytvorte oznámenie (Create Obituary)
│
├── ČASTO KLADENÉ OTÁZKY (FAQ)
│
├── BLOG / PORADCA (Blog / Advisor)
│   ├── Ako pripraviť pohreb (How to Prepare a Funeral)
│   ├── Právne informácie (Legal Information)
│   └── Spomienky a spracovanie smútku (Grief Support)
│
└── KONTAKT (Contact)
    ├── Kontaktný formulár (Contact Form)
    ├── Mapa a navigácia (Map & Directions)
    └── Nonstop linka (24/7 Emergency Line)
```

---

## 2. Primary Navigation (Desktop)

### Top Navigation Bar (Sticky)

```
┌────────────────────────────────────────────────────────────────┐
│  [LOGO]    Domov  O nás  Služby  Cenník  Fotogaléria  Kontakt  │
│                                    [📞 0905/954044 NONSTOP] ──► │
└────────────────────────────────────────────────────────────────┘
```

**Features:**
- **Sticky header:** Stays visible on scroll
- **Phone number prominent:** Always accessible in top right
- **Hover effects:** Subtle underline in soft gold (#C7A87E)
- **Current page indicator:** Gold accent line below active link

### Mobile Navigation (Hamburger Menu)

```
┌──────────────────────┐
│ ☰  [LOGO]   📞      │
└──────────────────────┘

[When opened:]
┌──────────────────────┐
│ ✕  Menu              │
├──────────────────────┤
│ Domov                │
│ O nás                │
│ Služby            ▼  │
│ Cenník               │
│ Fotogaléria          │
│ Smútočné oznámenia   │
│ FAQ                  │
│ Kontakt              │
├──────────────────────┤
│ 📞 0905/954044       │
│ NONSTOP LINKA        │
└──────────────────────┘
```

---

## 3. Footer Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [LOGO]                                                         │
│  S úctou k životu a spomienkam                                  │
│                                                                 │
│  ─────────────────────────────────────────────────────────── │
│                                                                 │
│  KONTAKT              RÝCHLE ODKAZY         PREVÁDZKOVÉ HODINY │
│                                                                 │
│  MIKO-RK s.r.o.       → O nás               Nepretržite 24/7   │
│  Muránska 5           → Služby              Nonstop linka:     │
│  050 01 Revúca        → Cenník              📞 0905/954044     │
│                       → FAQ                                    │
│  📧 info@miko-rk.sk   → Kontakt             Kancelária:        │
│  🗺️ Zobraziť mapu     → Smútočné oznámenia  Po-Pia: 8:00-16:00│
│                                                                 │
│  ─────────────────────────────────────────────────────────── │
│                                                                 │
│  © 2025 MIKO-RK s.r.o. • IČO: [number] • Ochrana údajov        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Footer Background:** Deep green (#2F3E35) with white/beige text  
**Accent Line:** Soft gold divider

---

## 4. Homepage Layout Blueprint

### Section Breakdown:

```
┌──────────────────────────────────────────────────────────┐
│ HERO SECTION                                             │
│ Full-width background image with overlay                 │
│ - Main headline + subheadline                           │
│ - Primary CTA: "Kontaktujte nás"                        │
│ - Secondary CTA: "Naše služby"                          │
│ - Emergency phone: 📞 0905/954044 NONSTOP               │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ TRUSTED INTRODUCTION                                     │
│ 2-column: Photo left, text right                        │
│ - Brief company introduction                            │
│ - Years of experience highlight                         │
│ - Values badges (Dignity, Trust, Compassion)            │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ SERVICES OVERVIEW                                        │
│ 3-column card grid                                       │
│ - Icon + service name + brief description               │
│ - Link to full service page                             │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ WHY CHOOSE US                                            │
│ 4-column icon grid                                       │
│ - 24/7 Availability                                      │
│ - Professional team                                      │
│ - Complete documentation                                 │
│ - Compassionate care                                     │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ GALLERY PREVIEW                                          │
│ Horizontal scrolling gallery or 4-image grid            │
│ - Link to full gallery                                   │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ TESTIMONIALS (Optional)                                  │
│ Centered carousel with quotes                           │
│ - Family testimonials with discretion                    │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ CONTACT SECTION                                          │
│ 2-column: Map left, contact form right                  │
│ - Quick contact form                                     │
│ - Emergency phone prominent                              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ FOOTER                                                   │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Page Templates

### A. Service Detail Page

**Layout:**
- Hero image with service name overlay
- Introduction paragraph
- "What's included" checklist
- Process timeline (visual steps)
- Pricing indicator or "Contact for pricing"
- Related services links
- Contact CTA at bottom

### B. Price List Page

**Layout:**
- Clear disclaimer about individualized pricing
- Package comparison table (Basic / Standard / Premium)
- Individual service pricing list
- "Request detailed quote" CTA
- FAQ accordion

### C. Contact Page

**Layout:**
- Large map at top
- Two-column: Contact form left, info right
- Emergency phone banner (sticky)
- Business hours clearly displayed
- Parking/access information

### D. Gallery Page

**Layout:**
- Category filters (Facilities / Products / Florals)
- Masonry grid layout
- Lightbox modal for full-size images
- Respectful, tasteful photography

---

## 6. Key UX Principles

### Accessibility Priority:
- **Large text:** Minimum 16px body text
- **High contrast:** WCAG AA compliant
- **Keyboard navigation:** Full site navigable without mouse
- **Screen reader friendly:** Proper ARIA labels

### Emotional Design:
- **Generous whitespace:** Reduces cognitive load
- **Soft transitions:** No jarring animations
- **Calming colors:** Beige and green palette
- **Clear hierarchy:** Easy to scan and find information

### Mobile-First:
- **Touch-friendly buttons:** Minimum 44x44px tap targets
- **Simplified navigation:** Essential links only in mobile menu
- **Quick-access phone:** Always one tap away
- **Optimized images:** Fast loading on mobile networks

---

## 7. Navigation Best Practices

### Do's:
✅ Keep emergency phone number always visible  
✅ Use clear, plain language (avoid jargon)  
✅ Limit menu to 7 main items  
✅ Include breadcrumbs on deep pages  
✅ Use descriptive link text  

### Don'ts:
❌ Don't hide contact information  
❌ Don't use complex mega menus  
❌ Don't require more than 3 clicks to reach any page  
❌ Don't use auto-playing media  
❌ Don't force users to create accounts  

---

**Document Version:** 1.0  
**Approved for Development:** Ready  
**Next Step:** Content & Copywriting Plan


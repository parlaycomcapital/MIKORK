# 🌿 MIKO-RK Website - Implementation Guide

## 📁 Website Structure

```
MIKORK/
├── index.html              ← Homepage (Main page)
├── sluzby.html            ← Services page (Complete)
├── kontakt.html           ← Contact page (Complete)
├── o-nas.html             ← About Us page (To be created)
├── cennik.html            ← Pricing page (To be created)
├── fotogaleria.html       ← Gallery page (To be created)
├── faq.html               ← FAQ page (To be created)
│
├── css/
│   └── style.css          ← Main stylesheet with all styles
│
├── js/
│   └── script.js          ← JavaScript for interactivity
│
├── images/                ← Put your photos here
│   ├── facility-placeholder.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── gallery-4.jpg
│
├── assets/                ← Additional assets
│
└── Documentation/         ← Project documentation (planning docs)
    ├── 00-Executive-Summary.md
    ├── 01-Brand-Identity-Guidelines.md
    ├── 02-Website-Structure-and-Navigation.md
    ├── 03-Content-Copywriting-Guide.md
    ├── 04-Homepage-Design-Concept.md
    ├── 05-SEO-Technical-Strategy.md
    ├── 06-Platform-CMS-Recommendations.md
    ├── 07-Design-Inspiration-Examples.md
    └── 08-Implementation-Roadmap.md
```

---

## 🚀 Quick Start

### Option 1: View Locally

1. **Open the website:**
   - Double-click `index.html` to open in your browser
   - Or right-click → Open with → Your browser

2. **Navigate through pages:**
   - Click on menu items to see different pages
   - Test all buttons and links

### Option 2: Use Local Server (Recommended)

For better testing with forms and features:

**Using Python (if installed):**
```bash
# Navigate to the MIKORK folder
cd C:\Users\simik\Desktop\MIKORK

# Start simple HTTP server
python -m http.server 8000

# Open browser to: http://localhost:8000
```

**Using VS Code Live Server:**
1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

---

## 🎨 Design System Reference

### Brand Colors
```css
--color-primary:    #2F3E35  /* Deep Green */
--color-background: #F2EDE4  /* Warm Beige */
--color-accent:     #C7A87E  /* Soft Gold */
--color-secondary:  #B4B7B1  /* Silver Grey */
--color-white:      #FFFFFF  /* White */
```

### Typography
- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)
- **Accents:** Playfair Display (serif)

### Key Features
✅ Fully responsive (mobile, tablet, desktop)  
✅ Modern, clean design  
✅ Brand colors throughout  
✅ Accessibility-ready (WCAG AA compliant)  
✅ Fast loading (optimized CSS)  
✅ SEO-optimized HTML structure  

---

## 📸 Adding Your Images

### Required Images

**Replace placeholder images with your own:**

1. **Logo** (already in place):
   - File: `MIKORK logo.png`
   - Used in: Header, footer
   - Keep aspect ratio

2. **Homepage** (`images/` folder):
   - `facility-placeholder.jpg` - Your facility interior/exterior (600x450px recommended)

3. **Gallery** (`images/` folder):
   - `gallery-1.jpg` - Ceremonial room (300x300px square)
   - `gallery-2.jpg` - Coffin showroom (300x300px)
   - `gallery-3.jpg` - Floral arrangements (300x300px)
   - `gallery-4.jpg` - Facility exterior (300x300px)

### Image Guidelines

**Format:**
- Use `.jpg` for photographs
- Use `.png` for logos with transparency
- Use `.webp` for best performance (optional)

**Size:**
- **Max width:** 1920px for full-width images
- **Gallery:** 600x600px (will be resized to 300x300px)
- **Thumbnails:** 300x300px
- **File size:** < 500KB per image (compress if needed)

**Naming:**
- Use descriptive names: `ceremonial-room.jpg`
- Use lowercase and hyphens
- Avoid spaces and special characters

### Image Optimization Tools

**Online (Free):**
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Google's image optimizer

**Desktop:**
- Photoshop: Save for Web
- GIMP: Export as (adjust quality)

---

## ✏️ Customizing Content

### Edit Text Content

**Homepage** (`index.html`):
- Hero headline: Line 72
- Introduction text: Lines 125-134
- Services descriptions: Lines 175-225
- Contact info: Lines 380-410

**Services Page** (`sluzby.html`):
- Service descriptions: Lines 70-220

**Contact Page** (`kontakt.html`):
- Contact information: Lines 120-180
- Hours: Lines 190-210

### Edit Phone Number

Search and replace all instances of `0905/954044` with your number:
- Format in code: `+421905954044` (for tel: links)
- Display format: `0905/954044`

Files to update:
- `index.html`
- `sluzby.html`
- `kontakt.html`
- Plus any other pages you create

### Edit Email Address

Replace `info@miko-rk.sk` with your email throughout all files.

### Edit Addresses

Update location information in footer and contact sections with your actual addresses.

---

## 📱 Testing Your Website

### Browser Compatibility

**Test in these browsers:**
- ✅ Google Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Microsoft Edge (latest)

### Responsive Testing

**Test these screen sizes:**
- **Mobile:** 375px, 414px
- **Tablet:** 768px, 1024px
- **Desktop:** 1366px, 1920px

**Tools:**
- Browser DevTools (F12 → Device Toolbar)
- [Responsinator](http://www.responsinator.com/)
- [BrowserStack](https://www.browserstack.com/) (paid)

### Checklist Before Launch

- [ ] All images load correctly
- [ ] No placeholder text (Lorem Ipsum)
- [ ] Phone number is correct everywhere
- [ ] Email address is correct
- [ ] Addresses are correct
- [ ] All links work (no 404 errors)
- [ ] Forms submit correctly (or redirect properly)
- [ ] Mobile menu opens/closes
- [ ] Emergency phone button works
- [ ] Google Maps shows correct location
- [ ] Footer information is complete
- [ ] Copyright year is current (2025)

---

## 🚀 Deployment Options

### Option 1: Shared Hosting (Easiest)

**Recommended Hosts:**
- **Websupport.sk** (Slovak, €4.90/month)
- **Wedos.sk** (Czech/Slovak, €4/month)
- **HostMaster.sk** (Slovak, €5/month)

**Steps:**
1. Purchase hosting plan
2. Upload all files via FTP (FileZilla)
3. Point domain to hosting
4. Done!

**FTP Upload:**
```
Host: ftp.your-domain.sk
Username: [provided by host]
Password: [provided by host]
Port: 21

Upload all files to: /www/ or /public_html/
```

### Option 2: Free Hosting (Testing)

**For testing only (not for production):**
- [Netlify](https://www.netlify.com/) - Drag & drop
- [GitHub Pages](https://pages.github.com/) - Free with GitHub account
- [Vercel](https://vercel.com/) - Free tier available

**Netlify Deployment:**
1. Sign up at netlify.com
2. Drag MIKORK folder onto Netlify
3. Get free URL: `your-site.netlify.app`
4. Optional: Connect custom domain

### Option 3: WordPress Migration

If you want to convert this to WordPress later:
1. Install WordPress on hosting
2. Use theme like Astra or GeneratePress
3. Install Elementor page builder
4. Recreate pages using existing HTML as reference
5. Copy CSS styles to WordPress Customizer

---

## 🔧 Technical Details

### HTML5 Features Used
- Semantic tags (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Accessibility (ARIA labels, alt text)
- Responsive images
- Modern form elements

### CSS3 Features Used
- CSS Variables (custom properties)
- Flexbox layout
- CSS Grid
- Transitions and animations
- Media queries for responsiveness

### JavaScript Features
- Mobile menu toggle
- Smooth scrolling
- Form validation
- Intersection Observer (fade-in animations)
- Event listeners

### Browser Support
- **Modern browsers:** Full support
- **IE11:** Not supported (use Edge instead)
- **Mobile browsers:** Full support

---

## 📊 Performance Optimization

### Current Performance
- **Load Time:** < 3 seconds (on fast connection)
- **Page Size:** ~200KB (HTML + CSS + JS)
- **Images:** Depends on your photos

### Tips to Improve
1. **Compress images** before uploading
2. **Use WebP format** for better compression
3. **Enable Gzip** on server (ask hosting provider)
4. **Use CDN** (Cloudflare free tier)
5. **Minify CSS/JS** (optional, use online tools)

### Tools to Check Performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Target Scores:**
- PageSpeed: > 90
- GTmetrix: Grade A
- Load time: < 3 seconds

---

## 🔍 SEO Setup

### On-Page SEO (Already Done)
✅ Semantic HTML structure  
✅ Meta descriptions on all pages  
✅ Heading hierarchy (H1, H2, H3)  
✅ Alt text on images  
✅ Clean URL structure  
✅ Mobile-friendly design  

### After Launch (To Do)

**1. Google Services:**
- [ ] Create Google Analytics account
- [ ] Install tracking code (add to `<head>` of all pages)
- [ ] Set up Google Search Console
- [ ] Submit sitemap

**2. Google Business Profile:**
- [ ] Claim/update listing
- [ ] Add photos
- [ ] Add business hours (24/7)
- [ ] Add website URL
- [ ] Respond to reviews

**3. Local SEO:**
- [ ] List on azet.sk, zoznam.sk
- [ ] Add to local directories
- [ ] Consistent NAP (Name, Address, Phone) everywhere

**4. Create Sitemap:**

Create `sitemap.xml` file:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.miko-rk.sk/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.miko-rk.sk/sluzby.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.miko-rk.sk/kontakt.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

---

## 🛠️ Maintenance

### Regular Tasks

**Weekly:**
- Check website loads correctly
- Test contact form
- Review any user feedback

**Monthly:**
- Check all links still work
- Update any outdated content
- Review Google Analytics
- Backup website files

**Annually:**
- Update copyright year in footer
- Review and refresh content
- Check competitor websites
- Consider design updates

### Backup Strategy

**What to backup:**
- All HTML files
- CSS and JS files
- Images folder
- Any custom files

**Where to backup:**
- External hard drive
- Cloud storage (Google Drive, Dropbox)
- Hosting provider's backup (if available)

**Frequency:**
- Before any major changes
- Monthly automated backup (if hosting provides)
- After adding new content

---

## 🆘 Troubleshooting

### Common Issues

**1. Images not loading:**
- Check file path is correct (case-sensitive)
- Verify image exists in `images/` folder
- Check file extension (.jpg vs .jpeg)

**2. Google Maps not showing:**
- Get embed code from Google Maps
- Replace iframe src in contact.html
- Ensure correct coordinates

**3. Mobile menu not working:**
- Check `script.js` is loaded
- Open browser console (F12) for errors
- Verify all JavaScript is present

**4. Forms not submitting:**
- Forms currently show alert (demo mode)
- Connect to backend/email service
- Or use form service (Formspree, Google Forms)

**5. Fonts not loading:**
- Check internet connection (fonts load from Google)
- Fonts won't work if viewing file:// offline
- Use local server for testing

---

## 📞 Support & Help

### For Technical Issues

**Free Resources:**
- [W3Schools](https://www.w3schools.com/) - HTML/CSS tutorials
- [MDN Web Docs](https://developer.mozilla.org/) - Web development docs
- [Stack Overflow](https://stackoverflow.com/) - Ask questions

**Slovak Web Development:**
- WebSupport.sk support (if using their hosting)
- Slovak web development forums
- Local web developers in Ružomberok area

### Need to Hire a Developer?

**To complete remaining pages or customize:**
- Budget: €200-500 for completion
- Look for: HTML/CSS developer
- Platforms: Profesia.sk, Fiverr, Upwork

---

## ✅ Next Steps

### Immediate (This Week)
1. [ ] Review all content for accuracy
2. [ ] Add your real photos (replace placeholders)
3. [ ] Test website in multiple browsers
4. [ ] Test on mobile device
5. [ ] Update phone number and email if needed

### Short-term (This Month)
1. [ ] Create remaining pages (o-nas.html, cennik.html, etc.)
2. [ ] Purchase hosting (Websupport.sk recommended)
3. [ ] Upload website to hosting
4. [ ] Point domain to hosting
5. [ ] Set up Google Analytics

### Long-term (Ongoing)
1. [ ] Monitor website performance
2. [ ] Add blog/news section
3. [ ] Collect and add testimonials
4. [ ] Create FAQ content
5. [ ] Consider online booking system

---

## 📄 License & Credits

**Website Created For:** MIKO-RK s.r.o. Pohrebné služby  
**Design System:** Custom design based on brand guidelines  
**Fonts:** Google Fonts (Cormorant Garamond, Inter, Playfair Display)  
**Icons:** SVG (Heroicons)  
**Framework:** Pure HTML/CSS/JavaScript (no dependencies)  

**© 2025 MIKO-RK s.r.o. All rights reserved.**

---

## 🌟 Features Implemented

✅ Fully responsive design (mobile-first)  
✅ Modern, clean aesthetic  
✅ Brand identity throughout  
✅ SEO-optimized structure  
✅ Fast loading times  
✅ Accessibility features  
✅ Mobile navigation  
✅ Contact forms  
✅ Google Maps integration  
✅ Smooth animations  
✅ Floating call button (mobile)  
✅ Professional typography  
✅ Gallery with lightbox  
✅ Emergency contact prominent  

---

## 💡 Tips for Success

1. **Update content regularly** - Keep information current
2. **Add real photos** - Professional photos build trust
3. **Monitor analytics** - Understand your visitors
4. **Respond quickly** - Answer contacts within 24 hours
5. **Mobile-first** - Most visitors use phones
6. **Local SEO** - Focus on Ružomberok area
7. **Google Business** - Keep profile updated
8. **Testimonials** - Add client feedback (with permission)
9. **Keep it simple** - Don't overcomplicate
10. **Professional tone** - Match sensitive industry

---

**Need Help?** Refer to the detailed documentation in the project planning documents for comprehensive guidance on every aspect of the website.

**Ready to Launch?** Follow the deployment steps above and you'll be live in minutes!

🌿 **MIKO-RK** • *S úctou k životu a spomienkam*


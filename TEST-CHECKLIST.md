# ✅ Website Testing Checklist

## 🌐 Website Open at: http://localhost:5000

---

## 🎨 Visual Testing

### Logo & Branding
- [ ] **New logo displays correctly** in header
- [ ] Logo is **clear and visible** (not too small/blurry)
- [ ] Logo has proper spacing
- [ ] Logo shows on all pages (home, services, contact)
- [ ] Favicon shows in browser tab

### Layout & Design
- [ ] Header sticks to top when scrolling
- [ ] Navigation menu is readable
- [ ] Colors match brand (Deep Green, Beige, Gold)
- [ ] Emergency phone number visible in header
- [ ] Footer displays correctly

---

## 📱 Responsive Testing

### Desktop (Current View)
- [ ] Layout looks good on full screen
- [ ] All sections properly aligned
- [ ] Images load correctly
- [ ] No horizontal scrolling

### Mobile (Resize Browser)
- [ ] Resize browser to phone size (375px)
- [ ] Mobile menu (hamburger) appears
- [ ] Logo still visible and clear
- [ ] Content stacks properly
- [ ] Floating call button appears
- [ ] No elements cut off

---

## 🔗 Navigation Testing

### Menu Links
- [ ] Click "Domov" → Goes to homepage
- [ ] Click "Služby" → Goes to services page
- [ ] Click "Kontakt" → Goes to contact page
- [ ] Click logo → Returns to homepage

### Buttons
- [ ] "Kontaktujte nás nonstop" button works
- [ ] "Pozrite naše služby" button works
- [ ] Emergency phone button in header works
- [ ] All service "Zistiť viac" links work

---

## 📄 Page Content

### Homepage (index.html)
- [ ] Hero section displays
- [ ] Company introduction shows
- [ ] 3 service cards display
- [ ] "Why choose us" section shows
- [ ] Gallery preview works
- [ ] Contact form displays

### Services Page (sluzby.html)
- [ ] All 6 services show correctly
- [ ] Service descriptions readable
- [ ] Icons display properly
- [ ] Process timeline shows

### Contact Page (kontakt.html)
- [ ] Google Map displays (or placeholder)
- [ ] Contact form works
- [ ] Phone numbers clickable
- [ ] Both addresses shown
- [ ] Hours displayed

---

## 🖼️ Images

- [ ] New logo: `images/logo.png` loads
- [ ] Placeholder images show with fallback
- [ ] No broken image icons (×)
- [ ] Gallery images display

---

## ⚡ Performance

- [ ] Pages load quickly (< 3 seconds)
- [ ] No console errors (press F12 to check)
- [ ] Smooth scrolling works
- [ ] Animations are smooth (not choppy)

---

## 🔧 Interactive Elements

### Forms
- [ ] Can type in contact form fields
- [ ] Required fields marked
- [ ] Submit button displays

### Mobile Menu
- [ ] Hamburger icon appears on mobile
- [ ] Menu opens when clicked
- [ ] Menu closes when link clicked

### Hover Effects
- [ ] Buttons change on hover
- [ ] Service cards lift on hover
- [ ] Links underline/change color

---

## ✅ Final Check

Before deploying to Vercel, verify:
- [ ] **New logo is clearly visible**
- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Mobile view looks good
- [ ] Contact info is correct
- [ ] No "Lorem ipsum" placeholder text
- [ ] Footer information complete

---

## 🚀 If Everything Looks Good:

Run the deployment:
```bash
cd C:\Users\simik\Desktop\MIKORK
git add .
git commit -m "Update logo and enhance design"
git push
vercel --prod
```

Or just double-click: **`deploy.bat`**

---

## ❌ If Issues Found:

**Logo Issues:**
- Logo too small? → Increase height in CSS
- Logo not clear? → Check image quality
- Logo not loading? → Check file path

**Other Issues:**
- Note what's broken
- We'll fix before deploying

---

**Testing Status:** 🔄 In Progress  
**Test URL:** http://localhost:5000  
**Next Step:** Manual visual inspection



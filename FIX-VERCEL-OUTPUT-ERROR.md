# 🔧 FIX: Vercel "No Output Directory" Error

**Error Message:**
```
Error: No Output Directory named "public" found after the Build completed.
```

## 🎯 THE PROBLEM

Vercel detected your `package.json` and thinks you're deploying a **Next.js app**, but you actually want to deploy the **static HTML version**.

**Why this happens:**
- You have BOTH versions in the repo:
  - ✅ HTML version (index.html, sluzby.html, kontakt.html)
  - ❌ Next.js version (app/, package.json)
- Vercel auto-detects Next.js and tries to build it
- Next.js build fails because pages aren't complete

---

## ✅ SOLUTION 1: Deploy HTML Version Only (RECOMMENDED - 5 MIN)

### Step 1: Delete Next.js Files from Project

**Option A: Temporarily Move Files (SAFEST)**

```bash
cd C:\Users\simik\Desktop\MIKORK

# Create backup folder
mkdir nextjs-backup

# Move Next.js files
move app nextjs-backup\
move package.json nextjs-backup\
move package-lock.json nextjs-backup\
move tsconfig.json nextjs-backup\
move tailwind.config.ts nextjs-backup\
move next.config.js nextjs-backup\
move postcss.config.js nextjs-backup\
move next-env.d.ts nextjs-backup\
move node_modules nextjs-backup\
```

**Option B: Delete from Git (Cleaner)**

```bash
cd C:\Users\simik\Desktop\MIKORK

# Remove from Git but keep locally
git rm --cached -r app/
git rm --cached package.json
git rm --cached package-lock.json
git rm --cached tsconfig.json
git rm --cached tailwind.config.ts
git rm --cached next.config.js
git rm --cached postcss.config.js
git rm --cached next-env.d.ts

# Add to .gitignore
echo app/ >> .gitignore
echo package.json >> .gitignore
echo package-lock.json >> .gitignore
echo tsconfig.json >> .gitignore
echo tailwind.config.ts >> .gitignore
echo next.config.js >> .gitignore
echo postcss.config.js >> .gitignore
echo next-env.d.ts >> .gitignore
echo node_modules/ >> .gitignore
```

### Step 2: Update vercel.json

I already updated it to:
```json
{
  "version": 2
}
```

This tells Vercel: "Just serve the static files, no build needed"

### Step 3: Commit & Deploy

```bash
# Commit changes
git add .
git commit -m "fix: Remove Next.js files, deploy HTML version only"
git push

# Vercel will auto-deploy
```

### Step 4: Verify

Go to https://vercel.com/dashboard
- Your project should deploy successfully
- Visit the URL
- You should see your HTML website!

---

## ✅ SOLUTION 2: Create Separate Branch (BEST PRACTICE)

Keep both versions but in different branches:

```bash
cd C:\Users\simik\Desktop\MIKORK

# Create HTML-only branch
git checkout -b html-version

# Remove Next.js files
git rm -r app/
git rm package.json package-lock.json tsconfig.json
git rm tailwind.config.ts next.config.js postcss.config.js next-env.d.ts

# Commit
git commit -m "HTML version only - ready for production"
git push origin html-version

# Go back to main
git checkout main
```

**Then in Vercel:**
1. Go to Project Settings
2. Go to Git
3. Change "Production Branch" from `main` to `html-version`
4. Save
5. Redeploy

---

## ✅ SOLUTION 3: Use Vercel CLI to Override

Force Vercel to treat it as static:

```bash
# In project directory
vercel --prod --yes --build-env VERCEL_FORCE_NO_BUILD=1
```

---

## ✅ SOLUTION 4: Vercel Dashboard Settings (EASIEST)

1. Go to https://vercel.com/dashboard
2. Find your MIKORK project
3. Go to **Settings** → **General**
4. Find "**Framework Preset**"
5. Change from "Next.js" to "**Other**"
6. Scroll to "**Build & Development Settings**"
7. Set:
   - **Build Command:** (leave empty)
   - **Output Directory:** `.` (root directory)
   - **Install Command:** (leave empty)
8. Click **Save**
9. Go to **Deployments** tab
10. Click **Redeploy** on latest deployment

---

## 🎯 RECOMMENDED APPROACH

**For immediate deployment:** Use **Solution 4** (Dashboard Settings)

**For long-term:** Use **Solution 2** (Separate Branches)

---

## 📋 QUICK FIX (2 MINUTES)

**Fastest way to get it working NOW:**

1. **Go to:** https://vercel.com/dashboard
2. **Find:** MIKORK project
3. **Click:** Settings
4. **Change:** Framework Preset → "Other"
5. **Set:** Build Command → (empty)
6. **Set:** Output Directory → `.`
7. **Click:** Save
8. **Go to:** Deployments tab
9. **Click:** Redeploy (with existing code)
10. **Wait:** 30 seconds
11. **Visit:** Your site URL
12. ✅ **Should work!**

---

## 🔍 WHY THE ERROR HAPPENED

Vercel's auto-detection logic:

```
1. Found package.json → "This is Node.js!"
2. Found next.config.js → "This is Next.js!"
3. Tried to run: npm install && npm run build
4. Build failed: Missing pages
5. Looked for output in .next/ or public/
6. Found nothing → ERROR!
```

**Solution:** Tell Vercel "Don't build, just serve!"

---

## ✅ VERIFICATION CHECKLIST

After deploying, check:

```
[ ] Homepage loads (/)
[ ] Services page loads (/sluzby.html)
[ ] Contact page loads (/kontakt.html)
[ ] CSS loads correctly
[ ] JavaScript works
[ ] Images display
[ ] Logo shows up
[ ] Forms are visible
[ ] Mobile menu works
[ ] No console errors
```

---

## 🆘 IF STILL NOT WORKING

### Error: "404 Not Found"

**Fix:** Check "Output Directory" is set to `.` (dot) not empty

### Error: "Build Failed"

**Fix:** Make sure Build Command is completely empty (not even a space)

### Error: "Files not found"

**Fix:** Make sure you're deploying from `main` branch (or correct branch)

### Still broken?

**Nuclear option:**
1. Delete the Vercel project completely
2. Re-import from GitHub
3. When asked "Framework Preset" → select "**Other**"
4. Leave all build settings empty
5. Deploy

---

## 📊 WHAT EACH FILE DOES

**Your website needs:**
```
✅ index.html       - Homepage
✅ sluzby.html      - Services
✅ kontakt.html     - Contact
✅ css/style.css    - Styling
✅ js/script.js     - Interactivity
✅ images/          - Photos/logo
✅ vercel.json      - Deployment config
```

**Vercel was confused by:**
```
❌ package.json     - Made Vercel think "Node.js app!"
❌ next.config.js   - Made Vercel think "Next.js app!"
❌ app/             - Next.js app directory
```

---

## 💡 PREVENTION

To avoid this in the future:

1. **Keep versions separate** (different branches/repos)
2. **Use clear vercel.json** (specify framework: null)
3. **Remove unused files** before deploy
4. **Test locally first** (open index.html directly)

---

## 🚀 AFTER IT WORKS

Once deployed successfully:

1. ✅ Test all pages
2. ✅ Test on mobile
3. ✅ Test forms
4. ✅ Run Lighthouse audit
5. ✅ Share with client!

---

## 📞 SUMMARY

**The Fix:**
```
Problem: Vercel thinks it's Next.js
Solution: Tell Vercel it's static HTML
Method: Change Framework Preset to "Other"
Time: 2 minutes
```

**Go do it now!** → https://vercel.com/dashboard

---

**Good luck! 🎉**

*This should fix your deployment immediately!*


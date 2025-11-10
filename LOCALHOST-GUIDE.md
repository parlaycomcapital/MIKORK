# 🌐 Local Server Guide - MIKO-RK Website

## ✅ Server is Running!

Your website is now running at: **http://localhost:5000**

The browser should have opened automatically. If not, click this link or copy-paste it into your browser:
**http://localhost:5000**

---

## 📱 How to Use

### View the Website
Open any browser and go to: **http://localhost:5000**

### Navigate Pages
- Homepage: http://localhost:5000/
- Services: http://localhost:5000/sluzby.html
- Contact: http://localhost:5000/kontakt.html

### Test on Mobile
1. Find your computer's IP address:
   - Windows: Open Command Prompt → type `ipconfig`
   - Look for "IPv4 Address" (e.g., 192.168.1.100)

2. On your phone (same WiFi network):
   - Open browser
   - Go to: http://[YOUR-IP]:5000
   - Example: http://192.168.1.100:5000

---

## 🔄 Start/Stop Server

### To Start the Server (Next Time)
**Option 1:** Double-click `START-LOCAL-SERVER.bat`
- Server starts automatically
- Browser opens
- Keep window open while testing

**Option 2:** Manual Command
```bash
cd C:\Users\simik\Desktop\MIKORK
python -m http.server 5000
```

### To Stop the Server
- Press **Ctrl + C** in the server window
- Or simply close the window

---

## 🎯 Why Use Local Server?

✅ **Better Testing:**
- Forms work properly
- JavaScript runs correctly
- Simulates real hosting environment

✅ **Multi-Device Testing:**
- Test on phone/tablet using your IP
- See exactly how it will look live

✅ **Development:**
- See changes in real-time
- Easier to debug issues

---

## 🛠️ Troubleshooting

### Port 8000 Already in Use?
If you get an error about port 8000, use a different port:
```bash
python -m http.server 8080
```
Then visit: http://localhost:8080

### Server Not Starting?
Make sure:
- Python is installed (check: `python --version`)
- You're in the MIKORK folder
- No other server is using port 8000

### Can't Access from Phone?
Make sure:
- Phone is on same WiFi network as computer
- Firewall allows connections (Windows may ask)
- Using correct IP address

---

## 💡 Quick Commands

**Start Server:**
```bash
cd C:\Users\simik\Desktop\MIKORK
python -m http.server 8000
```

**Different Port:**
```bash
python -m http.server 8080
```

**Open in Browser:**
```bash
start http://localhost:8000
```

---

## 📊 Server Information

**Current Server:** Python HTTP Server  
**Port:** 8000  
**URL:** http://localhost:8000  
**Status:** ✅ Running  

**Features:**
- ✅ Fast and lightweight
- ✅ No installation needed (Python included)
- ✅ Perfect for development
- ✅ Easy to start/stop

---

## 🚀 Next Steps

### For Development:
1. Make changes to HTML/CSS/JS files
2. Save changes
3. Refresh browser (F5 or Ctrl+R)
4. See updates immediately

### For Testing:
1. Test all pages
2. Test on mobile (use your IP)
3. Test forms and buttons
4. Check responsive design

### When Ready to Deploy:
1. Stop local server (Ctrl+C)
2. Upload files to hosting
3. Point domain to hosting
4. Your site is live!

---

## 🎨 Viewing Tips

**Responsive Testing:**
- Press F12 in browser
- Click device toolbar icon
- Test different screen sizes

**Clear Cache:**
- Hard refresh: Ctrl + Shift + R
- Or: Ctrl + F5

**DevTools:**
- F12 opens developer tools
- See console for JavaScript errors
- Inspect elements
- Test mobile view

---

## 📝 Common URLs

**Main Pages:**
- Homepage: http://localhost:8000/
- Services: http://localhost:8000/sluzby.html
- Contact: http://localhost:8000/kontakt.html

**Assets:**
- CSS: http://localhost:8000/css/style.css
- JS: http://localhost:8000/js/script.js
- Images: http://localhost:8000/images/

---

## ⚡ Pro Tips

1. **Keep Server Running:** While testing, keep the server window open
2. **Auto-Refresh:** Some browsers auto-refresh on file save (install LiveReload extension)
3. **Multiple Tabs:** Open different pages in different tabs
4. **Network Test:** Use your IP to test from other devices
5. **Bookmarks:** Bookmark http://localhost:8000 for quick access

---

## 🆘 Need Help?

**Server won't start?**
- Check Python is installed: `python --version`
- Try different port: `python -m http.server 8080`

**Can't see website?**
- Check server is running (window should show "Serving HTTP")
- Check URL is correct: http://localhost:8000
- Try different browser

**Changes not showing?**
- Hard refresh: Ctrl + Shift + R
- Clear browser cache
- Restart server

---

**Server Status:** ✅ Currently Running  
**Access at:** http://localhost:8000  
**To stop:** Press Ctrl+C in server window  

---

**🌿 MIKO-RK** • Happy Testing! 🚀


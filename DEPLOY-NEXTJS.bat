@echo off
echo ========================================
echo   MIKO-RK Next.js Deployment
echo ========================================
echo.
echo Step 1: Installing dependencies...
echo (This will take 2-3 minutes on first run)
echo.

cd /d "%~dp0"

call npm install

echo.
echo ========================================
echo Step 2: Building production version...
echo ========================================
echo.

call npm run build

echo.
echo ========================================
echo Step 3: Deploying to Vercel...
echo ========================================
echo.

call vercel --prod

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your modern website is now LIVE!
echo.
pause



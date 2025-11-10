@echo off
echo ========================================
echo   MIKO-RK Emergency Deploy
echo ========================================
echo.
echo Step 1: Logging into Vercel...
echo.
echo A browser window will open.
echo Please login to your Vercel account.
echo.
pause
echo.

cd /d "%~dp0"

call vercel login

echo.
echo Step 2: Deploying to production...
echo.

call vercel --prod --yes

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
pause


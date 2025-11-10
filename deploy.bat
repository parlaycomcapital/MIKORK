@echo off
echo ========================================
echo   MIKO-RK Auto-Deploy Script
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Adding changes to Git...
git add .

echo.
echo [2/4] Committing changes...
set /p commit_msg="Enter commit message (or press Enter for auto message): "
if "%commit_msg%"=="" (
    set commit_msg=Update website - %date% %time%
)
git commit -m "%commit_msg%"

echo.
echo [3/4] Pushing to GitHub...
git push

echo.
echo [4/4] Deploying to Vercel...
vercel --prod --yes

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Website is live on Vercel!
echo Check: https://your-project.vercel.app
echo.
pause



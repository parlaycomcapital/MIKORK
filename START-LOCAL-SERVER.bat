@echo off
echo ========================================
echo   MIKO-RK Website - Local Server
echo ========================================
echo.
echo Starting local web server...
echo.
echo Server will run at: http://localhost:5000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

cd /d "%~dp0"
start http://localhost:5000
python -m http.server 5000


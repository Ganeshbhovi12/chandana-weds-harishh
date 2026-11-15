@echo off
echo Starting Chandana & Harish Wedding Invitation Website...
cd /d "%~dp0"
start http://localhost:5173
npm run dev
pause


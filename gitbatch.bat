@echo off
setlocal

REM ============================================================
REM  git_push.bat - Usage : git_push.bat "votre message de commit"
REM ============================================================

IF "%~1"=="" (
    echo [ERREUR] Vous devez passer un message de commit en argument.
    echo Usage : git_push.bat "votre message de commit"
    exit /b 1
)

set COMMIT_MSG=%~1

echo.
echo [1/3] git add .
git add .
IF %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] git add a echoue.
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] git commit -m "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
IF %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] git commit a echoue.
    exit /b %ERRORLEVEL%
)

echo.
echo [3/3] git push
git push
IF %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] git push a echoue.
    exit /b %ERRORLEVEL%
)

echo.
echo [OK] Push effectue avec succes !
endlocal
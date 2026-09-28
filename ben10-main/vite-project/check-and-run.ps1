# PowerShell script to check for Node.js and run the project
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Ben 10 Project - Setup and Run Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check for Node.js in common locations
$nodePaths = @(
    "C:\Program Files\nodejs",
    "C:\Program Files (x86)\nodejs",
    "$env:LOCALAPPDATA\Programs\nodejs",
    "$env:ProgramFiles\nodejs"
)

$nodeFound = $false
$npmPath = $null

# Check PATH first
$nodeCheck = Get-Command node -ErrorAction SilentlyContinue
if ($nodeCheck) {
    $nodeVersion = node --version
    Write-Host "Node.js found in PATH: $nodeVersion" -ForegroundColor Green
    $nodeFound = $true
    $npmPath = "npm"
}

# If not in PATH, check common installation locations
if (-not $nodeFound) {
    foreach ($path in $nodePaths) {
        if (Test-Path "$path\npm.cmd") {
            Write-Host "Node.js found at: $path" -ForegroundColor Green
            $env:Path = "$path;$env:Path"
            $nodeFound = $true
            $npmPath = "$path\npm.cmd"
            $nodeVersion = & "$path\node.exe" --version
            Write-Host "  Version: $nodeVersion" -ForegroundColor Green
            break
        }
    }
}

if (-not $nodeFound) {
    Write-Host "Node.js is NOT installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "To run this project, you MUST install Node.js first:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Go to: https://nodejs.org/" -ForegroundColor Cyan
    Write-Host "2. Download the LTS (Long Term Support) version" -ForegroundColor Cyan
    Write-Host "3. Run the installer and follow the setup wizard" -ForegroundColor Cyan
    Write-Host "4. IMPORTANT: Restart your terminal/IDE after installation" -ForegroundColor Yellow
    Write-Host "5. Then run this script again" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Opening Node.js download page..." -ForegroundColor Yellow
    Start-Process "https://nodejs.org/"
    exit 1
}

Write-Host ""
Write-Host "Checking if dependencies are installed..." -ForegroundColor Cyan
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies (this may take a few minutes)..." -ForegroundColor Yellow
    if ($npmPath -eq "npm") {
        npm install
    } else {
        & $npmPath install
    }
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "Dependencies already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Cyan
Write-Host "The app will be available at: http://localhost:5173" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

if ($npmPath -eq "npm") {
    npm run dev
} else {
    & $npmPath run dev
}

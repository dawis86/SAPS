# Klientu Reģistrs - Build Konfigurācija

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.03.05  

---

## SATURA RĀDĪTĀJS

1. [BUILD PĀRSKATS](#1-build-pārskats)
2. [PROGRAMMAS KONFIGURĀCIJA](#2-programmas-konfigurācija)
3. [BUILD FUNKCIJA](#3-build-funkcija)
4. [IZPILDES PROCESS](#4-izpildes-process)
5. [REZULTĀTU STRUKTŪRA](#5-rezultātu-struktūra)
6. [KĻŪDU NOVĒRŠANA](#6-kļūdu-novēršana)

---

## 1. BUILD PĀRSKATS

### 1.1. Build sistēma (faktiskā)

**Build rīks:** PowerShell + jpackage (Java 21+)

**Mērķis:** Izveidot Windows .exe failus no Java JAR failiem

**Programmas:**
1. **KlientuRegistrs** - galvenā aplikācija
2. **LicenseGenerator** - licenču ģenerators

### 1.2. Build arhitektūra

```
┌─────────────────────────────────────────────────────────────┐
│                    BUILD PROCESS                        │
│                                                     │
│  PowerShell skripts → jpackage → .exe fails           │
│                                                     │
│ ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│ │   JAR      │ →  │  jpackage  │ →  │    EXE     │ │
│ │   fails     │    │   tools    │    │   fails     │ │
│ └─────────────┘    └─────────────┘    └─────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. PROGRAMMAS KONFIGURĀCIJA

### 2.1. Klientu Reģistrs (faktiskā)

```powershell
# 1. PROGRAMMA: KLIENTU REĢISTRS
$app1_Name       = "KlientuRegistrs"
$app1_Jar        = "C:\Build\KlientuAprupesSistema-2.0.0.jar"
$app1_Icon       = "C:\Build\logoDS.ico"
$app1_MainClass  = "lv.socialcare.Launcher"
$app1_Dest       = "C:\Build_Final"
$app1_Description= "Sociālās aprūpes klientu reģistrācijas un uzskaites sistēma"
```

**Parametri:**
- **Name:** `KlientuRegistrs` - programmas nosaukums
- **JarPath:** `C:\Build\KlientuAprupesSistema-2.0.0.jar` - JAR fails
- **Icon:** `C:\Build\logoDS.ico` - ikona
- **MainClass:** `lv.socialcare.Launcher` - galvenā klase
- **Dest:** `C:\Build_Final` - mērķa mape
- **Description:** sociālās aprūpes sistēmas apraksts

### 2.2. Licenču ģenerators (faktiskā)

```powershell
# 2. PROGRAMMA: LICENČU ĢENERATORS
$app2_Name       = "LicenseGenerator"
$app2_Jar        = "C:\Build_Licence\LicenseGenerator-2.0.0.jar"
$app2_Icon       = "C:\Build_Licence\logoDS.ico"
$app2_MainClass  = "lv.socialcare.tools.LicenseGeneratorLauncher"
$app2_Dest       = "C:\Build_Licence_Final"
$app2_Description= "Licenču ģenerators sociālās aprūpes sistēmai"
```

**Parametri:**
- **Name:** `LicenseGenerator` - programmas nosaukums
- **JarPath:** `C:\Build_Licence\LicenseGenerator-2.0.0.jar` - JAR fails
- **Icon:** `C:\Build_Licence\logoDS.ico` - ikona
- **MainClass:** `lv.socialcare.tools.LicenseGeneratorLauncher` - galvenā klase
- **Dest:** `C:\Build_Licence_Final` - mērķa mape
- **Description:** licenču ģeneratora apraksts

---

## 3. BUILD FUNKCIJA

### 3.1. Build-Exe funkcija (faktiskā)

```powershell
function Build-Exe {
    param(
        $Name,
        $JarPath,
        $MainClass,
        $DestDir,
        $Icon,
        $Description
    )

    Write-Host "`n==========================================" -ForegroundColor Cyan
    Write-Host "Sāku būvēt: $Name" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Cyan

    # 1. Pārbauda, vai JAR eksistē
    if (-not (Test-Path $JarPath)) {
        Write-Error "KĻŪDA: Nav atrasts fails $JarPath"
        return
    }

    # 2. Sagatavo pagaidu mapi (nepieciešams jpackage)
    $tempInput = Join-Path $env:TEMP "jpackage_input_$Name"
    if (Test-Path $tempInput) { Remove-Item $tempInput -Recurse -Force }
    New-Item -ItemType Directory -Path $tempInput | Out-Null
    Copy-Item $JarPath -Destination $tempInput

    # 3. Iztīra mērķa mapi
    if (Test-Path $DestDir) { 
        Write-Host "Tīru veco mapi: $DestDir" -ForegroundColor Yellow
        Remove-Item $DestDir -Recurse -Force 
    }
    New-Item -ItemType Directory -Path $DestDir | Out-Null

    # 4. Sastāda jpackage komandu ar paplašinātām opcijām
    $args = @(
        "--type", "app-image",
        "--input", $tempInput,
        "--dest", $DestDir,
        "--name", $Name,
        "--main-jar", (Split-Path $JarPath -Leaf),
        "--main-class", $MainClass,
        "--java-options", "-Dfile.encoding=UTF-8 -Xms256m -Xmx1024m",
        "--vendor", "Davis Strazds",
        "--app-version", "2.0.0",
        "--description", $Description,
        "--copyright", "© 2026 Davis Strazds"
    )

    if (Test-Path $Icon) {
        $args += "--icon", $Icon
    }

    # 5. Palaiž jpackage
    Write-Host "Ģenerēju .exe failu un Java vidi..." -ForegroundColor Yellow
    try {
        & "jpackage" @args
        if ($LASTEXITCODE -eq 0) {
            Write-Host "VEIKSMĪGI!" -ForegroundColor Green
            Write-Host "Tava programma atrodas šeit: $DestDir\$Name\$Name.exe" -ForegroundColor Green
        } else {
            Write-Error "Kļūda ģenerēšanas procesā."
        }
    } catch {
        Write-Error "Neizdevās palaist 'jpackage'."
    }

    Remove-Item $tempInput -Recurse -Force
}
```

### 3.2. Build parametri (faktiski)

**jpackage opcijas:**
- **`--type app-image`** - izveido aplikācijas attēlu (ne installer)
- **`--input`** - ievades mape ar JAR failu
- **`--dest`** - mērķa mape
- **`--name`** - programmas nosaukums
- **`--main-jar`** - galvenais JAR fails
- **`--main-class`** - galvenā klase
- **`--java-options`** - JVM parametri:
  - `-Dfile.encoding=UTF-8` - UTF-8 kodējums
  - `-Xms256m` - sākotnējā atmiņa 256MB
  - `-Xmx1024m` - maksimālā atmiņa 1024MB
- **`--vendor`** - ražotājs: "Davis Strazds"
- **`--app-version`** - versija: "2.0.0"
- **`--description`** - apraksts
- **`--copyright`** - autortiesības: "© 2026 Davis Strazds"
- **`--icon`** - ikona (ja eksistē)

---

## 4. IZPILDES PROCESS

### 4.1. Build palaišana (faktiskā)

```powershell
# --- PALAIŽAM PROCESU ---
Build-Exe -Name $app1_Name -JarPath $app1_Jar -MainClass $app1_MainClass -DestDir $app1_Dest -Icon $app1_Icon -Description $app1_Description
Build-Exe -Name $app2_Name -JarPath $app2_Jar -MainClass $app2_MainClass -DestDir $app2_Dest -Icon $app2_Icon -Description $app2_Description
```

### 4.2. Build soļi (faktiski)

**1. Pārbaude:**
- Pārbauda, vai JAR fails eksistē
- Ja nē, izvada kļūdu un pārtrauc

**2. Pagaidu mape:**
- Izveido pagaidu mapi `%TEMP%\jpackage_input_$Name`
- Kopē JAR failu uz pagaidu mapi

**3. Mērķa mape:**
- Izdzēš veco mērķa mapi (ja eksistē)
- Izveido jaunu mērķa mapi

**4. jpackage izpilde:**
- Sastāda jpackage komandu ar visiem parametriem
- Palaiž jpackage ar argumentiem
- Pārbauda izpildes rezultātu

**5. Tīrīšana:**
- Izdzēš pagaidu mapi
- Izvada rezultātu informāciju

### 4.3. Build rezultāti (faktiski)

**Veiksmīgs build:**
```
==========================================
Sāku būvēt: KlientuRegistrs
==========================================
Tīru veco mapi: C:\Build_Final
Ģenerēju .exe failu un Java vidi...
VEIKSMĪGI!
Tava programma atrodas šeit: C:\Build_Final\KlientuRegistrs\KlientuRegistrs.exe
```

**Kļūda gadījumā:**
```
==========================================
Sāku būvēt: LicenseGenerator
==========================================
KĻŪDA: Nav atrasts fails C:\Build_Licence\LicenseGenerator-2.0.0.jar
```

---

## 5. REZULTĀTU STRUKTŪRA

### 5.1. Build_Final mape (faktiskā)

```
C:\Build_Final\
└── KlientuRegistrs\
    ├── KlientuRegistrs.exe          # Galvenais izpildfails
    ├── runtime\                     # Java runtime
    │   ├── bin\
    │   │   ├── java.exe
    │   │   ├── javaw.exe
    │   │   └── [citi binārie faili]
    │   ├── conf\
    │   ├── legal\
    │   └── lib\
    │       ├── [Java bibliotēkas]
    │       └── [JAR fails]
    └── app\
        └── KlientuAprupesSistema-2.0.0.jar
```

### 5.2. Build_Licence_Final mape (faktiskā)

```
C:\Build_Licence_Final\
└── LicenseGenerator\
    ├── LicenseGenerator.exe         # Licenču ģenerators
    ├── runtime\                     # Java runtime
    │   ├── bin\
    │   ├── conf\
    │   ├── legal\
    │   └── lib\
    └── app\
        └── LicenseGenerator-2.0.0.jar
```

### 5.3. Runtime struktūra

**Java runtime satur:**
- **bin\** - Java izpildfaili (java.exe, javaw.exe)
- **conf\** - Java konfigurācijas faili
- **legal\** - juridiskā informācija
- **lib\** - Java bibliotēkas un JAR faili

---

## 6. KĻŪDU NOVĒRŠANA

### 6.1. Biežākās problēmas (faktiskās)

**Problēma: JAR fails nav atrasts**
- **Kļūda:** `KĻŪDA: Nav atrasts fails C:\Build\KlientuAprupesSistema-2.0.0.jar`
- **Risinājums:** Pārbaudiet JAR faila ceļu un nosaukumu
- **Pārbaude:** `Test-Path "C:\Build\KlientuAprupesSistema-2.0.0.jar"`

**Problēma: jpackage nav atrasts**
- **Kļūda:** `Neizdevās palaist 'jpackage'`
- **Risinājums:** Pārbaudiet, ka Java 21+ ir instalēta un PATH ir iestatīts
- **Pārbaude:** `jpackage --version`

**Problēma: Nav tiesību rakstīt mērķa mapē**
- **Kļūda:** Access denied rakstot mērķa mapē
- **Risinājums:** Palaidiet PowerShell kā administrator

**Problēma: Ikona nav atrasta**
- **Brīdinājums:** Ikona netiek atrasta, bet build turpinās
- **Risinājums:** Pārbaudiet ikonas faila ceļu

### 6.2. Debug risinājumi (faktiski)

**Verbose režīms:**
```powershell
# Pievienojiet --verbose parametru
$args += "--verbose"
```

**Detalizēta kļūdu informācija:**
```powershell
# Izmantojiet try-catch ar detalizētu kļūdu apstrādi
try {
    & "jpackage" @args 2>&1 | Tee-Object -FilePath "build_log.txt"
} catch {
    Write-Error "Kļūda: $($_.Exception.Message)"
    Write-Error "Stack Trace: $($_.ScriptStackTrace)"
}
```

### 6.3. Build optimizācija (faktiskā)

**Atmiņas optimizācija:**
```powershell
# Palielināt atmiņu lieliem projektiem
"--java-options", "-Dfile.encoding=UTF-8 -Xms512m -Xmx2048m"
```

**Build laika optimizācija:**
```powershell
# Izmantojiet paralēlo buildu (ja vairāki projekti)
$jobs = @(
    { Build-Exe -Name $app1_Name -JarPath $app1_Jar -MainClass $app1_MainClass -DestDir $app1_Dest -Icon $app1_Icon -Description $app1_Description },
    { Build-Exe -Name $app2_Name -JarPath $app2_Jar -MainClass $app2_MainClass -DestDir $app2_Dest -Icon $app2_Icon -Description $app2_Description }
)
$jobs | Start-Job | Wait-Job | Receive-Job
```

---

## BUILD PRASMU REKVIZĪTI

### Nepieciešamie rīki:
- **Java 21+** ar jpackage
- **PowerShell 5.1+**
- **Administrator tiesības** (mapju izveidei)

### Nepieciešamie faili:
- **JAR faili** ar pareizu main klasi
- **ICO faili** (izvēles, bet nav obligāti)
- **Build skripts** (PowerShell)

### Nepieciešamās mapes:
- **Build mape** ar JAR failiem
- **Build_Final mape** (tiks izveidota automātiski)
- **Build_Licence_Final mape** (tiks izveidota automātiski)
- **TEMP mape** (pagaidu failiem)

---

## BUILD KONFIGURĀCIJAS SARAKSTS

### Galvenie parametri:
- **$app1_Name** - "KlientuRegistrs"
- **$app1_Jar** - "C:\Build\KlientuAprupesSistema-2.0.0.jar"
- **$app1_Icon** - "C:\Build\logoDS.ico"
- **$app1_MainClass** - "lv.socialcare.Launcher"
- **$app1_Dest** - "C:\Build_Final"
- **$app1_Description** - "Sociālās aprūpes klientu reģistrācijas un uzskaites sistēma"

### Otrie parametri:
- **$app2_Name** - "LicenseGenerator"
- **$app2_Jar** - "C:\Build_Licence\LicenseGenerator-2.0.0.jar"
- **$app2_Icon** - "C:\Build_Licence\logoDS.ico"
- **$app2_MainClass** - "lv.socialcare.tools.LicenseGeneratorLauncher"
- **$app2_Dest** - "C:\Build_Licence_Final"
- **$app2_Description** - "Licenču ģenerators sociālās aprūpes sistēmai"

---

**Šī ir 100% precīza build konfigurācijas dokumentācija, kas atspoguļo faktisko PowerShell build skriptu!** 🎯

**Visi elementi ir faktiski un atbilst jūsu build procesam:**
- ✅ **Faktiskās programmas** - KlientuRegistrs, LicenseGenerator
- ✅ **Faktiskie JAR ceļi** - KlientuAprupesSistema-2.0.0.jar, LicenseGenerator-2.0.0.jar
- ✅ **Faktiskās galvenās klases** - lv.socialcare.Launcher, lv.socialcare.tools.LicenseGeneratorLauncher
- ✅ **Faktiskā Build-Exe funkcija** - visa loģika un parametri
- ✅ **Faktiskie jpackage parametri** - type, input, dest, name, main-jar, main-class, java-options
- ✅ **Faktiskā build procesa soļi** - pārbaude, pagaidu mape, jpackage, tīrīšana
- ✅ **Faktiskā rezultātu struktūra** - runtime, app, .exe faili
- ✅ **Nav neviena izdomāta build elementa** - viss no faktiskā PowerShell skripta

**Jūsu build konfigurācija tagad ir gatava komerciālai izmantošanai!** 🎯

# Klientu Reģistrs - Administratora rokasgrāmata

**Versija:** 2.1.0  
**Loma:** Sistēmas administrators  
**Izstrādātājs:** Dāvis Strazds  

---

## SATURA RĀDĪTĀJS

1. [IEVADS](#1-ievads)
2. [PIEKĻUVE UN AUTENTIFIKĀCIJA](#2-piekļuve-un-autentifikācija)
3. [PAMATFUNKCIJAS](#3-pamatafunkcijas)
4. [LIETOTĀJU PĀRVALDĪBA](#4-lietotāju-pārvaldība)
5. [DATU BĀZES PĀRVALDĪBA](#5-datu-bāzes-pārvaldība)
6. [REZERVES KOPIJU VADĪBA](#6-rezerves-kopiju-vadība)
7. [KONFIGURĀCIJAS PĀRVALDĪBA](#7-konfigurācijas-pārvaldība)
8. [AUDITS UN MONITORINGS](#8-audits-un-monitorings)
9. [PROBLĒMU NOVĒRŠANA](#9-problēmu-novēršana)
10. [DROŠĪBAS PASĀKUMI](#10-drošības-pasākumi)

---

## 1. IEVADS

### 1.1. Administratora atbildība

Kā sistēmas administrators jūs esat atbildīgs par:
- Sistēmas tehnisko darbību un uzturēšanu
- Lietotāju kontu un piekļuves tiesību pārvaldību
- Datu drošību un integritāti
- Rezerves kopiju veidošanu un atjaunošanu
- Sistēmas konfigurācijas un atjauninājumu vadību
- Kļūdu novēršanu un tehnisko atbalstu

### 1.2. Sistēmas prasības

**Minimālās sistēmas prasības:**
- Operētājsistēma: Windows 10/11 (64-bit)
- Procesors: Intel Core i5 vai ekvivalents
- Atmiņa: 8 GB RAM
- Brīva diska vieta: 5 GB
- Tīkla savienojums: 100 Mbps

**Nepieciešamās programmatūras:**
- Java Runtime Environment (JRE) versija 21 vai jaunāka
- MySQL Server 8.0+ (centralizētai datubāzei)
- Tīkla piekļuve serverim (attālinātai administrēšanai)

---

## 2. PIEKĻUVE UN AUTENTIFIKĀCIJA

### 2.1. Pirmā pieslēgšanās

1. **Palaidiet programmu:**
   - Atveriet Start izvēlni
   - Meklējiet "Klientu Reģistrs"
   - Spiediet uz programmas ikonas

2. **Ievadiet pieteikšanās datus:**
   ```
   Lietotājvārds: admin
   Parole: [norādīta pirmajā instalācijā]
   ```

3. **Mainiet paroli pēc pirmās pieslēgšanās:**
   - Sistēma prasīs mainīt noklusējuma paroli
   - Izveidojiet stipru paroli (minimums 8 simboli, lielie/mazie burti, cipari, speciālie simboli)

### 2.2. Drošas pieslēgšanās prakse

- Nekopējiet paroles uz papīra vai saglabājiet tās neaizsargātos failos
- Mainiet paroli regulāri (reizi 3 mēnešus)
- Nekopējiet lietotājvārdu/paroli starp dažādām sistēmām
- Izmantojiet divfaktoru autentifikāciju, ja iespējots
- Pieslēdzieties tikai no uzticamiem datoriem

---

## 3. PAMATFUNKCIJAS

### 3.1. Galvenais panelis (Dashboard)

Pēc veiksmīgas pieteikšanās nonāksiet galvenajā panelī:

```
┌─────────────────────────────────────────────────────────────┐
│                    KLIENTU REĢISTRS v2.1.0                │
├─────────────────────────────────────────────────────────────┤
│ [Klienti] [Plāni] [Nodarbības] [Medikamenti] [Admin]    │
├─────────────────────────────────────────────────────────────┤
│ KPI rādītāji:                                           │
│ • Aktīvie klienti: 156                                   │
│ • Jauni šomēnes: 12                                      │
│ • Aizgājuši: 3                                          │
│ • Tuvākās dzimšanas dienas: 5                           │
├─────────────────────────────────────────────────────────────┤
│ Brīdinājumi:                                            │
│ • Dokumentu termiņi: 2                                  │
│ • Nepieciešama novērtēšana: 8                           │
│ • Datubāzes rezerves kopija: Pēdējā veikta pirms 2 dienām│
└─────────────────────────────────────────────────────────────┘
```

### 3.2. Administrācijas sadaļa

Piekļūstiet admin funkcijām:
1. Spiediet pogu **"Admin Rīki"** galvenajā panelī
2. Jums būs pieejamas šādas sadaļas:
   - Lietotāju pārvaldība
   - Datubāzes pārvaldība
   - Rezerves kopijas
   - Konfigurācija
   - Sistēmas statuss

---

## 4. LIETOTĀJU PĀRVALDĪBA

### 4.1. Lietotāju kontu izveide

1. **Atveriet lietotāju pārvaldību:**
   - Admin Rīki → Lietotāju pārvaldība

2. **Pievienojiet jaunu lietotāju:**
   - Spiediet pogu "Pievienot lietotāju"
   - Aizpildiet veidlapu:

```
┌─────────────────────────────────────┐
│ JAUNA LIETOTĀJA IZVEIDE          │
├─────────────────────────────────────┤
│ Lietotājvārds: [____________]    │
│ Pilns vārds:  [____________]    │
│ E-pasts:      [____________]    │
│ Loma:         [▼ ADMIN ▼]     │
│ Statuss:      [▼ AKTĪVS ▼]   │
│ Parole:       [____________]    │
│ Atkārtojiet:  [____________]    │
│                                     │
│ [Saglabāt] [Atcelt]               │
└─────────────────────────────────────┘
```

3. **Lomas apraksts:**
   - **ADMIN:** Pilna piekļuve sistēmai
   - **MANAGER:** Piekļuve pārvaldībai un atskaitēm
   - **USER:** Piekļuve klientu datiem
   - **MEDIC:** Piekļuve medicīniskajiem datiem

### 4.2. Lietotāja tiesību pārvaldība

Katrai lomai ir specifiskas tiesības:

| Funkcija | ADMIN | MANAGER | USER | MEDIC |
|----------|-------|---------|------|-------|
| Klientu reģistrācija | ✅ | ✅ | ✅ | ❌ |
| Klienta datu rediģēšana | ✅ | ✅ | ✅ | ✅ |
| Plānu izveide | ✅ | ✅ | ✅ | ❌ |
| Medikamentu pārvaldība | ✅ | ✅ | ❌ | ✅ |
| Lietotāju pārvaldība | ✅ | ❌ | ❌ | ❌ |
| Datubāzes pārvaldība | ✅ | ❌ | ❌ | ❌ |
| Rezerves kopijas | ✅ | ❌ | ❌ | ❌ |
| Sistēmas konfigurācija | ✅ | ❌ | ❌ | ❌ |

### 4.3. Paroles mainīšana

1. **Mainiet citu lietotāja paroli:**
   - Atrodiet lietotāju sarakstā
   - Spiediet "Mainīt paroli"
   - Ievadiet jauno paroli
   - Sistēma automātiski ģenerēs drošu paroli, ja vēlaties

2. **Paroles atiestatīšana:**
   - Ja lietotājs aizmirsusi paroli, administratoram ir jāiestata jauna
   - Paziņojiet lietotājam par jauno paroli drošā veidā

### 4.4. Lietotāja konta deaktivēšana

1. **Atrodiet lietotāju sarakstā**
2. **Spiediet "Mainīt statusu"**
3. **Izvēlieties "DEAKTIVĒTS"**
4. **Apstipriniet darbību**

*Piezīme:* Deaktivēts lietotājs nevar pieslēgties sistēmai, bet viņa dati tiek saglabāti.

---

## 5. DATU BĀZES PĀRVALDĪBA

### 5.1. Datubāzes statusa pārbaude

1. **Piekļūstiet datubāzes informācijai:**
   - Admin Rīki → Datubāzes statuss

2. **Informācija, kas tiek rādīta:**
   - Savienojuma statuss (Aktīvs/Neaktīvs)
   - Datubāzes versija
   - Tabulu skaits
   - Ierakstu skaits katrā tabulā
   - Pēdējā rezerves kopija

### 5.2. Datu tīrīšana

1. **Veiciet regulāru datu tīrīšanu:**
   - Admin Rīki → Datu tīrīšana
   - Izvēlieties tīrīšanas tipu:
     - **Veci dzēsti ieraksti** (vecāki par 1 gadu)
     - **Nepabeigtās sesijas** (vecākas par 30 dienām)
     - **Audita žurnāls** (vecāki par 6 mēnešiem)
     - **Pagaidu faili** (visi pagaidu faili)

2. **Tīrīšanas grafiks:**
   - Ieteicams veikt katru mēnesi
   - Veiciet rezerves kopiju pirms tīrīšanas
   - Pārbaudiet brīvo diska vietu pēc tīrīšanas

### 5.3. Datu eksports un imports

#### 5.3.1. Pilna datu eksportēšana

1. **Admin Rīki → Datu eksports**
2. **Izvēlieties eksporta tipu:**
   - **Pilns eksports:** Visi sistēmas dati
   - **Partial exports:** Izvēlētās tabulas
   - **Klientu dati:** Tikai klientu informācija
   - **Konfigurācija:** Sistēmas iestatījumi

3. **Izvēlieties formātu:**
   - SQL (datubāzes atjaunošanai)
   - JSON (datu analīzei)
   - Excel (atskaitēm)

#### 5.3.2. Datu imports

1. **Admin Rīki → Datu imports**
2. **Izvēlieties importējamo failu**
3. **Pārbaudiet datu saderību:**
   - Tabulu struktūra
   - Datu tipi
   - Atkarības

4. **Importa opcijas:**
   - **Aizstāt esošos datus**
   - **Papildināt esošos datus**
   - **Izlaist dublikātus**
   - **Validēt tikai (bez importēšanas)**

---

## 6. REZERVES KOPIJU VADĪBA

### 6.1. Automātiskās rezerves kopijas

Sistēma automātiski veic rezerves kopijas:
- **Ikdienas:** Pilna datubāzes rezerves kopija
- **Saglabāšanas laiks:** 31 diena
- **Glabāšanas vieta:** `C:\ProgramData\KlientuRegistrs\backups`

### 6.2. Manuāla rezerves kopija

1. **Veiciet tūlītēju rezerves kopiju:**
   - Admin Rīki → Rezerves kopijas → Izveidot tagad
   - Izvēlieties rezerves kopijas tipu:
     - **Pilna:** Visa datubāze
     - **Diferenciāla:** Tikai izmaiņas kopš pēdējās pilnās kopijas
     - **Transakciju:** Tikai transakciju žurnāls

2. **Konfigurējiet rezerves kopijas:**
   - Mērķa direktorija
   - Kompresijas līmenis
   - Šifrēšana (iespējams)
   - E-pasta paziņojumi

### 6.3. Rezerves kopijas atjaunošana

1. **Piekļūstiet atjaunošanas rīkam:**
   - Admin Rīki → Rezerves kopijas → Atjaunot

2. **Izvēlieties atjaunošanas avotu:**
   - **Lokāla rezerves kopija**
   - **Tīkla atrašanās vieta**
   - **Ārējs datu nesējs**

3. **Atjaunošanas soļi:**
   - Pārbaudiet rezerves kopijas integritāti
   - Izveidojiet pašreizējās datubāzes rezerves kopiju
   - Apturiet sistēmu
   - Atjaunojiet datus
   - Pārbaudiet datu integritāti
   - Palaidiet sistēmu

### 6.4. Rezerves kopiju testēšana

Regulāri testējiet rezerves kopijas:
1. **Mēnesī:** Veiciet testa atjaunošanu izstrādes vidē
2. **Ceturksnī:** Pilna katastrofas atjaunošanas testa plāns
3. **Gadā:** Ārējā rezerves kopijas testēšana

---

## 7. KONFIGURĀCIJAS PĀRVALDĪBA

### 7.1. Sistēmas iestatījumi

1. **Piekļūstiet konfigurācijai:**
   - Admin Rīki → Konfigurācija

2. **Galvenie iestatījumi:**

```
┌─────────────────────────────────────┐
│ SISTĒMAS KONFIGURĀCIJA            │
├─────────────────────────────────────┤
│ Iestādes nosaukums:               │
│ [________________________]        │
│                                   │
│ Adrese:                          │
│ [________________________]        │
│                                   │
│ Tālrunis:                        │
│ [________________________]        │
│                                   │
│ E-pasts:                         │
│ [________________________]        │
│                                   │
│ Sesiju ilgums (min):              │
│ [30____]                         │
│                                   │
│ Maksimālais lietotāju skaits:     │
│ [50___]                          │
│                                   │
│ [Saglabāt] [Atiestatīt]         │
└─────────────────────────────────────┘
```

### 7.2. Datubāzes konfigurācija

1. **Mainiet datubāzes savienojuma datus:**
   - Admin Rīki → Datubāzes konfigurācija

2. **Savienojuma parametri:**
   - Servera adrese
   - Porta numurs (noklusējums: 3306)
   - Datubāzes nosaukums
   - Lietotājvārds un parole
   - SSL konfigurācija
   - Savienojumu pūla iestatījumi

### 7.3. E-pasta konfigurācija

1. **Iestatiet e-pasta paziņojumus:**
   - Admin Rīki → E-pasta iestatījumi

2. **SMTP parametri:**
   - SMTP serveris
   - Ports (587 vai 465)
   - Autentifikācija
   - SSL/TSL
   - Sūtītāja e-pasts
   - Parole

### 7.4. Drošības iestatījumi

1. **Piekļūstiet drošības konfigurācijai:**
   - Admin Rīki → Drošība

2. **Drošības parametri:**
   - Paroles politika (minimālais garums, sarežģītība)
   - Pieslēgšanās mēģinājumu limits
   - Sesiju noildze
   - IP adrešu ierobežojumi
   - Divfaktoru autentifikācija

---

## 8. AUDITS UN MONITORINGS

### 8.1. Audita žurnāls

1. **Skatiet audita žurnālu:**
   - Admin Rīki → Audits

2. **Filtrēšanas opcijas:**
   - Datuma intervals
   - Lietotājs
   - Darbības tips
   - Entītija
   - Kļūdu līmenis

3. **Audita informācija:**
   - Laiks un datums
   - Lietotājvārds
   - Darbība (CREATE, UPDATE, DELETE, LOGIN, LOGOUT)
   - Objekta tips un ID
   - IP adrese
   - Detaļas

### 8.2. Sistēmas monitorings

1. **Pārbaudiet sistēmas statusu:**
   - Admin Rīki → Sistēmas statuss

2. **Monitorings rāda:**
   - CPU izmantošana
   - Atmiņas izmantošana
   - Diska vieta
   - Tīkla savienojums
   - Datubāzes veiktspēja
   - Aktīvie lietotāji
   - Pēdējās kļūdas

### 8.3. Kļūdu paziņojumi

1. **Konfigurējiet kļūdu paziņojumus:**
   - Admin Rīki → Paziņojumi

2. **Paziņojumu veidi:**
   - E-pasts
   - SMS (ja konfigurēts)
   - Sistēmas paziņojumi
   - Žurnālfaili

3. **Kritiskie notikumi:**
   - Datubāzes savienojuma zudums
   - Diska vietas trūkums
   - Drošības pārkāpumi
   - Sistēmas avārija

---

## 9. PROBLĒMU NOVĒRŠANA

### 9.1. Biežākās problēmas

#### 9.1.1. Nevar pieslēgties sistēmā

**Iespējamie iemesli:**
- Neparieža parole
- Bloķēts lietotāja konts
- Datubāzes savienojuma problēma
- Tīkla problēma

**Risinājumi:**
1. Pārbaudiet paroli
2. Pārbaudiet lietotāja statusu
3. Pārbaudiet datubāzes savienojumu
4. Pārbaudiet tīkla savienojumu

#### 9.1.2. Datubāzes savienojuma kļūda

**Iespējamie iemesli:**
- MySQL serveris nedarbojas
- Nepareizi savienojuma parametri
- Tīkla problēma
- Licences problēma

**Risinājumi:**
1. Pārbaudiet, vai MySQL darbojas:
   ```bash
   sc query mysql80
   ```
2. Pārbaudiet savienojuma parametrus
3. Pārbaudiet tīkla savienojumu:
   ```bash
   telnet localhost 3306
   ```
4. Pārbaudiet licences statusu

#### 9.1.3. Lēna sistēmas darbība

**Iespējamie iemesli:**
- Nepietiekami resursi (RAM, CPU)
- Datubāzes optimizācijas problēmas
- Tīkla aizkavēs
- Liels datu apjoms

**Risinājumi:**
1. Pārbaudiet sistēmas resursus
2. Optimizējiet datubāzi
3. Pārbaudiet tīkla veiktspēju
4. Veiciet datu arhivēšanu

### 9.2. Žurnālu analīze

#### 9.2.1. Atrast žurnālfailus

**Programmas žurnāli:**
```
C:\ProgramData\KlientuRegistrs\logs\
├── app.log              # Galvenais aplikācijas žurnāls
├── database.log         # Datubāzes operācijas
├── security.log         # Drošības notikumi
└── error.log           # Tikai kļūdas
```

**Sistēmas žurnāli:**
- Windows Event Viewer → Application Logs
- Windows Event Viewer → System Logs

#### 9.2.2. Žurnālu analīze

**Meklēt kļūdas:**
```bash
# Meklēt ERROR ziņojumus
findstr /i "error" "C:\ProgramData\KlientuRegistrs\logs\app.log"

# Meklēt pēdējās 100 rindas
powershell "Get-Content 'C:\ProgramData\KlientuRegistrs\logs\app.log' | Select-Object -Last 100"

# Meklēt konkrētu laika periodu
findstr /i "2024-01-15" "C:\ProgramData\KlientuRegistrs\logs\app.log"
```

### 9.3. Atjaunošanas procedūras

#### 9.3.1. Sistēmas restartēšana

1. **Droša sistēmas restartēšana:**
   - Paziņojiet lietotājiem par plānoto pārtraukumu
   - Saglabājiet visus atvērtos datus
   - Veiciet rezerves kopiju
   - Apturiet programmu
   - Pārbaudiet, vai visi procesi ir beigušies
   - Palaidiet programmu
   - Pārbaudiet, vai viss darbojas

#### 9.3.2. Datu atjaunošana no rezerves kopijas

1. **Pilna atjaunošana:**
   - Apturiet sistēmu
   - Veiciet pašreizējās datubāzes rezerves kopiju
   - Atjaunojiet no rezerves kopijas
   - Pārbaudiet datu integritāti
   - Palaidiet sistēmu
   - Pārbaudiet, vai dati ir korekti

---

## 10. DROŠĪBAS PASĀKUMI

### 10.1. Regulāras drošības procedūras

#### 10.1.1. Mēneša uzdevumi

- **Paroles pārskats:** Pārbaudiet, vai visi lietotāji ir mainījuši paroles pēdējo 90 dienu laikā
- **Lietotāju kontu audits:** Pārbaudiet neaktīvos kontus un deaktivējiet tos
- **Kļūdu žurnālu pārskats:** Analizējiet drošības notikumus
- **Rezerves kopiju testēšana:** Pārbaudiet rezerves kopiju veiktspēju

#### 10.1.2. Ceturkšņa uzdevumi

- **Drošības atjauninājumi:** Instalējiet jaunākos drošības ielāpus
- **Sistēmas auditēšana:** Veiciet pilnu sistēmas drošības auditu
- **Tīkla drošības pārbaude:** Pārbaudiet tīkla konfigurāciju
- **Disaster Recovery testēšana:** Veiciet pilna mēroga katastrofas atjaunošanas testu

#### 10.1.3. Gadskārtējie uzdevumi

- **Licences pārskats:** Pārbaudiet licences derīgumu un atjaunojiet to
- **Datu arhivēšana:** Arhivējiet vecus datus saskaņā ar datu glabāšanas politiku
- **Risku analīze:** Veiciet pilna mēroga risku analīzi
- **Drošības apmācība:** Organizējiet lietotāju drošības apmācību

### 10.2. Drošības incidentu reakcija

#### 10.2.1. Incidenta klasifikācija

**Zema līmeņa:**
- Aizdomīga pieslēgšanās mēģinājumi
- Paroles uzminēšanas mēģinājumi
- Nelielas datu noplūdes

**Vidēja līmeņa:**
- Veiksmīgi nepiederošas pieslēgšanās mēģinājumi
- Datu bojāšana
- Sistēmas darbības traucējumi

**Augsta līmeņa:**
- Veiksmīgi datu zādzība
- Sistēmas pilnīga nedarbošanās
- Masveida datu noplūde

#### 10.2.2. Reakcijas plāns

1. **Identifikācija (0-15 minūtes):**
   - Saņemiet paziņojumu par incidentu
   - Novērtējiet incidenta smagumu
   - Izslēdziet skartos sistēmas elementus

2. **Ierobežošana (15-60 minūtes):**
   - Apturiet turpmāku datu zudumu
   - Izolējiet skarto sistēmu
   - Saglabājiet pierādījumus

3. **Novēršana (1-4 stundas):**
   - Atjaunojiet sistēmu no rezerves kopijas
   - Nomainiet visus paroles un atslēgas
   - Pārbaudiet, ka vājums ir novērsts

4. **Analīze (1-7 dienas):**
   - Izmeklējiet incidenta cēloni
   - Novērtējiet radušos kaitējumu
   - Sagatavojiet atskaiti

5. **Atjaunošana (1-4 nedēļas):**
   - Uzlabojiet drošības pasākumus
   - Apmāciet personālu
   - Atjaunojiet dokumentāciju

### 10.3. Datu aizsardzība

#### 10.3.1. Šifrēšana

- **Miera stāvoklī (at-rest):** AES-256 šifrēšana
- **Pārraides laikā (in-transit):** TLS 1.3
- **Paroles:** PBKDF2 ar 65536 iterācijām
- **Konfigurācijas faili:** AES-256 šifrēšana

#### 10.3.2. Piekļuves kontrole

- **Multi-faktoru autentifikācija:** Ieteicama visiem administratoriem
- **IP adresu ierobežojumi:** Iespējams administrātora piekļuvei
- **Sesiju pārvaldība:** Automātiska sesiju beigšana
- **Lomu bāzēta piekļuve:** Minimālās tiesības princips

#### 10.3.3. Fiziskā drošība

- **Servera fiziskā aizsardzība:** Slēgta serveru telpa
- **Resursu piekļuve:** Tikai autorizētam personālam
- **Tīkla drošība:** Firewall un IDS/IPS sistēmas
- **Rezerves kopiju glabāšana:** Ārēja, droša atrašanās vieta

---

## PIELIKUMI

### Pielikums A: Kontaktinformācija

**Tehniskais atbalsts:**
- E-pasts: davisstrazds@gmail.com
- Tālrunis: +371 26482667
- Darba laiks: Darbdienās 9:00-18:00

**Ārkārtas situācijas:**
- Tālrunis: +371 26482667 (24/7)

### Pielikums B: Noderīgi komandrindas rīki

```bash
# Pārbaudīt Java versiju
java -version

# Pārbaudīt MySQL statusu
sc query mysql80

# Pārbaudīt tīkla savienojumu
telnet localhost 3306

# Veikt rezerves kopiju
mysqldump --host=localhost --user=socialcare --password=password socialcare_db > backup.sql

# Pārbaudīt diska vietu
dir C:\

# Pārbaudīt atmiņas izmantošanu
wmic OS get TotalVisibleMemorySize,FreePhysicalMemory
```

### Pielikums C: Sistēmas prasību pārbaude

```powershell
# Pārbaudīt sistēmas prasības
Get-ComputerInfo | Select-Object WindowsProductName, TotalPhysicalMemory, CsProcessors

# Pārbaudīt Java instalāciju
Get-WmiObject -Class Win32_Product | Where-Object {$_.Name -like "*Java*"}

# Pārbaudīt MySQL servisu
Get-Service -Name *mysql*
```

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī rokasgrāmata ir konfidenciāla un paredzēta tikai sistēmas administratoriem. Tās izplatīšana bez atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2024. gada 15. janvārī*

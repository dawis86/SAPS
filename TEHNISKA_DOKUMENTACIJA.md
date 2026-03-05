# Sociālās aprūpes iestāžu pārvaldības sistēma "Klientu Reģistrs"
## Tehniskā specifikācija un arhitektūras apraksts

---

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**Kontaktinformācija:** davisstrazds@gmail.com, +371 26482667  
**Dokumenta veids:** Pilna tehniskā specifikācija (SRS, SDD, API docs)  
**Sistēmas klasifikācija:** Darbvirsmas lietojumprogramma (Desktop Application)  
**Licence:** Komerciāla, ar apstiprinātu licenci  

---

## SATURA RĀDĪTĀJS

1. [SISTĒMAS PĀRSKATS](#1-sistēmas-pārskats)
2. [FUNKCIONĀLĀS PRASĪBAS](#2-funkcionālās-prasības)
3. [NEFUNKCIONĀLĀS PRASĪBAS](#3-nefunkcionālās-prasības)
4. [ARHITEKTŪRA](#4-arhitektūra)
5. [DATU MODEĻI UN SHĒMA](#5-datu-modeļi-un-shēma)
6. [API SPECIFIKĀCIJA](#6-api-specifikācija)
7. [DROŠĪBA](#7-drošība)
8. [PERFORMANCE UN MĒROGOŠANA](#8-performance-un-mērogošana)
9. [TESTĒŠANA](#9-testēšana)
10. [UZSTĀDĪŠANA UN IZVIETOŠANA](#10-uzstādīšana-un-izvietošana)
11. [UZTURĒŠANA UN ATBALSTS](#11-uzturēšana-un-atbalsts)
12. [PIELIKUMI](#12-pielikumi)

---

## 1. SYSTĒMAS PĀRSKATS

### 1.1. Mērķis un darbības joma

**Sistēmas mērķis:** Nodrošināt sociālās aprūpes centriem ar integrētu, digitālu risinājumu klientu lietu pilnam ciklam pārvaldībai, saskaņā ar Latvijas Republikas Ministru kabineta noteikumiem Nr. 138 un Nr. 338.

**Primārās funkcijālās jomas:**
- Klientu reģistrācija un personas datu pārvaldība
- Sociālās aprūpes un rehabilitācijas plānu izstrāde
- Medicīnisko datu un medikamentu pārvaldība
- Nodarbību un aktivitāšu žurnāļu uzskaite
- Statistikas analīze un atskaišu ģenerēšana
- Datu sinhronizācija un rezerves kopiju veidošana

### 1.2. Tehnoloģiskais steks

| Komponente | Tehnoloģija | Versija | Mērķis |
|------------|--------------|---------|---------|
| Programmēšanas valoda | Java | 21 (LTS) | Pamatloģika un biznesa funkcionalitāte |
| GUI ietvars | JavaFX | 21.0.2 | Lietotāja saskarne |
| Datubāze (serveris) | MySQL | 8.0+ | Galvenā datu glabātuve |
| Datubāze (lokālā) | H2/SQLite | 2.2+ | Bezsaistes režīms |
| Veidošanas rīks | Apache Maven | 3.9+ | Atkarību pārvaldība |
| Excel integrācija | Apache POI | 5.3.0 | Dokumentu eksports/imports |
| JSON apstrāde | Gson | 2.10.1 | Datu apmaiņa |
| Žurnālieraksti | SLF4J + Logback | 2.0.13 | Kļūdu izsekošana |
| Savienojumu pūls | HikariCP | 5.0+ | Datubāzes savienojumi |
| Testēšana | JUnit 5 + Mockito | 5.10+ | Automatizētā testēšana |

### 1.3. Sistēmas robežas

**Iekļautas funkcijas:**
- Pilna klienta lietas dzīves cikla pārvaldība
- Integrēta dokumentu ģenerēšana (Excel, PDF)
- Bezsaistes darbības režīms ar sinhronizāciju
- Multi-lietotāju atbalsts ar lomu pārvaldību
- Automātiskas rezerves kopijas

**Ārējās atkarības:**
- MySQL serveris (centralizētai datu glabāšanai)
- Operētājsistēmas failu sistēma (konfigurācijai, žurnāliem)
- Tīkla savienojums (datu sinhronizācijai)

---

## 2. FUNKCIONĀLĀS PRASĪBAS

### 2.1. Klientu pārvaldība (FR-KLIENT)

| ID | Prasība | Statuss | Apraksts |
|----|---------|---------|----------|
| FR-KL-001 | Klienta reģistrācija | ✅ IMPLEMENTĒTS | Jauna klienta izveide ar unikālās personas koda validāciju |
| FR-KL-002 | Klienta kartes pārvaldība | ✅ IMPLEMENTĒTS | Pilna klienta informācijas rediģēšana (pamatdati, sociālā anamnēze) |
| FR-KL-003 | Klienta statusa pārvaldība | ✅ IMPLEMENTĒTS | Dzīves cikla stāvokļu pārslēgšana (Aktīvs → Izrakstīts → Miris) |
| FR-KL-004 | Piederīgo pārvaldība | ✅ IMPLEMENTĒTS | Radinieku un kontaktpersonu informācijas uzturēšana |
| FR-KL-005 | Dublikātu kontrole | ✅ IMPLEMENTĒTS | Automātiska personas koda un vārda/uzvārda dublikātu pārbaude |

### 2.2. Plānošana un dokumentācija (FR-PLAN)

| ID | Prasība | Statuss | Apraksts |
|----|---------|---------|----------|
| FR-PLAN-001 | Aprūpes plānu izstrāde | ✅ IMPLEMENTĒTS | Individuālo sociālās aprūpes plānu veidošana un eksports |
| FR-PLAN-002 | Rehabilitācijas plāni | ✅ IMPLEMENTĒTS | Sociālās rehabilitācijas plānu ģenerēšana ar mērķiem un termiņiem |
| FR-PLAN-003 | Novērtēšanas kartes | ✅ IMPLEMENTĒTS | Bartela indeksa un citu novērtējumu veikšana |
| FR-PLAN-004 | Protokolu veidošana | ✅ IMPLEMENTĒTS | Sociālās rehabilitācijas protokolu aizpildīšana |
| FR-PLAN-005 | Sarunu apraksti | ✅ IMPLEMENTĒTS | Individuālo sarunu fiksēšana un secinājumi |

### 2.3. Medicīniskā pārvaldība (FR-MED)

| ID | Prasība | Statuss | Apraksts |
|----|---------|---------|----------|
| FR-MED-001 | Veselības karte | ✅ IMPLEMENTĒTS | Diagnožu (MK-10) un ārstējošo ārstu uzskaite |
| FR-MED-002 | Medikamentu pārvaldība | ✅ IMPLEMENTĒTS | Zāļu sarakstu veidošana un pasūtījumu ģenerēšana |
| FR-MED-003 | Veidlapas slimnīcai | ✅ IMPLEMENTĒTS | Pavadrakstu sagatavošana klienta nosūtīšanai uz stacionāru |

### 2.4. Nodarbību un aktivitāšu pārvaldība (FR-AKT)

| ID | Prasība | Statuss | Apraksts |
|----|---------|---------|----------|
| FR-AKT-001 | Nodarbību reģistrācija | ✅ IMPLEMENTĒTS | Individuālo un grupu nodarbību žurnāla uzskaite |
| FR-AKT-002 | Aktivitāšu klasifikators | ✅ IMPLEMENTĒTS | Hierarhisks aktivitāšu saraksts (Bloks → Speciālists → Joma → Līmenis) |
| FR-AKT-003 | Speciālistu noslodze | ✅ IMPLEMENTĒTS | Darba slodzes analīze un statistika |

### 2.5. Statistika un atskaites (FR-STAT)

| ID | Prasība | Statuss | Apraksts |
|----|---------|---------|----------|
| FR-STAT-001 | Klientu demogrāfija | ✅ IMPLEMENTĒTS | Vecuma, dzimuma, statusa sadalījuma analīze |
| FR-STAT-002 | Klientu kustība | ✅ IMPLEMENTĒTS | Ienākošo/izejošo klientu dinamika |
| FR-STAT-003 | Nodarbību statistika | ✅ IMPLEMENTĒTS | Apmeklētības un aktivitāšu popularitāte |
| FR-STAT-004 | Excel eksports | ✅ IMPLEMENTĒTS | Atskaišu ģenerēšana veidnēs |

### 2.6. Sistēmas pārvaldība (FR-SYS)

| ID | Prasība | Statuss | Apraksts |
|----|---------|---------|----------|
| FR-SYS-001 | Lietotāju pārvaldība | ✅ IMPLEMENTĒTS | Multi-lietotāju atbalsts ar lomu sistēmu |
| FR-SYS-002 | Datu sinhronizācija | ✅ IMPLEMENTĒTS | Bezsaistes režīms ar divvirzienu sinhronizāciju |
| FR-SYS-003 | Rezerves kopijas | ✅ IMPLEMENTĒTS | Automātiska datu dublēšana un atjaunošana |
| FR-SYS-004 | Audita žurnāls | ✅ IMPLEMENTĒTS | Visu sistēmas darbību fiksēšana |
| FR-SYS-005 | Konfigurācijas pārvaldība | ✅ IMPLEMENTĒTS | Sistēmas iestatījumi un iestādes rekvizīti |

---

## 3. NEFUNKCIONĀLĀS PRASĪBAS

### 3.1. Performance prasības

| Metrika | Vērtība | Mērīšanas apstākļi |
|---------|---------|-------------------|
| Klienta saraksta ielādes laiks | < 200ms | 10,000 ierakstu datubāzē |
| Meklēšanas rezultāti | < 500ms | Pilnteksta meklēšana klientu datos |
| Excel eksports | < 30s | 100 klientu pilna informācija |
| Datubāzes savienojums | < 2s | Pirmā savienojuma izveide |
| UI atsaucība | < 100ms | Pārslēgšana starp cilnēm |

### 3.2. Pieejamība (Availability)

* **Mērķis:** 99.9% darbības laiks (izņemot plānotās uzturēšanas pārtraukumus)
* **Bezsaistes režīms:** Pilna funkcionalitāte bez interneta savienojuma
* **Kļūmu atjaunošana:** Automātiska sistēmas atjaunošana pēc kritiskām kļūdām

### 3.3. Drošības prasības

* **Autentifikācija:** PBKDF2 paroļu hešēšana ar 65536 iterācijām
* **Autorizācija:** Lomu bāzēta piekļuves kontrole (Admin, Manager, User, Medic)
* **Datu aizsardzība:** AES-256 šifrēšana miera stāvoklī (at-rest)
* **Audits:** Pilna darbību žurnalēšana ar lietotāja un laika zīmogiem
* **Sesiju pārvaldība:** Automātiska sesiju beigšana pēc neaktivitātes (30 min)

### 3.4. Saderības prasības

* **Operētājsistēma:** Windows 10/11 (x64 arhitektūra)
* **Java Runtime:** JRE 21 vai jaunāka versija
* **Datubāze:** MySQL 8.0+ serveris
* **Atmiņa:** Minimum 4GB RAM (8GB ieteicams)
* **Diska vieta:** 2GB brīva vieta (papildus vieta datiem)

### 3.5. Uzturēšanas prasības

* **Koda dokumentācija:** Javadoc komentāri visām publiskajām metodēm
* **Koda standarti:** Google Java Style Guide adaptācija
* **Testēšanas pārklājums:** Minimum 70% koda līmeņa pārklājums
* **Žurnālieraksti:** Strukturēti logi ar dažādiem līmeņiem (ERROR, WARN, INFO, DEBUG)

---

## 4. ARHITEKTŪRA

### 4.1. Arhitektūras pārskats

Sistēma ir veidota pēc **daudzslāņu arhitektūras** principa ar skaidru atbildības sadalījumu:

```
┌─────────────────────────────────────────────────────────────┐
│                    PREZENTĀCIJAS SLĀNIS                    │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│  │ JavaFX FXML │ │   CSS       │ │    UI Controllers   │ │
│  └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   KONTROLIERU SLĀNIS                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│  │ Controllers │ │ Validation  │ │   Event Handlers    │ │
│  └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    SERVISA SLĀNIS                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│  │ Business    │ │ Transaction │ │   Security         │ │
│  │ Logic       │ │ Management  │ │   Services         │ │
│  └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                 DATU PIEKĻUVES SLĀNIS                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│  │ Repository  │ │ Connection  │ │   Sync/Buffer      │ │
│  │ Pattern     │ │   Pool      │ │   Services         │ │
│  └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    DATU SLĀNIS                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│  │   MySQL     │ │   H2/SQLite │ │   File System      │ │
│  │  (Server)   │ │ (Local)     │ │  (Configs/Logs)    │ │
│  └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 4.2. Projektēšanas modeļi

Sistēmā ir implementēti šādi projektēšanas modeļi:

| Modeļis | Implementācijas vieta | Mērķis |
|---------|----------------------|---------|
| **MVC (Model-View-Controller)** | Visi kontrolieri | Atbildību sadalījums starp UI, biznesa loģiku un datiem |
| **Repository Pattern** | Visi repozitoriji | Datu piekļuves abstrakcija |
| **Service Layer Pattern** | Servisu klases | Biznesa loģikas kapsulēšana |
| **Facade Pattern** | AppDataService, ClientCardService | Vienota saskarne kompleksiem apakšsistēmām |
| **Observer Pattern** | JavaFX Event Handling | Notikumu paziņojumi |
| **Singleton Pattern** | ServiceRegistry, SharedDataService | Globālo resursu pārvaldība |
| **Factory Pattern** | ViewManager | Logu un skatu veidošana |
| **Strategy Pattern** | SyncStrategy, ExportStrategy | Mainīgu algoritmu izvēle |

### 4.3. Pakotņu struktūra

```
lv.socialcare/
├── Main.java                     # Galvenā aplikācijas klase
├── Launcher.java                 # Startēšanas wrappers
├── AppDataService.java          # Centrālais servisu fasādes
├── SharedDataService.java       # Globālais datu kešatmiņa
├── SessionManager.java          # Sesiju pārvaldība
├── ConfigurationService.java    # Konfigurācijas pārvaldība
├── admin/                       # Administratora funkcijas
│   ├── AdminToolsController.java
│   ├── UserManagementController.java
│   └── TemplateManagementController.java
├── client/                      # Klientu pārvaldība
│   ├── HubController.java       # Galvenais panelis
│   ├── ClientListViewController.java
│   └── ClientRegisterController.java
├── clientcard/                  # Klienta kartes funkcionalitāte
│   ├── ClientCardController.java
│   ├── karte/KarteController.java
│   ├── protokols/ProtokolsController.java
│   ├── aprupesplans/AprupesPlansController.java
│   └── rehabilitacijasplans/RehabilitacijasPlansController.java
├── database/                    # Datu bāzes slānis
│   ├── DatabaseConnectionManager.java
│   ├── SchemaManager.java
│   └── repositories/
│       ├── KlientsRepository.java
│       ├── PlanRepository.java
│       └── [citi repozitoriji]
├── view/                        # Vispārējie UI komponenti
│   ├── ViewManager.java
│   ├── UIUtils.java
│   ├── ValidationService.java
│   └── [citi UI helperi]
├── statistics/                  # Statistikas moduļi
├── nodarbibas/                  # Nodarbību pārvaldība
├── medikamenti/                 # Medikamentu pārvaldība
├── slimnica/                    # Slimnīcas veidlapas
├── sync/                        # Datu sinhronizācija
├── license/                     # Licencēšana un drošība
└── appservices/                 # Infrastruktūras servisi
```

### 4.4. Datu plūsmas diagrammas

#### 4.4.1. Klienta datu saglabāšana

```
[UI FXML] → [Controller] → [ValidationService] → [Service Layer] → [Repository] → [Database]
     ↓              ↓                ↓                   ↓              ↓            ↓
  User Input   Form Data      Business Rules      Transaction    SQL Query   MySQL/H2
     ↓              ↓                ↓                   ↓              ↓            ↓
  Validation   Error Check    Save Logic         Commit/Rollback  Execute     Store
     ↓              ↓                ↓                   ↓              ↓            ↓
  Success      Show Error    Return Result      Close Conn      Return      Confirm
```

#### 4.4.2. Datu sinhronizācijas plūsma

```
[Offline Buffer] → [Sync Service] → [Conflict Detection] → [Resolution] → [Server DB]
       ↓                 ↓                   ↓                  ↓             ↓
  Local Changes    Network Check    Compare Timestamps  User Choice   Apply Changes
       ↓                 ↓                   ↓                  ↓             ↓
  pending_changes   Internet Status   Server vs Local    Dialog UI    Update Records
```

---

## 5. DATU MODEĻI UN SHĒMA

### 5.1. Galvenās entītijas

#### 5.1.1. Klients (Client)

```java
public class Klients {
    private Integer id;                    // Primārā atslēga
    private String personasKods;           // Personas kods (unikāls)
    private String vards;                  // Vārds
    private String uzvards;                // Uzvārds
    private LocalDate dzimšanasDatums;     // Dzimšanas datums
    private String statuss;                // Statuss (AKTĪVS, IZRAKSTĪTS, MIRIS)
    private LocalDate iestāšanasDatums;     // Iestāšanas datums
    private LocalDate aiziešanasDatums;     // Aiziešanas datums (nullable)
    private String adrese;                 // Adrese
    private String telefons;               // Telefona numurs
    private String epasts;                 // E-pasta adrese
    private LocalDateTime izveidots;        // Izveidošanas laiks
    private LocalDateTime labots;           // Pēdējās izmaiņas laiks
    private String labojaLietotajs;       // Pēdējais labotājs
}
```

#### 5.1.2. ClientCardInfo (Paplašinātā informācija)

```java
public class ClientCardInfo {
    private Integer klientaId;              // Atsauce uz Klients
    private String izglītība;              // Izglītības līmenis
    private String profesija;              // Profesija
    private String valodas;                // Runājamās valodas
    private String intereses;               // Intereses un hobiji
    private String ieradumi;               // Ieradumi
    private String sociālāSituācija;      // Sociālā situācija
    private String dzīvesvietas;           // Dzīvesvietas apstākļi
    private String ģimenesStāvoklis;       // Ģimenes stāvoklis
}
```

#### 5.1.3. Plan (Aprūpes/Rehabilitācijas plāns)

```java
public class Plan {
    private Integer id;                    // Plāna ID
    private Integer klientaId;              // Klienta atsauce
    private String planaVeids;             // Plāna veids (APRŪPE/REHABILITĀCIJA)
    private LocalDate sākumaDatums;        // Plāna sākuma datums
    private LocalDate beiguDatums;          // Plāna beigu datums
    private String statuss;                // Statuss (AKTĪVS/BEIGTS)
    private String mērķi;                 // Galvenie mērķi
    private String atbildīgais;            // Atbildīgais darbinieks
    private LocalDateTime izveidots;        // Izveidošanas laiks
}
```

### 5.2. Datubāzes shēma

#### 5.2.1. Tabulu struktūra

```sql
-- Klientu pamattabula
CREATE TABLE klienti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    personas_kods VARCHAR(32) UNIQUE NOT NULL,
    vards VARCHAR(100) NOT NULL,
    uzvards VARCHAR(100) NOT NULL,
    dzimšanas_datums DATE NOT NULL,
    statuss ENUM('AKTĪVS', 'IZRAKSTĪTS', 'MIRIS') DEFAULT 'AKTĪVS',
    iestāšanas_datums DATE NOT NULL,
    aiziešanas_datums DATE NULL,
    adrese TEXT,
    telefons VARCHAR(20),
    epasts VARCHAR(100),
    izveidots TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    labots TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    laboja_lietotajs VARCHAR(50),
    INDEX idx_personas_kods (personas_kods),
    INDEX idx_statuss (statuss),
    INDEX idx_vards_uzvards (vards, uzvards)
);

-- Klienta papildinformācija
CREATE TABLE klienti_info (
    klienta_id INT PRIMARY KEY,
    izglītība VARCHAR(100),
    profesija VARCHAR(100),
    valodas TEXT,
    intereses TEXT,
    ieradumi TEXT,
    sociālā_situācija TEXT,
    dzīvesvietas TEXT,
    ģimenes_stāvoklis TEXT,
    FOREIGN KEY (klienta_id) REFERENCES klienti(id) ON DELETE CASCADE
);

-- Aprūpes un rehabilitācijas plāni
CREATE TABLE plāni (
    id INT AUTO_INCREMENT PRIMARY KEY,
    klienta_id INT NOT NULL,
    plana_veids ENUM('APRŪPE', 'REHABILITĀCIJA') NOT NULL,
    sākuma_datums DATE NOT NULL,
    beigu_datums DATE,
    statuss ENUM('AKTĪVS', 'BEIGTS') DEFAULT 'AKTĪVS',
    mērķi TEXT,
    atbildīgais VARCHAR(100),
    izveidots TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (klienta_id) REFERENCES klienti(id) ON DELETE CASCADE,
    INDEX idx_klienta_veids (klienta_id, plana_veids)
);

-- Plānu punkti
CREATE TABLE plānu_punkti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plāna_id INT NOT NULL,
    rindas_nr INT NOT NULL,
    mērķis TEXT NOT NULL,
    darbības TEXT,
    atbildīgais VARCHAR(100),
    termiņš DATE,
    statuss ENUM('PLĀNOTS', 'PROGRESĀ', 'PABEIGTS') DEFAULT 'PLĀNOTS',
    FOREIGN KEY (plāna_id) REFERENCES plāni(id) ON DELETE CASCADE,
    INDEX idx_plāna_rinda (plāna_id, rindas_nr)
);
```

### 5.3. Datu integritātes nosacījumi

#### 5.3.1. Validācijas noteikumi

| Lauks | Tips | Validācijas noteikums | Kļūdas paziņojums |
|-------|------|----------------------|-------------------|
| personas_kods | String | Regex: `^\d{6}-\d{5}$` vai `^32\d{9}$` | "Personas kodam jābūt formātā XXXXXX-XXXXX vai 32XXXXXXXXX" |
| vards, uzvards | String | Nav tukšs, tikai burti | "Laukam jāsatur tikai burti" |
| telefons | String | Regex: `^[+]?[0-9\s-()]+$` | "Telefona numurs ir nepareizs" |
| epasts | String | Regex: `^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$` | "E-pasta adrese ir nepareiza" |
| dzimšanas_datums | Date | Ne var būt nākotnē | "Dzimšanas datums nevar būt nākotnē" |
| iestāšanas_datums | Date | Ne var būt pirms dzimšanas | "Iestāšanas datums nevar būt pirms dzimšanas datuma" |

#### 5.3.2. Biznesa noteikumi

1. **Personas koda unikalitāte:** Viens personas kods var būt tikai vienam klientam
2. **Statusa pārslēgšana:** Klientam ar statusu "MIRIS" nevar pievienot jaunus datus
3. **Plānu pārklāšanās:** Vienam klientam vienā laika periodā var būt tikai viens aktīvs plāns katra veida
4. **Datu dzēšana:** Fiziski dati netiek dzēsti - tiek atzīmēti kā "dzēsti" ar statusu

---

## 6. API SPECIFIKĀCIJA

### 6.1. Iekšējā API (Service Layer)

Sistēma izmanto iekšēju API starp slāņiem, kas balstīta uz Java interfeisiem.

#### 6.1.1. ClientCardService

```java
public interface ClientCardService {
    /**
     * Saglabā pilnu klienta kartes informāciju vienā transakcijā
     * @param clientData Klienta dati
     * @param additionalInfo Papildinformācija
     * @param familyMembers Piederīgie
     * @return Saglabātā klienta ID
     * @throws ValidationException Ja dati ir nekorekti
     * @throws ConcurrentModificationException Ja ieraksts ir bloķēts
     */
    Integer saveFullClientCardData(Klients clientData, 
                                 ClientCardInfo additionalInfo,
                                 List<FamilyMember> familyMembers);
    
    /**
     * Ielādē klienta kartes informāciju
     * @param clientId Klienta ID
     * @return Klienta kartes dati vai null, ja nav atrasts
     */
    ClientCardData loadClientCardData(Integer clientId);
    
    /**
     * Pārbauda, vai klienta karte ir bloķēta
     * @param clientId Klienta ID
     * @param username Lietotājvārds
     * @return true, ja ir bloķēta
     */
    boolean isClientCardLocked(Integer clientId, String username);
}
```

#### 6.1.2. StatisticsService

```java
public interface StatisticsService {
    /**
     * Ģenerē klientu demogrāfijas statistiku
     * @param criteria Filtra kritēriji
     * @return Statistikas dati
     */
    DemographicStatistics getDemographicStatistics(StatisticsCriteria criteria);
    
    /**
     * Ģenerē klientu kustības statistiku
     * @param startDate Sākuma datums
     * @param endDate Beigu datums
     * @return Kustības dati
     */
    ClientMovementStatistics getClientMovementStatistics(LocalDate startDate, 
                                                     LocalDate endDate);
    
    /**
     * Ģenerē nodarbību statistiku
     * @param criteria Filtra kritēriji
     * @return Nodarbību dati
     */
    ActivityStatistics getActivityStatistics(StatisticsCriteria criteria);
}
```

### 6.2. Datu sinhronizācijas API

#### 6.2.1. OfflineBufferService

```java
public interface OfflineBufferService {
    /**
     * Pievieno izmaiņas buferim
     * @param changeType Izmaiņu veids (INSERT, UPDATE, DELETE)
     * @param tableName Tabulas nosaukums
     * @param recordId Ieraksta ID
     * @param data JSON dati
     */
    void bufferChange(ChangeType changeType, String tableName, 
                     Integer recordId, String data);
    
    /**
     * Sinhronizē saglabātās izmaiņas ar serveri
     * @return Sinhronizācijas rezultāts
     */
    SyncResult syncPendingChanges();
    
    /**
     * Pārbauda, vai ir nepabeigtas sinhronizācijas
     * @return true, ja notiek sinhronizācija
     */
    boolean isSyncing();
}
```

### 6.3. Datu eksporta API

#### 6.3.1. ExcelExportService

```java
public interface ExcelExportService {
    /**
     * Eksportē klienta datus uz Excel veidni
     * @param clientId Klienta ID
     * @param templatePath Veidnes ceļš
     * @param outputPath Izvades ceļš
     * @return Eksporta rezultāts
     */
    ExportResult exportClientToExcel(Integer clientId, String templatePath, 
                                   String outputPath);
    
    /**
     * Ģenerē statistikas atskaiti
     * @param statisticsData Statistikas dati
     * @param templateType Veidnes tips
     * @return Excel fails baitu masīvā
     */
    byte[] generateStatisticsReport(StatisticsData statisticsData, 
                                  TemplateType templateType);
}
```

---

## 7. DROŠĪBA

### 7.1. Autentifikācija un autorizācija

#### 7.1.1. Paroļu pārvaldība

```java
public class PasswordManager {
    private static final int ITERATIONS = 65536;
    private static final int KEY_LENGTH = 256;
    private static final int SALT_LENGTH = 32;
    
    /**
     * Ģenerē drošu paroles hešu
     * @param password Parole vienkāršā teksta formātā
     * @return Hešs ar salt
     */
    public String hashPassword(String password) {
        byte[] salt = generateSalt();
        byte[] hash = pbkdf2(password.toCharArray(), salt, ITERATIONS, KEY_LENGTH);
        return Base64.getEncoder().encodeToString(salt) + ":" + 
               Base64.getEncoder().encodeToString(hash);
    }
    
    /**
     * Pārbauda paroli pret hešu
     * @param password Parole vienkāršā teksta formātā
     * @param hashedPassword Saglabātais hešs
     * @return true, ja parole atbilst
     */
    public boolean verifyPassword(String password, String hashedPassword) {
        String[] parts = hashedPassword.split(":");
        byte[] salt = Base64.getDecoder().decode(parts[0]);
        byte[] hash = Base64.getDecoder().decode(parts[1]);
        byte[] testHash = pbkdf2(password.toCharArray(), salt, ITERATIONS, KEY_LENGTH);
        return MessageDigest.isEqual(hash, testHash);
    }
}
```

#### 7.1.2. Lomu pārvaldība

```java
public enum Role {
    ADMIN("Administrators", "Pilna piekļuve sistēmai"),
    MANAGER("Vadītājs", "Piekļuve pārvaldībai un atskaitēm"),
    USER("Lietotājs", "Piekļuve klientu datiem"),
    MEDIC("Medicīnas darbinieks", "Piekļuve medicīniskajiem datiem");
    
    private final String displayName;
    private final String description;
    
    Role(String displayName, String description) {
        this.displayName = displayName;
        this.description = description;
    }
}
```

### 7.2. Datu šifrēšana

#### 7.2.1. AES-256 šifrēšana

```java
public class CryptoUtils {
    private static final String ALGORITHM = "AES/GCM/NoPadding";
    private static final int GCM_IV_LENGTH = 12;
    private static final int GCM_TAG_LENGTH = 16;
    
    /**
     * Šifrē datus
     * @param data Oriģinālie dati
     * @param key Šifrēšanas atslēga
     * @return Šifrētie dati
     */
    public static byte[] encrypt(byte[] data, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        byte[] iv = new byte[GCM_IV_LENGTH];
        new SecureRandom().nextBytes(iv);
        GCMParameterSpec spec = new GCMParameterSpec(GCM_TAG_LENGTH * 8, iv);
        cipher.init(Cipher.ENCRYPT_MODE, key, spec);
        byte[] encrypted = cipher.doFinal(data);
        return ByteBuffer.allocate(iv.length + encrypted.length)
                       .put(iv)
                       .put(encrypted)
                       .array();
    }
    
    /**
     * Atšifrē datus
     * @param encryptedData Šifrētie dati
     * @param key Atšifrēšanas atslēga
     * @return Atšifrētie dati
     */
    public static byte[] decrypt(byte[] encryptedData, SecretKey key) throws Exception {
        ByteBuffer bb = ByteBuffer.wrap(encryptedData);
        byte[] iv = new byte[GCM_IV_LENGTH];
        bb.get(iv);
        byte[] encrypted = new byte[bb.remaining()];
        bb.get(encrypted);
        
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        GCMParameterSpec spec = new GCMParameterSpec(GCM_TAG_LENGTH * 8, iv);
        cipher.init(Cipher.DECRYPT_MODE, key, spec);
        return cipher.doFinal(encrypted);
    }
}
```

### 7.3. Audita žurnāls

#### 7.3.1. AuditLogRepository

```java
public class AuditLogRepository {
    /**
     * Reģistrē sistēmas darbību
     * @param userId Lietotāja ID
     * @param action Darbība
     * @param entity Entītija
     * @param entityId Entītijas ID
     * @param details Detalizēta informācija
     */
    public void logAction(Integer userId, String action, String entity, 
                        Integer entityId, String details) {
        String sql = "INSERT INTO audit_log (user_id, action, entity, entity_id, details, timestamp) " +
                    "VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)";
        
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            stmt.setString(2, action);
            stmt.setString(3, entity);
            stmt.setObject(4, entityId);
            stmt.setString(5, details);
            stmt.executeUpdate();
        } catch (SQLException e) {
            logger.error("Kļūda ierakstot audita žurnālu", e);
        }
    }
}
```

### 7.4. Ierakstu bloķēšana

#### 7.4.1. RecordLockingService

```java
public class RecordLockingService {
    /**
     * Bloķē ierakstu rediģēšanai
     * @param tableName Tabulas nosaukums
     * @param recordId Ieraksta ID
     * @param username Lietotājvārds
     * @return true, ja veiksmīgi bloķēts
     */
    public boolean lockRecord(String tableName, Integer recordId, String username) {
        String sql = "UPDATE record_locks SET locked_by = ?, locked_at = CURRENT_TIMESTAMP " +
                    "WHERE table_name = ? AND record_id = ? AND locked_by IS NULL";
        
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, username);
            stmt.setString(2, tableName);
            stmt.setInt(3, recordId);
            int updated = stmt.executeUpdate();
            return updated > 0;
        } catch (SQLException e) {
            logger.error("Kļūda bloķējot ierakstu", e);
            return false;
        }
    }
    
    /**
     * Atbloķē ierakstu
     * @param tableName Tabulas nosaukums
     * @param recordId Ieraksta ID
     * @param username Lietotājvārds
     */
    public void unlockRecord(String tableName, Integer recordId, String username) {
        String sql = "UPDATE record_locks SET locked_by = NULL, locked_at = NULL " +
                    "WHERE table_name = ? AND record_id = ? AND locked_by = ?";
        
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, tableName);
            stmt.setInt(2, recordId);
            stmt.setString(3, username);
            stmt.executeUpdate();
        } catch (SQLException e) {
            logger.error("Kļūda atbloķējot ierakstu", e);
        }
    }
}
```

---

## 8. PERFORMANCE UN MĒROGOŠANA

### 8.1. Datubāzes optimizācija

#### 8.1.1. Indeksi

```sql
-- Klientu meklēšanas optimizācija
CREATE INDEX idx_klienti_search ON klienti(vards, uzvards, personas_kods);
CREATE INDEX idx_klienti_status ON klienti(statuss, iestāšanas_datums);

-- Plānu optimizācija
CREATE INDEX idx_plāni_klients_veids ON plāni(klienta_id, plana_veids, statuss);
CREATE INDEX idx_plāni_datumi ON plāni(sākuma_datums, beigu_datums);

-- Nodarbību optimizācija
CREATE INDEX idx_nodarbibas_datums ON nodarbibas(datums, klienta_id);
CREATE INDEX idx_nodarbibas_aktivitate ON nodarbibas(aktivitates_id);
```

#### 8.1.2. Savienojumu pūla konfigurācija

```java
public class DatabaseConnectionManager {
    private HikariConfig createConfig() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(jdbcUrl);
        config.setUsername(username);
        config.setPassword(password);
        
        // Pūla lielums
        config.setMaximumPoolSize(20);
        config.setMinimumIdle(5);
        config.setConnectionTimeout(30000); // 30 sekundes
        config.setIdleTimeout(600000); // 10 minūtes
        config.setMaxLifetime(1800000); // 30 minūtes
        
        // Performance optimizācija
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
        config.addDataSourceProperty("useServerPrepStmts", "true");
        
        return config;
    }
}
```

### 8.2. Kešatmiņas stratēģija

#### 8.2.1. SharedDataService

```java
public class SharedDataService {
    private final Map<String, Object> cache = new ConcurrentHashMap<>();
    private final Map<String, Long> cacheTimestamps = new ConcurrentHashMap<>();
    private static final long CACHE_TTL = 300000; // 5 minūtes
    
    /**
     * Iegūst datus no kešatmiņas vai datubāzes
     * @param key Atslēga
     * @param supplier Datu piegādātājs
     * @return Dati
     */
    @SuppressWarnings("unchecked")
    public <T> T get(String key, Supplier<T> supplier) {
        Long timestamp = cacheTimestamps.get(key);
        if (timestamp != null && (System.currentTimeMillis() - timestamp) < CACHE_TTL) {
            return (T) cache.get(key);
        }
        
        T data = supplier.get();
        cache.put(key, data);
        cacheTimestamps.put(key, System.currentTimeMillis());
        return data;
    }
    
    /**
     * Notīra kešatmiņu
     * @param pattern Atslēgas filtrs (var būt null, lai notīrītu visu)
     */
    public void clearCache(String pattern) {
        if (pattern == null) {
            cache.clear();
            cacheTimestamps.clear();
        } else {
            cache.keySet().removeIf(key -> key.matches(pattern));
            cacheTimestamps.keySet().removeIf(key -> key.matches(pattern));
        }
    }
}
```

### 8.3. Asinhronā apstrāde

#### 8.3.1. SaveTaskHelper

```java
public class SaveTaskHelper {
    /**
     * Izpilda saglabāšanas darbību asinhroni
     * @param action Darbība, kas jāizpilda
     * @param onSuccess Veiksmes apstrādātājs
     * @param onError Kļūdu apstrādātājs
     * @param uiElements UI elementi, kas jābloķē
     */
    public static <T> void runSaveTask(Callable<T> action, 
                                    Consumer<T> onSuccess,
                                    Consumer<Exception> onError,
                                    Node... uiElements) {
        // Bloķē UI elementus
        Arrays.stream(uiElements).forEach(node -> node.setDisable(true));
        
        Task<T> task = new Task<>() {
            @Override
            protected T call() throws Exception {
                return action.call();
            }
            
            @Override
            protected void succeeded() {
                try {
                    onSuccess.call(getValue());
                } catch (Exception e) {
                    onError.accept(e);
                }
                Arrays.stream(uiElements).forEach(node -> node.setDisable(false));
            }
            
            @Override
            protected void failed() {
                onError.accept(getException());
                Arrays.stream(uiElements).forEach(node -> node.setDisable(false));
            }
        };
        
        new Thread(task).start();
    }
}
```

---

## 9. TESTĒŠANA

### 9.1. Testēšanas stratēģija

Sistēma izmanto trīslīmeņu testēšanas pieeju:

1. **Vienību testi (Unit Tests):** Atsevišķu komponenšu testēšana
2. **Integrācijas testi:** Vairāku komponenšu sadarbības testēšana
3. **Sistēmas testi:** End-to-end scenāriju testēšana

### 9.2. Vienību testi

#### 9.2.1. ValidationService testi

```java
@ExtendWith(MockitoExtension.class)
class ValidationServiceTest {
    
    @Test
    void testValidPersonasKods() {
        assertTrue(ValidationService.isValidPersonasKods("161175-19997"));
        assertTrue(ValidationService.isValidPersonasKods("32123456789"));
    }
    
    @Test
    void testInvalidPersonasKods() {
        assertFalse(ValidationService.isValidPersonasKods("16117519997")); // Nav domuzīme
        assertFalse(ValidationService.isValidPersonasKods("12345")); // Par īsu
        assertFalse(ValidationService.isValidPersonasKods("abcdef-ghijk")); // Nav cipari
    }
    
    @Test
    void testValidEmail() {
        assertTrue(ValidationService.isValidEmail("test@example.com"));
        assertTrue(ValidationService.isValidEmail("user.name+tag@domain.co.uk"));
    }
    
    @Test
    void testInvalidEmail() {
        assertFalse(ValidationService.isValidEmail("invalid-email"));
        assertFalse(ValidationService.isValidEmail("@domain.com"));
        assertFalse(ValidationService.isValidEmail("user@"));
    }
}
```

#### 9.2.2. PasswordManager testi

```java
@ExtendWith(MockitoExtension.class)
class PasswordManagerTest {
    
    private PasswordManager passwordManager = new PasswordManager();
    
    @Test
    void testPasswordHashing() {
        String password = "TestPassword123!";
        String hashed = passwordManager.hashPassword(password);
        
        assertNotNull(hashed);
        assertTrue(hashed.contains(":")); // Salt:hash formāts
        assertNotEquals(password, hashed); // Nav glabāts vienkāršā tekstā
    }
    
    @Test
    void testPasswordVerification() {
        String password = "TestPassword123!";
        String hashed = passwordManager.hashPassword(password);
        
        assertTrue(passwordManager.verifyPassword(password, hashed));
        assertFalse(passwordManager.verifyPassword("WrongPassword", hashed));
    }
    
    @Test
    void testDifferentHashesForSamePassword() {
        String password = "TestPassword123!";
        String hash1 = passwordManager.hashPassword(password);
        String hash2 = passwordManager.hashPassword(password);
        
        assertNotEquals(hash1, hash2); // Dažādi salt -> dažāzi heši
        assertTrue(passwordManager.verifyPassword(password, hash1));
        assertTrue(passwordManager.verifyPassword(password, hash2));
    }
}
```

### 9.3. Integrācijas testi

#### 9.3.1. DatabaseIntegrationTest

```java
@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class DatabaseIntegrationTest {
    
    @Autowired
    private KlientsRepository klientsRepository;
    
    @Test
    @Order(1)
    void testInsertClient() {
        Klients client = new Klients();
        client.setPersonasKods("161175-19997");
        client.setVards("Jānis");
        client.setUzvards("Bērziņš");
        client.setDzimšanasDatums(LocalDate.of(1975, 11, 16));
        client.setStatuss("AKTĪVS");
        client.setIestāšanasDatums(LocalDate.now());
        
        Integer id = klientsRepository.save(client);
        assertNotNull(id);
        assertTrue(id > 0);
    }
    
    @Test
    @Order(2)
    void testFindClient() {
        Optional<Klients> client = klientsRepository.findByPersonasKods("161175-19997");
        assertTrue(client.isPresent());
        assertEquals("Jānis", client.get().getVards());
        assertEquals("Bērziņš", client.get().getUzvards());
    }
    
    @Test
    @Order(3)
    void testUpdateClient() {
        Optional<Klients> client = klientsRepository.findByPersonasKods("161175-19997");
        assertTrue(client.isPresent());
        
        Klients updated = client.get();
        updated.setTelefons("29123456");
        klientsRepository.update(updated);
        
        Optional<Klients> retrieved = klientsRepository.findById(updated.getId());
        assertTrue(retrieved.isPresent());
        assertEquals("29123456", retrieved.get().getTelefons());
    }
}
```

### 9.4. Sistēmas testi

#### 9.4.1. EndToEndScenariosTest

```java
@SpringBootTest
@ExtendWith(MockitoExtension.class)
class EndToEndScenariosTest {
    
    @Autowired
    private ClientCardService clientCardService;
    
    @Test
    void testCompleteClientLifecycle() {
        // 1. Izveidot jaunu klientu
        Klients newClient = createTestClient();
        Integer clientId = clientCardService.saveFullClientCardData(newClient, null, null);
        assertNotNull(clientId);
        
        // 2. Ielādēt klienta datus
        ClientCardData loadedData = clientCardService.loadClientCardData(clientId);
        assertNotNull(loadedData);
        assertEquals(newClient.getVards(), loadedData.getKlients().getVards());
        
        // 3. Izveidot plānu
        Plan plan = createTestPlan(clientId);
        Integer planId = planService.savePlan(plan);
        assertNotNull(planId);
        
        // 4. Reģistrēt nodarbību
        Nodarbiba nodarbiba = createTestNodarbiba(clientId);
        Integer nodarbibaId = nodarbibaRepository.save(nodarbiba);
        assertNotNull(nodarbibaId);
        
        // 5. Pārbaudīt statistiku
        StatisticsCriteria criteria = new StatisticsCriteria();
        criteria.setClientId(clientId);
        DemographicStatistics stats = statisticsService.getDemographicStatistics(criteria);
        assertNotNull(stats);
        assertEquals(1, stats.getTotalClients());
    }
}
```

### 9.5. Testu pārklājuma analīze

#### 9.5.1. JaCoCo konfigurācija (pom.xml)

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.8</version>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
        <execution>
            <id>check</id>
            <goals>
                <goal>check</goal>
            </goals>
            <configuration>
                <rules>
                    <rule>
                        <element>BUNDLE</element>
                        <limits>
                            <limit>
                                <counter>INSTRUCTION</counter>
                                <value>COVEREDRATIO</value>
                                <minimum>0.70</minimum>
                            </limit>
                        </limits>
                    </rule>
                </rules>
            </configuration>
        </execution>
    </executions>
</plugin>
```

---

## 10. UZSTĀDĪŠANA UN IZVIETOŠANA

### 10.1. Sistēmas prasības

#### 10.1.1. Minimālās prasības

| Komponente | Minimālā prasība | Ieteicamā prasība |
|------------|------------------|-------------------|
| Operētājsistēma | Windows 10 (64-bit) | Windows 11 (64-bit) |
| Procesors | Intel Core i3 | Intel Core i5 vai jaunāks |
| Atmiņa (RAM) | 4 GB | 8 GB vai vairāk |
| Diska vieta | 2 GB brīva vieta | 5 GB brīva vieta |
| Tīkla savienojums | 100 Mbps | 1 Gbps |
| Java Runtime | JRE 21 | JDK 21 (izstrādei) |

#### 10.1.2. Programmatūras atkarības

- **Java Runtime Environment (JRE)** versija 21 vai jaunāka
- **MySQL Server** versija 8.0 vai jaunāka (centralizētai datubāzei)
- **Windows Installer** (modernai instalācijai)

### 10.2. Instalācijas process

#### 10.2.1. Priekšnosacījumi

1. **MySQL servera sagatavošana:**
```sql
CREATE DATABASE socialcare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'socialcare'@'%' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON socialcare_db.* TO 'socialcare'@'%';
FLUSH PRIVILEGES;
```

2. **Java instalācija:**
- Lejupielādēt un instalēt JRE 21 no Oracle oficiālās vietnes
- Iestatīt JAVA_HOME vides mainīgo
- Pievienot Java bināro ceļu PATH mainīgajam

#### 10.2.2. Lietotnes instalācija

1. **Lejupielādēt instalācijas pakotni** `KlientuRegistrs-2.1.0.exe`
2. **Palaist instalācijas programmu** ar administratora tiesībām
3. **Sekot instalācijas vednim:**
   - Pieņemt licences noteikumus
   - Izvēlēties instalācijas mapi (noklusējums: `C:\Program Files\KlientuRegistrs`)
   - Izvēlēties starta izvēlnes saīsnes
4. **Pabeigt instalāciju** un palaist programmu

#### 10.2.3. Pirmās palaišanas konfigurācija

1. **Licences aktivizēšana:**
   - Ievadīt licences atslēgu
   - Apstiprināt iestādes nosaukumu
   - Iestatīt administratora kontu

2. **Datubāzes savienojuma konfigurācija:**
   - Servera adrese (localhost vai IP adrese)
   - Porta numurs (noklusējums: 3306)
   - Datubāzes nosaukums
   - Lietotājvārds un parole

3. **Sākotnējā datu ielāde:**
   - Importēt klasifikatorus (ja ir)
   - Iestatīt iestādes rekvizītus
   - Izveidot pirmos lietotāju kontus

### 10.3. Konfigurācijas faili

#### 10.3.1. db_config.properties

```properties
# Datubāzes konfigurācija (šifrēts)
db.host=localhost
db.port=3306
db.database=socialcare_db
db.username=socialcare
db.password=encrypted_password_here
db.ssl=false
db.useUnicode=true
db.characterEncoding=UTF-8

# Savienojumu pūla iestatījumi
db.pool.maxSize=20
db.pool.minIdle=5
db.pool.connectionTimeout=30000
db.pool.idleTimeout=600000
db.pool.maxLifetime=1800000
```

#### 10.3.2. app.properties

```properties
# Lietotnes konfigurācija
app.name=Klientu Reģistrs
app.version=2.1.0
app.data.dir=C:\ProgramData\KlientuRegistrs
app.language=lv_LV

# Drošības iestatījumi
app.session.timeout=1800000
app.password.min.length=8
app.password.require.special=true
app.password.require.numbers=true

# Sinhronizācijas iestatījumi
sync.enabled=true
sync.interval=5000
sync.retry.count=3
sync.retry.delay=1000

# Rezerves kopiju iestatījumi
backup.enabled=true
backup.interval=86400000
backup.retention.days=31
backup.path=C:\ProgramData\KlientuRegistrs\backups
```

### 10.4. Mērogošana

#### 10.4.1. Vienlīdzīgu instalāciju (Multiple Instances)

Sistēma atbalsta vairāku instances darbību vienā tīklā:

1. **Servera instances:**
   - Galvenā datubāze
   - Centralizēta rezerves kopiju glabātuve
   - Licences pārvaldības serveris

2. **Klienta instances:**
   - Lokālā H2 datubāze (offline režīmam)
   - Periodiska sinhronizācija ar serveri
   - Vietējie lietotāji un konfigurācija

#### 10.4.2. Load Balancing

Datubāzes slodzes sadalīšana:

```sql
-- Read replica konfigurācija (MySQL)
CREATE USER 'readonly'@'%' IDENTIFIED BY 'readonly_password';
GRANT SELECT ON socialcare_db.* TO 'readonly'@'%';

-- Aplikācijas konfigurācija
datasource.read.url=jdbc:mysql://read-replica-host:3306/socialcare_db
datasource.write.url=jdbc:mysql://master-host:3306/socialcare_db
```

---

## 11. UZTURĒŠANA UN ATBALSTS

### 11.1. Kļūdu novēršana (Troubleshooting)

#### 11.1.1. Biežākās problēmas

**Problēma:** Neizdevās pieslēgties datubāzei  
**Risinājums:**
1. Pārbaudīt, vai MySQL serveris darbojas
2. Pārbaudīt tīkla savienojumu un portu
3. Pārbaudīt lietotāja tiesības
4. Pārbaudīt konfigurācijas failu

```bash
# MySQL servera statusa pārbaude
sc query mysql80

# Tīkla savienojuma pārbaude
telnet localhost 3306

# Konfigurācijas faila pārbaude
type "C:\ProgramData\KlientuRegistrs\db_config.properties"
```

**Problēma:** Programmas palaišana aizkavējas  
**Risinājums:**
1. Pārbaudīt Java versiju: `java -version`
2. Pārbaudīt atmiņas pieejamību
3. Pārbaudīt žurnālfailus kļūdu meklēšanai
4. Pārbaudīt, vai cits process nebloķē portu

**Problēma:** Datu sinhronizācija nedarbojas  
**Risinājums:**
1. Pārbaudīt interneta savienojumu
2. Pārbaudīt servera pieejamību
3. Notīrīt sinhronizācijas buferi
4. Pārbaudīt konfliktu žurnālu

#### 11.1.2. Žurnālierakstu analīze

**Žurnālu atrašanās vietas:**
- Aplikācijas žurnāli: `C:\ProgramData\KlientuRegistrs\logs\`
- Datubāzes žurnāli: `C:\ProgramData\MySQL\Data\`
- Sistēmas žurnāli: Windows Event Viewer

**Kritiskās kļūdas meklēšana:**

```bash
# Meklēt ERROR ziņojumus
findstr /i "error" "C:\ProgramData\KlientuRegistrs\logs\app.log"

# Meklēt datubāzes savienojuma kļūdas
findstr /i "connection" "C:\ProgramData\KlientuRegistrs\logs\database.log"

# Pēdējās 100 rindas no žurnāla
powershell "Get-Content 'C:\ProgramData\KlientuRegistrs\logs\app.log' | Select-Object -Last 100"
```

### 11.2. Veiktspējas optimizācija

#### 11.2.1. Datubāzes optimizācija

```sql
-- Tabulu optimizācija
OPTIMIZE TABLE klienti;
OPTIMIZE TABLE plāni;
OPTIMIZE TABLE nodarbibas;

-- Statistikas atjaunošana
ANALYZE TABLE klienti;
ANALYZE TABLE plāni;
ANALYZE TABLE nodarbibas;

-- Vaicājumu veiktspējas analīze
EXPLAIN SELECT * FROM klienti WHERE vards LIKE 'Jānis%' AND statuss = 'AKTĪVS';
```

#### 11.2.2. Java VM optimizācija

```bash
# JVM parametri augstai veiktspējai
-Xms512m -Xmx2048m
-XX:+UseG1GC
-XX:MaxGCPauseMillis=200
-XX:+UseStringDeduplication
-Dfile.encoding=UTF-8
-Duser.timezone=Europe/Riga
```

### 11.3. Rezerves kopiju un atjaunošana

#### 11.3.1. Automātiskās rezerves kopijas

```batch
@echo off
REM Automātiskās rezerves kopijas skripts
set BACKUP_DIR=C:\ProgramData\KlientuRegistrs\backups
set TIMESTAMP=%date:~-4%_%date:~4,2%_%date:~7,2%_%time:~0,2%%time:~3,2%
set BACKUP_FILE=%BACKUP_DIR%\backup_%TIMESTAMP%.sql

REM Izveido mapi, ja nepastāv
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"

REM Izveido datubāzes rezerves kopiju
mysqldump --host=localhost --user=socialcare --password=password --single-transaction --routines --triggers socialcare_db > "%BACKUP_FILE%"

REM Dzēs vecās kopijas (vairāk nekā 31 dienas)
forfiles /p "%BACKUP_DIR%" /m backup_*.sql /d -31 /c "cmd /c del @path"

echo Rezerves kopija izveidota: %BACKUP_FILE%
```

#### 11.3.2. Datu atjaunošana

```sql
-- Datu atjaunošana no rezerves kopijas
DROP DATABASE IF EXISTS socialcare_db;
CREATE DATABASE socialcare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE socialcare_db;
SOURCE C:\ProgramData\KlientuRegistrs\backups\backup_2024_01_15_1430.sql;
```

### 11.4. Monitorings un alerting

#### 11.4.1. Sistēmas monitorings

```java
public class SystemMonitor {
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    
    public void startMonitoring() {
        scheduler.scheduleAtFixedRate(this::checkSystemHealth, 0, 1, TimeUnit.MINUTES);
    }
    
    private void checkSystemHealth() {
        // CPU izmantošana
        double cpuUsage = getCpuUsage();
        if (cpuUsage > 80) {
            logWarning("Augsta CPU slodze: " + cpuUsage + "%");
        }
        
        // Atmiņas izmantošana
        MemoryUsage heapUsage = ManagementFactory.getMemoryMXBean().getHeapMemoryUsage();
        double memoryUsage = (double) heapUsage.getUsed() / heapUsage.getMax() * 100;
        if (memoryUsage > 85) {
            logWarning("Augsta atmiņas slodze: " + memoryUsage + "%");
        }
        
        // Diska vieta
        File dataDir = new File(System.getProperty("app.data.dir"));
        long freeSpace = dataDir.getFreeSpace();
        long totalSpace = dataDir.getTotalSpace();
        double diskUsage = (double) (totalSpace - freeSpace) / totalSpace * 100;
        if (diskUsage > 90) {
            logError("Maz diska vieta: " + diskUsage + "% aizņemti");
        }
    }
}
```

---

## 12. PIELIKUMI

### 12.1. Pielikums A: Koda konvencijas

#### 12.1.1. Java kodēšanas standarti

```java
/**
 * Komentāru piemērs klasei
 * 
 * @author Dāvis Strazds
 * @version 2.1.0
 * @since 1.0.0
 */
public class ExampleClass {
    
    private static final Logger logger = LoggerFactory.getLogger(ExampleClass.class);
    private final String someField;
    
    /**
     * Konstruktora komentārs
     * 
     * @param someField parametra apraksts
     */
    public ExampleClass(String someField) {
        this.someField = someField;
    }
    
    /**
     * Metodes komentārs
     * 
     * @param input apraksts
     * @return rezultāta apraksts
     * @throws IllegalArgumentException ja arguments ir nederīgs
     */
    public String processData(String input) {
        if (input == null || input.trim().isEmpty()) {
            throw new IllegalArgumentException("Input cannot be null or empty");
        }
        
        logger.debug("Processing input: {}", input);
        return input.toUpperCase();
    }
}
```

#### 12.1.2. SQL kodēšanas standarti

```sql
-- Tabulu nosaukumi: lowercase ar underscore
-- Kolonnu nosaukumi: lowercase ar underscore
-- Atslēgvārdi: UPPERCASE
-- Indentācija: 4 atstarpes

CREATE TABLE client_cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    card_type ENUM('BASIC', 'EXTENDED') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    INDEX idx_client_type (client_id, card_type)
);

-- Vaicājumu piemērs
SELECT 
    c.id,
    c.vards,
    c.uzvards,
    cc.card_type,
    cc.created_at
FROM 
    clients c
INNER JOIN 
    client_cards cc ON c.id = cc.client_id
WHERE 
    c.statuss = 'AKTĪVS'
    AND cc.created_at >= '2024-01-01'
ORDER BY 
    c.uzvards, c.vards;
```

### 12.2. Pielikums B: Datu migrācijas skripti

#### 12.2.1. Shēmas migrācija v2.0 → v2.1

```sql
-- Migrācijas skripts: V2.0 uz V2.1
-- Izpildīšanas laiks: 2024-01-15

-- 1. Jaunas kolonnas pievienošana
ALTER TABLE klienti 
ADD COLUMN IF NOT EXISTS epasts VARCHAR(100) AFTER telefons,
ADD COLUMN IF NOT EXISTS dzimšanas_vieta VARCHAR(100) AFTER epasts;

-- 2. Indeksu optimizācija
CREATE INDEX IF NOT EXISTS idx_klienti_epasts ON klienti(epasts);
CREATE INDEX IF NOT EXISTS idx_klienti_search_full ON klienti(vards, uzvards, personas_kods, epasts);

-- 3. Jaunas tabulas
CREATE TABLE IF NOT EXISTS client_documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    document_type VARCHAR(50) NOT NULL,
    document_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uploaded_by VARCHAR(50) NOT NULL,
    
    FOREIGN KEY (client_id) REFERENCES klienti(id) ON DELETE CASCADE,
    INDEX idx_client_type (client_id, document_type)
);

-- 4. Datu migrācija (ja nepieciešams)
UPDATE klienti 
SET epasts = CONCAT(vards, '.', uzvards, '@example.com'))
WHERE epasts IS NULL AND vards IS NOT NULL AND uzvards IS NOT NULL;

-- 5. Konfigurācijas atjaunināšana
INSERT INTO configuration (config_key, config_value, description) 
VALUES ('db_version', '2.1.0', 'Datubāzes shēmas versija')
ON DUPLICATE KEY UPDATE config_value = '2.1.0';

COMMIT;
```

### 12.3. Pielikums C: API atsauces

#### 12.3.1. REST API (nākotnes paplašinājumi)

```yaml
# OpenAPI 3.0 specifikācija
openapi: 3.0.0
info:
  title: Klientu Reģistrs API
  version: 2.1.0
  description: Sociālās aprūpes iestāžu pārvaldības sistēmas API

servers:
  - url: http://localhost:8080/api/v2
    description: Development server

paths:
  /clients:
    get:
      summary: Iegūt klientu sarakstu
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 0
        - name: size
          in: query
          schema:
            type: integer
            default: 20
        - name: search
          in: query
          schema:
            type: string
      responses:
        '200':
          description: Veiksmīgi iegūts klientu saraksts
          content:
            application/json:
              schema:
                type: object
                properties:
                  content:
                    type: array
                    items:
                      $ref: '#/components/schemas/Client'
                  totalElements:
                    type: integer
                  totalPages:
                    type: integer
    
    post:
      summary: Izveidot jaunu klientu
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateClientRequest'
      responses:
        '201':
          description: Klients veiksmīgi izveidots
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Client'
        '400':
          description: Nederīgi dati
        '409':
          description: Klients jau eksistē

components:
  schemas:
    Client:
      type: object
      properties:
        id:
          type: integer
          readOnly: true
        personasKods:
          type: string
          pattern: '^\d{6}-\d{5}$|^32\d{9}$'
        vards:
          type: string
          minLength: 2
          maxLength: 100
        uzvards:
          type: string
          minLength: 2
          maxLength: 100
        statuss:
          type: string
          enum: [AKTĪVS, IZRAKSTĪTS, MIRIS]
        iestāšanasDatums:
          type: string
          format: date
```

### 12.4. Pielikums D: Sistēnas prasību matrica

| ID | Prasība | Avots | Statuss | Testa gadījumi | Implementācija |
|----|----------|--------|---------|----------------|----------------|
| FR-KL-001 | Klienta reģistrācija | MK Nr. 338 | ✅ | TC-KL-001, TC-KL-002 | KlientsRepository.save() |
| FR-KL-002 | Klienta kartes pārvaldība | Biznesa prasība | ✅ | TC-KL-003, TC-KL-004 | ClientCardService |
| FR-PLAN-001 | Aprūpes plāni | MK Nr. 138 | ✅ | TC-PLAN-001, TC-PLAN-002 | PlanRepository |
| FR-MED-001 | Veselības karte | Medicīnas prasība | ✅ | TC-MED-001 | HealthCardRepository |
| FR-AKT-001 | Nodarbību reģistrācija | Terapijas prasība | ✅ | TC-AKT-001 | NodarbibaRepository |
| FR-STAT-001 | Klientu demogrāfija | Vadības prasība | ✅ | TC-STAT-001 | StatisticsService |
| FR-SYS-001 | Lietotāju pārvaldība | Drošības prasība | ✅ | TC-SYS-001 | UserCredentialsRepository |

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī dokumentācija ir konfidenciāla un paredzēta tikai iekšējai lietošai. Tās izplatīšana bez rakstiskas atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2024. gada 15. janvārī*

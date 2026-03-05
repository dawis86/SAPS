# Klientu Reģistrs - Izvietošanas un Uzturēšanas Instrukcijas

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  

---

## SATURA RĀDĪTĀJS

1. [PRIEKŠNOSACĪMI](#1-priekšnosacīmi)
2. [SISTĒMAS PRASĪBAS](#2-sistēmas-prasības)
3. [INSTALĀCIJA](#3-instalācija)
4. [KONFIGURĀCIJA](#4-konfigurācija)
5. [PIRMĀ PALAIŠANA](#5-pirmā-palaišana)
6. [LIETOTĀJU PĀRVALDĪBA](#6-lietotāju-pārvaldība)
7. [DATU BĀZES IESTATĪŠANA](#7-datu-bāzes-iestatīšana)
8. [REZERVES KOPIJU VADĪBA](#8-rezerves-kopiju-vadība)
9. [PROBLĒMU NOVĒRŠANA](#9-problēmu-novēršana)
10. [UZTURĒŠANA UN ATJAUNINĀŠANA](#10-uzturēšana-un-atjaunināšana)

---

## 1. PRIEKŠNOSACĪMI

### 1.1. Dokumenta mērķis

Šī instrukcija ir paredzēta sistēmas administratoriem, IT speciālistiem un tehniskajiem atbalsta darbiniekiem. Tā satur pilnu informāciju par "Klientu Reģistrs" sistēmas uzstādīšanu, konfigurēšanu un uzturēšanu.

### 1.2. Mērķa auditorijas

- **Sistēmas administrators:** Atbildīgi par sistēmas tehnisko stāvokli
- **IT speciālisti:** Atbildīgi par infrastruktūru un drošību
- **Lietotāju pārvaldītāji:** Atbildīgi par lietotāju kontiem un piekļuvi
- **Medicīniskais personāls:** Atbildīgs par medicīnisko datu pārvaldību

### 1.3. Sistēmas versijas

- **Pašreizējā versija:** 2.1.0
- **Java versija:** 21 (LTS)
- **JavaFX versija:** 21.0.2
- **MySQL versija:** 8.0+
- **Operētājsistēma:** Windows 10/11 (64-bit)

---

## 2. SISTĒMAS PRASĪBAS

### 2.1. Minimālās prasības

#### 2.1.1. Servera prasības

| Komponents | Minimālā | Ieteicamā | Piezīmes |
|-----------|-----------|------------|----------|
| Procesors | Intel Core i3 | Intel Core i5 | Intel Core i7 |
| RAM | 4 GB | 8 GB | 16 GB |
| Diska vieta | 50 GB SSD | 100 GB SSD | 200 GB SSD |
| Tīkls | 100 Mbps | 1 Gbps | 1 Gbps |

#### 2.1.2. Klienta darbstacijas prasības

| Komponents | Minimālā | Ieteicamā |
|-----------|-----------|------------|
| Procesors | Intel Core i3 | Intel Core i5 |
| RAM | 4 GB | 8 GB |
| Diska vieta | 2 GB | 5 GB |
| Java Runtime | JRE 21 | JDK 21 |

### 2.2. Programmatūras prasības

#### 2.2.1. Nepieciešamā programmatūra

- **Java Runtime Environment (JRE) 21 vai jaunāka**
- **MySQL Server 8.0+** (centralizētai datubāzei)
- **Windows 10/11** (64-bit arhitektūra)

#### 2.2.2. Ieteicamā papildus programmatūra

- **MySQL Workbench** (datubāzes pārvaldībai)
- **Git** (versiju kontrolei)
- **Visual Studio Code** (koda rediģēšanai)
- **Advanced Installer** (installeru veidošanai)

---

## 3. INSTALĀCIJA

### 3.1. Priekšsagatavošana

#### 3.1.1. Java instalācija

1. **Lejupielādēt JRE 21:**
   - Atveriet https://adoptium.net/openjdk
   - Lejupielādēt "OpenJDK 21 Windows x64"
   - Palaidiet instalācijas programmu
   - Ievērošiet instalācijas ceļu
   - Iestatiet JAVA_HOME vides mainīgo

2. **Pārbaudiet instalāciju:**
   ```bash
   java -version
   echo %JAVA_HOME%
   ```

#### 3.1.2. MySQL Server instalācija

1. **Lejupielādēt MySQL 8.0:**
   - Atveriet https://dev.mysql.com/downloads/mysql/
   - Lejupielādēt "MySQL Community Server 8.0.x"
   - Izvēlieties "Windows x64" instalāciju

2. **Instalācijas konfigurācija:**
   - Izvēlieties "Developer Default"
   - Iestatiet root parole (saglabājiet drošā vietā)
   - Pabeidziet instalāciju

3. **Pārbaudiet MySQL darbību:**
   ```bash
   mysql --version
   ```

### 3.2. Datubāzes sagatavošana

#### 3.2.1. Datubāzes izveide

```sql
-- Pieslēdzieties MySQL kā root lietotājs
mysql -u root -p

-- Izveido datubāzi
CREATE DATABASE socialcare_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Izveido lietotāju
CREATE USER 'socialcare'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON socialcare_db.* TO 'socialcare'@'localhost';
FLUSH PRIVILEGES;
```

#### 3.2.2. Datubāzes pārbaude

```sql
-- Pārbaudiet datubāzi
USE socialcare_db;

-- Pārbaudiet rakstzīmju
SHOW TABLES;

-- Pārbaudiet kodējumu
SHOW VARIABLES LIKE 'character_set%';
SHOW VARIABLES LIKE 'collation%';
```

### 3.3. Lietotnes izplatīšana

#### 3.3.1. JAR faila izveide

1. **Pārbaudiet, ka ir Maven:**
   ```bash
   mvn --version
   ```

2. **Būvējiet aplikāciju:**
   ```bash
   cd klientu-registrs-app
   mvn clean package
   ```

3. **Izveido izplatīšanas mapi:**
   ```bash
   mkdir -p "C:\Program Files\KlientuRegistrs"
   copy target\klientu-registrs-2.1.0.jar "C:\Program Files\KlientuRegistrs\"
   copy -r target\lib "C:\Program Files\KlientuRegistrs\"
   ```

#### 3.3.2. Windows izveidotājs (opcional)

1. **Izmantojiet Inno Setup**
2. **Konfigurējiet izveidotāju:**
   - Programmas nosaukums: "Klientu Reģistrs"
   - Instalācijas mape: `C:\Program Files\KlientuRegistrs`
   - Iekļaut saīsnes uz programmu
   - Iestatiet izveidotāja informāciju

---

## 4. KONFIGURĀCIJA

### 4.1. Datubāzes konfigurācija

#### 4.1.1. Konfigurācijas fails izveide

Izveidojiet konfigurācijas failu `C:\ProgramData\KlientuRegistrs\db_config.properties`:

```properties
# Datubāzes konfigurācija
db.host=localhost
db.port=3306
db.database=socialcare_db
db.username=socialcare
db.password=secure_password

# Savienojumu pūla konfigurācija
db.pool.maxSize=20
db.pool.minIdle=5
db.pool.connectionTimeout=30000
db.pool.idleTimeout=600000
db.pool.maxLifetime=1800000

# SSL konfigurācija
db.ssl=false
db.useUnicode=true
db.characterEncoding=UTF-8
```

#### 4.1.2. Konfigurācijas šifrēšana

```bash
# Izveidojiet konfigurācijas šifrēšanas skriptu
java -cp "C:\Program Files\KlientuRegistrs\lib\*" CryptoUtils \
     -encrypt "C:\ProgramData\KlientuRegistrs\db_config.properties" \
     -output "C:\ProgramData\KlientuRegistrs\db_config.properties.enc"
```

### 4.2. Programmas konfigurācija

#### 4.2.1. Programmas iestatījumi

Izveidojiet programmas iestatījumu failu `C:\ProgramData\KlientuRegistrs\app.properties`:

```properties
# Programmas konfigurācija
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

---

## 5. PIRMĀ PALAIŠANA

### 5.1. Pirmās palaišanas vednis

#### 5.1.1. Licences aktivizācija

1. **Palaidiet programmu:**
   ```bash
   java -jar "C:\Program Files\KlientuRegistrs\klientu-registrs-2.1.0.jar"
   ```

2. **Licences aktivizācijas logs:**
   - Ievadietiet licences atslēgu
   - Ievadietiet iestādes nosaukumu
   - Ievadietiet administratora kontu informāciju
   - Apstipriniet licences noteikumus

#### 5.1.2. Datubāzes savienojuma konfigurācija

1. **Datubāzes savienojuma logs:**
   - Servera adrese: `localhost`
   - Ports: `3306`
   - Datubāzes nosaukums: `socialcare_db`
   - Lietotājvārds: `socialcare`
   - Parole: `secure_password`

2. **Savienojuma pārbaude:**
   - Sistēma automātiski pārbauda savienojumu
   - Ja savienojums neizdodas, parādīs kļūdu ziņojumu

### 5.2. Sākotnējā datu ielāde

#### 5.2.1. Klasifikatoru ielāde

Ja datubāze ir tukša, sistēma automātiski ielādēs sākotnējos datus:

1. **Iestādes informācija:**
   - Iestādes nosaukums
   - Adrese
   - Tālrunis
   - E-pasts

2. **Klasifikatori:**
   - Aktivitāšu veidi
   - Nodarbību speciālisti
   - Statusu veidi
   - Lomas un tiesības

3. **Pārbaude:**
   - Pārbaudiet, vai visi klasifikatori ir ielādēti
   - Pārbaudiet, vai dati ir korekti

---

## 6. LIETOTĀJU PĀRVALDĪBA

### 6.1. Administratora konta izveide

#### 6.1.1. Pirmā administratora konta

1. **Atveriet programmu**
2. **Izveidojiet administratora kontu:**
   - Lietotājvārds: `admin`
   - Parole: `admin123` (pirmajā palaišanai)
   - Pilns vārds: `Sistēmas Administrators`
   - Loma: `ADMIN`

3. **Mainiet paroli pēc pirmās pieslēgšanās:**
   - Dodatieties lietotājvārds: `admin`
   - Ievadietiet stipru paroli (minimums 8 simboli, lielie/mazie burti, cipari)

### 6.2. Lietotāju kontu izveide

#### 6.2.1. Standarta lietotāja konts

1. **Atveriet lietotāju pārvaldību:**
   - Galvenais panelis → Admin Rīki → Lietotāju pārvaldība

2. **Izveidojiet jaunu lietāju:**
   - Lietotājvārds: `jberzins`
   - Pilns vārds: `Jānis Bērziņš`
   - Epasts: `jberzins@socialcare.lv`
   - Loma: `USER` vai `MEDIC`

3. **Piešķiriet lomas tiesības:**
   - **USER:** Klientu datu lasīšana un rediģēšana
   - **MEDIC:** Papildus piekļuve medicīniskajiem datiem
   - **MANAGER:** Paplašināta piekļuve un atskaites

### 6.3. Lomas un tiesību matrica

| Loma | Klienti | Plāni | Medikamenti | Nodarbības | Admin rīki |
|------|--------|-------|------------|------------|-----------|
| ADMIN | ✅ ✅ ✅ | ✅ ✅ ✅ | ✅ ✅ ✅ | ✅ ✅ ✅ |
| MANAGER | ✅ ✅ ✅ | ✅ ✅ ✅ | ✅ ✅ ✅ | ❌ ❌ ❌ |
| USER | ✅ ✅ ✅ | ✅ ✅ ✅ | ✅ ✅ ✅ | ❌ ❌ ❌ |
| MEDIC | ❌ ❌ ❌ | ❌ ❌ ❌ | ✅ ✅ ✅ | ❌ ❌ ❌ |

---

## 7. DATU BĀZES IESTATĪŠANA

### 7.1. Shēmas migrācija

#### 7.1.1. Automātiskā shēmas izveide

1. **Programma pārbauda shēmas versiju:**
   - Pārbauda `configuration` tabulu
   - Salīdzina esošo versiju ar vajadzīgo

2. **Ja nepieciešams, izveido jaunu shēmu:**
   - Izveido visas tabulas
   - Izveido indeksus
   - Ielādē sākotnējos datus

#### 7.1.2. Shēmas migrācijas skripts

```sql
-- Shēmas migrācijas skripts (v4.0 → v5.0)
-- Izpildes laiks: 2024-01-15

-- 1. Jaunas kolonnas klientu tabulai
ALTER TABLE klienti 
ADD COLUMN laboja_lietotajs VARCHAR(50) AFTER labots;

-- 2. Jaunas tabulas
CREATE TABLE novērtēšanas_kartes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    klienta_id INT NOT NULL,
    veids ENUM('BĀZES', 'DINAMIKAS') NOT NULL,
    datums DATE NOT NULL,
    novērtētājs VARCHAR(100) NOT NULL,
    izveidots TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    labots TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    laboja_lietotajs VARCHAR(50),
    
    FOREIGN KEY (klienta_id) REFERENCES klienti(id) ON DELETE CASCADE,
    INDEX idx_klienta_veids_datums (klienta_id, veids, datums)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Konfigurācijas atjaunināšana
UPDATE configuration 
SET config_value = '5.0', 
    updated_at = CURRENT_TIMESTAMP 
WHERE config_key = 'db_version';
```

### 7.2. Sākotnējo datu ielāde

#### 7.2.1. Klasifikatoru ielāde

```sql
-- Aktivitāšu klasifikators
INSERT INTO activities (nosaukums, bloks, speciālists, joma, līmenis, apraksts) VALUES
('Vingrinājumi stāvus vietā', 'TERAPIJA', 'FIZIOTERAPEITS', 'KUSTĪBU KUSTĪBA', 'PAMATNIVELIS', 'Pamatu vingrinājumi kustību stiprināšanai'),
('Pastaigas vingrinājumi', 'TERAPIJA', 'FIZIOTERAPEITS', 'KUSTĪBU KUSTĪBA', 'VIDĒJA', 'Pastaigas vingrinājumi'),
('Ēšanas mācīšana', 'TERAPIJA', 'FIZIOTERAPEITS', 'PAŠAPKALPOŠANĀS', 'PAMATNIVELIS', 'Ēšanas prasmju mācīšana'),
('Runas vingrinājumi', 'TERAPIJA', 'RUNAS TERAPEITS', 'KOMUNIKĀCIJA', 'PAMATNIVELIS', 'Runas vingrinājumi'),
('Darbu terapija', 'TERAPIJA', 'ERGOTERAPEITS', 'PAŠAPKALPOŠANĀS', 'PAMATNIVELIS', 'Darba prasmju treniņš');
```

#### 7.2.2. Lomu definīcijas ielāde

```sql
-- Lomas un tiesību definīcijas
INSERT INTO configuration (config_key, config_value, description) VALUES
('role.ADMIN', 'Pilna piekļuve sistēmai', 'Administratora loma ar pilnām tiesībām'),
('role.MANAGER', 'Pārvaldība un atskaites', 'Vadītāja loma ar paplašinātām tiesībām'),
('role.USER', 'Pamata piekļuve klientu datiem', 'Standarta lietotāja loma'),
('role.MEDIC', 'Medicīniskā piekļuve', 'Mediķiskā personāla loma');
```

---

## 8. REZERVES KOPIJU VADĀBA

### 8.1. Automātiskās rezerves kopijas

#### 8.1.1. Rezerves kopiju grafiks

Sistēma veic automātiskas rezerves kopijas katru dienu:

1. **Ikdienas rezerves kopija:**
   - Laiks: 02:00
   - Tips: Pilna datubāzes kopija
   - Saglabāšanas laiks: 31 dienas

2. **Nedēļas rezerves kopijas:**
   - Laiks: 12:00 un 18:00
   - Tips: Diferenciālās kopijas
   - Saglabāšanas laiks: 7 dienas

#### 8.1.2. Rezerves kopiju konfigurācija

```properties
# Rezerves kopiju iestatījumi
backup.enabled=true
backup.interval=86400000
backup.retention.days=31
backup.path=C:\ProgramData\KlientuRegistrs\backups
backup.compression=true
backup.encryption=true
```

### 8.2. Rezerves kopiju skripti

#### 8.2.1. Pilnas rezerves kopijas skripts

```bash
#!/bin/bash
# Pilnas rezerves kopijas skripts
BACKUP_FILE="socialcare_db_backup_$(date +%Y%m%d_%H%M%S).sql"

# Konfigurācija
DB_HOST="localhost"
DB_PORT="3306"
DB_NAME="socialcare_db"
DB_USER="backup_user"
DB_PASS="secure_password"

# Rezerves kopijas izveide
mysqldump \
    --host=$DB_HOST \
    --port=$DB_PORT \
    --user=$DB_USER \
    --password=$DB_PASS \
    --single-transaction \
    --routines \
    --triggers \
    --databases \
    $DB_NAME > $BACKUP_FILE

# Kompresēšana
gzip $BACKUP_FILE

echo "Rezerves kopija izveidota: ${BACKUP_FILE}.gz"
```

### 8.3. Atjaunošanas procedūras

#### 8.3.1. Pilnas atjaunošanas

1. **Pārtrauciet sistēmu:**
   - Paziņojiet visus lietotājus
   - Apturiet programmu
   - Pārbaudiet, ka nav aktīvu darbību

2. **Izveidojiet rezerves kopiju:**
   - Izveidojiet pašreizējošu rezerves kopiju
   - Pārbaudiet rezerves kopijas integritāti

3. **Atjaunojiet datubāzi:**
   ```bash
   mysql --host=localhost --user=root --password=root_password < backup_file.sql
   ```

4. **Pārbaudiet atjaunošanos:**
   - Pārbaudiet, vai sistēma strādājās
   - Pārbaudiet, vai visi dati ir atjaunoti
   - Atļaujiet lietotāju piekļuvi

---

## 9. PROBLĒMU NOVĒRŠANA

### 9.1. Biežākās problēmas

#### 9.1.1. Nevar pieslēgties datubāzei

**Simptomi:**
- Programma parāda "Nevar izveidot savienojumu ar datubāzi"
- Kļūdas žurnālā: "Communications link failure"

**Izmeklēšanas soļi:**
1. **Pārbaudiet MySQL darbību:**
   ```bash
   sc query mysql80
   ```

2. **Pārbaudiet tīkla savienojumu:**
   ```bash
   telnet localhost 3306
   ```

3. **Pārbaudiet konfigurācijas failu:**
   ```bash
   type "C:\ProgramData\KlientuRegistrs\db_config.properties"
   ```

4. **Pārbaudiet lietotāja tiesības:**
   ```sql
   SHOW GRANTS FOR 'socialcare'@'localhost';
   ```

#### 9.1.2. Java versijas konflikts

**Simptomi:**
- Kļūda: "Unsupported major.minor version 52.0"
- Programma nedarbojas

**Risinājums:**
1. **Pārbaudiet Java versiju:**
   ```bash
   java -version
   ```

2. **Atjauniniet Java uz 21. versiju:**
   - Noņmējiet esošo Java versiju
   - Uzstādiet Java 21
   - Atjauniniet JAVA_HOME vides mainīgo

#### 9.1.3. Lēna programma palaišanās

**Simptomi:**
- Programma ilgi lēno startēšanos
- Atmiņas izlietojums ir 100%

**Izmeklēšanas soļi:**
1. **Pārbaudiet sistēmas resursus:**
   - CPU izmantošana
   - Atmiņas pieejaukums
   - Diska lasīšanas rakstura

2. **Optimizējiet JVM parametrus:**
   ```bash
   java -Xms512m -Xmx2048m -XX:+UseG1GC
   ```

3. **Pārbaudiet, vai nav pārākām lietotāju:**
   - Pārbaudiet, vai sistēma ir noslogota
   - Samaziniet lietotāju skaitu

### 9.2. Kļūdu žurnāli

#### 9.2.1. Kļūdu žurnālu atrašanās vietas

```
# Programmas žurnāli
C:\ProgramData\KlientuRegistrs\logs\
├── app.log              # Galvenais aplikācijas žurnāls
├── database.log         # Datubāzes operācijas
├── security.log         # Drošības notikumi
└── error.log           # Tikai kļūdu ziņojumi

# Sistēmas žurnāli
C:\ProgramData\MySQL\Data\
├── mysql-error.log      # MySQL kļūdu žurnāls
└── mysql-slow.log       # Lēni vaicājumi
```

#### 9.2.2. Kļūdu analīze

```bash
# Pēdējās 100 kļūdu rinduņu
tail -n 100 "C:\ProgramData\KlientuRegistrs\logs\app.log"

# Meklēt kļūdu pēc tekstau
grep -i "error" "C:\ProgramData\KlientuRegistrs\logs\*.log"

# Meklēt specifisku kļūdu
grep -i "database" "C:\ProgramData\KlientuRegistrs\logs\app.log"
```

### 9.3. Veiktspējas problēmas

#### 9.3.1. Lēna datu ielāde

**Simptomi:**
- Klientu saraksts ielādās vairāk par 10 sekundēm
- Statistikas apskates aizņem

**Risinājums:**
1. **Pārbaudiet indeksus:**
   ```sql
   SHOW INDEX FROM klienti;
   ANALYZE TABLE klienti;
   ```

2. **Optimizējiet vaicājumus:**
   - Izmantojiet `LIMIT` un `OFFSET`
   - Izvairieties no `SELECT *`
   - Izmantojiet `EXPLAIN` vaicājumu analīzei

3. **Palielināt savienojumu pūlu:**
   ```sql
   SHOW VARIABLES LIKE 'max_connections%';
   SET GLOBAL max_connections = 200;
   ```

---

## 10. UZTURĒŠANA UN ATJAUNINĀŠANA

### 10.1. Regulārā uzturēšana

#### 10.1.1. Mēnešnā uzturēšanas uzdevumi

**Katru nedēļas:**
1. **Datubāzes optimizācija:**
   - Analizēt vaicājumu veiktspēju
   - Optimizēt indeksus
   - Tīrīt vecus datus

2. **Žurnālu tīrīšana:**
   - Dzēst vecus žurnālu failus
   - Arhivējiet lielus žurnālus
   - Pārbaudiet žurnālu rotācijas iestatījumus

3. **Sistēmas atjaunināšana:**
   - Pārbaudīt jaunāku Java versiju
   - Atjaunināt bibliotēkas
   - Pārbaudīt drošības iestatījumus

#### 10.1.2. Uzturēšanas skripts

```bash
#!/bin/bash
# Mēnešnā uzturēšanas skripts

# 1. Datubāzes optimizācija
mysql -u root -p socialcare_db -e "OPTIMIZE TABLE klienti;"
mysql -u root -p socialcare_db -e "OPTIMIZE TABLE plāni;"
mysql -u root -p socialcare_db -e "OPTIMIZE TABLE nodarbibas;"

# 2. Analīze tabulu
mysql -u root -p socialcare_db -e "ANALYZE TABLE klienti;"
mysql -u root -p socialcare_db -e "ANALYZE TABLE plāni;"

# 3. Pārbaudīt indeksus
mysql -u root -p socialcare_db -e "SHOW INDEX FROM klienti;"
mysql -u root -p socialcare_db -e "SHOW INDEX FROM plāni;"

# 4. Tīrīt vecus žurnālus
find "C:\ProgramData\KlientuRegistrs\logs" -name "*.log" -mtime +30 -delete
find "C:\ProgramData\KlientuRegistrs\logs" -name "*.log" -mtime +90 -delete
```

### 10.2. Sistēmas atjaunināšana

#### 10.2.1. Atjaunināšanas grafiks

```
Sistēmas atjaunināšana (2.1.0 → 2.2.0):
┌─────────────────────────────────────────────┐
│ 1. Plānošana                    │
│    - Jaunas prasības analīze          │
│    - Atjaunināšanas grafiks           │
│    - Testēšanas fāzē                   │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 2. Izstrādātā                     │
│    - Jaunas funkcionalitātes izstrāde   │
│    - Koda pārskatīšana                │
│    - Testēšana un validācija           │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 3. Testēšana                       │
│    - Unit testēšana                    │
│    - Integrācijas testēšana              │
│    - Uzstādīšanas testēšana             │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 4. Izplatīšana                      │
│    - Pilnā izplatīšana                │
│    - Lietotāju apmācība              │
│    | 1. mēnešis                     │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 5. Atjaunināšana                   │
│    - Progresīva migrācija              │
│    | 1. nedēļa: 25%                     │
│    | 2. nedēļa: 50%                     │
│    | 3. nedēļa: 75%                     │
│    | 4. nedēļa: 100%                    │
└─────────────────────────────────────────────┘
```

### 10.3. Atjaunināšanas procedūra

#### 10.3.1. Sagatavošanas fāzi

1. **Datu dublēšana:**
   - Izveidojiet pilnu rezerves kopiju
   - Saglabājiet esošo konfigurāciju
   - Dokumentējiet esošo sistēmas stāvokli

2. **Testēšanas vides:**
   - Testējiet jauno versiju izolētā vidē
   - Pārbaudiet visu funkcionalitāti
   - Testējiet datu migrāciju

3. **Izplatīšana:**
   - Izveidojiet izplatīšanas pakotni
   - Izplatiet jauno versiju
   - Pārlieciet lietotājus

4. **Pēc izplatīšanas:**
   - Monitorējiet sistēmas darbību
   - Apstrādājiet lietotājus par izmaiņām
   | - Vākti atbalsta

---

## PIELIKUMI

### Pielikums A: Sistēmas prasību matrica

| Komponents | Minimālās | Ieteicamā | Testēta |
|-----------|-----------|------------|---------|
| CPU | 2 cores | 4 cores | Intel i5 |
| RAM | 4 GB | 8 GB | 16 GB |
| Diska vieta | 50 GB | 100 GB | 200 GB |
| Tīkls | 100 Mbps | 1 Gbps | 1 Gbps |
| Java | JRE 21 | JDK 21 | OpenJDK 21 |
| MySQL | 8.0+ | 8.0+ | MySQL 8.0 |

### Pielikums B: Konfigurācijas faili

| Fails | Apraksts | atrašanās vieta |
|-------|----------|----------------|
| db_config.properties | Datubāzes konfigurācija | `C:\ProgramData\KlientuRegistrs\` |
| app.properties | Programmas konfigurācija | `C:\ProgramData\KlientuRegistrs\` |
| logback.xml | Žurnālierakstu konfigurācija | `C:\ProgramData\KlientuRegistrs\logs\` |

### Pielikums C: Noderīgi komandi

| Komanda | Apraksts |
|---------|----------|
| `java -version` | Pārbaudīt Java versiju |
| `mysql --version` | Pārbaudīt MySQL versiju |
| `sc query mysql80` | Pārbaudīt MySQL servisu |
| `mysqldump` | Izveidot rezerves kopiju |
| `mysqlcheck` | Pārbaudīt datubāves integritāti |

### Pielikums D: Kontaktinformācija

**Tehniskais atbalsts:**
- E-pasts: davisstrazds@gmail.com
- Tālrunis: +371 26482667
- Darba laiks: Darbdienās 9:00-18:00

**Ārkārtējās situācijas:**
- Tālrunis: +371 26482667 (24/7)

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī izvietošanas un uzturēšanas instrukcija ir paredzēta sistēmas administratoriem un IT speciālistiem. Tās izplatīšana bez atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2024. gada 15. janvārī*

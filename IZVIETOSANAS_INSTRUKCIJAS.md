# Klientu Reģistrs - Izvietošanas Instrukcijas

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.04.09  

---

## SATURA RĀDĪTĀJS

1. [IZVIETOŠANAS PĀRSKATS](#1-izvietošanas-pārskats)
2. [SISTĒMAS PRASĪBAS](#2-sistēmas-prasības)
3. [DATU BĀZES IESTATĪŠANA](#3-datu-bāzes-iestatīšana)
4. [APLIKĀCIJAS INSTALĀCIJA](#4-aplikācijas-instalācija)
5. [KONFIGURĀCIJA](#5-konfigurācija)
6. [LICENCĒŠANA](#6-licencēšana)
7. [TESTĒŠANA UN VERIFIKĀCIJA](#7-testēšana-un-verifikācija)
8. [APMAINTENANCE](#8-apmaintenance)
9. [KĻŪDU NOVĒRŠANA](#9-kļūdu-novēršana)

---

## 1. IZVIETOŠANAS PĀRSKATS

### 1.1. Arhitektūra (faktiskā)

**Klientu Reģistrs** ir JavaFX darbvirsmas lietojumprogramma ar hibrīda datu piekļuves modeli:

```
┌─────────────────────────────────────────────────────────────┐
│                    KLIENTU STACIJA                        │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ JavaFX App  │ │ Local SQLite │ │   Configuration   │ │
│ │ (Client)    │ │ (Cache)      │ │   Files           │ │
│ └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                         Network (TCP/IP)
                              │
┌─────────────────────────────────────────────────────────────┐
│                     SERVERA PUSE                           │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ MySQL Server │ │ File System │ │   Backup Storage    │ │
│ │ (Primary DB) │ │ (Templates)  │ │   (Archives)       │ │
│ └─────────────┘ └─────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 1.2. Izvietošanas modeļi

**Modeļis 1: Standalone (viena stacija)**
- Viena JavaFX aplikācija
- Lokālā MySQL datubāze
- Nav nepieciešams tīkls

**Modeļis 2: Multi-user (vairākas stacijas)**
- Vairākas JavaFX klientu stacijas
- Kopēja MySQL datubāze
- Nepieciešams lokālais tīkls

**Modeļis 3: Enterprise (liela mēroga)**
- Vairākas klientu stacijas
- MySQL cluster ar replicāciju
- Load balancer
- Backup serveris

---

## 2. SISTĒMAS PRASĪBAS

### 2.1. Aparatūras prasības (faktiskās)

**Minimālās prasības (viena lietotājs):**
- **Procesors:** Intel Core i3 / AMD Ryzen 3 @ 2.0 GHz
- **Atmiņa:** 4 GB RAM
- **Diska vieta:** 50 GB SSD
- **Tīkls:** 100 Mbps (ja ir datubāzes serveris)

**Ieteicamās prasības (vairāki lietotāji):**
- **Procesors:** Intel Core i5 / AMD Ryzen 5 @ 2.5 GHz
- **Atmiņa:** 8 GB RAM
- **Diska vieta:** 100 GB SSD
- **Tīkls:** 1 Gbps

**Servera prasības (MySQL serveris):**
- **Procesors:** Intel Core i7 / AMD Ryzen 7 @ 3.0 GHz
- **Atmiņa:** 16 GB RAM
- **Diska vieta:** 500 GB SSD
- **Tīkls:** 1 Gbps

### 2.2. Programmatūras prasības

**Klienta stacija:**
- **Windows 10/11** (64-bit) - ieteicamā
- **Linux** (Ubuntu 20.04+) - atbalstīta
- **macOS** (10.15+) - atbalstīta
- **Java 21 LTS** (obligāta)

**Serveris:**
- **Windows Server 2019+** vai **Linux Server** (Ubuntu 20.04+)
- **MySQL Server 8.0+**
- **OpenSSH** (attālā piekļuvei)

---

## 3. DATU BĀZES IESTATĪŠANA

### 3.1. MySQL servera instalācija

**Windows:**
1. Lejupielādējiet MySQL Installer no [mysql.com](https://dev.mysql.com/downloads/installer/)
2. Palaidiet instalāciju
3. Izvēlieties "Server only"
4. Konfigurējiet:
   - **Port:** 3306 (standarta)
   - **Root password:** izveidojiet drošu paroli
   - **Authentication Type:** Use Strong Password Encryption
5. Pabeidziet instalāciju

**Linux (Ubuntu):**
```bash
# Atjaunināt pakotnes
sudo apt update

# Instalēt MySQL serveri
sudo apt install mysql-server

# Drošināt instalāciju
sudo mysql_secure_installation

# Pārbaudīt statusu
sudo systemctl status mysql
```

### 3.2. Datubāzes izveide

**Izveidojiet datubāzi:**
```sql
-- Pieslēdzieties MySQL
mysql -u root -p

-- Izveidojiet datubāzi
CREATE DATABASE klientu_registrs CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Izveidojiet lietotāju
CREATE USER 'klientu_registrs'@'localhost' IDENTIFIED BY 'droša_parole';
GRANT ALL PRIVILEGES ON klientu_registrs.* TO 'klientu_registrs'@'localhost';
FLUSH PRIVILEGES;

-- Izveidojiet lietotāju attālai piekļuvei (ja nepieciešams)
CREATE USER 'klientu_registrs'@'%' IDENTIFIED BY 'droša_parole';
GRANT ALL PRIVILEGES ON klientu_registrs.* TO 'klientu_registrs'@'%';
FLUSH PRIVILEGES;

-- Izietiet
EXIT;
```

### 3.3. MySQL konfigurācija

**Rediģējiet `my.cnf` (Linux) vai `my.ini` (Windows):**
```ini
[mysqld]
# Galvenie iestatījumi
port = 3306
bind-address = 0.0.0.0
max_connections = 200
innodb_buffer_pool_size = 1G
innodb_log_file_size = 256M
innodb_flush_log_at_trx_commit = 2

# Rakstzīmju kodējums
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

# Žurnālieraksti
log-error = /var/log/mysql/error.log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2

# Backup iestatījumi
expire_logs_days = 7
max_binlog_size = 100M
```

**Restartējiet MySQL:**
```bash
# Linux
sudo systemctl restart mysql

# Windows
net stop mysql
net start mysql
```

---

## 4. APLIKĀCIJAS INSTALĀCIJA

### 4.1. Java instalācija

**Windows:**
1. Lejupielādējiet Java 21 LTS no [oracle.com](https://www.oracle.com/java/technologies/downloads/)
2. Palaidiet instalāciju
3. Pārbaudiet instalāciju:
   ```cmd
   java -version
   ```

**Linux (Ubuntu):**
```bash
# Instalēt OpenJDK 21
sudo apt update
sudo apt install openjdk-21-jdk

# Pārbaudīt instalāciju
java -version
```

### 4.2. Aplikācijas izvietošana

**Metode 1: Standalone JAR**
1. Lejupielādējiet `klientu-registrs-app.jar`
2. Izveidojiet instalācijas mapi:
   ```bash
   mkdir C:\KlientuRegistrs
   cd C:\KlientuRegistrs
   ```
3. Ievietojiet JAR failā mapē
4. Izveidojiet palaišanas skriptu `start.bat`:
   ```bat
   @echo off
   java -Xms512m -Xmx2048m -jar klientu-registrs-app.jar
   pause
   ```

**Metode 2: Windows Installer**
1. Lejupielādējiet `klientu-registrs-setup.exe`
2. Palaidiet instalāciju kā administrator
3. Izvēlieties instalācijas mapi
4. Sekojiet instalācijas vednim

**Metode 3: Portable versija**
1. Lejupielādējiet `klientu-registrs-portable.zip`
2. Atarhivējiet failus
3. Palaidiet `klientu-registrs.exe`

### 4.3. Tīkla konfigurācija

**Firewall iestatījumi (ja nepieciešams):**
```bash
# Windows PowerShell (Administrator)
New-NetFirewallRule -DisplayName "MySQL" -Direction Inbound -Protocol TCP -LocalPort 3306 -Action Allow

# Linux
sudo ufw allow 3306/tcp
sudo ufw reload
```

---

## 5. KONFIGURĀCIJA

### 5.1. Pirmā palaišana

1. Palaidiet aplikāciju
2. Tiks parādīts licences iestatīšanas logs
3. Ievadiet licences atslēgu
4. Nospiediet "Turpināt"

### 5.2. Datubāzes konfigurācija

**Tiks parādīts datubāzes konfigurācijas logs:**
1. **Serveris:** localhost vai servera IP adrese
2. **Ports:** 3306 (standarta)
3. **Datubāze:** klientu_registrs
4. **Lietotājvārds:** klientu_registrs
5. **Parole:** ievadiet izveidoto paroli
6. Nospiediet "Testēt savienojumu"
7. Ja tests ir veiksmīgs, nospiediet "Saglabāt"

### 5.3. Administratora konta izveide

1. Pēc veiksmīgas datubāzes konfigurācijas
2. Tiks parādīts administratora konta izveides logs
3. Ievadiet:
   - **Lietotājvārds:** admin
   - **Parole:** izveidojiet drošu paroli
   - **Vārds, uzvārds:** administratora vārds
4. Nospiediet "Izveidot kontu"

### 5.4. Iestādes informācija

1. Tiks parādīts iestādes informācijas logs
2. Ievadiet:
   - **Iestādes nosaukums:**
   - **Adrese:**
   - **Telefons:**
   - **E-pasts:**
3. Nospiediet "Saglabāt"

---

## 6. LICENCĒŠANA

### 6.1. Licences iegūšana

1. Sazinieties ar pārdevēju
2. Norādiet:
   - Iestādes nosaukumu
   - Lietotāju skaitu
   - Instalācijas tipu (standalone/multi-user)
3. Saņemiet licences atslēgu

### 6.2. Licences instalācija

1. Atveriet aplikāciju
2. Ja licence ir nepareiza, tiks parādīts licences logs
3. Ievadiet jauno licences atslēgu
4. Nospiediet "Aktivizēt"

### 6.3. Licences pārbaude

Licences statusu var pārbaudīt:
1. Atveriet "Palīdzība" -> "Par licenci"
2. Skatiet licences informāciju:
   - Licences veids
   - Derīguma termiņš
   - Lietotāju limits
   - Instalācijas limits

---

## 7. TESTĒŠANA UN VERIFIKĀCIJA

### 7.1. Pamata testēšana

**1. Savienojuma testēšana:**
```bash
# Testēt MySQL savienojumu
mysql -h localhost -u klientu_registrs -p klientu_registrs

# Testēt tīkla savienojumu (ja attāls serveris)
telnet mysql_server_ip 3306
```

**2. Java testēšana:**
```bash
# Pārbaudīt Java versiju
java -version

# Testēt JAR palaišanu
java -jar klientu-registrs-app.jar --version
```

**3. Aplikācijas testēšana:**
1. Palaidiet aplikāciju
2. Pieteikieties ar administratora kontu
3. Pārbaudiet galvenās funkcijas:
   - Klientu pievienošana
   - Datu meklēšana
   - Eksports uz Excel
   - Lietotāju pārvaldība

### 7.2. Veiktspējas testēšana

**1. Datubāzes veiktspēja:**
```sql
-- Pārbaudīt savienojumu skaitu
SHOW STATUS LIKE 'Threads_connected';

-- Pārbaudīt vaicājumu veiktspēju
SELECT * FROM information_schema.processlist;

-- Pārbaudīt datubāzes izmēru
SELECT table_schema AS 'Database',
       ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)'
FROM information_schema.tables
WHERE table_schema = 'klientu_registrs'
GROUP BY table_schema;
```

**2. Aplikācijas veiktspēja:**
- Monitorējiet RAM izmantošanu
- Pārbaudiet CPU noslodzes
- Testējiet ar vairākiem lietotājiem vienlaikus

### 7.3. Integrācijas testēšana

**1. Datu sinhronizācija:**
- Izveidojiet testu klientu
- Pārbaudiet, ka dati tiek saglabāti MySQL
- Pārbaudiet, ka dati tiek kešoti SQLite

**2. Eksporta testēšana:**
- Eksportējiet klienta karti
- Pārbaudiet Excel faila saturu
- Pārbaudiet, ka visi dati ir pareizi

---

## 8. APMAINTENANCE

### 8.1. Regulāra uzturēšana

**Ikdienas uzdevumi:**
- Pārbaudīt aplikācijas darbību
- Pārbaudīt žurnālfailus par kļūdām
- Pārbaudīt datubāzes veiktspēju

**Nedēļas uzdevumi:**
- Izveidot rezerves kopijas
- Pārbaudīt diskas vietu
- Pārbaudīt lietotāju aktivitāti

**Mēneša uzdevumi:**
- Atjaunināt sistēmu
- Pārbaudīt licences statusu
- Optimizēt datubāzi

### 8.2. Rezerves kopijas

**Automātiskās rezerves kopijas:**
```bash
# Izveidojiet backup skriptu backup_mysql.sh
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/mysql"
DB_NAME="klientu_registrs"

# Izveidojiet mapi
mkdir -p $BACKUP_DIR

# Izveidojiet rezerves kopiju
mysqldump -u klientu_registrs -p$MYSQL_PASSWORD $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# Dzēsiet vecās kopijas (vecākas par 30 dienām)
find $BACKUP_DIR -name "backup_*.sql" -mtime +30 -delete
```

**Plānojiet automātiskos backupus:**
```bash
# Pievienojiet crontab
crontab -e

# Pievienojiet rindu (katru dienu plkst. 2:00)
0 2 * * * /path/to/backup_mysql.sh
```

### 8.3. Datubāzes optimizācija

**Reizi mēnesī:**
```sql
-- Optimizēt tabulas
OPTIMIZE TABLE klienti;
OPTIMIZE TABLE client_card_info;
OPTIMIZE TABLE health_cards;
OPTIMIZE TABLE plans;
OPTIMIZE TABLE nodarbibas;
OPTIMIZE TABLE protokoli;
OPTIMIZE TABLE sarunas_apraksti;

-- Pārbaudīt tabulu statusu
SHOW TABLE STATUS FROM klientu_registrs;
```

---

## 9. KĻŪDU NOVĒRŠANA

### 9.1. Biežākās problēmas

**Problēma: Nevar pieslēgties datubāzei**
- **Risinājums:**
  1. Pārbaudiet, ka MySQL serveris darbojas
  2. Pārbaudiet tīkla savienojumu
  3. Pārbaudiet lietotājvārdu un paroli
  4. Pārbaudiet firewall iestatījumus

**Problēma: Aplikācija nestartējas**
- **Risinājums:**
  1. Pārbaudiet Java versiju (jābūt 21)
  2. Pārbaudiet licences statusu
  3. Pārbaudiet žurnālfailus
  4. Pārbaudiet, ka nav citu instanču

**Problēma: Lēns darbība**
- **Risinājums:**
  1. Pārbaudiet RAM izmantošanu
  2. Optimizējiet datubāzi
  3. Palieliniet JVM atmiņu
  4. Pārbaudiet tīkla veiktspēju

### 9.2. Žurnālfaili

**Aplikācijas žurnāli:**
```
.klientu_registrs/logs/
├── application.log          # Galvenais žurnālis
├── error.log               # Kļūdu žurnālis
├── audit.log               # Darbību žurnālis
└── database_operations.log # Datubāzes operācijas
```

**MySQL žurnāli:**
```
/var/log/mysql/ (Linux)
C:\ProgramData\MySQL\MySQL Server 8.0\Data\ (Windows)
├── error.log               # MySQL kļūdas
├── slow.log                # Lēni vaicājumi
└── mysql-bin.log           # Binārie žurnāli
```

### 9.3. Atbalsta informācija

**Tehniskais atbalsts:**
- **E-pasts:** support@klienturegistrs.lv
- **Tālrunis:** +371 XXXXXXXX
- **Darba laiks:** Darbdienās 9:00-17:00

**Kļūdu ziņošana:**
1. Sagatavojiet žurnālfailus
2. Aprakstiet problēmu
3. Norādiet sistēmas informāciju:
   - Operētājsistēma
   - Java versija
   - Aplikācijas versija
   - Kļūdas ziņojums

---

## IZVIETOŠANAS SARAKSTS

### Pirms instalācijas:
- [ ] Pārbaudīt sistēmas prasības
- [ ] Instalēt Java 21 LTS
- [ ] Instalēt MySQL Server 8.0+
- [ ] Iegūt licences atslēgu
- [ ] Sagatavot tīkla konfigurāciju

### Instalācijas laikā:
- [ ] Izveidot datubāzi
- [ ] Izveidot lietotāju
- [ ] Instalēt aplikāciju
- [ ] Konfigurēt datubāzes savienojumu
- [ ] Izveidot administratora kontu
- [ ] Iestatīt iestādes informāciju

### Pēc instalācijas:
- [ ] Testēt savienojumus
- [ ] Testēt galvenās funkcijas
- [ ] Izveidot rezerves kopiju stratēģiju
- [] Iestatīt monitoringu
- [] Apmācīt lietotājus

---

## DROŠĪBAS PASĀKUMI

### Tīkla drošība:
- Izmantojiet SSL/TLS datubāzes savienojumiem
- Ierobežojiet piekļuvi tikai nepieciešamajiem IP
- Izmainiet standarta MySQL portus
- Izmantojiet drošas paroles

### Datu drošība:
- Regulāri veiciet rezerves kopijas
- Šifrējiet sensitīvus datus
- Ierobežojiet lietotāju tiesības
- Monitorējiet piekļuves mēģinājumus

### Sistēmas drošība:
- Atjaunināt sistēmu regulāri
- Izmantojiet antivīrusu programmatūru
- Ierobežojiet fizisko piekļuvi
- Veiciet regulārus drošības auditus

---

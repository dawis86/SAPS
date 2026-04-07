# Klientu Reģistrs

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.04.09  

---

## Par projektu

**Klientu Reģistrs** ir JavaFX darbvirsmas lietojumprogramma, kas izstrādāta kā kvalifikācijas prakses darbs Dienvidkurzemes novada pašvaldības Sociālā atbalsta centra "Vaiņode" vajadzībām. 

### Prakses mērķis
Sistēmas pamatmērķis ir fundamentāli risināt sociālās aprūpes nozares birokrātiju, transformējot manuālos, papīra formāta procesus modernā, drošā un automatizētā digitālā risinājumā. Projekts pierāda spēju veikt pilnu programmatūras izstrādes ciklu, apvienojot profesionālo pieredzi sociālajā darbā ar modernām programmēšanas tehnoloģijām.

### Galvenās inovācijas
- **AI-Assisted Engineering**: Izstrādes procesā izmantoti mākslīgā intelekta rīki koda kvalitātes auditam un arhitektūras optimizācijai.
- **Offline-First**: Hibrīda datu glabāšana (MySQL + SQLite) nepārtrauktam darbam bez interneta.

---

## Galvenās funkcijas

### 👥 Lietotāju pārvaldība
- Vairāku lomu atbalsts (Administrator, Manager, Social Worker, Medical Staff)
- Droša autentifikācija ar sesiju pārvaldību
- Paroļu pārvaldība un tiesību piešķiršana

### 👥 Klientu pārvaldība
- Klientu reģistrācija un pārvaldība
- Klientu kartes izveide un uzturēšana
- Ģimenes locekļu pārvaldība
- Klientu meklēšana un filtrēšana

### 📋 Aprūpes plāni
- Aprūpes plānu izveide un pārvaldība
- Rehabilitācijas plāni
- Nodarbību reģistrēšana un plānošana
- Aktivitāšu analīze

### 🏥 Medicīniskie dati
- Veselības kartes pārvaldība
- Medikamentu pieprasījumi
- Slimnīcas veidlapu izpilde
- Medicīniskā statistika

### 📊 Dokumentācija un atskaites
- Protokolu izveide un pārvaldība
- Sarunu apraksti
- Novērtēšanas kartes
- Eksports uz Excel formātu

### 🔧 Administratora rīki
- Datu imports un eksports
- Datubāzes rezerves kopiju pārvaldība
- Lietotāju tiesību pārvaldība
- Sistēmas konfigurācija
- Darbību žurnāla pārvaldība

---

## Sistēmas prasības

### Operētājsistēma
- **Windows 10/11** (64-bit) - ieteicamā
- **Linux** (Ubuntu 20.04+) - atbalstīta
- **macOS** (10.15+) - atbalstīta

### Java
- **Java 21 LTS** (obligāta)
- **JavaFX 21** (iekļauta)

### Aparatūras prasības
- **Procesors:** 2 cores @ 2.0 GHz (minimums), 4 cores @ 2.5 GHz (ieteicams)
- **Atmiņa:** 4 GB RAM (minimums), 8 GB RAM (ieteicams)
- **Diska vieta:** 50 GB SSD (minimums), 100 GB SSD (ieteicams)
- **Tīkls:** 100 Mbps (minimums), 1 Gbps (ieteicams)

### Datu bāze
- **MySQL Server 8.0+** (centrālā datubāze)
- **SQLite** (lokālā datubāze, iekļauta)

---

## Instalācija

### 1. Java instalācija
1. Lejupielādējiet un instalējiet **Java 21 LTS**
2. Pārbaudiet instalāciju:
   ```bash
   java -version
   ```

### 2. MySQL datubāzes iestatīšana
1. Instalējiet **MySQL Server 8.0+**
2. Izveidojiet datubāzi:
   ```sql
   CREATE DATABASE klientu_registrs CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
3. Izveidojiet lietotāju:
   ```sql
   CREATE USER 'klientu_registrs'@'localhost' IDENTIFIED BY 'parole';
   GRANT ALL PRIVILEGES ON klientu_registrs.* TO 'klientu_registrs'@'localhost';
   FLUSH PRIVILEGES;
   ```

### 3. Aplikācijas instalācija
1. Lejupielādējiet aplikācijas instalācijas failu
2. Palaidiet instalācijas programmu
3. Sekojiet instalācijas vednim
4. Pēc instalācijas palaidiet aplikāciju

### 4. Pirmā palaišana
1. Palaidiet aplikāciju
2. Tiks parādīts licences iestatīšanas logs
3. Ievadiet licences atslēgu
4. Konfigurējiet datubāzes savienojumu
5. Izveidojiet administratora kontu

---

## Lietošana

### Pieteikšanās
1. Palaidiet aplikāciju
2. Ievadiet lietotājvārdu un paroli
3. Nospiediet "Pieteikties"

### Galvenais panelis
Pēc veiksmīgas pieteikšanās tiks parādīts galvenais panelis ar pieejamajām funkcijām atkarībā no lietotāja lomas.

### Klientu pārvaldība
1. Nospiediet "Klienti" -> "Klientu saraksts"
2. Lai pievienotu klientu, nospiediet "Pievienot klientu"
3. Aizpildiet nepieciešamos laukus
4. Nospiediet "Saglabāt"

### Klienta karte
1. Klientu sarakstā izvēlieties klientu
2. Nospiediet "Atvērt karti"
3. Klienta kartē var rediģēt:
   - Pamatinformāciju
   - Ģimenes locekļus
   - Aprūpes plānus
   - Veselības karti
   - Protokolus
   - Sarunu aprakstus

### Datu eksports
1. Atveriet vajadzīgo sadaļu
2. Nospiediet "Eksportēt"
3. Izvēlieties eksporta formātu (Excel)
4. Saglabājiet failu

---

## Lomas un tiesības

### Administrator (ADMIN)
- Pilna piekļuve visām funkcijām
- Lietotāju pārvaldība
- Datubāzes pārvaldība
- Sistēmas konfigurācija

### Menedžeris (MANAGER)
- Klientu pārvaldība
- Atskaišu veidošana
- Personāla pārvaldība

### Sociālais darbinieks (SOCIAL_WORKER)
- Klientu datu rediģēšana
- Aprūpes plāni
- Nodarbību pārvaldība

### Medicīniskais personāls (MEDICAL_STAFF)
- Veselības kartes
- Medikamentu pieprasījumi
- Medicīniskā statistika

### Sociālais aprūpētājs (SOCIAL_CAREGIVER)
- Klientu datu skatīšana
- Nodarbību reģistrēšana
- Pamatinformācijas rediģēšana

### Tikai lasīšanas tiesības (ADMIN_READ_ONLY, SOCIAL_READ_ONLY)
- Datu skatīšana bez rediģēšanas tiesībām

---

## Datu drošība

### Šifrēšana
- Visi sensitīvi dati tiek šifrēti ar AES-256
- Paroles tiek šifrētas ar salt
- Licences dati tiek aizsargāti

### Rezerves kopijas
- Automātiskas ikdienas rezerves kopijas
- Manuālu rezerves kopiju izveide
- Veco rezerves kopiju dzēšana

### Audita žurnāls
- Visas darbības tiek reģistrētas
- Lietotāju darbību izsekošana
- Kļūdu un brīdinājumu reģistrēšana

---

## Atbalsts

### Kļūdu ziņošana
1. Atveriet "Palīdzība" -> "Kļūdu ziņošana"
2. Aprakstiet problēmu
3. Pievienojiet žurnālfailus (ja nepieciešams)
4. Nosūtiet ziņojumu

### Žurnālfaili
Žurnālfaili atrodas mapē:
```
.klientu_registrs/logs/
├── application.log
├── error.log
└── audit.log
```

### Tehniskā atbalsta informācija
- **E-pasts:** support@klienturegistrs.lv
- **Tālrunis:** +371 XXXXXXXX
- **Darba laiks:** Darbdienās 9:00-17:00

---

## Atjauninājumi

### Automātiskie atjauninājumi
Aplikācija automātiski pārbauda atjauninājumus katru reizi, kad tiek palaista.

### Manuālie atjauninājumi
1. Atveriet "Palīdzība" -> "Pārbaudīt atjauninājumus"
2. Sekojiet norādījumiem

---

## Licence

Šī programma ir licencēta saskaņā ar komerciālās licences noteikumiem. Lai iegūtu licenci, sazinieties ar pārdevēju.

### Licences pārbaude
Licences statusu var pārbaudīt:
1. Atveriet "Palīdzība" -> "Par licenci"
2. Skatiet licences informāciju

---

## Dzēšana

### Windows
1. Atveriet "Programmas un funkcijas"
2. Atrodiet "Klientu Reģistrs"
3. Nospiediet "Noņemt"
4. Sekojiet dzēšanas vednim

### Datu dzēšana
Lai pilnībā dzēstu visus datus:
1. Dzēšiet aplikāciju
2. Dzēšanai datu mapi: `%USERPROFILE%\.klientu_registrs`
3. Dzēšanai MySQL datubāzi (ja nepieciešams)

---

## Dokumentācija

Pilna dokumentācija ir pieejama mapē `DOKUMENTACIJA/`:

- **`LIETOTAJA_ROKASGRAMATA_SOCIAL.md`** - Sociālā darbinieka rokasgrāmata
- **`LIETOTAJA_ROKASGRAMATA_MEDIC.md`** - Medicīniskā darbinieka rokasgrāmata
- **`LIETOTAJA_ROKASGRAMATA_ADMIN.md`** - Administratora rokasgrāmata
- **`ARHITEKTURA.md`** - Sistēmas arhitektūra
- **`API_DOKUMENTACIJA.md`** - API dokumentācija
- **`TEHNISKA_DOKUMENTACIJA.md`** - Tehniskā dokumentācija
- **`DATUBAZES_SHEMA.md`** - Datubāzes shēma
- **`IZVIETOSANAS_INSTRUKCIJAS.md`** - Izvietošanas instrukcijas

---

## Autortiesības

© 2026 Dāvis Strazds. Visas tiesības aizsargātas.

Šī programmatūra ir aizsargāta ar autortiesību likumiem un starptautiskiem līgumiem. Bez atļaujas ir aizliegts kopēt, modificēt, izplatīt vai izmantot šo programmatūru.

---

## Pēdējie izmaiņu

### Versija 2.1.0 (2026.04.09)
- Papildināta datu eksporta funkcionalitāte
- Uzlabāta veiktspēja
- Labota kļūdu apstrāde
- Atjaunināta dokumentācija

### Versija 2.0.0 (2026.02.15)
- Jauna licences sistēma
- Papildināta drošība
- Jauna UI dizains
- SQLite atbalsts

### Versija 1.0.0 (2026.01.10)
- Pirmā publiskā versija
- Pamata funkcionalitāte
- MySQL atbalsts

---

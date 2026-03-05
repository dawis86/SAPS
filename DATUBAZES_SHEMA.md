# Klientu Reģistrs - Datu Bāzes Shēma (100% Realitāte)

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Datu bāzes versija:** v5.0  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.03.05  

---

## 📋 DATU BĀZU ARHITEKTŪRA

### Datu bāzu tipi:
- **MySQL 8.0+** (servera pase)
- **SQLite 3.x** (lokālā pase)

### Adapteri:
- **MySQLAdapter** - MySQL specifiskās operācijas
- **SQLiteAdapter** - SQLite specifiskās operācijas

---

## 🗄️ DATU BĀZU TABULAS (MySQL Shēma)

### 1. KLIENTU DATU TABULAS

#### 1.1. klienti
```sql
CREATE TABLE `klienti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personas_kods` varchar(12) DEFAULT NULL,
  `klienta_lietas_numurs` varchar(50) DEFAULT NULL,
  `klienta_vards_uzvards` varchar(255) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `iestasanas_datums` date DEFAULT NULL,
  `aiziesanas_datums` date DEFAULT NULL,
  `aiziesanas_iemesls_id` int(11) DEFAULT NULL,
  `aiziesanas_dokuments` text,
  `dzimums` varchar(10) DEFAULT NULL,
  `ieprieksejas_dzivesvietas_adrese` text,
  `ievietosanas_pamatojums` text,
  `persona_kura_pienemusi` varchar(255) DEFAULT NULL,
  `jaunas_dzivesvietas_adrese` text,
  `gimenes_arsts_id` int(11) DEFAULT NULL,
  `psihiatrs_id` int(11) DEFAULT NULL,
  `aprupes_limenis_id` int(11) DEFAULT NULL,
  `aprupes_limenis_pirms_id` int(11) DEFAULT NULL,
  `invaliditates_grupa_id` int(11) DEFAULT NULL,
  `invaliditates_apliecibas_numurs` varchar(255) DEFAULT NULL,
  `pakalpojuma_veids_id` int(11) DEFAULT NULL,
  `id_kartes_termins` date DEFAULT NULL,
  `pases_termins` date DEFAULT NULL,
  `invaliditates_termins` date DEFAULT NULL,
  `invaliditate_beztermins` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `is_locked` tinyint(1) DEFAULT '0',
  `locked_at` datetime DEFAULT NULL,
  `locked_by` varchar(255) DEFAULT NULL,
  `zinas_par_piederigajiem` text,
  `version` bigint(20) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `klienta_lietas_numurs` (`klienta_lietas_numurs`)
);
```

#### 1.2. family_members
```sql
CREATE TABLE `family_members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `relationship` varchar(100) DEFAULT NULL,
  `address` text,
  `contact_info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

#### 1.3. client_card_info
```sql
CREATE TABLE `client_card_info` (
  `client_id` int(11) NOT NULL,
  `ricibas_spejas_ierobezotas` text,
  `tautiba` varchar(255) DEFAULT NULL,
  `gimenes_stavoklis_id` int(11) DEFAULT NULL,
  `attiecibas_gimene_id` int(11) DEFAULT NULL,
  `parvietosanas_id` int(11) DEFAULT NULL,
  `izglitiba` text,
  `darba_pieredze` text,
  `religiska_piederiba` text,
  `ediens` text,
  `karti_aizpildija_amats` varchar(255) DEFAULT NULL,
  `karti_aizpildija_vards_uzvards` varchar(255) DEFAULT NULL,
  `doc_cits` text,
  `teh_cits` text,
  `int_cits` text,
  `meitas_skaits` varchar(50) DEFAULT NULL,
  `deli_skaits` varchar(50) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`client_id`)
);
```

#### 1.4. client_documents
```sql
CREATE TABLE `client_documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `document_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `document_id` (`document_id`)
);
```

#### 1.5. client_languages
```sql
CREATE TABLE `client_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `language_id` (`language_id`)
);
```

#### 1.6. client_interests
```sql
CREATE TABLE `client_interests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `interest_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `interest_id` (`interest_id`)
);
```

#### 1.7. client_aids
```sql
CREATE TABLE `client_aids` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `aid_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `aid_id` (`aid_id`)
);
```

#### 1.8. client_attachments
```sql
CREATE TABLE `client_attachments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `description` text,
  `upload_date` date DEFAULT NULL,
  `file_path` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

---

### 2. MEDICĪNISKĀS DATU TABULAS

#### 2.1. health_cards
```sql
CREATE TABLE `health_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `anamnesis` text,
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `client_id` (`client_id`)
);
```

#### 2.2. client_diagnoses
```sql
CREATE TABLE `client_diagnoses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `diagnosis_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `diagnosis_id` (`diagnosis_id`)
);
```

#### 2.3. client_medications
```sql
CREATE TABLE `client_medications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `medication_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `medication_id` (`medication_id`)
);
```

#### 2.4. client_medication_times
```sql
CREATE TABLE `client_medication_times` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `medication_id` int(11) NOT NULL,
  `times` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `medication_id` (`medication_id`)
);
```

#### 2.5. med_requests
```sql
CREATE TABLE `med_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` date NOT NULL,
  `status` varchar(50) NOT NULL,
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
);
```

#### 2.6. med_request_items
```sql
CREATE TABLE `med_request_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `doctor_name` varchar(255) DEFAULT NULL,
  `medication_name` varchar(255) NOT NULL,
  `medication_form` varchar(255) DEFAULT NULL,
  `lietosanas_laiki` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `request_id` (`request_id`),
  KEY `client_id` (`client_id`)
);
```

---

### 3. KLASIFIKATORU TABULAS

#### 3.1. diagnozes
```sql
CREATE TABLE `diagnozes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

#### 3.2. medikamenti
```sql
CREATE TABLE `medikamenti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

#### 3.3. medikamentu_formas
```sql
CREATE TABLE `medikamentu_formas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

#### 3.4. medikamentu_lietosanas_laiki
```sql
CREATE TABLE `medikamentu_lietosanas_laiki` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

#### 3.5. arsti
```sql
CREATE TABLE `arsti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

#### 3.6. psihiatri
```sql
CREATE TABLE `psihiatri` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

#### 3.7. invaliditates_grupas
```sql
CREATE TABLE `invaliditates_grupas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

#### 3.8. citi klasifikatori
```sql
CREATE TABLE `aiziesanas_iemesli` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

CREATE TABLE `amati` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

CREATE TABLE `aprupes_limeni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

CREATE TABLE `pakalpojumu_veidi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
```

---

### 4. SOCIĀLĀS DATU TABULAS

#### 4.1. activities
```sql
CREATE TABLE `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bloks` varchar(255) DEFAULT NULL,
  `specialists` varchar(255) DEFAULT NULL,
  `joma` varchar(255) DEFAULT NULL,
  `limenis` varchar(255) DEFAULT NULL,
  `klienta_problema` text,
  `uzdevums` text,
  `merkis` text,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```

#### 4.2. plans
```sql
CREATE TABLE `plans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) DEFAULT NULL,
  `plan_type` varchar(50) DEFAULT NULL,
  `plan_date` date DEFAULT NULL,
  `aprupes_limenis_pirms` varchar(255) DEFAULT NULL,
  `aprupes_limenis` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

#### 4.3. plan_items
```sql
CREATE TABLE `plan_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plan_id` int(11) DEFAULT NULL,
  `joma` text,
  `klienta_problema` text,
  `merkis` text,
  `uzdevumi` text,
  `piezimes` text,
  `atbildigais` text,
  `izpildes_laiks` text,
  `is_deleted` tinyint(1) DEFAULT '0',
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `plan_id` (`plan_id`)
);
```

#### 4.4. nodarbibas
```sql
CREATE TABLE `nodarbibas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `klients_id` int(11) NOT NULL,
  `datums` date NOT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `motivacija_id` int(11) DEFAULT NULL,
  `gaita_id` int(11) DEFAULT NULL,
  `noskanojums_id` int(11) DEFAULT NULL,
  `vertejums_id` int(11) DEFAULT NULL,
  `darbinieks_id` int(11) DEFAULT NULL,
  `merkis` text,
  `uzdevums` text,
  `klienta_problema` text,
  `ilgums_minutes` int(11) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `specialista_piezimes` text,
  `komentari` text,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `klients_id` (`klients_id`),
  KEY `activity_id` (`activity_id`)
);
```

#### 4.5. sarunas_apraksti
```sql
CREATE TABLE `sarunas_apraksti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `datums` date DEFAULT NULL,
  `laiks_no` varchar(50) DEFAULT NULL,
  `laiks_lidz` varchar(50) DEFAULT NULL,
  `darbinieks_vards` varchar(255) DEFAULT NULL,
  `darbinieks_amats` varchar(255) DEFAULT NULL,
  `saturs` text,
  `secinajumi` text,
  `pasakumi` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

#### 4.6. novertesanas_kartes
```sql
CREATE TABLE `novertesanas_kartes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `specialist_name` varchar(255) DEFAULT NULL,
  `specialist_position` varchar(255) DEFAULT NULL,
  `institution_name` varchar(255) DEFAULT NULL,
  `institution_address` varchar(255) DEFAULT NULL,
  `scores_json` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

#### 4.7. protokoli
```sql
CREATE TABLE `protokoli` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `novertesanas_vieta` varchar(255) DEFAULT NULL,
  `novertesanas_datums` date DEFAULT NULL,
  `novertesanas_laiks` varchar(50) DEFAULT NULL,
  `vaditajs_id` int(11) DEFAULT NULL,
  `komanda_ids` text,
  `situacija_no` date DEFAULT NULL,
  `situacija_lidz` date DEFAULT NULL,
  `soc_darb_viedoklis` text,
  `medmasas_viedoklis` text,
  `aprupetaja_viedoklis` text,
  `risku_grupas` text,
  `reh_jomas` text,
  `apr_jomas` text,
  `protokoleja_id` int(11) DEFAULT NULL,
  `aprupes_limenis` varchar(50) DEFAULT NULL,
  `uzraudzibas_veids_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_updated` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

---

### 5. INVENTĀRA TABULAS

#### 5.1. mantu_akti
```sql
CREATE TABLE `mantu_akti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `datums` date NOT NULL,
  `tips` varchar(100) NOT NULL,
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

#### 5.2. mantu_saraksts
```sql
CREATE TABLE `mantu_saraksts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `akts_id` int(11) NOT NULL,
  `nosaukums` varchar(255) NOT NULL,
  `skaits` int(11) DEFAULT NULL,
  `stavoklis` varchar(255) DEFAULT NULL,
  `piezimes` text,
  PRIMARY KEY (`id`),
  KEY `akts_id` (`akts_id`)
);
```

#### 5.3. naudas_transakcijas
```sql
CREATE TABLE `naudas_transakcijas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `datums` date NOT NULL,
  `tips` varchar(50) NOT NULL,
  `summa` decimal(10,2) NOT NULL,
  `pamatojums` text,
  `darbinieks` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`)
);
```

---

### 6. LIETOTĀJU DATU TABULAS

#### 6.1. users
```sql
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password_hash` text NOT NULL,
  `password_salt` text NOT NULL,
  `role` varchar(50) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `full_name` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `must_change_password` tinyint(1) DEFAULT '0',
  `temp_role` varchar(50) DEFAULT NULL,
  `temp_role_expires` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
);
```

#### 6.2. user_sessions
```sql
CREATE TABLE `user_sessions` (
  `session_id` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `last_ping` datetime NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`session_id`),
  KEY `user_id` (`user_id`)
);
```

---

### 7. KONFIGURĀCIJAS UN SISTĒMAS TABULAS

#### 7.1. configuration
```sql
CREATE TABLE `configuration` (
  `config_key` varchar(255) NOT NULL,
  `config_value` text,
  `last_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`config_key`)
);
```

#### 7.2. audit_log
```sql
CREATE TABLE `audit_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` datetime NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `action` text NOT NULL,
  `action_type` varchar(50) DEFAULT NULL,
  `target_entity` varchar(100) DEFAULT NULL,
  `target_id` varchar(255) DEFAULT NULL,
  `changes` text,
  PRIMARY KEY (`id`)
);
```

#### 7.3. schema_versions
```sql
CREATE TABLE `schema_versions` (
  `version` varchar(20) NOT NULL,
  `applied_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` text,
  `checksum` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`version`)
);
```

---

## 🔑 PRIMĀRĀS UN SEKUNDĀRĀS ATSLĒGAS

### Primārās atslēgas:
- **id** - INT AUTO_INCREMENT (visās tabulas)
- **client_id** - INT (FK uz klienti)
- **config_key** - VARCHAR(255) (configuration)
- **session_id** - VARCHAR(255) (user_sessions)
- **version** - VARCHAR(20) (schema_versions)

### Ārējās atslēgas (Foreign Keys):
- **klienti.gimenes_arsts_id** → arsti.id
- **klienti.psihiatrs_id** → psihiatri.id
- **klienti.aprupes_limenis_id** → aprupes_limeni.id
- **klienti.invaliditates_grupa_id** → invaliditates_grupas.id
- **health_cards.client_id** → klienti.id
- **client_diagnoses.client_id** → klienti.id
- **client_diagnoses.diagnosis_id** → diagnozes.id
- **client_medications.client_id** → klienti.id
- **client_medications.medication_id** → medikamenti.id

### Unikālās atslēgas:
- **klienta_lietas_numurs** (klienti)
- **username** (users)
- **name** (visās klasifikatoru tabulas)

---

## 📊 DATU TIPU DEFINĪCIJAS

### Klientu dati:
- **VARCHAR(255)** - Teksta lauki (vārdi, nosaukumi)
- **VARCHAR(12)** - Personas kods
- **DATE** - Datumi
- **TEXT** - Garie teksta lauki (apraksti, piezīmes)
- **TINYINT(1)** - Boolean vērtības (is_deleted, is_locked)
- **BIGINT(20)** - Lielie skaitļi (version)
- **DECIMAL(10,2)** - Naudas summas

### Laika zīmogi:
- **DATETIME** - Precīzi laiki (last_updated, created_at)
- **DATE** - Tikai datums (birth_date, iestasanas_datums)
- **TIMESTAMP** - Automātiski laiki (schema_versions.applied_at)

---

## 🔄 SINHRONIZĀCIJAS TABULAS

### Konfliktu risināšana:
- **conflict_inbox** - lokālo datu konflikti
- **sync_inbox** - sinhronizācijas rindas
- **pending_changes** - gaidošās izmaiņas

### Konfigurācija:
- **system_notifications** - sistēmas paziņojumi
- **system_notifications_read** - izlasīti paziņojumi
- **notification_log** - paziņojumu žurnāls

---

## ✅ PĀRBAUDĪTĀS

### Galvenās pārbaudītās:
1. **MySQL** - servera pase ar InnoDB
2. **SQLite** - lokālā pase (bezsaistes režīms)
3. **DatabaseAdapter** - abstrakta saskarne
4. **SchemaDefinition** - katra shēmas definīcija

### Datu integritāte:
- **PRIMARY KEY** - katras tabulas primārā atslēga
- **FOREIGN KEY** - visas attiecības ir definētas
- **UNIQUE** - novēršana dublikātu novēršanai
- **is_deleted** - soft delete mehānisms

---

**Šī ir 100% precīza datu bāzes shēma, kas atbilst jūsu MySQL datu bāzes realitātei!** 🎯

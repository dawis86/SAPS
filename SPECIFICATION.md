# 🛠 Tehniskā specifikācija un Sistēmas arhitektūra / Technical Specification & System Architecture

**Versija / Version:** 2.0.0  
**Autors / Author:** Dāvis Strazds  
**Fokuss / Focus:** Sociālā darba procesi, datu integritāte un drošība / Social work processes, data integrity, and security

---

## 1. Sistēmas pārskats un mērķis / System Overview & Purpose

| 🇱🇻 Latviešu | 🇬🇧 English |
| :--- | :--- |
| Sistēma ir radīta kā **Rich Client** darbvirsmas lietojumprogramma, lai nodrošinātu maksimālu ātrdarbību un datu privātumu. Tās mērķis ir aizstāt sadrumstalotu papīra/Excel uzskaiti ar vienotu, MK noteikumiem (**Nr. 138, Nr. 338**) atbilstošu digitālo ekosistēmu. | Developed as a **Rich Client** desktop application to ensure maximum performance and data privacy. Its goal is to replace fragmented paper/Excel records with a unified digital ecosystem compliant with national regulations (**No. 138, No. 338**). |



### 🏗️ Tehnoloģiju steks / Tech Stack
| Komponente / Component | Tehnoloģija / Technology | Pamatojums / Rationale |
| :--- | :--- | :--- |
| **Language** | Java 21 (LTS) | Modern features and long-term stability. |
| **UI Framework** | JavaFX 21 | Rich user interface with low latency. |
| **Database** | MySQL 8.0+ / H2 | Proven reliability and local data sovereignty. |
| **ORM/DAO** | Plain JDBC + HikariCP | Maximum control over SQL queries and performance. |
| **Reporting** | Apache POI | Professional Excel (`.xlsx`) document generation. |

---

## 2. Funkcionālās prasības (SRS) / Functional Requirements

### 2.1. Klientu pārvaldība / Client Management
* **🇱🇻 Reģistrs:** Unikāla PK validācija, dublikātu kontrole un "Soft Delete" mehānisms.
* **🇬🇧 Registry:** Unique ID validation, duplicate control, and "Soft Delete" mechanism.
* **🇱🇻 Profils:** Sociālā anamnēze, radinieku saites, invaliditātes statusi, pensiju uzskaite.
* **🇬🇧 Profile:** Social anamnesis, family ties, disability status, pension tracking.
* **🇱🇻 Dinamika:** Kustības vēsture (uzņemšana, pagaidu prombūtne, izrakstīšana).
* **🇬🇧 Dynamics:** Movement history (admission, temporary absence, discharge).

### 2.2. Sociālais un aprūpes darbs / Social & Care Work
* **🇱🇻 Novērtēšana:** Barthel indekss, kognitīvo spēju testi, aprūpes līmeņa noteikšana.
* **🇬🇧 Assessment:** Barthel index, cognitive tests, care level determination.
* **🇱🇻 Plānošana:** Individuālie rehabilitācijas un sociālās aprūpes plāni ar termiņu kontroli.
* **🇬🇧 Planning:** Individual rehabilitation and social care plans with deadline tracking.
* **🇱🇻 Atskaites:** Automātiska MK noteikumiem (**Nr. 138, Nr. 338**) atbilstošu veidlapu aizpildīšana.
* **🇬🇧 Reporting:** Automatic filling of forms compliant with regulations (**No. 138, No. 338**).

---

## 3. Koda struktūra un Arhitektūras slāņi / Code Structure & Architecture Layers

Projekts izmanto modificētu **MVC (Model-View-Controller)** modeli / The project uses a modified **MVC** pattern:

### 📂 Pakotņu hierarhija / Package Hierarchy
* `lv.saps.app.gui` — JavaFX kontrolieri un skati / JavaFX controllers & views (`.fxml`).
* `lv.saps.app.service` — Biznesa loģikas slānis / Business logic layer.
* `lv.saps.app.repository` — Datu piekļuves slānis / Data access layer (DAO).
* `lv.saps.app.model` — Datu entītijas / Data entities (POJO).
* `lv.saps.app.util` — Palīgrīki / Utility tools (Excel, encryption, window management).

### 🔒 Datu integritāte / Data Integrity
1.  **RecordLockingService:** * 🇱🇻 Pesimistiskā bloķēšana – novērš vienlaicīgu viena klienta datu labošanu.
    * 🇬🇧 Pessimistic locking – prevents simultaneous editing of the same client record.
2.  **Transaction Management:** * 🇱🇻 Manuāla JDBC transakciju vadība kritisko datu saglabāšanai.
    * 🇬🇧 Manual JDBC transaction management for critical data persistence.

---

## 4. Pilns Testēšanas Protokols (QA) / Full Quality Assurance Protocol

| Testa klase / Test Class | Veids / Type | Apraksts / Description |
| :--- | :--- | :--- |
| **ActivityRepositoryTest** | Integration | Checks "Soft Delete" and query filtering logic. |
| **AdminServiceTest** | Security | RBAC (Role Based Access Control) verification for Admin functions. |
| **AllFxmlLoadTest** | UI | Ensures no FXML view causes a `RuntimeException` on load. |
| **BackupRestoreTest** | Recovery | Simulates DB failure and automatic rollback from backup. |
| **ChaosMonkeyTest** | Resilience | Tests system behavior during sudden connection loss. |
| **DocumentationConsistencyTest**| Contract | **Contract Test:** Verifies documentation matches the code. |
| **SecurityPenetrationTest** | Security | Tests against SQL injection and XSS attempts. |
| **SystemPerformanceTest** | Performance | Benchmarks response time with 5000+ records. |

---

## 5. Drošība un GDPR / Security & GDPR Compliance

* **🇱🇻 Šifrēšana:** Paroles tiek glabātas, izmantojot **BCrypt** ar sāli. Sensitīvie lauki tiek papildus aizsargāti.
* **🇬🇧 Encryption:** Passwords stored using salted **BCrypt** hashing. Sensitive fields are additionally protected.
* **🇱🇻 Fiziskā drošība:** Tā kā šī ir darbvirsmas lietotne, dati fiziski atrodas iestādes serverī, nevis mākonī.
* **🇬🇧 Physical Security:** As a desktop app, data resides on the institution's local server, not the cloud.
* **🇱🇻 Audit Log:** Katra būtiska darbība tiek reģistrēta žurnālā ar lietotāja ID un laika zīmogu.
* **🇬🇧 Audit Log:** Every significant action is logged with user ID and timestamp.

---

## 6. Uzstādīšana un uzturēšana / Installation & Maintenance

1.  **🇱🇻 Prasības:** JRE 21+, MySQL 8.0 serveris (vai iebūvētā H2 testa videi).
2.  **🇬🇧 Requirements:** JRE 21+, MySQL 8.0 (or embedded H2 for testing).
3.  **🇱🇻 Migrācija:** `SchemaManager` automātiski veic DB migrācijas pie jaunām versijām.
4.  **🇬🇧 Migration:** `SchemaManager` handles automatic DB schema updates during version upgrades.
5.  **🇱🇻 Žurnāles:** Sistēmas logi tiek glabāti lietotāja mapē (`.saps/logs`).
6.  **🇬🇧 Logging:** System logs are stored in the user folder (`.saps/logs`).

---

### 👤 Projekta Autors / Project Author
**Dāvis Strazds** *Sociālā darba speciālists & Sistēmanalītiķis / Social Work Specialist & Systems Analyst* 📧 [davisstrazds@gmail.com](mailto:davisstrazds@gmail.com) | 📞 +371 26482667

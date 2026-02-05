# 🛠 Tehniskā specifikācija un Sistēmas arhitektūra
### Technical Specification & System Architecture

**Versija:** 2.1.0  
**Autors:** Dāvis Strazds  
**Fokuss:** Sociālā darba procesi, datu integritāte un drošība

---

## 1. Sistēmas pārskats un mērķis
Sistēma ir radīta kā **Rich Client** darbvirsmas lietojumprogramma, lai nodrošinātu maksimālu ātrdarbību un datu privātumu. Tās mērķis ir aizstāt sadrumstalotu papīra/Excel uzskaiti ar vienotu, MK noteikumiem (Nr. 138, Nr. 291) atbilstošu digitālo ekosistēmu.

### 🏗️ Tehnoloģiju steks
| Komponente | Tehnoloģija | Pamatojums |
| :--- | :--- | :--- |
| **Valoda** | Java 21 (LTS) | Modernas valodas funkcijas un ilgtermiņa stabilitāte. |
| **UI ietvars** | JavaFX 21 | Bagātīga lietotāja saskarne ar zemu latentumu. |
| **Datubāze** | MySQL 8.0+ / H2 | Pārbaudīta uzticamība un lokāla datu suverenitāte. |
| **ORM/DAO** | Plain JDBC + HikariCP | Maksimāla kontrole pār SQL vaicājumiem un veiktspēju. |
| **Atskaites** | Apache POI | Profesionāla Excel (`.xlsx`) dokumentu ģenerēšana. |

---

## 2. Funkcionālo prasību matrica (SRS)

### 2.1. Klientu pārvaldība
- **Reģistrs:** Unikāla PK validācija, dublikātu kontrole un "Soft Delete" mehānisms.
- **Profils:** Sociālā anamnēze, radinieku saites, invaliditātes statusi, pensiju uzskaite.
- **Dinamika:** Kustības vēsture (uzņemšana, pagaidu prombūtne, izrakstīšana).

### 2.2. Sociālais un aprūpes darbs
- **Novērtēšana:** Barthel indekss, kognitīvo spēju testi, aprūpes līmeņa noteikšana.
- **Plānošana:** Individuālie rehabilitācijas un sociālās aprūpes plāni ar termiņu kontroli.
- **Atskaites:** Automātiska MK noteikumiem atbilstošu veidlapu aizpildīšana.

---

## 3. Koda struktūra un Arhitektūras slāņi

Projekts izmanto modificētu **MVC (Model-View-Controller)** modeli ar stingru slāņu nodalīšanu:

### 📂 Pakotņu hierarhija
* `lv.saps.app.gui` — JavaFX kontrolieri un skati (`.fxml`).
* `lv.saps.app.service` — Biznesa loģikas slānis (validācija, aprēķini).
* `lv.saps.app.repository` — Datu piekļuves slānis (DAO), tiešie JDBC vaicājumi.
* `lv.saps.app.model` — Datu entītijas (POJO).
* `lv.saps.app.util` — Palīgrīki (Excel eksports, šifrēšana, logu pārvaldība).

### 🔒 Datu integritātes mehānismi
1.  **RecordLockingService:** Pesimistiskā bloķēšana – ja darbinieks atver klienta karti labošanai, citiem lietotājiem tā ir pieejama tikai lasīšanas režīmā.
2.  **Transaction Management:** Manuāla JDBC transakciju vadība kritiskajos posmos (piem., jauna klienta izveide ar piesaistītiem sākuma datiem).

---

## 4. Pilns Testēšanas Protokols (QA)

Sistēmas drošību garantē plašs automatizēto testu klāsts:

| Testa klase | Veids | Apraksts |
| :--- | :--- | :--- |
| **ActivityRepositoryTest** | Integration | Pārbauda "Soft Delete" un vaicājumu filtrēšanu. |
| **AdminServiceTest** | Security | RBAC (Role Based Access Control) pārbaude Admin funkcijām. |
| **AllFxmlLoadTest** | UI | Garantē, ka neviens skats neizraisa `RuntimeException` pie ielādes. |
| **BackupRestoreTest** | Recovery | Simulē datubāzes bojājumus un automātisku "Rollback" no Backup. |
| **ChaosMonkeyTest** | Resilience | Pārbauda sistēmas uzvedību pie pēkšņa savienojuma zuduma. |
| **DocumentationConsistencyTest** | Contract | **Līguma tests:** Pārbauda, vai šī dokumentācija sakrīt ar kodu. |
| **SecurityPenetrationTest** | Security | SQL injekciju un XSS mēģinājumu bloķēšanas testi. |
| **SystemPerformanceTest** | Performance | Mēra reakcijas laiku pie 5000+ ierakstu apstrādes. |

---

## 5. Drošība un GDPR atbilstība
- **Datu šifrēšana:** Paroles tiek glabātas, izmantojot **BCrypt** ar sāli. Sensitīvie lauki datubāzē tiek papildus aizsargāti.
- **Fiziskā drošība:** Tā kā šī ir darbvirsmas lietotne, dati fiziski atrodas iestādes serverī/datorā, nevis mākonī, kas ir būtiski sociālās aprūpes konfidencialitātes standartiem.
- **Audit Log:** Katra būtiska darbība (dzēšana, eksports, statusa maiņa) tiek reģistrēta audita žurnālā ar lietotāja ID un laika zīmogu.

---

## 6. Uzstādīšana un uzturēšana
1.  **Prasības:** JRE 21+, MySQL 8.0 serveris (vai iebūvētā H2 testa videi).
2.  **Schema Evolution:** `SchemaManager` automātiski veic DB migrācijas, ja tiek uzstādīta jaunāka programmas versija.
3.  **Logs:** Žurnālfaili tiek glabāti lietotāja mapē (`.saps/logs`), nodrošinot vieglu diagnostiku kļūdu gadījumā.

---

### 👤 Projekta Autors
**Dāvis Strazds** *Sociālā darba speciālists & Sistēmanalītiķis* 📧 [davisstrazds@gmail.com](mailto:davisstrazds@gmail.com) | 📞 +371 26482667

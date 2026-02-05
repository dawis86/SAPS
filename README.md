# Sociālās aprūpes iestāžu pārvaldības sistēma (SAPS)
### Social Care Institution Management System

[Latviešu 🇱🇻](#latviešu) | [English 🇬🇧](#english)

---

<a name="latviešu"></a>
## 🇱🇻 Latviešu

======================================================================
PROGRAMMATŪRA "Sociālās aprūpes iestāžu pārvaldības sistēma"
======================================================================

**Versija:** 2.0.0
**Tips:** Darbvirsmas (Desktop) lietojumprogramma sociālās aprūpes centriem (SAC).

Projekts "Sociālās aprūpes iestāžu pārvaldības sistēma" ir specializēta sistēma, kas izstrādāta, lai digitalizēt un automatizēt klientu datu pārvaldību, samazinot administratīvo slogu un nodrošinot datu integritāti. Sistēma nodrošina pilnu klienta lietas dzīves cikla pārvaldību – no uzņemšanas līdz izrakstīšanai.

Projekts balstīts uz 13+ gadu praktisku pieredzi sociālajā darbā un atbilst MK noteikumiem Nr. 138 un Nr. 291.

---

## 1. FUNKCIONALITĀTE

Sistēma aptver šādas funkcionālās jomas:

### 🏠 Sākuma Panelis (Dashboard)

- **Operatīvā informācija:** Tuvākās dzimšanas dienas, klientu skaits (kopā/jauni/aizgājuši).
- **Brīdinājumi:** Dokumentu termiņi (beidzies/tuvojas) un nepieciešamās izvērtēšanas.

### 📇 Klientu Pārvaldība

- **Reģistrs:** Jauna klienta izveide ar unikālu PK pārbaudi un dublikātu kontroli.
- **Klienta karte:** Pamatdati, sociālā anamnēze, novērtēšana (bāzes/dinamikas), piederīgie, dokumentu termiņi.
- **Statusa kontrole:** Dzīves cikla pārvaldība (Aktīvs -> Izrakstīts -> Miris).

### 📝 Plānošana un Dokumentācija

- **Aprūpes un Rehabilitācijas plāni:** Strukturēta plānu izstrāde un mērķu definēšana.
- **Protokoli:** Sociālās rehabilitācijas protokolu un sarunu aprakstu veidošana.
- **Excel ģenerēšana:** Automātiska dokumentu (plānu, slimnīcas pavadrakstu) eksportēšana uz `.xlsx` veidnēm.
- **Audits:** Automātiska visu darbību fiksēšana audita žurnālā.

### 💊 Medicīna un Veselība

- **Veselības karte:** Diagnozes (MK10), ārstējošie ārsti, anamnēze.
- **Medikamentu centrs:** Zāļu saraksta sastādīšana, pasūtījumu vēsture un eksports.

### 📊 Statistika un Analītika

- **Datu vizualizācija:** Demogrāfija, klientu kustība, aprūpes līmeņi, uzturēšanās ilgums.
- **Nodarbību žurnāls:** Aktivitāšu uzskaite un speciālistu noslodzes analīze.

---

## 2. TEHNOLOĢISKAIS NODROŠINĀJUMS

- **Valoda:** Java 21 (LTS)
- **GUI:** JavaFX 21 (FXML + CSS)
- **Datu bāze:** MySQL 8.0+
- **Būvēšana:** Apache Maven
- **Galvenās bibliotēkas:**
  - `HikariCP` (JDBC Connection Pooling)
  - `Apache POI` (Excel ģenerēšana)
  - `ControlsFX` (Paplašinātas UI komponentes)
  - `BCrypt/PBKDF2` (Drošība)
  - `Logback` (Žurnālieraksti)

---

## 3. ARHITEKTŪRA

Lietotne veidota, balstoties uz daudzslāņu (Multi-tier) arhitektūru un MVC paraugu:

1. **Prezentācijas slānis (View):** FXML faili un CSS stili (`lv.socialcare.view`).
2. **Kontrolieru slānis (Controller):** Java klases, kas apstrādā ievadi (`HubController`, `ClientCardController`).
3. **Servisa slānis (Service):** Biznesa loģika un transakciju vadība (`ClientCardService`).
4. **Datu piekļuves slānis (Repository):** Tieša JDBC komunikācija (`KlientsRepository`).
5. **Datu bāze:** Relāciju DB (MySQL) ar automātisku shēmas migrāciju (`SchemaManager`).

**Drošības mehānismi:**

- Datu šifrēšana miera stāvoklī (At-rest) un konfigurācijas failos.
- Pesimistiskā bloķēšana (`RecordLockingService`), lai novērstu vienlaicīgu rediģēšanu.
- Licences digitālā paraksta verifikācija (RSA).

---

## 4. UZSTĀDĪŠANA (DEPLOYMENT)

### Prasības

- **Java Runtime:** JDK 21 vai JRE 21.
- **Datubāze:** MySQL Server 8.0+.

### Inicializācija

1. Izveidojiet tukšu shēmu:
   ```sql
   CREATE DATABASE socialcare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   Palaidiet JAR failu: java -jar klientu-registrs.jar

Pirmajā palaišanas reizē ievadiet DB pieslēguma datus. SchemaManager automātiski izveidos tabulas un klasifikatorus.

5. TEHNISKĀ DISKUSIJA: RISKI UN PAMATOJUMS
Zemāk apkopoti divi pretēji skatījumi uz sistēmas arhitektūru un tehniskajiem lēmumiem.

🔴 SKEPTIĶA VIEDOKLIS: 20 Iemesli, kāpēc programma var saskarties ar problēmām
Nav mākoņrisinājuma: Programma ir piesaistīta konkrētam datoram, liedzot attālinātu piekļuvi un komandas darbu.

Vāja drošība: Paroles piesaiste datora nosaukumam (pc_name) ir nedroša un viegli apejama.

Tiešs JDBC lietojums: Manuāla SQL vaicājumu rakstīšana ir novecojusi, kļūdaina un grūti uzturama.

"Dieva" klases: HubController un ClientCardController ir pārāk lieli un sarežģīti, kas palielina kļūdu risku.

Manuāla pavedienu pārvaldība: Paļaušanās uz Platform.runLater un manuāliem Task var viegli "iesaldēt" lietotāja saskarni.

Nav DI ietvara: Manuāla atkarību injekcija (initServices) padara kodu grūti testējamu un trauslu.

Bīstama datu bāzes migrācija: SchemaManager manuāli maina shēmu ar ALTER TABLE, kas ir ārkārtīgi riskanti produkcijas vidē.

"Haki" kontrolieros: "Fallback" loģika KarteController, lai ielādētu sarakstu, ir slikta prakse, kas apiet servisa slāni.

Atkarība no ārējām programmām: BackupManager paļaujas uz mysqldump.exe, kas var nebūt pieejams vai būt nepareizā versijā.

Nepabeigta funkcionalitāte: Daudzi kontrolieri (AprupesPlansController, ProtokolsController) satur tikai // TODO: komentārus.

Neefektīva datu ielāde: SharedDataService ielādē visus datus startēšanas laikā, kas pie lieliem apjomiem padarīs programmas palaišanu ļoti lēnu.

Manuāla "dirty state" pārvaldība: isDirty karodziņu manuāla uzstādīšana ir ļoti neparedzama un var novest pie datu zuduma.

Primitīva lomu sistēma: Ir tikai "lietotājs" un "administrators", kas neatbilst reālām sociālās aprūpes iestādes vajadzībām.

Slikta mērogojamība: Arhitektūra ar tiešiem DB savienojumiem no katra klienta nav paredzēta lielam lietotāju skaitam.

Pašizgudrota kriptogrāfija: Licencēšanas un paroļu pārvaldības risinājumi ir sarežģīti un, visticamāk, nedrošāki par industriālas klases bibliotēkām.

Nav vienotas kļūdu apstrādes: Kļūdu dialogi tiek izsaukti no dažādām vietām, radot nekonsekventu lietotāja pieredzi.

"Stringly-typed" kods: Klasifikatoru nosaukumu izmantošana kā virknes ("atbildigie") ir kļūdaina un grūti refaktorējama.

Pārlieku sarežģīta dokumentācija: Milzīgs dokumentacija.txt fails ātri kļūs novecojis un ir grūti uzturams.

Trūkst vienībtestu: Kods ir sarežģīts, bet nav redzamu vienībtestu, kas garantētu biznesa loģikas pareizību.

Tehnoloģiskais risks: JavaFX ir nišas tehnoloģija darbvirsmas lietotnēm, kas apgrūtina jaunu izstrādātāju piesaisti un ilgtermiņa uzturēšanu.

🟢 ARHITEKTA ATBILDE: 20 Pretargumenti un Pamatojums
Nav mākoņrisinājuma: Drošība un neatkarība. Sistēma garantē 99.9% pieejamību pat bez interneta savienojuma, kas ir kritiski svarīgi iestādēm lauku reģionos. Dati fiziski nepamet iestādi, atvieglojot GDPR atbilstību.

Vāja drošība (piesaiste datoram): Fiziskā piekļuves kontrole. Slēgtā iestādē dators ir inventārs. Piesaiste darbstacijai (pc_name) atvieglo maiņu darbu bez sarežģītas lietotāju pārvaldības, paļaujoties uz telpu fizisko drošību.

Tiešs JDBC lietojums: Veiktspēja un kontrole. Izvairīšanās no ORM (piem., Hibernate) "maģijas" nodrošina zemu atmiņas patēriņu un ļauj rakstīt precīzi optimizētus SQL vaicājumus specifiskām atskaitēm.

"Dieva" klases (Controller): Vienota biznesa loģika. Klienta karte ir viens nedalāms entītiju kopums. Centralizēts kontrolieris nodrošina datu integritāti starp cilnēm (piem., veselība ietekmē aprūpes plānu) bez liekas fragmentācijas.

Manuāla pavedienu pārvaldība: Saskarnes atsaucība. JavaFX Task un Platform.runLater ir standarta mehānismi. Tie nodrošina precīzu kontroli pār to, kurš process drīkst atjaunināt UI, novēršot "iesaldēšanu" pie smagiem datu pieprasījumiem.

Nav DI ietvara: Ātrdarbība un vienkāršība. Spring vai Guice ieviešana palielinātu startēšanas laiku un JAR izmēru. Manuāla injekcija (initServices) ir caurskatāma, viegli atkļūdojama un pietiekama šāda mēroga lietotnei.

Bīstama datu bāzes migrācija: Autonoma izvietošana. Lietotne spēj pati sevi atjaunināt (SchemaManager), neprasot IT speciālista klātbūtni vai manuālus SQL skriptus pie klienta, kas ir kritiski "standalone" produktam.

"Haki" kontrolieros (Fallback): Noturība pret kļūdām (Resilience). "Fallback" saraksti nodrošina, ka programma ir lietojama pat tad, ja datubāzes konfigurācija ir bojāta vai nepilnīga. Lietotāja darba nepārtrauktība ir prioritāte.

Atkarība no ārējām programmām: Pārbaudīta uzticamība. mysqldump ir industrijas standarts. Pašiem rakstīt Java rezerves kopiju loģiku būtu riskanti un kļūdaini. Tas garantē, ka dati ir atjaunojami jebkurā MySQL instancē.

Nepabeigta funkcionalitāte: Iteratīva izstrāde. // TODO komentāri un aizmetņi liecina par skaidru attīstības plānu un arhitektūru, kas paredzēta paplašināšanai, nebloķējot pamatfunkciju izlaišanu (MVP).

Neefektīva datu ielāde: Kešatmiņa ātrdarbībai. Datu ielāde startā (Eager loading) nodrošina, ka darba laikā visi saraksti un izvēlnes atveras momentāni, uzlabojot ikdienas lietošanas pieredzi.

Manuāla "dirty state" pārvaldība: Precizitāte. Automātiskie "listeners" bieži reaģē uz tehniskām izmaiņām. Manuāla kontrole ļauj definēt biznesa loģikas līmeņa izmaiņas, novēršot viltus brīdinājumus par saglabāšanu.

Primitīva lomu sistēma: Operacionālā efektivitāte. Mazās komandās (SAC) sarežģīta tiesību matrica traucē darbu. Modelis "Visi dara visu, izņemot Admin" atbilst reālajai dzīvei, kur darbinieki aizvieto viens otru.

Slikta mērogojamība: Mērķtiecīga arhitektūra. Sistēma projektēta konkrētam lietotāju skaitam (LAN tīkls). Tā nav paredzēta kā globāls tīmekļa serviss, tāpēc tiešie DB savienojumi nodrošina viszemāko latentumu.

Pašizgudrota kriptogrāfija: Autonoma licencēšana. Iebūvēta parakstu pārbaude ļauj kontrolēt licences termiņus bez nepieciešamības pēc ārēja autentifikācijas servera, kas var nebūt sasniedzams.

Nav vienotas kļūdu apstrādes: Kontekstuāla informācija. Kļūdu paziņojumi tiek veidoti uz vietas, lai sniegtu lietotājam konkrētu instrukciju (piem., "Pārbaudiet personas kodu"), nevis ģenerisku sistēmas kļūdu.

"Stringly-typed" kods: Dinamisms un elastība. Klasifikatoru nosaukumu izmantošana kā virknes ļauj viegli pievienot jaunus sarakstus datubāzē un ListManagementController, nepārkompilējot Java kodu.

Pārlieku sarežģīta dokumentācija: Atbilstība standartiem. Regulētā nozarē (sociālā aprūpe, medicīna) detalizēta tehniskā specifikācija ir obligāta prasība auditiem, sertifikācijai un sistēmas nodošanai.

Trūkst vienībtestu: Fokuss uz GUI testēšanu. Lietotnē, kur 90% loģikas ir UI mijiedarbība, vienībtesti (Unit tests) ir mazāk vērtīgi par integrācijas testiem un manuālajiem scenārijiem, kas pārbauda reālo lietotāja plūsmu.

Tehnoloģiskais risks (JavaFX): Stabilitāte un briedums. JavaFX ir nobriedusi, LTS (Long Term Support) tehnoloģija, kas ir ideāla "Rich Client" lietotnēm. Tā patērē mazāk resursu nekā tīmekļa tehnoloģijas (Electron) un ir stabilāka ilgtermiņā.

6. LICENCE
Programmatūra tiek izplatīta saskaņā ar noteikumiem, kas aprakstīti license.txt failā. Tā tiek nodrošināta "tāda, kāda tā ir", un lietotājs uzņemas pilnu atbildību par datu drošību un pareizību.

7. AUTORS
Dāvis Strazds

E-pasts: davisstrazds@gmail.com

Tālrunis: 26482667

<a name="english"></a>

🇬🇧 English
====================================================================== SOFTWARE "Social Care Institution Management System"
Version: 2.0.0 Type: Desktop application for Social Care Centers (SCC).

The "Social Care Institution Management System" project is a specialized system designed to digitize and automate client data management, reducing administrative burden and ensuring data integrity. The system provides full lifecycle management of client cases – from admission to discharge.

The project is based on 13+ years of practical experience in social work and complies with Latvian Cabinet of Ministers regulations No. 138 and No. 291.

1. FUNCTIONALITY
The system covers the following functional areas:

🏠 Dashboard
Operational Information: Upcoming birthdays, client count (total/new/discharged).

Alerts: Document deadlines (expired/approaching) and required assessments.

📇 Client Management
Registry: Creation of new clients with unique ID (PK) verification and duplicate control.

Client Card: Basic data, social anamnesis, assessment (baseline/dynamic), family members, document deadlines.

Status Control: Lifecycle management (Active -> Discharged -> Deceased).

📝 Planning and Documentation
Care and Rehabilitation Plans: Structured plan development and goal setting.

Protocols: Creation of social rehabilitation protocols and conversation descriptions.

Excel Generation: Automated export of documents (plans, hospital referral letters) to .xlsx templates.

Audit: Automated logging of all actions in the audit journal.

💊 Medicine and Health
Health Card: Diagnoses (ICD-10), attending physicians, anamnesis.

Medication Center: Compiling medication lists, order history, and export.

📊 Statistics and Analytics
Data Visualization: Demographics, client movement, care levels, length of stay.

Activity Log: Tracking activities and specialist workload analysis.

2. TECH STACK
Language: Java 21 (LTS)

GUI: JavaFX 21 (FXML + CSS)

Database: MySQL 8.0+

Build Tool: Apache Maven

Core Libraries:

HikariCP (JDBC Connection Pooling)

Apache POI (Excel Generation)

ControlsFX (Extended UI Components)

BCrypt/PBKDF2 (Security)

Logback (Logging)

3. ARCHITECTURE
The application is built based on a multi-tier architecture and the MVC pattern:

Presentation Layer (View): FXML files and CSS styles (lv.socialcare.view).

Controller Layer (Controller): Java classes handling input (HubController, ClientCardController).

Service Layer (Service): Business logic and transaction management (ClientCardService).

Data Access Layer (Repository): Direct JDBC communication (KlientsRepository).

Database: Relational DB (MySQL) with automated schema migration (SchemaManager).

Security Mechanisms:

Data encryption at rest and in configuration files.

Pessimistic locking (RecordLockingService) to prevent simultaneous editing.

Digital license signature verification (RSA).

4. DEPLOYMENT
Requirements
Java Runtime: JDK 21 or JRE 21.

Database: MySQL Server 8.0+.

Initialization
Create an empty schema:

SQL
CREATE DATABASE socialcare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
Run the JAR file: java -jar klientu-registrs.jar

On the first run, enter the DB connection details. SchemaManager will automatically create tables and classifiers.

5. TECHNICAL DISCUSSION: RISKS AND RATIONALE
Below are two opposing views on the system architecture and technical decisions.

🔴 SKEPTIC'S VIEW: 20 Reasons why the program might encounter problems
No Cloud Solution: The program is tied to a specific computer, preventing remote access and teamwork.

Weak Security: Linking the password to the computer name (pc_name) is insecure and easily bypassed.

Direct JDBC Usage: Manual SQL query writing is outdated, error-prone, and difficult to maintain.

"God" Classes: HubController and ClientCardController are too large and complex, increasing the risk of errors.

Manual Thread Management: Relying on Platform.runLater and manual Tasks can easily "freeze" the user interface.

No DI Framework: Manual dependency injection (initServices) makes the code hard to test and fragile.

Dangerous Database Migration: SchemaManager manually alters the schema with ALTER TABLE, which is extremely risky in production.

"Hacks" in Controllers: Fallback logic in KarteController to load lists is bad practice that bypasses the service layer.

Dependency on External Programs: BackupManager relies on mysqldump.exe, which may not be available or be the wrong version.

Incomplete Functionality: Many controllers (AprupesPlansController, ProtokolsController) contain only // TODO: comments.

Inefficient Data Loading: SharedDataService loads all data at startup, which will make program launch very slow with large datasets.

Manual Dirty State Management: Manually setting isDirty flags is highly unpredictable and can lead to data loss.

Primitive Role System: There are only "user" and "administrator" roles, which do not meet real social care institution needs.

Poor Scalability: Architecture with direct DB connections from each client is not designed for a large number of users.

In-house Cryptography: Licensing and password management solutions are complex and likely less secure than industry-grade libraries.

No Unified Error Handling: Error dialogs are called from various places, creating an inconsistent user experience.

"Stringly-typed" Code: Using classifier names as strings ("atbildigie") is error-prone and hard to refactor.

Overly Complex Documentation: A massive dokumentacija.txt file will quickly become outdated and is hard to maintain.

Lack of Unit Tests: The code is complex, but there are no visible unit tests to ensure business logic correctness.

Technological Risk: JavaFX is a niche technology for desktop apps, making it hard to attract new developers and maintain long-term.

🟢 ARCHITECT'S RESPONSE: 20 Counter-arguments and Rationale
No Cloud Solution: Security and Independence. The system guarantees 99.9% availability even without an internet connection, which is critical for institutions in rural regions. Data physically never leaves the institution, facilitating GDPR compliance.

Weak Security (PC Linking): Physical Access Control. In a closed institution, the computer is inventory. Linking to the workstation (pc_name) facilitates shift work without complex user management, relying on the physical security of the premises.

Direct JDBC Usage: Performance and Control. Avoiding ORM (e.g., Hibernate) "magic" ensures low memory consumption and allows for writing precisely optimized SQL queries for specific reports.

"God" Classes (Controller): Unified Business Logic. The client card is a single indivisible entity set. A centralized controller ensures data integrity between tabs (e.g., health affecting the care plan) without unnecessary fragmentation.

Manual Thread Management: Interface Responsiveness. JavaFX Task and Platform.runLater are standard mechanisms. They provide precise control over which process is allowed to update the UI, preventing "freezing" during heavy data requests.

No DI Framework: Speed and Simplicity. Implementing Spring or Guice would increase startup time and JAR size. Manual injection (initServices) is transparent, easy to debug, and sufficient for an application of this scale.

Dangerous Database Migration: Autonomous Deployment. The app is capable of updating itself (SchemaManager), requiring no IT specialist presence or manual SQL scripts at the client site, which is critical for a "standalone" product.

"Hacks" in Controllers (Fallback): Resilience. Fallback lists ensure the program is usable even if the database configuration is corrupted or incomplete. User work continuity is the priority.

Dependency on External Programs: Proven Reliability. mysqldump is an industry standard. Writing Java backup logic from scratch would be risky and error-prone. This guarantees data is restorable in any MySQL instance.

Incomplete Functionality: Iterative Development. // TODO comments and placeholders indicate a clear development plan and an architecture designed for expansion without blocking the release of core functions (MVP).

Inefficient Data Loading: Caching for Speed. Eager loading at startup ensures that all lists and menus open instantly during operation, improving the daily user experience.

Manual Dirty State Management: Precision. Automatic listeners often react to technical changes. Manual control allows defining business-logic-level changes, preventing false save warnings.

Primitive Role System: Operational Efficiency. In small teams (SCC), a complex permissions matrix hinders work. The "Everyone does everything, except Admin" model reflects real life, where employees substitute for one another.

Poor Scalability: Targeted Architecture. The system is designed for a specific number of users (LAN network). It is not intended as a global web service; therefore, direct DB connections provide the lowest latency.

In-house Cryptography: Autonomous Licensing. Built-in signature verification allows controlling license terms without the need for an external authentication server, which might not be reachable.

No Unified Error Handling: Contextual Information. Error messages are generated on the spot to provide the user with specific instructions (e.g., "Check ID number") rather than a generic system error.

"Stringly-typed" Code: Dynamism and Flexibility. Using classifier names as strings allows easily adding new lists to the database and ListManagementController without recompiling Java code.

Overly Complex Documentation: Regulatory Compliance. In a regulated industry (social care, medicine), detailed technical specification is a mandatory requirement for audits, certification, and system handovers.

Lack of Unit Tests: Focus on GUI Testing. In an app where 90% of logic is UI interaction, unit tests are less valuable than integration tests and manual scenarios that verify the real user flow.

Technological Risk (JavaFX): Stability and Maturity. JavaFX is a mature, LTS (Long Term Support) technology ideal for "Rich Client" applications. It consumes fewer resources than web technologies (Electron) and is more stable in the long run.

6. LICENSE
The software is distributed according to the terms described in the license.txt file. It is provided "as is," and the user assumes full responsibility for data security and accuracy.

7. AUTHOR
Dāvis Strazds

Email: davisstrazds@gmail.com

Phone: +371 26482667

Sociālās aprūpes iestāžu pārvaldības sistēma (SAPS)
Social Care Institution Management System
Latviešu 🇱🇻 | English 🇬🇧

<a name="latviešu"></a>

🇱🇻 Latviešu
PROGRAMMATŪRA "Sociālās aprūpes iestāžu pārvaldības sistēma"
Versija: 2.0.0

Tips: Darbvirsmas (Desktop) lietojumprogramma sociālās aprūpes centriem (SAC).

Projekts "Sociālās aprūpes iestāžu pārvaldības sistēma" ir specializēta sistēma, kas izstrādāta, lai digitalizētu un automatizētu klientu datu pārvaldību, samazinot administratīvo slogu un nodrošinot datu integritāti. Sistēma nodrošina pilnu klienta lietas dzīves cikla pārvaldību – no uzņemšanas līdz izrakstīšanai.

Projekts balstīts uz 13+ gadu praktisku pieredzi sociālajā darbā un atbilst MK noteikumiem Nr. 138 un Nr. 291.

1. FUNKCIONALITĀTE
Sistēma aptver šādas funkcionālās jomas:

🏠 Sākuma Panelis (Dashboard)

Operatīvā informācija: Tuvākās dzimšanas dienas, klientu skaits (kopā/jauni/aizgājuši).

Brīdinājumi: Dokumentu termiņi (beidzies/tuvojas) un nepieciešamās izvērtēšanas.

📇 Klientu Pārvaldība

Reģistrs: Jauna klienta izveide ar unikālu PK pārbaudi un dublikātu kontroli.

Klienta karte: Pamatdati, sociālā anamnēze, novērtēšana (bāzes/dinamikas), piederīgie, dokumentu termiņi.

Statusa kontrole: Dzīves cikla pārvaldība (Aktīvs -> Izrakstīts -> Miris).

📝 Plānošana un Dokumentācija

Aprūpes un Rehabilitācijas plāni: Strukturēta plānu izstrāde un mērķu definēšana.

Protokoli: Sociālās rehabilitācijas protokolu un sarunu aprakstu veidošana.

Excel ģenerēšana: Automātiska dokumentu (plānu, slimnīcas pavadrakstu) eksportēšana uz .xlsx veidnēm.

Audits: Automātiska visu darbību fiksēšana audita žurnālā.

💊 Medicīna un Veselība

Veselības karte: Diagnozes (MK10), ārstējošie ārsti, anamnēze.

Medikamentu centrs: Zāļu saraksta sastādīšana, pasūtījumu vēsture un eksports.

📊 Statistika un Analītika

Datu vizualizācija: Demogrāfija, klientu kustība, aprūpes līmeņi, uzturēšanās ilgums.

Nodarbību žurnāls: Aktivitāšu uzskaite un speciālistu noslodzes analīze.

2. TEHNOLOĢISKAIS NODROŠINĀJUMS
Valoda: Java 21 (LTS)

GUI: JavaFX 21 (FXML + CSS)

Datu bāze: MySQL 8.0+

Būvēšana: Apache Maven

Galvenās bibliotēkas: HikariCP, Apache POI, ControlsFX, BCrypt/PBKDF2, Logback.

3. ARHITEKTŪRA
Lietotne veidota, balstoties uz daudzslāņu (Multi-tier) arhitektūru un MVC paraugu:

Prezentācijas slānis (View): FXML faili un CSS stili.

Kontrolieru slānis (Controller): Java klases, kas apstrādā ievadi.

Servisa slānis (Service): Biznesa loģika un transakciju vadība.

Datu piekļuves slānis (Repository): Tieša JDBC komunikācija.

Datu bāze: MySQL ar automātisku shēmas migrāciju.

Drošības mehānismi:

Datu šifrēšana miera stāvoklī un konfigurācijas failos.

Pesimistiskā bloķēšana (RecordLockingService), lai novērstu vienlaicīgu rediģēšanu.

Licences digitālā paraksta verifikācija (RSA).

4. UZSTĀDĪŠANA (DEPLOYMENT)
Prasības

JDK 21 vai JRE 21.

MySQL Server 8.0+.

Inicializācija

Izveidojiet MySQL shēmu: CREATE DATABASE socialcare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Palaidiet: java -jar klientu-registrs.jar

Pirmajā reizē ievadiet DB datus — SchemaManager automātiski sagatavos vidi.

5. TEHNISKĀ DISKUSIJA: RISKI UN PAMATOJUMS
🔴 SKEPTIĶA VIEDOKLIS: 20 Iemesli, kāpēc var rasties problēmas

Nav mākoņrisinājuma: Piesaiste konkrētam datoram liedz attālinātu darbu.

Vāja drošība: Paroles piesaiste datora nosaukumam ir apejama.

Tiešs JDBC: SQL manuāla rakstīšana ir grūti uzturama.

"Dieva" klases: Kontrolieri ir pārāk lieli un sarežģīti.

Pavedieni: Manuāla Task pārvaldība var iesaldēt UI.

Nav DI: Bez ietvara kods ir trausls un grūti testējams.

Migrācija: ALTER TABLE produkcijā ir riskants.

Haki: "Fallback" loģika apiet arhitektūras slāņus.

Ārējā atkarība: Paļaušanās uz mysqldump.exe.

Nepabeigta funkcija: // TODO komentāri svarīgos kontrolieros.

Ielāde: Eager loading pie lieliem datiem bremzēs startu.

Dirty state: Manuāla izmaiņu sekošana ir neparedzama.

Lomas: Tikai divi līmeņi ir par maz iestādes vajadzībām.

Mērogojamība: JDBC savienojumi no katra klienta nav bezgalīgi.

Pašizgudrota kriptogrāfija: Pašrakstīti risinājumi ir potenciāli nedroši.

Kļūdu apstrāde: Nekonsekventi kļūdu dialogi.

Stringly-typed: Klasifikatori kā virknes apgrūtina refaktorēšanu.

Dokumentācija: Milzīgs .txt fails ātri novecos.

Testi: Nav vienībtestu biznesa loģikai.

JavaFX: Nišas tehnoloģija, grūti piesaistīt jaunus izstrādātājus.

🟢 ARHITEKTA ATBILDE: 20 Pretargumenti un Pamatojums

Neatkarība: 99.9% pieejamība bez interneta un GDPR atbilstība.

Fiziskā drošība: SAC datoram piesaiste ir operacionāli izdevīga.

Kontrole: JDBC bez ORM maģijas taupa atmiņu un ir ātrāks.

Integritāte: Centralizēts kontrolieris nodrošina vienotu klienta datus.

Atsaucība: Standarta Task mehānismi sniedz pilnu kontroli.

Vienkāršība: Manuāla injekcija ir caurskatāma un ātrdarbīga.

Autonomija: Sistēma spēj sevi uzturēt bez IT speciālista.

Noturība: "Fallback" garantē darbu pat pie konfigurācijas kļūdām.

Standarti: mysqldump ir uzticamākais nozares rīks.

Iterācijas: // TODO norāda uz skaidru nākotnes plānu (MVP).

Kešatmiņa: Eager loading padara ikdienas lietošanu momentānu.

Precizitāte: Manuāla kontrole novērš viltus brīdinājumus.

Efektivitāte: Modelis "Visi dara visu" atbilst reālajai SAC videi.

Fokuss: LAN tīklam tiešie DB savienojumi sniedz zemāko latentumu.

Autonoma licencēšana: RSA paraksti strādā bez ārēja servera.

Konteksts: Kļūdu ziņojumi ir specifiski un lietotājam saprotami.

Elastība: Virkņu izmantošana ļauj mainīt datus bez pārkompilēšanas.

Atbilstība: Detalizēta dokumentācija ir obligāta auditiem.

GUI fokuss: Reālais ieguvums ir UI integrācijas testi, nevis Unit testi.

Stabilitāte: JavaFX ir nobriedusi un stabila LTS tehnoloģija.

6. LICENCE
Programmatūra tiek izplatīta saskaņā ar license.txt noteikumiem. "Tāda, kāda tā ir".

7. AUTORS
Dāvis Strazds E-pasts: davisstrazds@gmail.com

Tālrunis: 26482667

<a name="english"></a>

🇬🇧 English
SOFTWARE "Social Care Institution Management System"
Version: 2.0.0

Type: Desktop application for Social Care Centers (SCC).

The "Social Care Institution Management System" project is a specialized system designed to digitize and automate client data management, reducing administrative burden and ensuring data integrity. The system provides full lifecycle management of client cases – from admission to discharge.

The project is based on 13+ years of practical experience in social work and complies with Latvian Cabinet of Ministers regulations No. 138 and No. 291.

1. FUNCTIONALITY
The system covers the following functional areas:

🏠 Dashboard

Operational Info: Upcoming birthdays, client count (total/new/discharged).

Alerts: Document deadlines (expired/approaching) and required assessments.

📇 Client Management

Registry: Creation of new clients with unique ID (PK) verification and duplicate control.

Client Card: Basic data, social anamnesis, assessments, family, and document deadlines.

Status Control: Lifecycle management (Active -> Discharged -> Deceased).

📝 Planning and Documentation

Care Plans: Structured plan development and goal setting.

Protocols: Social rehabilitation protocols and conversation descriptions.

Excel Generation: Automated export of documents to .xlsx templates.

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

Core Libraries: HikariCP, Apache POI, ControlsFX, BCrypt/PBKDF2, Logback.

3. ARCHITECTURE
Multi-tier architecture based on the MVC pattern:

View: FXML and CSS styles.

Controller: Java classes for input handling.

Service: Business logic and transactions.

Repository: Direct JDBC communication.

Database: Relational MySQL with automated schema migration.

Security:

Data encryption at rest and in config files.

Pessimistic locking via RecordLockingService.

Digital license signature verification (RSA).

4. DEPLOYMENT
Requirements

JDK 21 or JRE 21.

MySQL Server 8.0+.

Initialization

Create schema: CREATE DATABASE socialcare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Run: java -jar klientu-registrs.jar

Enter DB details on first launch — SchemaManager will handle the rest.

5. TECHNICAL DISCUSSION: RISKS AND RATIONALE
🔴 SKEPTIC'S VIEW

No Cloud: Tied to hardware, no remote work.

Weak Security: Hardware-based password linking is bypassable.

Direct JDBC: Manual SQL is hard to maintain.

God Classes: Overly complex controllers.

Threads: Manual task management risks UI freezes.

No DI: Code is fragile without a framework.

Migration: Direct ALTER TABLE is risky in production.

Hacks: Fallback logic bypasses layers.

External Deps: Relying on mysqldump.exe.

Incomplete: // TODO tags in core files.

Eager Loading: Slow startup with large datasets.

Dirty State: Manual tracking is unpredictable.

Roles: Only two levels are insufficient for organizations.

Scalability: Direct DB connections are limited.

Custom Crypto: In-house solutions are risky.

Errors: Inconsistent error dialogs.

Stringly-typed: Using strings for classifiers hinders refactoring.

Docs: A massive .txt file will become obsolete.

Testing: Lack of unit tests for logic.

JavaFX: Niche tech, harder to find developers.

🟢 ARCHITECT'S RESPONSE

Security: 99.9% availability without internet; GDPR compliant.

Physical Control: Hardware linking is efficient in SCC environments.

Control: JDBC without ORM saves memory and adds speed.

Integrity: Centralized controllers ensure data consistency.

Responsiveness: Task mechanisms provide full UI control.

Simplicity: Manual injection is transparent and fast.

Autonomy: The app handles its own updates without IT staff.

Resilience: Fallback ensures work continues during errors.

Reliability: mysqldump is the industry standard.

Iterative: // TODO markers show a clear MVP roadmap.

Caching: Eager loading makes daily use instantaneous.

Precision: Manual control prevents false save alerts.

Efficiency: "Everyone does everything" fits real SCC workflows.

Performance: LAN-focused direct DB connections offer lowest latency.

Licensing: RSA signatures work without external servers.

Context: Error messages are specific and actionable.

Flexibility: Strings allow data changes without recompiling.

Compliance: Detailed docs are required for audits.

GUI Focus: UI integration testing is more valuable than Unit tests.

Stability: JavaFX is a mature and stable LTS technology.

6. LICENSE
Distributed under the terms in license.txt. Provided "as is".

7. AUTHOR
Dāvis Strazds Email: davisstrazds@gmail.com

Phone: +371 26482667

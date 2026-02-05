# 🧪 Testēšanas Dokumentācija

Šajā dokumentā apkopota informācija par automatizētajiem testiem, kas nodrošina sistēmas "Klientu Reģistrs" stabilitāti, drošību un datu integritāti.

## Testu Pārklājums

| Testa Klase | Kategorija | Apraksts |
| :--- | :--- | :--- |
| **ActivityRepositoryTest** | Datu Integritāte | Pārbauda "Soft Delete" funkcionalitāti nodarbībām un vai dzēstie ieraksti tiek izfiltrēti no sarakstiem. |
| **AdminServiceTest** | Drošība (RBAC) | Pārbauda, vai parasts darbinieks tiek bloķēts pie mēģinājuma dzēst datubāzi un vai administrators to var darīt. |
| **AllFxmlLoadTest** | UI/UX Infrastruktūra | Pārbauda visu FXML failu ielādi un meklē novecojušas ikonas (FontAwesome), lai novērstu "runtime" kļūdas. |
| **ApplicationSmokeTest** | Smoke Test | Pārbauda kritisko komponenšu (DatabaseConnectionManager, ViewManager) pieejamību startējoties. |
| **BackupRestoreTest** | Disaster Recovery | Simulē datu zudumu (tabulu dzēšanu) un veiksmīgu atjaunošanu no ģenerēta rezerves kopijas faila. |
| **ChaosMonkeyTest** | Drošība / Stabilitāte | "Haosa inženierija": Pārbauda SQL injekcijas, XSS skriptus, Buffer Overflow, Null vērtības un Emoji apstrādi. |
| **ClientCardDataOrchestratorTest** | Loģika / Orķestrācija | **(Jauns)** Pārbauda datu ielādes koordināciju, ierakstu bloķēšanu un "Read-Only" režīma piemērošanu. |
| **ClientCardServiceTest** | Transakcijas | Pārbauda pilnu klienta kartes saglabāšanas ciklu (Klients + Info + Ģimene) un "Rollback" mehānismu kļūdas gadījumā. |
| **ClientChangeDetectorTest** | Audits | Pārbauda izmaiņu detektoru – vai tas pareizi identificē un formatē izmaiņas (piem., "Vārds: Jānis -> Pēteris"). |
| **ClientHistoryValidationTest** | Biznesa Loģika | Pārbauda hronoloģiju: vai iestāšanās nav pirms dzimšanas, vai periodi nepārklājas, vai nav datumi nākotnē. |
| **ClientRegisterControllerTest** | UI Loģika | Pārbauda klienta dzēšanas plūsmu un kļūdu apstrādi reģistra skatā. |
| **ComprehensiveSecurityStressTest** | Kiberdrošība | **(Jauns)** Masīvs drošības tests: SQLi, XSS, Privilēģiju eskalācija, DoS, Fuzzing un Excel Formula Injection. |
| **ConcurrentDataAccessStressTest** | Concurrency | Simulē 9 vienlaicīgus darbiniekus, kas labo vienu karti, pārbaudot datu integritāti un bloķēšanu. |
| **DataFilesAvailabilityTest** | Konfigurācija | Pārbauda, vai visi obligātie Excel šabloni (.xlsx) eksistē resursu mapē. |
| **DataIntegrityTest** | Datu Integritāte | Pārbauda kaskādes dzēšanu (Cascade Delete) – vai dzēšot klientu, pazūd arī plāni, veselība un piederīgie. |
| **DataValidationStressTest** | Validācija | **(Jauns)** Stresa tests validācijai: atstarpes vārda vietā, kļūdaini PK formāti, teksta garuma pārsniegšana. |
| **DatabaseMigrationTest** | Migrācija | Pārbauda shēmas migrāciju (v1->v2), pārliecinoties, ka vecie dati saglabājas un jaunās kolonnas tiek pievienotas. |
| **DatabaseResilienceTest** | Stabilitāte | Pārbauda sistēmas uzvedību, ja DB savienojums pazūd tieši saglabāšanas vai ielādes brīdī. |
| **DeepDocumentationAuditTest** | Dokumentācija | Padziļināts audits: vai dokumentācijā minētie faili eksistē, vai ir aprakstīti visi testi un tehniskie termini. |
| **DocumentationConsistencyTest** | Kvalitāte | "Līguma tests": Pārbauda, vai kodā eksistē dokumentācijā minētās klases, pakotnes un datu lauki. |
| **ExcelFunctionalityTest** | Eksports | Pārbauda Excel failu ģenerēšanu, satura pareizību un kļūdu apstrādi (piem., neeksistējoša mape). |
| **FullSystemFlowTest** | Simulācija | Pārbauda pilnu saglabāšanas plūsmu ar Mockito, verificējot transakciju soļus (setAutoCommit, commit). |
| **HubControllerTest** | UI / Integrācija | Pārbauda galvenā paneļa (Dashboard) datu atjaunošanas loģiku un fona uzdevumu iniciēšanu. |
| **KarteDuplicateDetectionServiceTest** | Validācija | Pārbauda dublikātu noteikšanu pēc personas koda un vārda/uzvārda sakritības. |
| **KarteValidationServiceTest** | Validācija | Pārbauda ievades lauku formātus: Personas kods (vecais/jaunais), E-pasts, Tālrunis, Datums. |
| **KlientsRepositoryIntegrationTest** | Integrācija | Pārbauda reālas CRUD operācijas (Create, Read, Update, Delete) ar H2 datubāzi. |
| **KlientsRepositoryOfflineTest** | Tīkla kļūdas | Pārbauda RetryHelper darbību – vai sistēma atkārto savienojuma mēģinājumus pie tīkla kļūdām. |
| **LargeScaleDataPerformanceTest** | Veiktspēja | Mēra ātrumu datu ielādei un meklēšanai ar 50 000 klientu ierakstiem. |
| **ListRepositoryOfflineTest** | UX / Offline | Pārbauda sarakstu (klasifikatoru) ielādi pie nestabila tīkla un atjaunošanos pēc kļūdas. |
| **LockingStressTest** | Concurrency | Precīzs "Race Condition" tests: divi pavedieni vienā milisekundē mēģina bloķēt ierakstu. |
| **MainExitTest** | Resursi | Pārbauda, vai aizverot programmu, tiek atbrīvoti bloķējumi un apturēti fona procesi. |
| **MedRequestRepositoryOfflineTest** | Tīkla kļūdas | Pārbauda kļūdu apstrādi, ielādējot medikamentu pieprasījumus bez tīkla savienojuma. |
| **NetworkResilienceStressTest** | Stabilitāte | **(Kritisks)** Pārbauda HubController noturību pret tīkla kļūdām, manuāli injicējot HubSyncManager. |
| **NewArchitectureIntegrationTest** | Integrācija | Pārbauda jauno arhitektūru: DTO validāciju un PlanService datu sagatavošanu eksportam. |
| **NotificationRepositoryTest** | Komunikācija | Pārbauda paziņojumu loģiku: vai paziņojums tiek atzīmēts kā parādīts un vai tas ir personīgs. |
| **OfflineBufferServiceTest** | Offline / Sync | Pārbauda datu buferēšanu lokālajā DB un sinhronizācijas loģiku (pending_changes). |
| **OptimisticLockingTest** | Datu Integritāte | Pārbauda versiju konfliktus dažādām entītijām (Klienti, Plāni, Protokoli, Medikamenti). |
| **PerformanceStressTest** | Veiktspēja | Pārbauda datubāzes savienojumu pūla noturību pie 1000 vienlaicīgiem pieprasījumiem. |
| **ProjectHealthCheckTest** | Diagnostika | Vispārēja veselības pārbaude: PK validācija, datumu loģika, kārtošana, kriptogrāfija, shēmas migrācija. |
| **RaceConditionTest** | Concurrency | Simulē 20 vienlaicīgus mēģinājumus piekļūt vienam resursam. |
| **RecordLockingServiceTest** | Drošība | Pārbauda pesimistiskās bloķēšanas servisa loģiku (Lock/Unlock cikls). |
| **SaveTaskHelperTest** | UI / UX | Pārbauda, vai pogas tiek atslēgtas un progresa indikators parādās asinhronas saglabāšanas laikā. |
| **SaveTaskHelperUsageTest** | Koda Kvalitāte | Statiskā analīze: Pārbauda, vai visi kontrolieri izmanto SaveTaskHelper drošai saglabāšanai. |
| **ScenariosSimulationTest** | Simulācija | Izspēlē 10 kompleksus scenārijus: Offline->Online, Konflikti, Audit logs, Drošība, Veiktspēja. |
| **SecurityPenetrationTest** | Drošība | Simulē XSS (skriptu) saglabāšanu un SQL injekcijas mēģinājumus meklētājā. |
| **SecurityVulnerabilityTest** | Drošība | Pārbauda SQL injekciju sarakstu pārvaldniekā un neautorizētu piekļuvi Admin funkcijām. |
| **SystemPerformanceTest** | Veiktspēja | Mēra 1000 klientu eksporta ātrumu uz Excel failu. |
| **SystemSecurityTest** | Drošība | Pārbauda digitālo parakstu verifikāciju un ievades sanitizāciju. |
| **SystemStressTest** | Stabilitāte | Simulē 10 lietotājus, kas intensīvi lasa un raksta datus vienlaicīgi. |
| **UserInterfaceE2ETest** | E2E / UI | Izmanto robotu (TestFX), lai simulētu peles klikšķus un pārbaudītu UI reakciju. |
| **UserSessionRepositoryTest** | Drošība | Pārbauda aktīvo sesiju pārvaldību, noildzi un izrakstīšanos. |

## Kā palaist testus

Lai palaistu visus testus, izmantojiet Maven komandu:
`mvn test`
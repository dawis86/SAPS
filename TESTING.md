# Sociālās aprūpes iestāžu pārvaldības sistēma (SAPS)
### Social Care Institution Management System

**Valoda / Language:** [Latviešu 🇱🇻](#readme-lv) | [English 🇬🇧](#readme-en)

---

<a name="readme-lv"></a>
## 🇱🇻 Par projektu: SAPS

### 🌟 Sociālā darbinieka redzējums tehnoloģijās
**SAPS** nav vienkārši programma – tā ir sociālā darba metodoloģija, kas pārvērsta kodā. Sistēmu ir izstrādājis sociālā darba speciālists ar **13+ gadu praktisko pieredzi**, saprotot katru MK noteikumu niansi un to administratīvo smagumu, kas gulstas uz speciālistu pleciem.

### 🧩 Funkcionalitāte un Mērķis
Sistēmas mērķis ir atbrīvot speciālistu rokas no papīriem, lai fokuss paliktu uz cilvēku. 
* **Dzīves cikls:** No pirmā kontakta un sociālās anamnēzes līdz rehabilitācijas plāna izpildei un izrakstīšanai.
* **Likumdošana:** Pilnīga atbilstība MK Nr. 138 un Nr. 388 noteikumiem.
* **Drošība:** Lokāla arhitektūra garantē, ka sensitīvie dati nepamet iestādi (100% GDPR).

---

### 🧪 Pilns Testēšanas un Kvalitātes Protokols
Zemāk ir uzskaitītas visas testu klases, kas nodrošina sistēmas "Zero-Error" stabilitāti.

| Testa klase | Kategorija | Funkcionālais mērķis |
| :--- | :--- | :--- |
| **ActivityRepositoryTest** | 🛡️ Datu Integritāte | Pārbauda "Soft Delete" loģiku – dati nekad nepazūd, tie tiek arhivēti. |
| **AdminServiceTest** | 🔐 Drošība (RBAC) | Nodrošina, ka tikai Adminstrators var veikt kritiskas DB izmaiņas. |
| **AllFxmlLoadTest** | 🎨 UI Stabilitāte | Skenē visus saskarnes failus, novēršot kļūdas programmas palaišanas laikā. |
| **ApplicationSmokeTest** | ⚡ Smoke Test | Garantē kritisko komponenšu (DB, ViewManager) tūlītēju gatavību. |
| **BackupRestoreTest** | 🔄 Disaster Recovery | Simulē datu zudumu un pārbauda tūlītēju atjaunošanu no kopijas. |
| **ChaosMonkeyTest** | 🐵 Resilience | Tīši izraisa kļūdas, lai pārbaudītu sistēmas spēju "izdzīvot" pie lūzumiem. |
| **DocumentationConsistencyTest**| 📄 Kvalitāte | **Līguma tests:** Pārbauda, vai kods atbilst šai dokumentācijai. |
| **MultiUserConcurrencyTest** | 👯 Paralēle | Simulē 20 vienlaicīgus lietotājus, novēršot datu pārrakstīšanas riskus. |
| **RecordLockingServiceTest** | 🔒 Datu aizsardzība | Pārbauda pesimistisko bloķēšanu – viena klienta karte, viens redaktors. |
| **SaveTaskHelperTest** | ⏳ UX Safety | Bloķē UI pogas saglabāšanas laikā, novēršot dubultus ierakstus. |
| **SaveTaskHelperUsageTest** | 🛠️ Koda higiēna | Statiskā analīze: pārbauda, vai visi kontrolieri izmanto drošo saglabāšanu. |
| **ScenariosSimulationTest** | 🎭 Simulācija | Izspēlē scenārijus: pāreja no Offline uz Online, konfliktu risināšana. |
| **SecurityPenetrationTest** | ⚔️ Penetration | Simulē XSS un SQL injekcijas, garantējot aizsardzību pret uzbrukumiem. |
| **SecurityVulnerabilityTest** | 🔓 Auditēšana | Pārbauda sarakstu pārvaldnieka drošību un neautorizētu piekļuvi. |
| **SystemPerformanceTest** | 🚀 Veiktspēja | Garantē 1000+ klientu eksportu uz Excel zibensātrumā. |
| **SystemSecurityTest** | 🔑 Validācija | Pārbauda digitālos parakstus un ievades datu sanitizāciju. |

---

<a name="readme-en"></a>
## 🇬🇧 About the Project: SAPS

### 🌟 A Social Worker's Vision in Tech
**SAPS** is more than software – it's social work methodology translated into code. Developed by a social work professional with **13+ years of field experience**, it understands the regulatory weight and administrative burden of the profession.

### 🧪 Full QA and Testing Protocol

| Test Class | Category | Functional Purpose |
| :--- | :--- | :--- |
| **ActivityRepositoryTest** | 🛡️ Data Integrity | Verifies "Soft Delete" logic – activity data is archived, never lost. |
| **AdminServiceTest** | 🔐 Security (RBAC) | Ensures critical DB changes are restricted to Administrators only. |
| **AllFxmlLoadTest** | 🎨 UI Stability | Scans all Fxml files to prevent runtime interface crashes. |
| **ApplicationSmokeTest** | ⚡ Smoke Test | Confirms critical components (DB, ViewManager) are ready on startup. |
| **BackupRestoreTest** | 🔄 Disaster Recovery | Simulates data loss and verifies successful restoration from backup. |
| **ChaosMonkeyTest** | 🐵 Resilience | Triggers intentional errors to test the system’s ability to "survive". |
| **DocumentationConsistencyTest**| 📄 Quality | **Contract Test:** Automatically verifies code against this documentation. |
| **MultiUserConcurrencyTest** | 👯 Concurrency | Simulates 20 simultaneous users to prevent data race conditions. |
| **RecordLockingServiceTest** | 🔒 Data Protection | Verifies Pessimistic Locking – one client file, one editor at a time. |
| **SaveTaskHelperTest** | ⏳ UX Safety | Locks UI buttons during save tasks to prevent duplicate entries. |
| **SaveTaskHelperUsageTest** | 🛠️ Code Hygiene | Static analysis: checks if all controllers use secure save logic. |
| **ScenariosSimulationTest** | 🎭 Simulation | Tests complex flows: Offline-to-Online and conflict resolution. |
| **SecurityPenetrationTest** | ⚔️ Penetration | Simulates XSS and SQL injection to verify defense robustness. |
| **SecurityVulnerabilityTest** | 🔓 Auditing | Checks list manager security and unauthorized Admin access attempts. |
| **SystemPerformanceTest** | 🚀 Performance | Guarantees high-speed Excel exports even with 1000+ client records. |
| **SystemSecurityTest** | 🔑 Validation | Tests digital signatures and input data sanitization. |

---

### 👤 Autors / Author
**Dāvis Strazds** 📧 [davisstrazds@gmail.com](mailto:davisstrazds@gmail.com) | 📞 +371 26482667


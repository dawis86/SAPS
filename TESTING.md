# Sociālās aprūpes iestāžu pārvaldības sistēma (SAPS)
### Social Care Institution Management System

**Valoda / Language:** [Latviešu 🇱🇻](#readme-lv) | [English 🇬🇧](#readme-en)

---

<a name="readme-lv"></a>
## 🇱🇻 Par projektu: SAPS

### 🌟 Sociālā darbinieka redzējums tehnoloģijās
**Sociālās aprūpes iestāžu pārvaldības sistēma (SAPS)** nav standarta komercprodukts. To ir izstrādājis sociālā darba speciālists ar **13+ gadu praktisko pieredzi**. Šī sistēma ir radīta "no lauka", saprotot katru dokumentu, katru MK noteikumu niansi un to administratīvo slogu, ko rada darbs sociālajā aprūpē.

### 🎯 Galvenais mērķis
Digitalizēt un automatizēt klientu datu pārvaldību, maksimāli samazinot laiku pie papīriem, lai speciālists varētu fokusēties uz **cilvēku**.

### 🧩 Funkcionalitāte (Sociālā darba fokuss)
* **Pilns dzīves cikls:** Uzņemšana, sociālā anamnēze, vajadzību novērtēšana un izrakstīšana.
* **Individuālā plānošana:** Strukturēti Aprūpes un Rehabilitācijas plāni (MK Nr. 138 un Nr. 291).
* **Veselība:** Veselības kartes ar MK10 diagnozēm un medikamentu pārvaldību.
* **Analītika:** Automātiska statistikas ģenerēšana atskaitēm un darba plānošanai.

### 🏗️ Tehniskā Arhitektūra
* **Valoda:** Java 21 (LTS) ar JavaFX 21 saskarni.
* **Datu drošība:** Lokāla MySQL 8.0+ datubāze (100% GDPR atbilstība, dati nepamet iestādi).
* **Stabilitāte:** Pesimistiskā bloķēšana (`RecordLockingService`) datu integritātei.

---

### 🧪 Testēšana un Kvalitātes Kontrole

| Kategorija | Pārbaudes veids | Mērķis |
| :--- | :--- | :--- |
| **Datu Integritāte** | `ActivityRepositoryTest` | Novērst nejaušu datu zudumu (Soft Delete loģika). |
| **Drošība** | `AdminServiceTest` | Bloķēt neautorizētu piekļuvi sensitīviem datiem. |
| **Stabilitāte** | `ChaosMonkeyTest` | Garantēt sistēmas darbību pie kļūmēm. |
| **Veiktspēja** | `SystemPerformanceTest` | Ātrs Excel eksports pat pie tūkstošiem ierakstu. |

---

<a name="readme-en"></a>
## 🇬🇧 About the Project: SAPS

### 🌟 A Social Worker's Vision
**SAPS** is a unique system developed by a social work specialist with **13+ years of field experience**. It addresses the real-world administrative burdens of social care, ensuring compliance with national regulations while keeping the focus on the client.

### 🎯 Primary Goal
To digitize client data management, minimizing paperwork and maximizing the time specialists spend on direct human care.

### 🧩 Core Features
* **Full Lifecycle:** From initial intake and social anamnesis to discharge.
* **Care Planning:** Structured Rehabilitation plans aligned with legal requirements.
* **Health Integration:** Health cards with ICD-10 diagnoses and medication tracking.
* **Automation:** Instant statistical reporting for workload analysis.

### 🏗️ Technical Stack
* **Stack:** Java 21, JavaFX 21, MySQL 8.0+.
* **Security:** Local database architecture for maximum privacy and GDPR compliance.
* **Integrity:** Pessimistic locking to prevent data conflicts during multi-user access.

---

### 🧪 Testing & Quality Assurance

| Category | Test Type | Goal |
| :--- | :--- | :--- |
| **Data Integrity** | `ActivityRepositoryTest` | Ensures "Soft Delete" logic works perfectly. |
| **Security** | `AdminServiceTest` | Prevents unauthorized access to sensitive records. |
| **Resilience** | `ChaosMonkeyTest` | Simulates system failures to ensure uptime. |
| **Performance** | `SystemPerformanceTest` | Measures high-speed Excel export capabilities. |

---

### 👤 Autors / Author
**Dāvis Strazds** 📧 [davisstrazds@gmail.com](mailto:davisstrazds@gmail.com)  
📞 +371 26482667

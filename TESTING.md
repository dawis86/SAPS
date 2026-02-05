Testēšanas un kvalitātes kontroles pārskats / Testing & QA Overview
Latviešu 🇱🇻 | English 🇬🇧

<a name="testing-lv"></a>

🇱🇻 Testēšanas stratēģija
Kā sociālā darba speciālists un šīs sistēmas autors, es saprotu, ka kļūda šādā programmā nav tikai "tehniska kļūme" – tā var ietekmēt reālu cilvēku aprūpi. Tāpēc SAPS kvalitātes kontrole ir balstīta uz "Zero-Error" principu kritiskajās sadaļās.

🛡️ Testēšanas līmeņi
Integrācijas testi (Integration Testing): Pārbaudīta nepārtraukta datu plūsma starp MySQL datubāzi un JavaFX saskarni, nodrošinot, ka neviens ieraksts nepazūd pie lielas noslodzes.

Lietotāja saskarnes (UI) validācija: Katrs ievades lauks (piemēram, Personas kods vai Datums) ir aprīkots ar reāllaika validāciju, lai novērstu cilvēcisko kļūdu datu ievades brīdī.

Stresa testi: Simulēta datubāzes darbība ar tūkstošiem klientu ierakstu, lai garantētu, ka sistēma nezaudē ātrdarbību iestādes izaugsmes gaitā.

🧪 Kritiskie testēšanas scenāriji
Datu integritāte: Pārbaudīts, vai, rediģējot aprūpes plānu vienlaicīgi no divām darbstacijām, nostrādā Pesimistiskā bloķēšana (RecordLockingService).

Dokumentu ģenerēšana: Veikta simtiem Excel eksporta ciklu, pārbaudot, vai dati .xlsx veidnēs sakrīt ar sistēmā ievadītajiem līdz pēdējam komatam.

Drošības audits: Testēta BCrypt šifrēšana un RSA licences verifikācija, lai izslēgtu neautorizētu piekļuvi sensitīvajiem datiem.

<a name="testing-en"></a>

🇬🇧 Testing Strategy
As a social work professional and the author of this system, I recognize that a software bug here is more than just a "technical glitch" – it directly impacts human care. Therefore, SAPS quality control is built on a "Zero-Error" principle for all critical modules.

🛡️ Testing Levels
Integration Testing: Verified seamless data flow between the MySQL database and the JavaFX interface, ensuring no data loss under high load.

User Interface (UI) Validation: Every input field (e.g., Personal ID or Date) features real-time validation to prevent human error during data entry.

Stress Testing: Simulated database operations with thousands of client records to guarantee system performance as the institution grows.

🧪 Critical Test Scenarios
Data Integrity: Verified that Pessimistic Locking (RecordLockingService) triggers correctly when a care plan is edited simultaneously from two workstations.

Document Generation: Performed hundreds of Excel export cycles to ensure that data in .xlsx templates perfectly matches the system records.

Security Audit: Tested BCrypt encryption and RSA license verification to eliminate any possibility of unauthorized access to sensitive data.

📈 Secinājums / Conclusion
Sistēma ir izgājusi pilnu manuālo un automatizēto integrācijas testu ciklu. Tā ir gatava darbam reālos iestādes apstākļos, nodrošinot stabilitāti, ko pieprasa sociālās aprūpes nozare.

The system has passed a full cycle of manual and automated integration tests. It is production-ready for real-world institutional environments, providing the stability required by the social care sector.

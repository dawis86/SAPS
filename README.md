# Sociālās aprūpes iestāžu pārvaldības sistēma (SAPS)
### Social Care Institution Management System

**Valoda / Language:** [Latviešu 🇱🇻](#latviešu) | [English 🇬🇧](#english)

<a name="latviešu"></a>
## 🇱🇻 Latviešu versija

### 🛡️ Sistēmas apraksts
"Sociālās aprūpes iestāžu pārvaldības sistēma" ir specializēta darbvirsmas lietojumprogramma, kas izstrādāta, lai digitalizētu un automatizētu klientu datu pārvaldību sociālās aprūpes centros (SAC). Sistēma nodrošina pilnu klienta lietas dzīves cikla pārvaldību – no uzņemšanas līdz izrakstīšanai. Projekts balstīts uz 13+ gadu praktisku pieredzi sociālajā darbā un atbilst MK noteikumiem Nr. 138 un Nr. 291.

* **Versija:** 2.0.0
* **Tips:** Darbvirsmas (Desktop) lietojumprogramma
* **Tehnoloģijas:** Java 21 (LTS), JavaFX 21, MySQL 8.0+

### 🚀 Funkcionalitāte

* **🏠 Sākuma Panelis:** Tuvākās dzimšanas dienas, klientu skaits, dokumentu termiņu brīdinājumi.
* **📇 Klientu Pārvaldība:** Reģistrs ar PK pārbaudi, sociālā anamnēze, novērtēšana, piederīgie.
* **📝 Plānošana:** Aprūpes un rehabilitācijas plāni, protokoli, automātiska Excel ģenerēšana.
* **💊 Medicīna:** Veselības kartes (MK10), medikamentu centrs un pasūtījumu vēsture.
* **📊 Analītika:** Demogrāfija, uzturēšanās ilgums un speciālistu noslodzes analīze.

---

### ⚖️ Tehniskā diskusija: Riski un Pamatojums

#### 🔴 SKEPTIĶA VIEDOKLIS (20 Iemesli kritikai)
1. **Nav mākoņrisinājuma:** Programma piesaistīta datoram, liedzot attālinātu piekļuvi.
2. **Vāja drošība:** Paroles piesaiste datora nosaukumam (`pc_name`) ir nedroša.
3. **Tiešs JDBC lietojums:** Manuāla SQL rakstīšana ir novecojusi un grūti uzturama.
4. **"Dieva" klases:** Kontrolieri ir pārāk lieli, kas palielina kļūdu risku.
5. **Pavedienu pārvaldība:** Manuāls `Task` lietojums var "iesaldēt" lietotāja saskarni.
6. **Nav DI ietvara:** Manuāla injekcija padara kodu trauslu un grūti testējamu.
7. **Bīstama migrācija:** `SchemaManager` manuāli maina shēmu produkcijas vidē.
8. **"Haki" kontrolieros:** "Fallback" loģika apiet servisa slāni.
9. **Ārējā atkarība:** Paļaušanās uz `mysqldump.exe` pieejamību.
10. **Nepabeigta funkcija:** Kontrolieri satur daudzus `// TODO:` komentārus.
11. **Neefektīva ielāde:** Visi dati tiek ielādēti startā, kas palēninās darbību.
12. **Dirty state:** Manuāla `isDirty` karodziņu vadība ir neparedzama.
13. **Primitīvas lomas:** Tikai lietotājs/admin modelis neatbilst iestāžu vajadzībām.
14. **Mērogojamība:** Tiešie DB savienojumi nav paredzēti lielam lietotāju skaitam.
15. **Kriptogrāfija:** Pašizgudroti risinājumi var būt nedrošāki par standartiem.
16. **Kļūdu apstrāde:** Nekonsekventi kļūdu dialogi dažādās sistēmas vietās.
17. **Stringly-typed:** Klasifikatoru nosaukumi kā virknes apgrūtina refaktorēšanu.
18. **Dokumentācija:** Milzīgs `.txt` fails ātri kļūs novecojis.
19. **Trūkst testu:** Nav vienībtestu, kas garantētu biznesa loģikas pareizību.
20. **Tehnoloģiskais risks:** JavaFX apgrūtina jaunu izstrādātāju piesaisti.

#### 🟢 ARHITEKTA ATBILDE (20 Argumenti pamatojumam)
1. **Drošība:** Sistēma garantē pieejamību bez interneta un datu palikšanu iestādē.
2. **Fiziskā kontrole:** Piesaiste darbstacijai atvieglo darbu slēgtās iestādēs.
3. **Veiktspēja:** Izvairīšanās no ORM maģijas ļauj rakstīt optimizētu SQL.
4. **Integritāte:** Centralizēts kontrolieris nodrošina datu vienotību starp cilnēm.
5. **Atsaucība:** Standarta `Task` mehānismi nodrošina precīzu UI kontroli.
6. **Vienkāršība:** Manuāla injekcija ir caurskatāma un palielina ātrdarbību.
7. **Autonomija:** Lietotne pati sevi atjaunina bez IT speciālista klātbūtnes.
8. **Noturība:** "Fallback" saraksti garantē darba nepārtrauktību pie kļūdām.
9. **Uzticamība:** `mysqldump` ir industrijas standarts datu drošībai.
10. **Iteratīva izstrāde:** Skaidrs attīstības plāns, nebloķējot MVP izlaidi.
11. **Kešatmiņa:** Ielāde startā nodrošina momentānu sarakstu atvēršanu.
12. **Precizitāte:** Manuāla kontrole novērš viltus brīdinājumus par saglabāšanu.
13. **Efektivitāte:** "Visi dara visu" modelis atbilst SAC darba realitātei.
14. **Mērķtiecība:** LAN tīklam tiešie savienojumi sniedz viszemāko latentumu.
15. **Licencēšana:** Autonoma parakstu pārbaude strādā bez ārēja servera.
16. **Konteksts:** Kļūdu paziņojumi sniedz specifiskas instrukcijas lietotājam.
17. **Elastība:** Virknes ļauj pievienot klasifikatorus bez pārkompilēšanas.
18. **Atbilstība:** Detalizēta specifikācija ir obligāta prasība auditiem.
19. **Fokuss:** Lietotnē prioritāte ir GUI integrācijas testi, nevis Unit testi.
20. **Stabilitāte:** JavaFX ir stabila LTS tehnoloģija "Rich Client" lietotnēm.

---

<a name="english"></a>
## 🇬🇧 English Version

### 🛡️ System Description
A specialized desktop application designed to digitize and automate client data management for social care centers (SCC). It ensures full lifecycle management of client cases – from admission to discharge, based on 13+ years of professional experience.

* **Version:** 2.0.0
* **Type:** Desktop Application
* **Tech Stack:** Java 21 (LTS), JavaFX 21, MySQL 8.0+

### 🚀 Features

* **🏠 Dashboard:** Upcoming birthdays, client statistics, document deadline alerts.
* **📇 Client Management:** Registry with ID verification, social anamnesis, assessments.
* **📝 Planning:** Care and rehabilitation plans, protocols, automatic Excel export.
* **💊 Medicine:** Health cards (ICD-10), medication center and order history.
* **📊 Analytics:** Demographics, length of stay, and specialist workload analysis.

---

### ⚖️ Technical Discussion: Risks and Rationale

#### 🔴 SKEPTIC'S VIEW (20 Reasons for criticism)
1. **No Cloud:** Tied to hardware, preventing remote teamwork.
2. **Weak Security:** Passwords linked to `pc_name` are easily bypassed.
3. **Direct JDBC:** Manual SQL is outdated and hard to maintain.
4. **God Classes:** Large controllers increase the risk of bugs.
5. **Threading:** Manual `Task` management can freeze the UI.
6. **No DI Framework:** Manual injection makes code fragile.
7. **Dangerous Migration:** `SchemaManager` alters schema in production.
8. **Controller Hacks:** Fallback logic bypasses service layers.
9. **External Deps:** Reliance on `mysqldump.exe` availability.
10. **Incomplete:** Core controllers contain many `// TODO` tags.
11. **Inefficient Loading:** Loading everything at startup slows down launch.
12. **Dirty State:** Manual `isDirty` flags are unpredictable.
13. **Simple Roles:** Basic user/admin model lacks organization depth.
14. **Scalability:** Direct DB connections are not for high user counts.
15. **Custom Crypto:** In-house solutions are potentially insecure.
16. **Error Handling:** Inconsistent error dialogs across the system.
17. **Stringly-typed:** Using strings for classifiers hinders refactoring.
18. **Documentation:** Massive `.txt` files become obsolete quickly.
19. **Lack of Tests:** No unit tests to ensure business logic.
20. **Tech Risk:** JavaFX makes it hard to find new developers.

#### 🟢 ARCHITECT'S RESPONSE (20 Counter-arguments)
1. **Security:** 99.9% availability without internet; data stays local.
2. **Physical Control:** Hardware linking is ideal for closed environments.
3. **Performance:** Avoiding ORM magic allows for optimized SQL queries.
4. **Integrity:** Centralized controllers ensure cross-tab data consistency.
5. **Responsiveness:** Task mechanisms provide precise UI update control.
6. **Simplicity:** Manual injection is transparent and fast.
7. **Autonomy:** The app handles updates without IT assistance.
8. **Resilience:** Fallbacks ensure work continues during DB errors.
9. **Reliability:** `mysqldump` is the industry standard for backups.
10. **Iterative:** Clear roadmap for growth without blocking MVP.
11. **Caching:** Eager loading makes daily operations instantaneous.
12. **Precision:** Manual control prevents false "save" warnings.
13. **Efficiency:** "Everyone does everything" fits real SCC workflows.
14. **Focus:** Direct connections offer lowest latency for LAN setups.
15. **Licensing:** RSA signatures work without external servers.
16. **Context:** Error messages provide actionable user instructions.
17. **Flexibility:** Strings allow data changes without recompiling code.
18. **Compliance:** Detailed documentation is required for audits.
19. **Focus:** UI integration testing is prioritized over Unit tests.
20. **Stability:** JavaFX is a mature LTS technology for desktop apps.

---

### 👤 Author
**Dāvis Strazds**
Email: `davisstrazds@gmail.com` | Phone: `+371 26482667`

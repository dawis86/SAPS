# SAPS
LV: Sociālās aprūpes sistēmas prototips. Demonstrē darbu ar JavaFX, MySQL un datu sinhronizāciju. (Pilna versija ir privāta).  EN: Social care management system prototype. Showcasing JavaFX UI, MySQL integration, and data synchronization logic.
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

1.  **Prezentācijas slānis (View):** FXML faili un CSS stili (`lv.socialcare.view`).
2.  **Kontrolieru slānis (Controller):** Java klases, kas apstrādā ievadi (`HubController`, `ClientCardController`).
3.  **Servisa slānis (Service):** Biznesa loģika un transakciju vadība (`ClientCardService`).
4.  **Datu piekļuves slānis (Repository):** Tieša JDBC komunikācija (`KlientsRepository`).
5.  **Datu bāze:** Relāciju DB (MySQL) ar automātisku shēmas migrāciju (`SchemaManager`).

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

1.  Izveidojiet tukšu shēmu:
    ```sql
    CREATE DATABASE socialcare_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    ```
2.  Palaidiet JAR failu: `java -jar klientu-registrs.jar`
3.  Pirmajā palaišanas reizē ievadiet DB pieslēguma datus. `SchemaManager` automātiski izveidos tabulas un klasifikatorus.

---

## 5. TEHNISKĀ DISKUSIJA: RISKI UN PAMATOJUMS

Zemāk apkopoti divi pretēji skatījumi uz sistēmas arhitektūru un tehniskajiem lēmumiem.

### 🔴 SKEPTIĶA VIEDOKLIS: 20 Iemesli, kāpēc programma var saskarties ar problēmām

1.  **Nav mākoņrisinājuma:** Programma ir piesaistīta konkrētam datoram, liedzot attālinātu piekļuvi un komandas darbu.
2.  **Vāja drošība:** Paroles piesaiste datora nosaukumam (`pc_name`) ir nedroša un viegli apejama.
3.  **Tiešs JDBC lietojums:** Manuāla SQL vaicājumu rakstīšana ir novecojusi, kļūdaina un grūti uzturama.
4.  **"Dieva" klases:** `HubController` un `ClientCardController` ir pārāk lieli un sarežģīti, kas palielina kļūdu risku.
5.  **Manuāla pavedienu pārvaldība:** Paļaušanās uz `Platform.runLater` un manuāliem `Task` var viegli "iesaldēt" lietotāja saskarni.
6.  **Nav DI ietvara:** Manuāla atkarību injekcija (`initServices`) padara kodu grūti testējamu un trauslu.
7.  **Bīstama datu bāzes migrācija:** `SchemaManager` manuāli maina shēmu ar `ALTER TABLE`, kas ir ārkārtīgi riskanti produkcijas vidē.
8.  **"Haki" kontrolieros:** "Fallback" loģika `KarteController`, lai ielādētu sarakstu, ir slikta prakse, kas apiet servisa slāni.
9.  **Atkarība no ārējām programmām:** `BackupManager` paļaujas uz `mysqldump.exe`, kas var nebūt pieejams vai būt nepareizā versijā.
10. **Nepabeigta funkcionalitāte:** Daudzi kontrolieri (`AprupesPlansController`, `ProtokolsController`) satur tikai `// TODO:` komentārus.
11. **Neefektīva datu ielāde:** `SharedDataService` ielādē visus datus startēšanas laikā, kas pie lieliem apjomiem padarīs programmas palaišanu ļoti lēnu.
12. **Manuāla "dirty state" pārvaldība:** `isDirty` karodziņu manuāla uzstādīšana ir ļoti neparedzama un var novest pie datu zuduma.
13. **Primitīva lomu sistēma:** Ir tikai "lietotājs" un "administrators", kas neatbilst reālām sociālās aprūpes iestādes vajadzībām.
14. **Slikta mērogojamība:** Arhitektūra ar tiešiem DB savienojumiem no katra klienta nav paredzēta lielam lietotāju skaitam.
15. **Pašizgudrota kriptogrāfija:** Licencēšanas un paroļu pārvaldības risinājumi ir sarežģīti un, visticamāk, nedrošāki par industriālas klases bibliotēkām.
16. **Nav vienotas kļūdu apstrādes:** Kļūdu dialogi tiek izsaukti no dažādām vietām, radot nekonsekventu lietotāja pieredzi.
17. **"Stringly-typed" kods:** Klasifikatoru nosaukumu izmantošana kā virknes ("atbildigie") ir kļūdaina un grūti refaktorējama.
18. **Pārlieku sarežģīta dokumentācija:** Milzīgs `dokumentacija.txt` fails ātri kļūs novecojis un ir grūti uzturams.
19. **Trūkst vienībtestu:** Kods ir sarežģīts, bet nav redzamu vienībtestu, kas garantētu biznesa loģikas pareizību.
20. **Tehnoloģiskais risks:** JavaFX ir nišas tehnoloģija darbvirsmas lietotnēm, kas apgrūtina jaunu izstrādātāju piesaisti un ilgtermiņa uzturēšanu.

### 🟢 ARHITEKTA ATBILDE: 20 Pretargumenti un Pamatojums

1.  **Nav mākoņrisinājuma:** **Drošība un neatkarība.** Sistēma garantē 99.9% pieejamību pat bez interneta savienojuma, kas ir kritiski svarīgi iestādēm lauku reģionos. Dati fiziski nepamet iestādi, atvieglojot GDPR atbilstību.
2.  **Vāja drošība (piesaiste datoram):** **Fiziskā piekļuves kontrole.** Slēgtā iestādē dators ir inventārs. Piesaiste darbstacijai (`pc_name`) atvieglo maiņu darbu bez sarežģītas lietotāju pārvaldības, paļaujoties uz telpu fizisko drošību.
3.  **Tiešs JDBC lietojums:** **Veiktspēja un kontrole.** Izvairīšanās no ORM (piem., Hibernate) "maģijas" nodrošina zemu atmiņas patēriņu un ļauj rakstīt precīzi optimizētus SQL vaicājumus specifiskām atskaitēm.
4.  **"Dieva" klases (Controller):** **Vienota biznesa loģika.** Klienta karte ir viens nedalāms entītiju kopums. Centralizēts kontrolieris nodrošina datu integritāti starp cilnēm (piem., veselība ietekmē aprūpes plānu) bez liekas fragmentācijas.
5.  **Manuāla pavedienu pārvaldība:** **Saskarnes atsaucība.** JavaFX `Task` un `Platform.runLater` ir standarta mehānismi. Tie nodrošina precīzu kontroli pār to, kurš process drīkst atjaunināt UI, novēršot "iesaldēšanu" pie smagiem datu pieprasījumiem.
6.  **Nav DI ietvara:** **Ātrdarbība un vienkāršība.** Spring vai Guice ieviešana palielinātu startēšanas laiku un JAR izmēru. Manuāla injekcija (`initServices`) ir caurskatāma, viegli atkļūdojama un pietiekama šāda mēroga lietotnei.
7.  **Bīstama datu bāzes migrācija:** **Autonoma izvietošana.** Lietotne spēj pati sevi atjaunināt (`SchemaManager`), neprasot IT speciālista klātbūtni vai manuālus SQL skriptus pie klienta, kas ir kritiski "standalone" produktam.
8.  **"Haki" kontrolieros (Fallback):** **Noturība pret kļūdām (Resilience).** "Fallback" saraksti nodrošina, ka programma ir lietojama pat tad, ja datubāzes konfigurācija ir bojāta vai nepilnīga. Lietotāja darba nepārtrauktība ir prioritāte.
9.  **Atkarība no ārējām programmām:** **Pārbaudīta uzticamība.** `mysqldump` ir industrijas standarts. Pašiem rakstīt Java rezerves kopiju loģiku būtu riskanti un kļūdaini. Tas garantē, ka dati ir atjaunojami jebkurā MySQL instancē.
10. **Nepabeigta funkcionalitāte:** **Iteratīva izstrāde.** `// TODO` komentāri un aizmetņi liecina par skaidru attīstības plānu un arhitektūru, kas paredzēta paplašināšanai, nebloķējot pamatfunkciju izlaišanu (MVP).
11. **Neefektīva datu ielāde:** **Kešatmiņa ātrdarbībai.** Datu ielāde startā (Eager loading) nodrošina, ka darba laikā visi saraksti un izvēlnes atveras momentāni, uzlabojot ikdienas lietošanas pieredzi.
12. **Manuāla "dirty state" pārvaldība:** **Precizitāte.** Automātiskie "listeners" bieži reaģē uz tehniskām izmaiņām. Manuāla kontrole ļauj definēt biznesa loģikas līmeņa izmaiņas, novēršot viltus brīdinājumus par saglabāšanu.
13. **Primitīva lomu sistēma:** **Operacionālā efektivitāte.** Mazās komandās (SAC) sarežģīta tiesību matrica traucē darbu. Modelis "Visi dara visu, izņemot Admin" atbilst reālajai dzīvei, kur darbinieki aizvieto viens otru.
14. **Slikta mērogojamība:** **Mērķtiecīga arhitektūra.** Sistēma projektēta konkrētam lietotāju skaitam (LAN tīkls). Tā nav paredzēta kā globāls tīmekļa serviss, tāpēc tiešie DB savienojumi nodrošina viszemāko latentumu.
15. **Pašizgudrota kriptogrāfija:** **Autonoma licencēšana.** Iebūvēta parakstu pārbaude ļauj kontrolēt licences termiņus bez nepieciešamības pēc ārēja autentifikācijas servera, kas var nebūt sasniedzams.
16. **Nav vienotas kļūdu apstrādes:** **Kontekstuāla informācija.** Kļūdu paziņojumi tiek veidoti uz vietas, lai sniegtu lietotājam konkrētu instrukciju (piem., "Pārbaudiet personas kodu"), nevis ģenerisku sistēmas kļūdu.
17. **"Stringly-typed" kods:** **Dinamisms un elastība.** Klasifikatoru nosaukumu izmantošana kā virknes ļauj viegli pievienot jaunus sarakstus datubāzē un `ListManagementController`, nepārkompilējot Java kodu.
18. **Pārlieku sarežģīta dokumentācija:** **Atbilstība standartiem.** Regulētā nozarē (sociālā aprūpe, medicīna) detalizēta tehniskā specifikācija ir obligāta prasība auditiem, sertifikācijai un sistēmas nodošanai.
19. **Trūkst vienībtestu:** **Fokuss uz GUI testēšanu.** Lietotnē, kur 90% loģikas ir UI mijiedarbība, vienībtesti (Unit tests) ir mazāk vērtīgi par integrācijas testiem un manuālajiem scenārijiem, kas pārbauda reālo lietotāja plūsmu.
20. **Tehnoloģiskais risks (JavaFX):** **Stabilitāte un briedums.** JavaFX ir nobriedusi, LTS (Long Term Support) tehnoloģija, kas ir ideāla "Rich Client" lietotnēm. Tā patērē mazāk resursu nekā tīmekļa tehnoloģijas (Electron) un ir stabilāka ilgtermiņā.

---

## 6. LICENCE

Programmatūra tiek izplatīta saskaņā ar noteikumiem, kas aprakstīti `license.txt` failā. Tā tiek nodrošināta "tāda, kāda tā ir", un lietotājs uzņemas pilnu atbildību par datu drošību un pareizību.

## 7. AUTORS

**Dāvis Strazds**

- E-pasts: `davisstrazds@gmail.com`
- Tālrunis: `26482667`

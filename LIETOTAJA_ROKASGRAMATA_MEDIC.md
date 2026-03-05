# Klientu Reģistrs - Medicīniskā personāla rokasgrāmata

**Versija:** 2.1.0  
**Loma:** Medicīniskais darbinieks  
**Izstrādātājs:** Dāvis Strazds  

---

## SATURA RĀDĪTĀJS

1. [IEVADS](#1-ievads)
2. [PIEKĻUVE UN AUTENTIFIKĀCIJA](#2-piekļuve-un-autentifikācija)
3. [MEDICĪNISKĀS INFORMĀCIJAS PĀRVALDĪBA](#3-medicīniskās-informācijas-pārvaldība)
4. [MEDIKAMENTU PĀRVALDĪBA](#4-medikamentu-pārvaldība)
5. [VEIDLAPU SAGATAVOŠANA](#5-veidlapu-sagatavošana)
6. [STATISTIKA UN ATSKAITES](#6-statistika-un-atskaites)
7. [DOKUMENTĀCIJAS EKSPORTS](#7-dokumentācijas-ekports)
8. [DROŠĪBAS PASĀKUMI](#8-drošības-pasākumi)
9. [BIEDĪGI PADOMI](#9-biedīgi-padomi)
10. [PROBLĒMU NOVĒRŠANA](#10-problēmu-novēršana)

---

## 1. IEVADS

### 1.1. Medicīniskā personāla atbildība

Kā medicīniskais darbinieks jums ir pieejamas šādas funkcijas:
- Klientu veselības kartes pārvaldība
- Diagnožu un medikamentu uzskaite
- Medikamentu pasūtījumu veidošana
- Veidlapu sagatavošana slimnīcām
- Medicīnisko datu statistika

### 1.2. Sistētas medicīniskās funkcijas

**Galvenās medicīniskās funkcijas:**
- Veselības kartes izveide un uzturēšana
- Diagnožu reģistrēšana (MK-10 klasifikācija)
- Medikamentu sarakstu pārvaldība
- Medikamentu pasūtījumu centrs
- Veidlapu ģenerēšana stacionēšanai
- Medicīnisko datu eksports

---

## 2. PIEKĻUVE UN AUTENTIFIKĀCIJA

### 2.1. Pieslēgšanās process

1. **Palaidiet programmu:**
   - Atveriet Start izvēlni
   - Meklējiet "Klientu Reģistrs"
   - Spiediet uz programmas ikonas

2. **Ievadiet pieteikšanās datus:**
   ```
   Lietotājvārds: [jūsu lietotājvārds]
   Parole: [jūsu parole]
   ```

3. **Medicīniskās personas saskarne:**
   Pēc veiksmīgas pieteikšanās nonāksiet galvenajā panelī ar medicīniskajām funkcijām.

### 2.2. Medicīniskās personas tiesības

Jūsu loma (MEDIC) ļauj piekļūt:
- ✅ Klientu veselības datiem
- ✅ Medikamentu pārvaldībai
- ✅ Veidlapu sagatavošanai
- ✅ Medicīniskai statistikai
- ❌ Klientu reģistrācijai
- ❌ Plānu izveidei
- ❌ Administratīvajām funkcijām

---

## 3. MEDICĪNISKĀS INFORMĀCIJAS PĀRVALDĪBA

### 3.1. Veselības kartes atvēršana

1. **Atrodiet klientu:**
   - Galvenais panelis → Klientu saraksts
   - Meklējiet pēc vārda, uzvārda vai personas koda
   - Dubultklikšķis uz klienta

2. **Atveriet veselības karti:**
   - Klienta kartes cilnēs izvēlieties **"Veselības karte"**
   - Jūs redzēsiet klienta medicīniskās informācijas veidlapu

### 3.2. Veselības kartes aizpildīšana

#### 3.2.1. Pamatinformācija

```
┌─────────────────────────────────────────────────────────────┐
│                    VESĪBAS KARTE                         │
├─────────────────────────────────────────────────────────────┤
│ Klients: Jānis Bērziņš (PK: 161175-19997)             │
│ Dzimšanas datums: 16.11.1975                           │
├─────────────────────────────────────────────────────────────┤
│ ANAMNĒZE                                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Hroniskās slimības:                                  │ │
│ │ [_________________________________________]        │ │
│ │                                                         │ │
│ │ Alerģijas:                                            │ │
│ │ [_________________________________________]        │ │
│ │                                                         │ │
│ │ Iepriekšējās hospitalizācijas:                         │ │
│ │ [_________________________________________]        │ │
│ │                                                         │ │
│ │ Ģimenes anamnēze:                                      │ │
│ │ [_________________________________________]        │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ PAŠREIZĒJĀ STĀVOKLIS                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Galvenie sūdzībi:                                     │ │
│ │ [_________________________________________]        │ │
│ │                                                         │ │
│ │ Fiziskā pārbaude:                                      │ │
│ │ [_________________________________________]        │ │
│ │                                                         │ │
│ │ Vitalie rādītāji:                                     │ │
│ │ Asinsspiediens: [___]/[___] mmHg                       │ │
│ │ Pulss: [____] sit/min                                  │ │
│ │ Temperatūra: [____] °C                                │ │
│ │ Svars: [____] kg                                       │ │
│ │ Augums: [____] cm                                      │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

#### 3.2.2. Diagnožu pievienošana

1. **Pievienojiet diagnozi:**
   - Spiediet pogu "Pievienot diagnozi"
   - Izvēlieties diagnozi no MK-10 saraksta
   - Norādiet diagnozes veidu (galvenā/papildus)
   - Ievadiet diagnozes aprakstu un datumu

2. **Diagnožu saraksts:**
   ```
   ┌─────────────────────────────────────────────────────────────┐
   │ DIAGNŌZU SARAKSTS                                        │
   ├─────────────────────────────────────────────────────────────┤
   │ I10.1 - Esenciālā hipertensija (Galvenā) 15.01.2024     │
   │ E11.2 - Cukura diabēts ar nieru komplikācijām      │
   │         (Papildus) 20.03.2023                           │
   │ I25.1 - Aterosklerotiska sirds slimība (Galvenā)        │
   │         10.11.2022                                      │
   │                                                         │
   │ [Pievienot] [Rediģēt] [Dzēst]                         │
   └─────────────────────────────────────────────────────────────┘
   ```

### 3.3. Medikamentu saraksts

#### 3.3.1. Pašreizējie medikamenti

```
┌─────────────────────────────────────────────────────────────┐
│ PAŠREIZĒJIE MEDIKAMENTI                                   │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Zāles: Metoprolols                                     │ │
│ │ Deva: 50mg                                             │ │
│ │ Biežums: 2x dienā                                     │ │
│ │ Ceļš: Perorāli                                         │ │
│ │ Sākuma datums: 15.01.2024                              │ │
│ │ Beigu datums: [________________]                        │ │
│ │                                                         │ │
│ │ Zāles: Metformīns                                       │ │
│ │ Deva: 1000mg                                           │ │
│ │ Biežums: 2x dienā                                     │ │
│ │ Ceļš: Perorāli                                         │ │
│ │ Sākuma datums: 20.03.2023                              │ │
│ │ Beigu datums: [________________]                        │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                         │
│ [Pievienot medikamentu] [Eksportēt sarakstu]            │
└─────────────────────────────────────────────────────────────┘
```

#### 3.3.2. Medikamenta pievienošana

1. **Spiediet "Pievienot medikamentu"**
2. **Aizpildiet veidlapu:**
   - Zāļu nosaukums (izvēle no saraksta)
   - Deva un forma
   - Biežums un ceļš
   - Sākuma un beigu datumi
   - Norīkojuma apraksts
   - Ārsta vārds

---

## 4. MEDIKAMENTU PĀRVALDĪBA

### 4.1. Medikamentu pasūtījumu centrs

1. **Piekļūstiet pasūtījumu centram:**
   - Galvenais panelis → Medikamentu centrs

2. **Pasūtījumu saraksts:**
   ```
   ┌─────────────────────────────────────────────────────────────┐
   │ MEDIKAMENTU PASŪTĪJUMU CENTRS                           │
   ├─────────────────────────────────────────────────────────────┤
│ [Izveidot jaunu pasūtījumu] [Aktīvie] [Pabeigti] [Vēsture] │
   ├─────────────────────────────────────────────────────────────┤
   │ PASŪTĪJUMS #001 (Aktīvs)                               │
   │ Izveidots: 15.01.2024                                   │
   │ Termiņš: 25.01.2024                                    │
   │ Statuss: Gaida apstiprinājumu                           │
   │                                                         │
   │ ┌─────────────────────────────────────────────────────────┐ │
   │ │ Rinda │ Zāles                │ Deva   │ Daudzums  │ │
   │ ├─────────────────────────────────────────────────────────┤ │
   │ │ 1    │ Metoprolols          │ 50mg   │ 100 tbl.  │ │
   │ │ 2    │ Metformīns           │ 1000mg │ 200 tbl.  │ │
   │ │ 3    │ Amlodipīns           │ 10mg   │ 50 tbl.   │ │
   │ │ 4    │ Atorvastatīns        │ 20mg   │ 100 tbl.  │ │
   │ │                                                         │ │
   │ │ [Pievienot zāles] [Eksportēt] [Nosūtīt]               │ │
   │ └─────────────────────────────────────────────────────────┘ │
   └─────────────────────────────────────────────────────────────┘
   ```

### 4.2. Jauna pasūtījuma izveide

1. **Spiediet "Izveidot jaunu pasūtījumu"**
2. **Aizpildiet pamatinformāciju:**
   - Pasūtījuma numurs (automātiski)
   - Izveidošanas datums
   - Vēlamais saņemšanas datums
   - Pasūtītājs (jūsu vārds)
   - Apstiprinātājs (vadītājs)

3. **Pievienojiet medikamentus:**
   - Meklējiet zāles pēc nosaukuma
   - Izvēlieties devu un formu
   - Ievadiet nepieciešamo daudzumu
   - Pievienojiet komentārus

### 4.3. Pasūtījuma pārvaldība

#### 4.3.1. Statusu pārvaldība

**Pasūtījuma statusi:**
- **DRAFT:** Melnraksts
- **PENDING:** Gaida apstiprinājumu
- **APPROVED:** Apstiprināts
- **ORDERED:** Pasūtīts piegādātājam
- **RECEIVED:** Saņemts
- **COMPLETED:** Pabeigts
- **CANCELLED:** Atcelts

#### 4.3.2. Darbības ar pasūtījumu

```
┌─────────────────────────────────────────────────────────────┐
│ PASŪTĪJUMA DARĪBAS                                      │
├─────────────────────────────────────────────────────────────┤
│ [Rediģēt]     [Apstiprināt] [Pasūtīt] [Saņemt]         │
│ [Drukāt]      [Eksportēt] [Vēsture] [Komentāri]         │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. VEIDLAPU SAGATAVOŠANA

### 5.1. Veidlapu slimnīcai izveide

1. **Piekļūstiet veidlapu veidotājam:**
   - Galvenais panelis → Veidlapas slimnīcai

2. **Izvēlieties klientu:**
   - Meklējiet klientu pēc vārda vai personas koda
   - Izvēlieties nepieciešamo klientu

3. **Veidlapas satura apskate:**
   ```
   ┌─────────────────────────────────────────────────────────────┐
   │ VEIDLAPA STACIONĒŠANAI                                  │
   ├─────────────────────────────────────────────────────────────┤
   │ IESTĀDES INFORMĀCIJA                                    │
   │ Nosaukums: [Sociālās aprūpes centrs "Ziedonis"]       │
   │ Adrese:    [Rīgas iela 1, Rīga, LV-1001]              │
   │ Tālrunis:  [29123456]                                  │
   │ E-pasts:   [info@ziedonis.lv]                           │
   ├─────────────────────────────────────────────────────────────┤
   │ KLIENTA INFORMĀCIJA                                      │
   │ Vārds, uzvārds: Jānis Bērziņš                         │
   │ Personas kods: 161175-19997                              │
   │ Dzimšanas datums: 16.11.1975                            │
   │ Adrese:        Brīvības iela 123, Rīga                 │
   ├─────────────────────────────────────────────────────────────┤
   │ MEDICĪNISKĀ INFORMĀCIJA                                 │
   │ ┌─────────────────────────────────────────────────────────┐ │
   │ │ Galvenās diagnozes:                                   │ │
   │ │ • I10.1 - Esenciālā hipertensija                     │ │
   │ │ • E11.2 - Cukura diabēts ar nieru komplikācijām     │ │
   │ │                                                         │ │
   │ │ Pašreizējie medikamenti:                               │ │
   │ │ • Metoprolols 50mg 2x dienā                           │ │
   │ │ • Metformīns 1000mg 2x dienā                         │ │
   │ │ • Amlodipīns 10mg 1x dienā                           │ │
   │ └─────────────────────────────────────────────────────────┘ │
   ├─────────────────────────────────────────────────────────────┤
   │ HOSPITALIZĀCIJAS INFORMĀCIJA                             │
   │ Hospitalizācijas iemesls:                                │
   │ [Veselības stāvokļa pasliktināšanās]                   │
   │                                                         │
   │ Plānotās izmeklēšanas:                                  │
   │ [Asins analīzes, EKG, Sirds ultraskaņa]                   │
   │                                                         │
   │ Hospitalizācijas nodaļa:                                 │
   │ [Terapijas nodaļa]                                      │
   │                                                         │
   │ Atbildīgais ārsts:                                       │
   │ [Dr. Anna Ozola]                                        │
   └─────────────────────────────────────────────────────────────┘
   ```

### 5.2. Veidlapas eksportēšana

1. **Pārbaudiet datus:**
   - Pārskatiet visu veidlapas saturu
   - Pārliecinieties, ka visas nepieciešamās informācija ir aizpildīta

2. **Eksportējiet veidlapu:**
   - Spiediet pogu "Eksportēt"
   - Izvēlieties formātu (PDF vai Word)
   - Izvēlieties saglabāšanas vietu

3. **Drukāšanas opcijas:**
   - Spiediet "Drukāt"
   - Izvēlieties printeri
   - Pārbaudiet drukāšanas iestatījumus

---

## 6. STATISTIKA UN ATSKAITES

### 6.1. Medicīniskā statistika

1. **Piekļūstiet statistikai:**
   - Galvenais panelis → Statistika → Medicīniskā statistika

2. **Pieejamie statistikas veidi:**
   - Klientu veselības stāvokļa sadalījums
   - Diagnožu statistika
   - Medikamentu lietošanas statistika
   - Hospitalizāciju statistika

### 6.2. Diagnožu statistika

```
┌─────────────────────────────────────────────────────────────┐
│ DIAGNŌŽU STATISTIKA (2024)                               │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ MK-10 KODS | SLIMĪBA                     | SKAITS │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ I10        | Esenciālā hipertensija      │ 45     │ │
│ │ E11        | Cukura diabēts              │ 23     │ │
│ │ I25        | Išēmiska sirds slimība      │ 18     │ │
│ │ F32        | Depresīvas epizodes          │ 12     │ │
│ │ G20        | Parkinsona slimība           │ 8      │ │
│ │                                                         │ │
│ │ KOPĀ: 106 klienti ar diagnozēm                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Eksportēt] [Drukāt]              │
└─────────────────────────────────────────────────────────────┘
```

### 6.3. Medikamentu statistika

```
┌─────────────────────────────────────────────────────────────┐
│ MEDIKAMENTU LIETOŠANAS STATISTIKA                         │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ZĀLES              | KLIENTI | VIDĒJA DEVA (dienā)   │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ Metoprolols         │ 45      │ 75mg                  │ │
│ │ Metformīns          │ 23      │ 1500mg                │ │
│ │ Amlodipīns         │ 18      │ 10mg                  │ │
│ │ Atorvastatīns      │ 15      │ 20mg                  │ │
│ │ Sertralīns         │ 12      │ 50mg                  │ │
│ │                                                         │ │
│ │ Kopā: 113 medikamentu receptes                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Eksportēt] [Drukāt]              │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. DOKUMENTĀCIJAS EKSPORTS

### 7.1. Veselības kartes eksports

1. **Atveriet klienta veselības karti**
2. **Spiediet "Eksportēt":**
   - Izvēlieties formātu (PDF, Word, Excel)
   - Izvēlieties, kādu informāciju iekļaut:
     - ✅ Pamatinformācija
     - ✅ Anamnēze
     - ✅ Diagnozes
     - ✅ Medikamenti
     - ✅ Vitalie rādītāji
     - ✅ Laboratorijas analīzes

### 7.2. Medikamentu saraksta eksports

1. **Medikamentu centrs → Eksports**
2. **Eksporta opcijas:**
   - Aktīvie medikamenti
   - Visi medikamenti (ieskaitot pārtrauktos)
   - Pašreizējā mēneša pasūtījumi
   - Pasūtījumu vēsture

### 7.3. Statistikas eksports

1. **Statistika → Eksports**
2. **Izvēlieties periodu:**
   - Pēdējā mēnesis
   - Pēdējie 3 mēneši
   - Pēdējais gads
   - Pielāgots periods

3. **Eksporta formāti:**
   - Excel (datu analīzei)
   - PDF (atskaitēm)
   - CSV (importēšanai citās sistēmās)

---

## 8. DROŠĪBAS PASĀKUMI

### 8.1. Medicīnisko datu konfidencialitāte

**Svarīgi noteikumi:**
- Neatslēdziet no sistēmas, kamēr veselības karte ir atvērta
- Nekopējiet sensitīvu informāciju uz privātām ierīcēm
- Izmantojiet tikai darba paredzētos datorus
- Ziņojiet par aizdomīgām darbībām administratoram

### 8.2. Datu ievades prasības

**Medikamentu nosaukumi:**
- Izmantojiet tikai reģistrētus zāļu nosaukumus
- Pārbaudiet devas un formu precizitāti
- Norādiet devas vienības (mg, ml, tbl, kaps.)

**Diagnožu kodi:**
- Izmantojiet MK-10 klasifikācijas kodus
- Norādiet diagnozes pilnos nosaukumus
- Atzīmējiet galvenās un papildus diagnozes

### 8.3. Darba plūsmas drošība

1. **Pirms darba sākšanas:**
   - Pārbaudiet, vai esat pieslēdzies ar savu kontu
   - Pārliecinieties, ka sistēma ir atjaunināta
   - Pārbaudiet, vai printeris darbojas (ja nepieciešams)

2. **Darba laikā:**
   - Saglabājiet datus regulāri
   - Nepametiet atvērtu klienta karti bez uzraudzības
   - Pārbaudiet datu pareizību pirms saglabāšanas

3. **Pēc darba beigām:**
   - Saglabājiet visus atvērtos datus
   - Izrakstieties no sistēmas
   - Noslēdziet darbstaciju

---

## 9. BIEDĪGI PADOMI

### 9.1. Efektīva darba veidi

**Sākuma ekrāna pielāgošana:**
- Pievienojiet biežāk lietotās funkcijas sākuma ekrānam
- Izveidojiet saīsnes biežāk meklētajiem klientiem
- Iestatiet noklusējumus filtriem

**Meklēšanas optimizācija:**
- Izmantojiet personas koda meklēšanu precīzai identifikācijai
- Saglabājiet biežāk lietotās meklēšanas frāzes
- Izmantojiet filtrus, lai samazinātu rezultātu skaitu

### 9.2. Kļūdu novēršana

**Biežākās kļūdas un to novēršana:**
- **Nepareiza deva:** Vienmēr pārbaudiet devas un formu
- **Aizmirsta saglabāšana:** Saglabājiet datus pēc katras nozīmīgas izmaiņas
- **Nepareizs diagnožu kods:** Izmantojiet MK-10 koda validāciju
- **Dublikātu medikamenti:** Pārbaudiet, vai medikaments jau nav sarakstā

### 9.3. Sadarbība ar citām nodaļām

**Informācijas apmaiņa:**
- Sociālajiem darbiniekiem: par klienta kopējo stāvokli
- Māsām: par medikamentu dozēm un administrēšanu
- Administrācijai: par medikamentu pasūtījumiem

**Dokumentācijas saskaņošana:**
- Pārliecinieties, ka veselības karte ir saskaņota ar aprūpes plānu
- Koordinējiet medikamentu izmaiņas ar atbildīgo ārstu
- Veiciet regulārus veselības kartes pārskatus

---

## 10. PROBLĒMU NOVĒRŠANA

### 10.1. Biežākās problēmas

#### 10.1.1. Nevar atrast klientu

**Iespējamie iemesli:**
- Nepareizi ievadīts vārds vai personas kods
- Klients ir reģistrēts citā statusā
- Meklēšanas filtri ir pārāk aktīvi

**Risinājumi:**
1. Pārbaudiet vārdu un uzvārdu pareizrakstību
2. Mēģiniet meklēt pēc personas koda
4. Atstatiet visus filtrus
5. Sazinieties ar administratoru, ja problēma atkārtojas

#### 10.1.2. Medikaments nav atrodams sarakstā

**Iespējamie iemesli:**
- Medikaments nav reģistrēts sistēmā
- Nepareiza nosaukuma rakstība
- Medikaments ir deaktivēts

**Risinājumi:**
1. Pārbaudiet medikamenta nosaukuma pareizrakstību
2. Mēģiniet meklēt pēc aktīvās vielas
3. Sazinieties ar administratoru, lai pievienotu jaunu medikamentu
4. Pārbaudiet, vai medikaments nav reģistrēts citā nosaukumā

#### 10.1.3. Veidlapu nevar eksportēt

**Iespējamie iemesli:**
- Nav atvērta klienta karte
- Trūkst nepieciešamā informācija
- Printeris nav pieejams

**Risinājumi:**
1. Pārliecinieties, ka klienta karte ir atvērta
2. Pārbaudiet, vai visi obligātie lauki ir aizpildīti
3. Pārbaudiet printeri un drukāšanas iestatījumus
4. Mēģiniet eksportēt citā formātā

### 10.2. Tehniskā palīdzība

#### 10.2.1. Sistēmas kļūdu ziņošana

Ja sastopat tehnisku problēmu:
1. **Uzņemiet ekrānattēlu** (ja iespējams)
2. **Ierakstiet kļūdas paziņojumu** precīzi
3. **Norādiet darbības secību:** ko darījāt pirms kļūdas parādīšanās
4. **Sazinieties ar administratoru:**
   - E-pasts: davisstrazds@gmail.com
   - Tālrunis: +371 26482667

#### 10.2.2. Pašpalīdzības darbības

**Ja programma aizkaras:**
1. Gaidiet 1-2 minūtes (var notikt datu apstrāde)
2. Mēģiniet aizvērt programmu (Ctrl+Alt+Delete)
3. Pārstartējiet datoru
4. Ja problēma atkārtojas, sazinieties ar IT atbalstu

**Ja dati netiek saglabāti:**
1. Pārbaudiet interneta savienojumu
2. Pārbaudiet, vai visi obligātie lauki ir aizpildīti
3. Mēģiniet saglabāt vēlreiz
4. Ja problēma atkārtojas, ziņojiet administratoram

---

## PIELIKUMI

### Pielikums A: MK-10 biežāk sastopamie kodi

| Kods | Nosaukums | Apraksts |
|------|------------|----------|
| I10 | Esenciālā hipertensija | Augsts asinsspiediens |
| E11 | Cukura diabēts | Cukura slimība |
| I25 | Išēmiska sirds slimība | Koronārā sirds slimība |
| F32 | Depresīvā epizode | Depresija |
| G20 | Parkinsona slimība | Parkinsons |
| I50 | Sirds mazspēja | Sirds nepietiekama darbība |
| J44 | Hroniska obstruktīva plaušu slimība | HOPP |
| N18 | Hroniska nieru slimība | Nieru mazspēja |

### Pielikums B: Medikamentu devu tabulas

| Medikaments | Parastā deva | Maksimālā deva | Biežums |
|-------------|---------------|------------------|----------|
| Metoprolols | 25-100mg | 400mg | 1-2x dienā |
| Metformīns | 500-1000mg | 3000mg | 2-3x dienā |
| Amlodipīns | 5-10mg | 10mg | 1x dienā |
| Atorvastatīns | 10-80mg | 80mg | 1x dienā |
| Sertralīns | 50-200mg | 200mg | 1x dienā |

### Pielikums C: Noderīgi kontakti

**Tehniskais atbalsts:**
- E-pasts: davisstrazds@gmail.com
- Tālrunis: +371 26482667
- Darba laiks: Darbdienās 9:00-18:00

**Narkotiku un psihotropo vielu valsts dienests:**
- Tālrunis: 67031234
- Mājas lapa: www.nvpd.gov.lv

**Valsts medicīnas komisija:**
- Tālrunis: 67045555
- Mājas lapa: www.vmk.gov.lv

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī rokasgrāmata ir paredzēta medicīniskajam personālam un satur konfidenciālu informāciju. Tās izplatīšana bez atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2024. gada 15. janvārī*

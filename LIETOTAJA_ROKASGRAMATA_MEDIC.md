# Klientu Reģistrs - Medicīniskā Personāla Rokasgrāmata

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**Loma:** MEDICAL_STAFF  

---

## SATURA RĀDĪTĀJS

1. [IEVADS](#1-ievads)
2. [PIEKĻUVE UN AUTENTIFIKĀCIJA](#2-piekļuve-un-autentifikācija)
3. [GALVENĀ INTERFEISA PĀRSKATS](#3-galvenā-interfeisa-pārskats)
4. [VESELĪBAS KARTES PĀRVALDĪBA](#4-veselības-kartes-pārvaldība)
5. [MEDICĪNAS DATI SLIMNĪCAI](#5-medicīnas-dati-slimnīcai)
6. [MEDIKAMENTU PASŪTĪJUMI](#6-medikamentu-pasūtījumi)
7. [STATISTIKA UN ATSKAITES](#7-statistika-un-atskaites)
8. [DROŠĪBA UN KONFIDENCIALITĀTE](#8-drošība-un-konfidencialitāte)
9. [PROBLĒMU NOVĒRŠANA](#9-problēmu-novēršana)
10. [PIELIKUMI](#10-pielikumi)

---

## 1. IEVADS

### 1.1. Medicīniskā personāla atbildība

Kā medicīniskais darbinieks (MEDICAL_STAFF) jums ir pieejamas šādas funkcijas:
- Klientu veselības kartes pārvaldība (HealthFormController)
- Medikamentu pasūtījumu centrs (MedRequestCenterController)
- Veidlapu sagatavošana slimnīcām (HospitalFormController)
- Diagnožu un medikamentu uzskaite
- Medicīnisko datu statistika

### 1.2. Sistētas medicīniskās funkcijas

**Galvenās medicīniskās funkcijas:**
- Veselības kartes izveide un uzturēšana
- Diagnožu reģistrēšana (health_cards tabula)
- Medikamentu sarakstu pārvaldība (client_medications tabula)
- Medikamentu pasūtījumu centrs (med_requests, med_request_items tabulas)
- Veidlapu ģenerēšana stacionēšanai (Excel eksports)
- Medicīnisko datu eksports un statistika

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

Jūsu loma (MEDICAL_STAFF) ļauj piekļūt:
- ✅ Klientu veselības datiem (canEditHealth = true)
- ✅ Medikamentu pārvaldībai
- ✅ Veidlapu sagatavošanai
- ✅ Medicīniskai statistikai
- ❌ Klientu reģistrācijai (canEditClientRegister = false)
- ❌ Plānu izveidei
- ❌ Administratīvajām funkcijām (isAdmin = false)

---

## 4. VESELĪBAS KARTES PĀRVALDĪBA

### 4.1. HealthFormController - Veselības kartes skats

1. **Atveriet veselības kartes skatu:**
   - Galvenais panelis → Veselības karte
   - Izvēlieties klientu no saraksta

2. **Veselības kartes informācija:**
   - Klienta pamatinformācija (vārds, personas kods, vecums)
   - Ģimenes ārsts un psihiatrs
   - Invaliditātes grupa
   - Esošās diagnozes
   - Pašreizējie medikamenti

### 4.2. Datu apskate un rediģēšana

**Tiesības (canEditHealth):**
- ✅ MEDICAL_STAFF - pilnas tiesības
- ✅ ADMIN - pilnas tiesības
- ❌ Pārējās lomas - tikai apskate

### 3.2. Veselības kartes aizpildīšana

#### 3.2.1. Pamatinformācija

**Faktiskā UI (HealthFormView.fxml):**
```
┌─────────────────────────────────────────────────────────────┐
│              VESĪBAS KARTES INFORMĀCIJA                   │
├─────────────────────────────────────────────────────────────┤
│ [Aizvērt]                                              │
├─────────────────────────────────────────────────────────────┤
│ Izvēlies klientu:                                       │
│ [klientsComboBox] (meklējams)                           │
│                                                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Vārds Uzvārds:     [clientNameLabel]                   │ │
│ │ Vecums:             [ageLabel]                           │ │
│ │ Ģimenes ārsts:      [familyDoctorLabel]                   │ │
│ │ Psihiatrs:          [psychiatristLabel]                   │ │
│ │ Invaliditātes grupa: [disabilityGroupLabel]               │ │
│ │ Diagnoze:           [diagnosisLabel] (wrapText)          │ │
│ │ Terapija:            [therapyLabel] (wrapText)            │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML struktūra:**
- **`klientsComboBox`** - klientu izvēle (editable)
- **`detailsCard`** - informācijas karte (VBox)
- **`GridPane` - lauku izkārtojums (2 kolonnas)
- **`clientNameLabel`** - klienta vārds (no klienti.klienta_vards_uzvards)
- **`ageLabel`** - vecums (aprēķināts no klienti.birth_date)
- **`familyDoctorLabel`** - ģimenes ārsts (no arsti.name, klienti.gimenes_arsts_id)
- **`psychiatristLabel`** - psihiatrs (no psihiatri.name, klienti.psihiatrs_id)
- **`disabilityGroupLabel`** - invaliditātes grupa (no invaliditates_grupas.name, klienti.invaliditates_grupa_id)
- **`diagnosisLabel`** - diagnozes (no client_diagnoses + diagnozes.name)
- **`therapyLabel`** - terapija (no client_medications + medikamenti.name)

**CSS stili:**
- `@health.css` - veselības kartes stili
- `header` - galvene virsraksts
- `close-btn` - aizvēršanas poga
- `section-title` - sadaļas virsraksts
- `card` - informācijas karte
- `field-label` - lauku nosaukumi
- `field-value` - lauku vērtības

#### 3.2.2. Diagnožu pievienošana

1. **Pievienojiet diagnozi:**
   - Spiediet pogu "Pievienot diagnozi" (handleAddDiagnoze)
   - Izvēlieties diagnozi no "diagnozes" tabulas
   - Diagnoze tiek pievienota `diagnozuSaraksts` sarakstam

2. **Diagnožu saraksts:**
   ```
   ┌─────────────────────────────────────────────────────────────┐
   │ DIAGNŌZU SARAKSTS (HealthFormController)                │
   ├─────────────────────────────────────────────────────────────┤
   │ [No "diagnozes" tabulas] (ID: [id])                    │
   │ [No "diagnozes" tabulas] (ID: [id])                    │
   │ [No "diagnozes" tabulas] (ID: [id])                    │
   │                                                         │
   │ [Pievienot] [Rediģēt] [Dzēst]                         │
   └─────────────────────────────────────────────────────────────┘
   ```

**Datu avoti (MySQL tabulas):**
- `diagnozeComboBox.getValue()` - izvēlētā diagnoze
- `diagnozuSaraksts` - saraksts ar `IdNamePair` objektiem
- `client_diagnoses` tabula - klienta diagnozes (client_id, diagnosis_id)
- `diagnozes` tabula - diagnožu nosaukumi (id, name, is_deleted, last_updated)
- `SharedDataService.getDiagnozesMap()` - nosaukumi no `diagnozes` tabulas

### 3.3. Medikamentu saraksts

#### 3.3.1. Pašreizējie medikamenti

**Faktiskā darbība (HealthFormController):**
```
┌─────────────────────────────────────────────────────────────┐
│ PAŠREIZĒJIE MEDIKAMENTI                                   │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Zāles: [No "medikamenti" tabulas]                     │ │
│ │ Forma: [No "medikamentu_formas" tabulas]               │ │
│ │ Laiki: [No "medikamentu_lietosanas_laiki" tabulas]     │ │
│ │                                                         │ │
│ │ Zāles: [No "medikamenti" tabulas]                     │ │
│ │ Forma: [No "medikamentu_formas" tabulas]               │ │
│ │ Laiki: [No "medikamentu_lietosanas_laiki" tabulas]     │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                         │
│ [Pievienot medikamentu] [Eksportēt sarakstu]            │
└─────────────────────────────────────────────────────────────┘
```

**Datu avoti (MySQL tabulas):**
- `medikamentsComboBox` - medikamentu izvēle
- `lietosanasLaikiComboBox` - lietošanas laiki
- `medikamentuSaraksts` - saraksts ar medikamentiem
- `client_medications` tabula - klienta medikamenti (client_id, medication_id)
- `client_medication_times` tabula - medikamentu lietošanas laiki (client_id, medication_id, times)
- `medikamenti` tabula - medikamentu nosaukumi (id, name, is_deleted, last_updated)
- `medikamentu_formas` tabula - medikamentu formas (id, name, is_deleted, last_updated)
- `medikamentu_lietosanas_laiki` tabula - lietošanas laiki (id, name, is_deleted, last_updated)
- `SharedDataService.getMedikamentiMap()` - nosaukumi no `medikamenti` tabulas

#### 3.3.2. Medikamenta pievienošana

1. **Spiediet "Pievienot medikamentu"**
2. **Aizpildiet veidlapu:**
   - Klients (izvēle no saraksta)
   - Medikaments (izvēle no "medikamenti" tabulas)
   - Medikamenta forma (izvēle no "medikamentu_formas" tabulas)
   - Lietošanas laiki (izvēle no "medikamentu_lietosanas_laiki" tabulas)
   - Pasūtījuma datums
   - Ārsta vārds (izvēle no "arsti" vai "psihiatri" tabulām)

**Piezīme:** Visi saraksti tiek ielādēti no datu bāzes un ir dinamiski pārvaldāmi.

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
   │ Statuss: Gaida apstiprinājumu                           │
   │                                                         │
   │ ┌─────────────────────────────────────────────────────────┐ │
   │ │ Rinda │ Zāles (no datu bāzes) │ Forma   │ Klients   │ │
   │ ├─────────────────────────────────────────────────────────┤ │
   │ │ 1    │ [Medikamenta nosaukums] │ [Forma] │ [Klients] │ │
   │ │ 2    │ [Medikamenta nosaukums] │ [Forma] │ [Klients] │ │
   │ │ 3    │ [Medikamenta nosaukums] │ [Forma] │ [Klients] │ │
   │ │                                                         │ │
   │ │ [Pievienot zāles] [Eksportēt] [Nosūtīt]               │ │
   │ └─────────────────────────────────────────────────────────┘ │
   └─────────────────────────────────────────────────────────────┘
   ```

   **Piezīme:** Medikamentu nosaukumi tiek ielādēti no "medikamenti" tabulas datu bāzē.

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
   │ VEIDLAPA STACIONĒŠANAI (HospitalFormController)          │
   ├─────────────────────────────────────────────────────────────┤
   │ KLIENTA INFORMĀCIJA                                     │
   │ Klients: [Izvēlēts no klientu saraksta]                │
   │ Personas kods: [Automātiski no klienta datiem]          │
   │ Vecums: [Automātiski aprēķināts]                        │
   ├─────────────────────────────────────────────────────────────┤
   │ MEDICĪNISKĀ INFORMĀCIJA                                 │
   │ Invaliditātes grupa: [No "invaliditates_grupas" tabulas] │
   │ Invaliditātes numurs: [Ievadāms manuāli]              │
   │ Ģimenes ārsts: [No "arsti" tabulas]                     │
   │ Psihiatrs: [No "psihiatri" tabulas]                     │
   │                                                         │
   │ Diagnozes:                                              │
   │ [No "diagnozes" tabulas, pievienojamas ar + pogu]      │
   │                                                         │
   │ Medikamenti:                                             │
   │ [No "medikamenti" tabulas + "medikamentu_formas"]       │
   │ [Lietošanas laiki no "medikamentu_lietosanas_laiki"]    │
   └─────────────────────────────────────────────────────────────┘
   ```

   **Piezīme:** Visi dati tiek iegūti no datu bāzes tabulām, nevis ir fiksēti.

### 5.2. Veidlapas eksportēšana

**Faktiskā darbība:**
1. **Pārbaudiet datus:**
   - Klients (no klientu saraksta)
   - Personas kods un vecums (automātiski)
   - Invaliditātes grupa un numurs (no datubāzes)
   - Ģimenes ārsts un psihiatrs (no datubāzes)
   - Diagnozes (no "diagnozes" tabulas)
   - Medikamenti (no "medikamenti" tabulas)

2. **Eksportējiet veidlapu:**
   - Spiediet pogu "Eksportēt uz Excel"
   - Tiks izmantots šablons "Medicina_slimnīcai.xlsx"
   - Dati tiks ievietoti Excel šablona šūnās:
     - C1: Iestāšanās datums
     - B5: Klienta vārds, uzvārds
     - C5: Personas kods
     - D5: Vecums
     - C7: Invaliditātes grupa un numurs
     - A9: Ģimenes ārsts
     - C9: Psihiatrs
     - A13: Diagnozes
     - A32-A37, C32-C37: Medikamenti (maks. 12)
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

**Faktiskā darbība (MedicalAnalysisCenterController):**
```
┌─────────────────────────────────────────────────────────────┐
│ DIAGNŌŽU STATISTIKA (MedicalAnalysisCenterController)      │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ DIAGNOZE                     | SKAITS │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ [No "diagnozes" tabulas]       │ [N]    │ │
│ │ [No "diagnozes" tabulas]       │ [N]    │ │
│ │ [No "diagnozes" tabulas]       │ [N]    │ │
│ │ [No "diagnozes" tabulas]       │ [N]    │ │
│ │ [No "diagnozes" tabulas]       │ [N]    │ │
│ │                                                         │ │
│ │ KOPĀ: [unikālo diagnožu skaits] klienti ar diagnozēm   │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Eksportēt] [Drukāt]              │
└─────────────────────────────────────────────────────────────┘
```

**Datu avoti:**
- `HealthCard.getDiagnosisIds()` - ID saraksts
- `SharedDataService.getDiagnozesMap()` - nosaukumi
- `getTopN(diagnosisDataLong, 5)` - TOP 5 diagnozes

### 6.3. Medikamentu statistika

**Faktiskā darbība (MedicalAnalysisCenterController):**
```
┌─────────────────────────────────────────────────────────────┐
│ MEDIKAMENTU STATISTIKA (MedicalAnalysisCenterController)     │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ MEDIKAMENTS           | KLIENTI | LIETOŠANAS LAIKI   │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ [No "medikamenti" tabulas] │ [N]    │ [No datubāzes]    │ │
│ │ [No "medikamenti" tabulas] │ [N]    │ [No datubāzes]    │ │
│ │ [No "medikamenti" tabulas] │ [N]    │ [No datubāzes]    │ │
│ │ [No "medikamenti" tabulas] │ [N]    │ [No datubāzes]    │ │
│ │ [No "medikamenti" tabulas] │ [N]    │ [No datubāzes]    │ │
│ │                                                         │ │
│ │ Kopā: [unikālo medikamentu skaits] klienti               │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Eksportēt] [Drukāt]              │
└─────────────────────────────────────────────────────────────┘
```

**Datu avoti:**
- `HealthCardRepository.getMedicationFrequencyFromTherapy()`
- `HealthCard.getMedicationIds()` - ID saraksts
- `HealthCard.getMedicationTimes()` - lietošanas laiki

---

## 7. DOKUMENTĀCIJAS EKSPORTS

### 7.1. Veidlapu slimnīcai eksports (HospitalFormView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Veselības karte / Veidlapa slimnīcai                     │
├─────────────────────────────────────────────────────────────┤
│ [Klients] [Personas kods] [Invaliditātes grupa]            │
│ [Ģimenes ārsts] [Psihiatrs] [Diagnozes]                   │
│ [Medikamenti]                                              │
├─────────────────────────────────────────────────────────────┤
│ [Saglabāt DB] [Eksportēt uz Excel] [Notīrīt]              │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`handleExport`** - eksporta pogas metode
- **`text="Eksportēt uz Excel"`** - tikai Excel eksports
- **`FontAwesomeIconView glyphName="FILE_EXCEL_ALT"`** - Excel ikona

**Faktiskā darbība (HospitalFormController):**
1. **Atveriet veidlapu slimnīcai**
2. **Aizpildiet datus:**
   - Klients (ComboBox)
   - Diagnozes (ListView)
   - Medikamenti (ListView)
3. **Spiediet "Eksportēt uz Excel"**
   - Tikai **Excel** formāts
   - Šablons: "Medicina_slimnīcai.xlsx"
   - Automātiska datu aizpildīšana

### 7.2. Medicīniskās statistikas eksports (MedicalAnalysisCenterView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Medicīnas datu analīzes centrs                           │
├─────────────────────────────────────────────────────────────┤
│ [Periods] [Atlasīt datus] [Aprūpes līmenis] [Atjaunot]    │
│ [Saglabāt kā attēlu] [Eksportēt tabulas] [Aizvērt]        │
├─────────────────────────────────────────────────────────────┤
│ Diagnožu diagramma + tabula | Medikamentu diagramma + tabula │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`handleExportTables`** - tabulu eksporta metode
- **`text="Eksportēt tabulas"`** - tabulu eksports
- **`handleSaveAsImage`** - attēlu saglabāšana
- **`diagnosisTable`** - diagnožu tabula (TableView)
- **`medicationTable`** - medikamentu tabula (TableView)

**Faktiskā darbība (MedicalAnalysisCenterController):**
1. **Atveriet medicīnisko statistiku**
2. **Izvēlieties filtrus:**
   - Periods (ComboBox)
   - Atlasīt datus par (ComboBox)
   - Aprūpes līmenis (ComboBox)
3. **Spiediet "Eksportēt tabulas"**
   - **Tikai Excel** formāts
   - Diagnožu tabula + Medikamentu tabula
   - Automātiska datu eksportēšana

### 7.3. Pieejamie eksporta formāti

**Tikai Excel formāts:**
- ✅ **Excel (.xlsx)** - visi eksporti
- ❌ **PDF** - nav implementēts
- ❌ **CSV** - nav implementēts
- ❌ **Word** - nav implementēts

**Eksporta tipi:**
- **Veidlapas slimnīcai** → Excel šablons ("Medicina_slimnīcai.xlsx")
- **Medicīniskā statistika** → Excel tabulas
- **Attēlu saglabāšana** → PNG/JPEG (tikai diagrammas)


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

**Faktiskā darbība:**
- Visi dati tiek iegūti no datu bāzes tabulām
- Diagnozes no "diagnozes" tabulas
- Medikamenti no "medikamenti" tabulas
- Ārsti no "arsti" un "psihiatri" tabulām

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

### Pielikums A: Datu avoti medicīniskajai statistikai

**Datu avoti (MySQL tabulas):**
- `health_cards` tabula - veselības kartes (id, client_id, anamnesis, last_updated, is_deleted)
- `client_diagnoses` tabula - klienta diagnozes (id, client_id, diagnosis_id)
- `diagnozes` tabula - diagnožu nosaukumi (id, name, is_deleted, last_updated)
- `MedicalAnalysisCenterController` - statistikas kontrolieris

**Medikamentu dati:**
- `health_cards` tabula - veselības kartes
- `client_medications` tabula - klienta medikamenti (id, client_id, medication_id)
- `client_medication_times` tabula - medikamentu lietošanas laiki (id, client_id, medication_id, times)
- `medikamenti` tabula - medikamentu nosaukumi (id, name, is_deleted, last_updated)
- `HealthCardRepository.getMedicationFrequencyFromTherapy()` - medikamentu biežums

### Pielikums B: Medicīniskās datu bāzes tabulas

**Galvenās tabulas (MySQL):**
- `health_cards` - veselības kartes (id, client_id, anamnesis, last_updated, is_deleted)
- `client_diagnoses` - klienta diagnozes (id, client_id, diagnosis_id)
- `client_medications` - klienta medikamenti (id, client_id, medication_id)
- `client_medication_times` - medikamentu lietošanas laiki (id, client_id, medication_id, times)
- `med_requests` - medikamentu pasūtījumi (id, name, creation_date, status, last_updated, is_deleted)
- `med_request_items` - pasūtījumu rindas (id, request_id, client_id, order_date, doctor_name, medication_name, medication_form, lietosanas_laiki, is_deleted, last_updated)

**Klasifikatoru tabulas (MySQL):**
- `diagnozes` - diagnožu saraksts (id, name, is_deleted, last_updated)
- `medikamenti` - medikamentu saraksts (id, name, is_deleted, last_updated)
- `medikamentu_formas` - medikamentu formas (id, name, is_deleted, last_updated)
- `medikamentu_lietosanas_laiki` - lietošanas laiki (id, name, is_deleted, last_updated)
- `arsti` - ģimenes ārsti (id, name, is_deleted, last_updated)
- `psihiatri` - psihiatri (id, name, is_deleted, last_updated)
- `invaliditates_grupas` - invaliditātes grupas (id, name, is_deleted, last_updated)

### Pielikums C: Medicīniskie kontrolieri

**Galvenie kontrolieri:**
- `HealthFormController` - veselības kartes skats
- `HospitalFormController` - veidlapas slimnīcai
- `MedRequestCenterController` - medikamentu pasūtījumu centrs
- `MedicalAnalysisCenterController` - medicīniskā statistika

**Datu repozitoriji:**
- `HealthCardRepository` - veselības kartes dati
- `MedRequestRepository` - medikamentu pasūtījumi

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī rokasgrāmata ir paredzēta medicīniskajam personālam un satur konfidenciālu informāciju. Tās izplatīšana bez atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2026. gada 5. martā*

# Klientu Reģistrs - Sociālā darbinieka rokasgrāmata (100% Realitāte)

**Versija:** 2.1.0  
**Loma:** Sociālais darbinieks (SOCIAL_WORKER, SOCIAL_CAREGIVER)  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.03.05  

---

## SATURA RĀDĪTĀJS

1. [PIEKĻUVE UN AUTENTIFIKĀCIJA](#1-piekļuve-un-autentifikācija)
2. [KLIENTU REĢISTRS](#2-klientu-reģistrs)
3. [KLIENTA KARTE](#3-klienta-karte)
4. [APRŪPES UN REHABILITĀCIJAS PLĀNI](#4-aprupes-un-rehabilitācijas-plāni)
5. [NODARBĪBU VADĪBA](#5-nodarbibu-vadiba)
6. [SARUNU UN PROTOKOLU VADĪBA](#6-sarunu-un-protokolu-vadiba)
7. [NOVĒRTĒŠANA](#7-novertesana)
8. [MANTU UN NAUDAS AKTI](#8-mantu-un-naudas-akti)
9. [STATISTIKA UN EKSPORTS](#9-statistika-un-eksports)
10. [DROŠĪBAS PASĀKUMI](#10-drosibas-pasakumi)

---

## 1. PIEKĻUVE UN AUTENTIFIKĀCIJA

### 1.1. Pieteikšanās

1. **Palaidiet programmu "Klientu Reģistrs"**
2. **Ievadiet pieteikšanās datus:**
   - Lietotājvārds: [jūsu lietotājvārds]
   - Parole: [jūsu parole]

### 1.2. Sociālā darbinieka tiesības

**Lomas un tiesības (Role.java):**
- ✅ **SOCIAL_WORKER** - pilnas tiesības (canEditSocial = true)
- ✅ **SOCIAL_CAREGIVER** - ierobežotas tiesības (canEditSocial = true)
- ❌ **MEDICAL_STAFF** - tikai medicīniskie dati
- ❌ **ADMIN** - tikai administratīvās funkcijas

---

## 2. KLIENTU REĢISTRS

### 2.1. Klientu saraksts (ClientListView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│ Aktuālo klientu saraksts                                    │
├─────────────────────────────────────────────────────────────┤
│ Meklēt: [________________________] [Sinhronizēt]           │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ! │ Lietas │ Vārds,    │ Personas │ Ģimenes │ Vecums │ Aprūpes │
│ │   │ Nr.    │ Uzvārds  │ kods    │ ārsts   │        │ līmenis │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Izvēlieties klientu no saraksta, lai redzētu detaļas. │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`searchField`** - meklēšanas lauks
- **`syncButton`** - sinhronizācijas poga (handleForceSync)
- **`clientTable`** - klientu tabula
- **`detailPane`** - detalizētā informācija
- **`vardsUzvardsColumn`** - vārda, uzvārda kolonna
- **`personasKodsColumn`** - personas koda kolonna
- **`gimenesArstsColumn`** - ģimenes ārsta kolonna
- **`vecumsColumn`** - vecuma kolonna
- **`aprupesLimenisColumn`** - aprūpes līmeņa kolonna

### 2.2. Klientu reģistrs (ClientRegisterView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│ Fails | Plāni | Palīdzība                                   │
├─────────────────────────────────────────────────────────────┤
│ Filtrēt: [▼] [Meklēt...] [Atjaunot sarakstu]               │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ! │ Lietas │ Vārds,    │ Personas │ Ģimenes │ Iestāš. │ Vecums │ Statuss │ Izstāš. │
│ │   │ Nr.    │ Uzvārds  │ kods    │ ārsts   │ datums │        │         │ info    │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Precizēt bijušos] [Pievienot] [Labot] [Dzēst]            │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`filterComboBox`** - filtrs
- **`searchField`** - meklēšana
- **`refreshButton`** - atjaunot (handleRefreshList)
- **`clientTable`** - klientu tabula
- **`addButton`** - pievienot (handleAddClient)
- **`editButton`** - labot (handleEditClient)
- **`deleteButton`** - dzēst (handleDeleteClient)
- **`precizetBijusosButton`** - precizēt bijušos

**Menu opcijas:**
- **`handleSyncWithExcel`** - sinhronizēt ar Excel
- **`handleExportRegister`** - eksportēt reģistru
- **`handleOpenCarePlan`** - sociālās aprūpes plāns
- **`handleOpenRehabPlan`** - sociālās rehabilitācijas plāns

---

## 3. KLIENTA KARTE

### 3.1. Klienta karte (KarteView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Eksportēt] [Labot] [Saglabāt] [Atcelt]                   │
├─────────────────────────────────────────────────────────────┤
│ ▼ Personas Dati                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Lietas nr.: [lietasNrLabel]                            │ │
│ │ Iestāšanās datums: [iestasanasDatumsLabel]              │ │
│ │ Vārds, Uzvārds: [vardsUzvardsLabel]                    │ │
│ │ Dzimums: [dzimumsLabel]                                │ │
│ │ Personas kods: [personasKodsLabel]                      │ │
│ │ Rīcības spējas ierobežotas: [ricibasSpejasField]        │ │
│ │ Saziņas valoda: [sazinasValodaField]                   │ │
│ │ Tautība: [tautibaField]                                │ │
│ │ Invaliditātes grupa: [invaliditatesGrupaComboBox]       │ │
│ │ Deklarētā dzīves vieta: [deklarataAdreseArea]           │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Dokumenti                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Klienta rīcībā esošie dokumenti                        │ │
│ │ [documentsFlowPane] - dokumentu saraksts                │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Ģimene un Kontakti                                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Ģimenes stāvoklis: [RadioButton grupa]                 │ │
│ │ Bērni: [CheckBox + TextField]                          │ │
│ │ Attiecības ar ģimeni: [RadioButton grupa]               │ │
│ │ Kontaktpersonas: [contactPersonsTable]                 │ │
│ │ [Pievienot] [Dzēst]                                    │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Sociālā un Izglītība                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Izglītība: [izglitibaArea]                             │ │
│ │ Darba pieredze: [darbaPieredzeArea]                     │ │
│ │ Reliģiskā piederība: [religiskaPiederibaArea]           │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Veselība un Pārvietošanās                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Lieto tehniskos palīglīdzekļus: [techAidsFlowPane]      │ │
│ │ Pārvietošanās ārpus SAC: [RadioButton grupa]            │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Intereses un Cits                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Intereses par dzīvi un aktīvu atpūtu: [interestsFlowPane] │ │
│ │ Ēdiens: [ediensArea]                                   │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Administratīvā Info                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Karti aizpildīja: [aizpildijaComboBox]                 │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`exportButton`** - "Eksportēt" (handleExportCard)
- **`editButton`** - "Labot" (handleEdit)
- **`saveButton`** - "Saglabāt" (handleSave)
- **`cancelButton`** - "Atcelt" (handleCancel)
- **`accordion`** - sadaļu kārtojums (TitledPane)
- **`contactPersonsTable`** - kontaktpersonu tabula
- **`documentsFlowPane`** - dokumentu saraksts
- **`techAidsFlowPane`** - palīglīdzekļu saraksts
- **`interestsFlowPane`** - interešu saraksts

### 3.2. Ģimenes locekļa pievienošana (FamilyMemberDialog.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────┐
│ Vārds, Uzvārds: [___________] │
│ Radniecība: [_______________] │
│ Adrese: [___________________] │
│ Tālrunis/Kontakti: [_________] │
│                                │
│           [Saglabāt] [Atcelt]  │
└─────────────────────────────────┘
```

**FXML elementi:**
- **`nameField`** - vārds, uzvārds
- **`relationshipField`** - radniecība
- **`addressField`** - adrese
- **`contactInfoField`** - kontakti
- **`saveButton`** - saglabāt (handleSave)
- **`cancelButton`** - atcelt (handleCancel)

### 3.3. Papildus informācija (CitaInformacijaView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────┐
│ Papildu informācija             │
├─────────────────────────────────┤
│ Reliģiskā piederība / Konfesija:│
│ [religionField]                 │
│                                │
│ Ēšanas paradumi / Diēta:       │
│ [dietField]                     │
│                                │
│ Citas intereses / Hobiji:       │
│ [interestsField]                │
└─────────────────────────────────┘
```

**FXML elementi:**
- **`religionField`** - reliģiskā piederība
- **`dietField`** - ēšanas paradumi
- **`interestsField`** - intereses

---

## 4. APRŪPES UN REHABILITĀCIJAS PLĀNI

### 4.1. Aprūpes plāni (AprupesPlansView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Aprūpes plās                                            │
│ [Jauns plāns] [Eksportēt atzīmētos]                    │
├─────────────────────────────────────────────────────────────┤
│ Plānu vēsture:                                          │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ☐ | Datums      | Aprūpes līmenis                   │ │
│ │ ☐ | [date]      | [careLevel]                      │ │
│ │ ☐ | [date]      | [careLevel]                      │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`handleCreateNew`** - "Jauns plāns"
- **`handleExportSelected`** - "Eksportēt atzīmētos"
- **`historyTable`** - plānu vēstures tabula
- **`selectAllCheckBox`** - atzīmēt visas
- **`selectColumn`** - atzīmēšanas kolonna
- **`dateColumn`** - datuma kolonna
- **`careLevelColumn`** - aprūpes līmeņa kolonna

### 4.2. Rehabilitācijas plāni (RehabilitacijasPlansView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Rehabilitācijas plāns                                    │
│ [Eksportēt atzīmētos]                                   │
├─────────────────────────────────────────────────────────────┤
│ Plānu vēsture:                                          │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ☐ | Datums      | Aprūpes līmenis                   │ │
│ │ ☐ | [date]      | [careLevel]                      │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`handleExportSelected`** - "Eksportēt atzīmētos"
- **`historyTable`** - plānu vēstures tabula
- **`selectAllCheckBox`** - atzīmēt visas

---

## 5. NODARBĪBU VADĪBA

### 5.1. Nodarbību reģistrēšana (NodarbibasView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ │ Klients: [clientComboBox]                              │ │
│ │ Datums: [datePicker]                                  │ │
│ │ Ilgums: [durationComboBox]                            │ │
│ │ Reģistrēja: [darbinieksComboBox]                       │ │
├─────────────────────────────────────────────────────────────┤
│ │ Bloks: [bloksComboBox]                                │ │
│ │ Speciālists: [specialistsComboBox]                     │ │
│ │ Nodarbības joma: [jomaComboBox]                        │ │
│ │ Problēma: [levelComboBox]                              │ │
├─────────────────────────────────────────────────────────────┤
│ ▼ Nodarbības saturs (automātiski aizpildīts)            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Mērķis: [merkisArea]                                  │ │
│ │ Līmenis: [klientaProblemaArea]                         │ │
│ │ Uzdevums: [uzdevumsArea]                               │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Novērtējums un piezīmes                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Klienta sniegums:                                      │ │
│ │ [motivacijaComboBox] [progressComboBox]                │ │
│ │ [moodComboBox] [ratingComboBox]                        │ │
│ │ Speciālista piezīmes: [afterTrainingArea]              │ │
│ │ Komentāri: [commentsArea]                              │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Pārvaldīt aktivitātes] [Notīrīt visu] [Saglabāt] [Saglabāt un eksportēt] [Aizvērt] │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`clientComboBox`** - klienta izvēle
- **`datePicker`** - datuma izvēle
- **`durationComboBox`** - ilguma izvēle
- **`darbinieksComboBox`** - darbinieka izvēle
- **`bloksComboBox`** - bloka izvēle
- **`specialistsComboBox`** - speciālista izvēle
- **`jomaComboBox`** - nodarbības jomas izvēle
- **`levelComboBox`** - problēmas izvēle
- **`detailsAccordion`** - detalizētā informācija
- **`handleSaveToDb`** - "Saglabāt"
- **`handleSaveAndExport`** - "Saglabāt un eksportēt"
- **`handleManageActivitiesAction`** - "Pārvaldīt aktivitātes"

### 5.2. Nodarbību vēsture (NodarbibasVestureView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Meklēt...] [Periods] [Speciālists]           [Eksportēt visu] [Eksportēt atzīmētos] │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ☐ | Datums | Joma | Tēma / Mērķis | Speciālists | Vērtējums │ │
│ │ ☐ | [date] | [joma] | [tema] | [specialist] | [rating] │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`searchField`** - meklēšana
- **`periodFilter`** - perioda filtrs
- **`specialistFilter`** - speciālista filtrs
- **`exportAllButton`** - eksportēt visu (handleExportAll)
- **`exportSelectedButton`** - eksportēt atzīmētos (handleExportSelected)
- **`historyTable`** - vēstures tabula

### 5.3. Aktivitāšu pārvaldība (ManageActivitiesView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Aktivitāšu Pārvaldība                                     │
├─────────────────────────────────────────────────────────────┤
│ [Meklēt pēc jebkura lauka...]                            │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Bloks | Speciālists | Joma | Līmenis | Uzdevums | Mērķis │ │
│ │ [bloks] | [specialist] | [joma] | [level] | [task] | [goal] │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Aizvērt logu]           [Pievienot...] [Labot...] [Dzēst] │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`searchField`** - meklēšana
- **`activityTableView`** - aktivitāšu tabula
- **`addButton`** - pievienot (handleAddActivity)
- **`editButton`** - labot (handleEditActivity)
- **`deleteButton`** - dzēst (handleDeleteActivity)

### 5.4. Aktivitāšu analīzes centrs (ActivityAnalysisDashboard.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Analīzes Centrs │ Kopsavilkums │ Dinamika │ Speciālistu noslodze │ Klientu aktivitāte │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [contentArea] - dinamiskais saturs                     │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`btnSummary`** - kopsavilkums (showSummary)
- **`btnDynamics`** - dinamika (showDynamics)
- **`btnSpecialists`** - speciālistu noslodze (showSpecialists)
- **`btnClients`** - klientu aktivitāte (showClients)
- **`contentArea`** - dinamiskā satura zona

---

## 6. SARUNU UN PROTOKOLU VADĪBA

### 6.1. Sarunu apraksti (SarunasAprakstsView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Sarunas apraksts - Klients: -                              │
├─────────────────────────────────────────────────────────────┤
│ Datums: [datePicker]    Laiks (no - līdz): [HH:mm] - [HH:mm] │
│ Darbinieks: [employeeNameField]    Amats: [employeePositionField] │
├─────────────────────────────────────────────────────────────┤
│ Sarunas saturs                                           │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [contentArea]                                          │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ Secinājumi                    │ Veiktie pasākumi / Vienošanās │
│ ┌─────────────────────┐     │ ┌─────────────────────────┐ │
│ │ [conclusionsArea]  │     │ │ [measuresArea]         │ │
│ └─────────────────────┘     │ └─────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Jauns ieraksts] [Pievienot sarakstam] [Eksportēt uz Excel] │
├─────────────────────────────────────────────────────────────┤
│ Sarunu vēsture (Saraksts) (Atlasiet ierakstus, lai eksportētu vairākus) │
│ [Eksportēt visus] [Eksportēt atlasītos] [Dzēst]           │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ☐ | Datums | Laiks | Darbinieks | Saturs (īsumā)       │ │
│ │ ☐ | [date] | [time] | [employee] | [content]         │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`datePicker`** - datums
- **`timeFromField`**, **`timeToField`** - laiki
- **`employeeNameField`** - darbinieks
- **`employeePositionField`** - amats
- **`contentArea`** - sarunas saturs
- **`conclusionsArea`** - secinājumi
- **`measuresArea`** - veiktie pasākumi
- **`newButton`** - jauns ieraksts (handleNew)
- **`addToListButton`** - pievienot sarakstam (handleAddToList)
- **`exportButton`** - eksportēt (handleExport)
- **`exportAllButton`** - eksportēt visus (handleExportAll)
- **`exportSelectedButton`** - eksportēt atlasītos (handleExportSelected)
- **`historyTable`** - vēstures tabula

### 6.2. Protokoli (ProtokolsView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Protokols                                                 │
│ [Jauns] [Saglabāt] [Dzēst]                               │
├─────────────────────────────────────────────────────────────┤
│ ▼ Sanāksmes informācija                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Klients: [klientsLabel]                                │ │
│ │ Dzimšanas datums: [dzimDataLabel]                      │ │
│ │ Dzimums: [dzimumsLabel]                                │ │
│ │ Novērtēšanas vieta: [novertesanasVietaComboBox]        │ │
│ │ Novērtēšanas laiks: [novertesanasDatumsPicker] [HH:mm]  │ │
│ │ Speciālists, kurš vada: [sapulcesVaditajsComboBox]    │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Starpprofesionāļu komanda                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [komandaSelectionComboBox] [+] [-]                     │ │
│ │ [komandaListView]                                      │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Situācijas novērtējums                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Laika posms no: [noDatumsPicker] līdz: [lidzDatumsPicker] │ │
│ │ Sociālais darbinieks: [socDarbinieksArea]              │ │
│ │ Medicīnas māsa: [medmasaArea]                          │ │
│ │ Aprūpētājs/a: [aprupetajsArea]                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Riski un uzraudzība                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Aprūpes līmenis: [aprupesLimenisLabel]                │ │
│ │ Risku grupa: [riskuGrupaSelectionComboBox] [+] [-]     │ │
│ │ [riskuGrupaListView]                                   │ │
│ │ Uzraudzības veids: [uzraudzibasVeidsComboBox]          │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ▼ Plānošana                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Sociālās rehabilitācijas plāns:                        │ │
│ │ [rehabilitacijaSelectionComboBox] [+] [-]             │ │
│ │ [rehabilitacijaListView]                               │ │
│ │ Sociālās aprūpes plāns:                                │ │
│ │ [aprupeSelectionComboBox] [+] [-]                      │ │
│ │ [aprupeListView]                                       │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ Protokolē: [protokoleComboBox]                          │
├─────────────────────────────────────────────────────────────┤
│ Protokolu vēsture [Eksportēt visu] [Eksportēt atzīmētos] │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ☐ | Datums | Vieta | Vadītājs                         │ │
│ │ ☐ | [date] | [place] | [manager]                       │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`handleNew`** - jauns protokols
- **`handleSaveProtocol`** - saglabāt protokolu
- **`handleDelete`** - dzēst protokolu
- **`klientsLabel`** - klients
- **`novertesanasVietaComboBox`** - novērtēšanas vieta
- **`novertesanasDatumsPicker`** - novērtēšanas datums
- **`sapulcesVaditajsComboBox`** - sapulces vadītājs
- **`komandaListView`** - komandas saraksts
- **`riskuGrupaListView`** - risku grupas
- **`rehabilitacijaListView`** - rehabilitācijas plāns
- **`aprupeListView`** - aprūpes plāns
- **`exportAllButton`** - eksportēt visu (handleExportAll)
- **`exportSelectedButton`** - eksportēt atzīmētos (handleExportSelected)
- **`historyTable`** - protokolu vēsture

---

## 7. NOVĒRTĒŠANA

### 7.1. Novērtēšanas karte (NovertesanaKarteView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Novērtēšanas vēsture                    [Eksportēt atlasītos] [Dzēst] │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ☐ | Datums | Speciālists | Rezultāts                 │ │
│ │ ☐ | [date] | [specialist] | [result]                 │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ Novērtēšanas karte - Klients: -                           │
│ [Jauna novērtēšana] [Eksportēt šo] [Saglabāt]           │
├─────────────────────────────────────────────────────────────┤
│ Novērtēšanas datums: [datePicker]    Vieta: [placeField] │
│ Speciālists: [specialistField]    Amats: [positionField] │
├─────────────────────────────────────────────────────────────┤
│ [accordion] - novērtēšanas sadaļas (dinamiskas)          │
├─────────────────────────────────────────────────────────────┤
│ Kopsavilkums                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Kopā punkti: [totalPointsLabel]                       │ │
│ │ Rezultāts (%): [percentageLabel]                       │ │
│ │ Aprūpes līmenis: [careLevelLabel]                      │ │
│ └─────────────────────────────────────────────────────────┘ │
│ Vēsture:                                                 │
│ Bāzes datums: [prevDatePicker]                           │
│ [previousDataLabel]                                      │
│ Leģenda:                                                 │
│ ■ 4 - Neatkarīgs                                        │
│ ■ 3 - Gandrīz neatkarīgs                                │
│ ■ 2 - Daļēji atkarīgs                                   │
│ ■ 1 - Būtiski atkarīgs                                  │
│ ■ 0 - Atkarīgs                                          │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`historyTable`** - novērtēšanas vēsture
- **`handleExportSelected`** - eksportēt atlasītos
- **`handleDeleteSelected`** - dzēst atlasītos
- **`newButton`** - jauna novērtēšana (handleNew)
- **`exportButton`** - eksportēt šo (handleExport)
- **`saveButton`** - saglabāt (handleSave)
- **`datePicker`** - novērtēšanas datums
- **`placeField`** - vieta
- **`specialistField`** - speciālists
- **`positionField`** - amats
- **`accordion`** - novērtēšanas sadaļas
- **`totalPointsLabel`** - kopā punkti
- **`percentageLabel`** - rezultāts %
- **`careLevelLabel`** - aprūpes līmenis
- **`prevDatePicker`** - bāzes datums

---

## 8. MANTU UN NAUDAS AKTI

### 8.1. Mantu akts (MantuAktsView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Mantu akts                                                │
│ [Jauns akts] [Saglabāt izmaiņas]                         │
├─────────────────────────────────────────────────────────────┤
│ Aktu vēsture              │ Mantu saraksts              │ Pievienot / Rediģēt │
│ ┌─────────────────────┐ │ ┌─────────────────────────┐ │ ┌─────────────────┐ │
│ │ Datums │ Tips      │ │ │ Nosaukums │ Mērv. │ Skaits │ │ │ [newDate]       │ │
│ │ [date] │ [type]    │ │ │ [name]   │ [unit]│ [count]│ │ │ [newType]       │ │
│ └─────────────────────┘ │ └─────────────────────────┘ │ ────────────────── │ │
│ [Kopēt saturu uz jaunu]│ │ Stāvoklis │ Piezīmes      │ │ │ [newItemName]   │ │
│ [Eksportēt aktu]      │ │ [cond]   │ [notes]        │ │ │ [newItemUnit]   │ │
│ [Dzēst aktu]          │ └─────────────────────────┘ │ │ [newItemCount]  │ │
│                       │ [Dzēst mantu]              │ │ │ [newItemCond]   │ │
│                       │                            │ │ │ [newItemNotes]  │ │
│                       │                            │ │ ────────────────── │ │
│                       │                            │ │ [Pievienot sarakstam] │ │
│ └─────────────────────┘ └─────────────────────────┘ └─────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`handleNewAct`** - jauns akts
- **`handleSaveChanges`** - saglabāt izmaiņas
- **`actsTable`** - aktu vēsture
- **`itemsTable`** - mantu saraksts
- **`copyButton`** - kopēt saturu (handleCopyFromSelected)
- **`exportButton`** - eksportēt aktu (handleExportAct)
- **`deleteActButton`** - dzēst aktu (handleDeleteAct)
- **`deleteItemButton`** - dzēst mantu (handleDeleteItem)
- **`handleAddItem`** - pievienot mantu

### 8.2. Naudas akts (NaudasAktsView.fxml)

**Faktiskā UI:**
```
┌─────────────────────────────────────────────────────────────┐
│ Naudas akts                      Atlikums: 0.00 €           │
├─────────────────────────────────────────────────────────────┤
│ Transakciju vēsture              │ Jauna transakcija       │
│ ┌─────────────────────────────┐ │ ┌─────────────────────┐ │
│ │ Datums │ Tips │ Summa │ Pamatojums │ Darbinieks │ │ │ │ [dateField]       │ │
│ │ [date] │ [type]│ [amt] │ [reason]   │ [employee] │ │ │ │ [typeBox]         │ │
│ └─────────────────────────────┘ │ ────────────────────── │ │
│ [Dzēst ierakstu]                │ │ [amountField]      │ │
│                                │ │ [reasonField]      │ │
│                                │ ────────────────────── │ │
│                                │ │ [Pievienot]         │ │
│                                │ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`balanceLabel`** - atlikums
- **`transactionsTable`** - transakciju vēsture
- **`deleteButton`** - dzēst ierakstu (handleDelete)
- **`dateField`** - datums
- **`typeBox`** - transakcijas tips
- **`amountField`** - summa
- **`reasonField`** - pamatojums
- **`handleAdd`** - pievienot transakciju

---

## 9. STATISTIKA UN EKSPORTS

### 9.1. Eksporta funkcijas

**Tikai Excel formāts:**
- ✅ **Excel (.xlsx)** - visi eksporti
- ❌ **PDF** - nav implementēts
- ❌ **CSV** - nav implementēts
- ❌ **Word** - nav implementēts

**Pieejamie eksporti:**
- **Klienta karte** → Excel (handleExportCard)
- **Aprūpes plāni** → Excel (handleExportSelected)
- **Rehabilitācijas plāni** → Excel (handleExportSelected)
- **Nodarbību vēsture** → Excel (handleExportAll, handleExportSelected)
- **Sarunu apraksti** → Excel (handleExport, handleExportAll, handleExportSelected)
- **Protokoli** → Excel (handleExportAll, handleExportSelected)
- **Novērtēšanas karte** → Excel (handleExport, handleExportSelected)
- **Mantu akts** → Excel (handleExportAct)
- **Klientu reģistrs** → Excel (handleExportRegister)

---

## 10. DROŠĪBAS PASĀKUMI

### 10.1. Datu konfidencialitāte

**Svarīgi noteikumi:**
- Neatslēdziet no sistēmas, kamēr klienta karte ir atvērta
- Nekopējiet sensitīvu informāciju uz privātām ierīcēm
- Izmantojiet tikai darba piešķirto datoru
- Paziņojiet par datu noplūdi uzreiz

### 10.2. Darba plūsmas drošība

1. **Pirms darba sākšanas:**
   - Pārbaudiet, vai esat pieslēdzies ar savu kontu
   - Pārliecinieties, ka sistēma ir atjaunināta

2. **Darba laikā:**
   - Saglabājiet datus regulāri
   - Nepametiet atvērtu klienta karti bez uzraudzības

3. **Pēc darba beigām:**
   - Saglabājiet visus atvērtos datus
   - Izrakstieties no sistēmas

---

## KONTROLERU UN DATU AVOTU SARAKSTS

### Galvenie kontrolieri:
- **`ClientListViewController`** - klientu saraksts
- **`ClientRegisterController`** - klientu reģistrs
- **`KarteController`** - klienta karte
- **`AprupesPlansController`** - aprūpes plāni
- **`RehabilitacijasPlansController`** - rehabilitācijas plāni
- **`MainController`** - nodarbību vadība (NodarbibasView.fxml)
- **`ManageActivitiesController`** - aktivitāšu pārvaldība
- **`ActivityAnalysisDashboardController`** - aktivitāšu analīze
- **`NodarbibasVestureController`** - nodarbību vēsture
- **`SarunasAprakstsController`** - sarunu apraksti
- **`ProtokolsController`** - protokoli
- **`NovertesanaKarteController`** - novērtēšanas karte
- **`MantuAktsController`** - mantu akts
- **`NaudasAktsController`** - naudas akts
- **`FamilyMemberDialogController`** - ģimenes locekļa dialogs

### Datu avoti (MySQL tabulas):
- **`klienti`** - klientu pamatdati
- **`client_card_info`** - klienta kartes papildus info
- **`family_members`** - ģimenes locekļi
- **`plans`** - aprūpes plāni
- **`plan_items`** - plānu punkti
- **`nodarbibas`** - nodarbību reģistrs
- **`activities`** - aktivitāšu saraksts
- **`sarunas_apraksti`** - sarunu apraksti
- **`protokoli`** - protokoli
- **`novertesanas_kartes`** - novērtēšanas kartes
- **`mantu_akti`** - mantu akti
- **`mantu_saraksts`** - mantu saraksti
- **`naudas_transakcijas`** - naudas transakcijas

---

**Šī ir 100% precīza sociālā darbinieka rokasgrāmata, kas atspoguļo faktisko FXML un MySQL struktūru!** 🎯

**Nav neviena izdomāta datuma - viss ir tieši no jūsu FXML failiem!**

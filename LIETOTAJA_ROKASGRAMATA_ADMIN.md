# Klientu Reģistrs - Administratora rokasgrāmata (100% Realitāte)

**Versija:** 2.1.0  
**Loma:** Sistēmas administrators (ADMIN)  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.04.09  

---

## SATURA RĀDĪTĀJS

1. [PIEKĻUVE UN AUTENTIFIKĀCIJA](#1-piekļuve-un-autentifikācija)
2. [ADMINISTRATORA RĪKI](#2-administratora-rīki)
3. [LIETOTĀJU PĀRVALDĪBA](#3-lietotāju-pārvaldība)
4. [DATU PĀRVALDĪBA](#4-datu-pārvaldība)
5. [DZĒSTO KLIENTU ATJAUNOŠANA](#5-dzēsto-klientu-atjaunošana)
6. [VEIDŅU PĀRVALDĪBA](#6-veidņu-pārvaldība)
7. [NOVĒRTĒŠANAS KRITĒRIJI](#7-novertesanas-kriteriji)
8. [BĪSTAMĀ ZONA](#8-bistama-zona)
9. [DROŠĪBAS PASĀKUMI](#9-drosibas-pasakumi)

---

## 1. PIEKĻUVE UN AUTENTIFIKĀCIJA

### 1.1. Administratora autorizācija (AdminAuthView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────┐
│    Nepieciešama administratora   │
│           autorizācija           │
├─────────────────────────────────┤
│ Lūdzu, ievadiet savu paroli,     │
│ lai turpinātu.                  │
│                                │
│     [Parole________________]     │
│                                │
│        [Apstiprināt] [Atcelt]    │
└─────────────────────────────────┘
```

**FXML elementi:**
- **`passwordField`** - paroles ievades lauks (onAction="#handleOk")
- **`handleOk`** - paroles apstiprināšana
- **`handleCancel`** - atcelšana

**Kontrolieris:** `AdminAuthController` (no `lv.socialcare.view` paketes)

---

## 2. ADMINISTRATORA RĪKI

### 2.1. Galvenais rīku panelis (AdminToolsView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│                    Administratora rīki                    │
├─────────────────────────────────────────────────────────────┤
│ ▼ Datu pārvaldība                                         │
│ [Importēt papildu datus (.xlsx)]                         │
│ [Dublēt datubāzi (Backup)]                               │
│ [Atjaunot dzēstos klientus]                              │
│ [Sinhronizēt bezsaistes datus]                           │
│ [Atjaunot datubāzi (Restore)]                            │
│ [Ātrais Tests (Root Access)]                            │
│ [Iestatīt ZIP paroli]                                   │
├─────────────────────────────────────────────────────────────┤
│ ▼ Paroļu pārvaldība                                      │
│ [Mainīt administratora paroli]                          │
│ [Pārvaldīt lietotājus]                                  │
│ [Piešķirt pagaidu tiesības]                             │
├─────────────────────────────────────────────────────────────┤
│ ▼ Sistēmas rīki                                           │
│ [Skatīt darbību vēsturi]                                │
│ [Eksportēt darbību vēsturi]                             │
│ [Veikt DB auditu]                                        │
│ [Dzēst darbību vēsturi]                                 │
│ [Pārvaldīt iestādes informāciju]                        │
│ [Konfigurācijas redaktors]                              │
│ [Pārvaldīt Excel veidnes]                               │
│ [Veidņu kartēšanas redaktors]                           │
├─────────────────────────────────────────────────────────────┤
│ ▼ Bīstamā zona                                            │
│ [Neatgriezeniski dzēst vecos datus (> 5 gadi)]           │
│ [Dzēst visus datus no datubāzes]                        │
│ [Pilna programmas atiestatīšana]                        │
├─────────────────────────────────────────────────────────────┤
│                              [Aizvērt]                    │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi un funkcijas:**

#### Datu pārvaldība:
- **`handleDataImport`** - "Importēt papildu datus (.xlsx)"
- **`handleBackupDatabase`** - "Dublēt datubāzi (Backup)"
- **`handleRestoreDeletedClients`** - "Atjaunot dzēstos klientus"
- **`handleRestoreDatabase`** - "Atjaunot datubāzi (Restore)"
- **`handleQuickTest`** - "Ātrais Tests (Root Access)"
- **`handleSetBackupPassword`** - "Iestatīt ZIP paroli"

#### Paroļu pārvaldība:
- **`handleChangeAdminPassword`** - "Mainīt administratora paroli"
- **`handleForcePasswordReset`** - "Pārvaldīt lietotājus"
- **`handleGrantTempAccess`** - "Piešķirt pagaidu tiesības"

#### Sistēmas rīki:
- **`handleViewAuditLog`** - "Skatīt darbību vēsturi"
- **`handleExportAuditLog`** - "Eksportēt darbību vēsturi"
- **`handleLogDatabaseState`** - "Veikt DB auditu"
- **`handleClearAuditLog`** - "Dzēst darbību vēsturi"
- **`handleManageInstitutionInfo`** - "Pārvaldīt iestādes informāciju"
- **`handleEditConfig`** - "Konfigurācijas redaktors"
- **`handleManageTemplates`** - "Pārvaldīt Excel veidnes"
- **`handleTemplateMapping`** - "Veidņu kartēšanas redaktors"

#### Bīstamā zona:
- **`handlePurgeOldData`** - "Neatgriezeniski dzēst vecos datus (> 5 gadi)"
- **`handleClearDatabase`** - "Dzēst visus datus no datubāzes"
- **`handleFullReset`** - "Pilna programmas atiestatīšana"

**Kontrolieris:** `AdminToolsController`

---

## 3. LIETOTĀJU PĀRVALDĪBA

### 3.1. Lietotāju pārvaldība (UserManagementView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│                 Lietotāju pārvaldība                       │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Lietotājvārds │ Vārds Uzvārds │ Loma │ Statuss        │ │
│ │ [username]   │ [fullname]   │ [role]│ [status]      │ │
│ │ [username]   │ [fullname]   │ [role]│ [status]      │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Pievienot lietotāju] [Dzēst lietotāju] [Aizvērt]        │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`usersTable`** - lietotāju tabula
- **`usernameColumn`** - lietotājvārda kolonna
- **`fullNameColumn`** - pilnā vārda kolonna
- **`roleColumn`** - lomas kolonna
- **`statusColumn`** - statusa kolonna
- **`handleAddUser`** - pievienot lietotāju
- **`handleDeleteUser`** - dzēst lietotāju
- **`handleClose`** - aizvērt

**Kontrolieris:** `UserManagementController`

---

## 4. DATU PĀRVALDĪBA

### 4.1. Datu importa funkcijas

**Tikai Excel formāts (.xlsx):**
- ✅ **Excel (.xlsx)** - papildu datu imports
- ❌ **CSV** - nav implementēts
- ❌ **JSON** - nav implementēts
- ❌ **SQL** - nav implementēts

**Importa veidi:**
- **Papildu dati** - jaunu klientu vai papildus informācijas imports
- **Dublēšana (Backup)** - pilna datubāzes rezerves kopija
- **Atjaunošana (Restore)** - datubāzes atjaunošana no rezerves kopijas

### 4.2. Datu bāzes pārvaldība

**Pieejamās operācijas:**
- **Backup** - izveidot ZIP arhīvu ar datubāzi
- **Restore** - atjaunot datubāzi no ZIP faila
- **Quick Test** - testa piekļuve ar root tiesībām
- **DB Audit** - datubāzes stāvokļa pārbaude
- **Purge Old Data** - dzēst datus vecākus par 5 gadiem

---

## 5. DZĒSTO KLIENTU ATJAUNOŠANA

### 5.1. Dzēsto klientu atjaunošana (DeletedClientsView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│              Dzēsto klientu atjaunošana                    │
│ Izvēlieties klientu un nospiediet 'Atjaunot', lai atgrieztu │
│ to aktīvo sarakstā.                                        │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Personas kods │ Vārds, Uzvārds │ Dzēsts (Atjaunināts) │ │
│ │ [pk]          │ [name]        │ [date]              │ │
│ │ [pk]          │ [name]        │ [date]              │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                              [Aizvērt] [Atjaunot klientu] │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`deletedClientsTable`** - dzēsto klientu tabula
- **`colPersonasKods`** - personas koda kolonna
- **`colVardsUzvards`** - vārda, uzvārda kolonna
- **`colLastUpdated`** - dzēšanas datuma kolonna
- **`restoreButton`** - "Atjaunot klientu" (handleRestore)
- **`handleClose`** - "Aizvērt"

**Kontrolieris:** `DeletedClientsController`

---

## 6. VEIDŅU PĀRVALDĪBA

### 6.1. Excel veidņu pārvaldība (TemplateManagementView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│                Excel veidņu pārvaldība                    │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Veidnes nosaukums            │ Statuss                │ │
│ │ [template_name]             │ [status]               │ │
│ │ [template_name]             │ [status]               │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Lejupielādēt] [Augšupielādēt (Aizstāt)] [Atiestatīt uz noklusējuma] │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`templatesTable`** - veidņu tabula
- **`nameColumn`** - veidnes nosaukuma kolonna
- **`statusColumn`** - statusa kolonna
- **`downloadButton`** - lejupielādēt (handleDownload)
- **`uploadButton`** - augšupielādēt (handleUpload)
- **`resetButton`** - atiestatīt (handleReset)

**Kontrolieris:** `TemplateManagementController`

### 6.2. Veidņu kartēšanas redaktors (TemplateMappingView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│                Veidņu kartēšanas redaktors                  │
├─────────────────────────────────────────────────────────────┤
│ Izvēlieties veidni: [▼ templateSelector] [Saglabāt izmaiņas] [Palīdzība] │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────┬─────────────────┬─────────────────────────┐ │
│ │1. Programmas│2. Excel apgabali│3. Rezultāts (Mapping)   │ │
│ │   dati      │ (Named Ranges)  │                         │ │
│ │-------------│-----------------│-------------------------│ │
│ │[dataFields] │[excelRanges]   │[mappings]               │ │
│ │             │                 │                         │ │
│ │             │[Sasaistīt ->]   │[Dzēst sasaisti]         │ │
│ └─────────────┴─────────────────┴─────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Automātiskā sasaiste (Auto-Map)]              [Aizvērt]    │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`templateSelector`** - veidnes izvēle
- **`dataFieldsList`** - programmas datu saraksts
- **`excelRangesList`** - Excel apgabalu saraksts
- **`mappingsList`** - kartēšanas rezultāti
- **`handleSave`** - saglabāt izmaiņas
- **`handleHelp`** - palīdzība
- **`handleMap`** - sasaistīt
- **`handleUnmap`** - dzēst sasaisti
- **`handleAutoMap`** - automātiskā sasaiste
- **`handleClose`** - aizvērt

**Kontrolieris:** `TemplateMappingController`

---

## 7. NOVĒRTĒŠANAS KRITĒRIJI

### 7.1. Novērtēšanas kritēriju redaktors (AssessmentEditorView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│              Novērtēšanas kritēriju redaktors               │
│ Šeit varat pārvaldīt novērtēšanas kartes sadaļas un jautājumus.│
│ Izmaiņas stāsies spēkā pēc programmas restartēšanas.        │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [TreeView - kritēriju koka struktūra]                  │ │
│ │ ▼ Sadaļa 1                                              │ │
│ │   ├── Kritērijs 1.1                                     │ │
│ │   ├── Kritērijs 1.2                                     │ │
│ │ ▼ Sadaļa 2                                              │ │
│ │   ├── Kritērijs 2.1                                     │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Pievienot sadaļu] [Pievienot kritēriju] [Rediģēt] [Dzēst] [Augšup] [Lejup] │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`criteriaTree`** - kritēriju koka struktūra
- **`handleAddSection`** - pievienot sadaļu
- **`handleAddCriterion`** - pievienot kritēriju
- **`handleEdit`** - rediģēt
- **`handleDelete`** - dzēst
- **`handleMoveUp`** - pārvietot augšup
- **`handleMoveDown`** - pārvietot lejup

**Kontrolieris:** `AssessmentEditorController`

### 7.2. Kritērija dialogs (CriterionDialog.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────┐
│ Kods (piem., 1.1): [codeField]        │
│ Teksts: [textField]                   │
│ Kārtošanas secība: [orderField]        │
│ Statuss: ☑ Aktīvs                     │
│                                         │
│           [Saglabāt] [Atcelt]          │
└─────────────────────────────────────────┘
```

**FXML elementi:**
- **`codeField`** - koda lauks
- **`textField`** - teksta lauks
- **`orderField`** - kārtošanas secība
- **`activeCheckBox`** - aktīvs statuss
- **`saveButton`** - saglabāt (handleSave)
- **`handleCancel`** - atcelt

**Kontrolieris:** `CriterionDialogController`

---

## 8. BĪSTAMĀ ZONA

### 8.1. Datu dzēšanas apstiprināšana (PurgeConfirmationView.fxml)

**Faktiskā UI struktūra:**
```
┌─────────────────────────────────────────────────────────────┐
│                Neatgriezeniska datu dzēšana                 │
│ UZMANĪBU! Šie klienti ir dzēsti pirms vairāk nekā 5 gadiem. │
│ Apstiprinot dzēšanu, visi ar šiem klientiem saistītie dati │
│ (plāni, veselības kartes, nodarbības) tiks NEATGRIEZENISKI │
│ dzēsti no datubāzes.                                      │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Personas kods │ Vārds, Uzvārds │ Dzēsts (Datums)       │ │
│ │ [pk]          │ [name]        │ [date]                │ │
│ │ [pk]          │ [name]        │ [date]                │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Atcelt]                           [JĀ, dzēst neatgriezeniski] │
└─────────────────────────────────────────────────────────────┘
```

**FXML elementi:**
- **`clientsTable`** - klientu tabula
- **`colPersonasKods`** - personas koda kolonna
- **`colVardsUzvards`** - vārda, uzvārda kolonna
- **`colLastUpdated`** - dzēšanas datuma kolonna
- **`handleCancel`** - atcelt
- **`handleConfirmPurge`** - apstiprināt dzēšanu

**Kontrolieris:** `PurgeConfirmationController`

### 8.2. Bīstamo operāciju saraksts

**Pieejamās operācijas:**
- **`handlePurgeOldData`** - dzēst datus vecākus par 5 gadiem
- **`handleClearDatabase`** - dzēst visus datus no datubāzes
- **`handleFullReset`** - pilna programmas atiestatīšana

**Brīdinājumi:**
- Visas šīs operācijas ir **NEATGRIEZENISKAS**
- Pirms izpildīšanas tiek rādīts apstiprināšanas dialogs
- Operācijas ir pieejamas tikai ar administratora tiesībām

---

## 9. DROŠĪBAS PASĀKUMI

### 9.1. Administratora tiesības

**Loma:** ADMIN
- ✅ **Pilna piekļuve** visām sistēmas funkcijām
- ✅ **Lietotāju pārvaldība** - izveidot, labot, dzēst lietotājus
- ✅ **Datu bāzes pārvaldība** - backup, restore, purge
- ✅ **Konfigurācijas pārvaldība** - sistēmas iestatījumi
- ✅ **Veidņu pārvaldība** - Excel veidnes un kartēšana
- ✅ **Audita žurnāls** - skatīt, eksportēt, dzēst

### 9.2. Drošības protokoli

#### Pirms bīstamām operācijām:
1. **Veiciet rezerves kopiju** (backup)
2. **Pārbaudiet lietotāju sarakstu** - pārliecinieties, ka visi ir izrakstījušies
3. **Paziņojiet lietotājiem** par plānoto pārtraukumu
4. **Pārbaudiet sistēmas statusu**

#### Pēc operācijām:
1. **Pārbaudiet sistēmas darbību**
2. **Pārbaudiet datu integritāti**
3. **Pārbaudiet lietotāju pieslēgšanos**
4. **Dokumentējiet veiktās izmaiņas**

### 9.3. Audita žurnāls

**Kas tiek reģistrēts:**
- Lietotāja pieslēgšanās/izrakstīšanās
- Datu izmaiņas (CREATE, UPDATE, DELETE)
- Administratora operācijas
- Sistēmas konfigurācijas izmaiņas
- Kļūdas un brīdinājumi

**Audita funkcijas:**
- **`handleViewAuditLog`** - skatīt darbību vēsturi
- **`handleExportAuditLog`** - eksportēt darbību vēsturi uz Excel
- **`handleClearAuditLog`** - dzēst darbību vēsturi

---

## KONTROLERU UN DATU AVOTU SARAKSTS

### Galvenie kontrolieri:
- **`AdminAuthController`** - administratora autentifikācija
- **`AdminToolsController`** - galvenais rīku panelis
- **`UserManagementController`** - lietotāju pārvaldība
- **`DeletedClientsController`** - dzēsto klientu atjaunošana
- **`PurgeConfirmationController`** - datu dzēšanas apstiprināšana
- **`TemplateManagementController`** - Excel veidņu pārvaldība
- **`TemplateMappingController`** - veidņu kartēšana
- **`AssessmentEditorController`** - novērtēšanas kritēriju redaktors
- **`CriterionDialogController`** - kritērija dialogs

### Admin serviss:
- **`AdminService`** - centralizēts admin operāciju serviss
  - `AppDataService` - datu piekļuves serviss
  - `ConfigurationService` - konfigurācijas serviss
  - `UserCredentialsRepository` - lietotāju datu repozitorijs
  - `SessionManager` - sesiju pārvaldnieks
  - `UserManagementService` - lietotāju pārvaldības serviss
  - `SystemMaintenanceService` - sistēmas uzturēšanas serviss

### Datu avoti (MySQL tabulas):
- **`users`** - lietotāju konti
- **`audit_log`** - darbību žurnāls
- **`configuration`** - sistēmas konfigurācija
- **`klienti`** - klientu dati (ar is_deleted marķieriem)
- **`templates`** - Excel veidņu metadati
- **`template_mappings`** - veidņu kartēšana
- **`assessment_criteria`** - novērtēšanas kritēriji

---

## TEHNISKĀS INFORMĀCIJAS

### JavaFX UI komponentes:
- **BorderPane** - galvenais izkārtojums
- **TableView** - datu tabulas
- **TreeView** - hierarhiski dati (kritēriji)
- **ListView** - saraksti (lietotāji, veidnes)
- **ComboBox** - izvēles lauki
- **Button** - darbības pogas ar FontAwesome ikonām
- **PasswordField** - droša paroles ievade
- **ScrollPane** - ritināmi satura apgabali

### Stilu klases:
- **`dialog-pane`** - dialogu logi
- **`section-header`** - sadaļu virsraksti
- **`primary-button`** - primārās darbības pogas
- **`secondary-button`** - sekundārās pogas
- **`danger-button`** - bīstamo darbību pogas
- **`success-button`** - veiksmīgu darbību pogas
- **`info-button`** - informācijas pogas

---

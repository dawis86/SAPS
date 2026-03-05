# Klientu Reģistrs - Sociālā darbinieka rokasgrāmata

**Versija:** 2.1.0  
**Loma:** Sociālais darbinieks  
**Izstrādātājs:** Dāvis Strazds  

---

## SATURA RĀDĪTĀJS

1. [IEVADS](#1-ievads)
2. [PIEKĻUVE UN AUTENTIFIKĀCIJA](#2-piekļuve-un-autentifikācija)
3. [KLIENTU REĢISTRĀCIJA](#3-klientu-reģistrācija)
4. [KLIENTA KARTES PĀRVALDĪBA](#4-klienta-kartes-pārvaldība)
5. [APRŪPES UN REHABILITĀCIJAS PLĀNI](#5-aprupes-un-rehabilitācijas-plāni)
6. [NODARBĪBU UN AKTIVITĀŠU VADĪBA](#6-nodarbibas-un-aktivitasu-vadiba)
7. [SARUNU UN PROTOKOLU VADĪBA](#7-sarunu-un-protokolu-vadiba)
8. [STATISTIKA UN ATSKAITES](#8-statistika-un-atskaites)
9. [DROŠĪBAS PASĀKUMI](#9-drošibas-pasakumi)
10. [BIEDĪGI PADOMI](#10-biedigi-padomi)

---

## 1. IEVADS

### 1.1. Sociālā darbinieka atbildība

Kā sociālais darbinieks jums ir atbildība par:
- Klientu reģistrāciju un iestāšanu sistēmā
- Klienta kartes pilnīgu aizpildīšanu
- Sociālās anamnēzes vākšanu
- Aprūpes un rehabilitācijas plānu izstrādi
- Nodarbību un aktivitāšu plānošanu
- Klientu progresa uzraudzību un novērtēšanu
- Sadarbību ar citiem speciālistiem

### 1.2. Sistēmas sociālās funkcijas

**Galvenās sociālās funkcijas:**
- Klientu reģistrācija un personas datu pārvaldība
- Klienta kartes izveide un uzturēšana
- Sociālās anamnēzes vākšana
- Aprūpes un rehabilitācijas plānu izstrāde
- Nodarbību un aktivitāšu reģistrēšana
- Sarunu un protokolu vadība
- Klientu kustības un progresa analīze

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

3. **Sociālā darbinieka saskarne:**
   Pēc veiksmīgas pieteikšanās nonāksiet galvenajā panelī ar sociālajām funkcijām.

### 2.2. Sociālā darbinieka tiesības

Jūsu loma (USER/MANAGER) ļauj piekļūt:
- ✅ Klientu reģistrācijai
- ✅ Klienta kartes pārvaldībai
- ✅ Plānu izveidei
- ✅ Nodarbību reģistrēšanai
- ✅ Sarunu protokoliem
- ✅ Statistikai
- ❌ Medicīniskajiem datiem (tikai skatīšanai)
- ❌ Administratīvajām funkcijām

---

## 3. KLIENTU REĢISTRĀCIJA

### 3.1. Jauna klienta reģistrēšana

1. **Atveriet klienta reģistrāciju:**
   - Galvenais panelis → Reģistrēt klientu

2. **Aizpildiet pamatinformāciju:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ JAUNA KLIENTA REĢISTRĀCIJA                         │
   ├─────────────────────────────────────────────────────┤
   │ PAMATINFORMĀCIJA                                        │
   │ ┌─────────────────────────────────────────────────┐ │
   │ │ Vārds: [________________________]            │ │
   │ │ Uzvārds: [______________________]          │ │
   │ │ Personas kods: [______________________]      │ │
   │ │ Dzimšanas datums: [__.__.____]             │ │
   │ │ Dzimšanas vieta: [______________________]    │ │
   │ │                                                         │ │
   │ │ Adrese:                                          │ │
   │ │ [________________________________________]        │ │
   │ │                                                         │ │
   │ │ Telefons: [________________________]          │ │
   │ │ E-pasts: [________________________]            │ │
   │ └─────────────────────────────────────────────────┘ │
   │                                                         │
   │ [Turpināt] [Pārbaudīt] [Atcelt]                   │
   └─────────────────────────────────────────────────────┘
   ```

### 3.2. Personas koda validācija

Sistēma automātiski pārbauda personas koda pareizību:

**Pieņemamie formāti:**
- `DDMMYY-XXXXX` (piem., `161175-19997`)
- `32XXXXXXXXX` (21. gadsimta personas kodi)

**Validācijas kļūdas:**
- "Personas kodam jābūt formātā DDMMYY-XXXXX"
- "Nederīgs personas kods"
- "Klients ar šādu personas kodu jau eksistē"

### 3.3. Iestāšanas informācija

```
┌─────────────────────────────────────────────────────┐
│ IESTĀŠANAS INFORMĀCIJA                                 │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Iestāšanas datums: [__.__.____]               │ │
│ │ Iestāšanas veids: [▼ Pirmreizēja ▼]          │ │
│ │                                                         │ │
│ │ Iestāšanas pamats:                                   │ │
│ │ [________________________________________]        │ │
│ │                                                         │ │
│ │ Iestāšanas lēmums:                                    │ │
│ │ [________________________________________]        │ │
│ │                                                         │ │
│ │ Iestāšanas rīkojums:                                  │ │
│ │ [________________________________________]        │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Saglabāt] [Atcelt]                                 │
└─────────────────────────────────────────────────────┘
```

---

## 4. KLIENTA KARTES PĀRVALDĪBA

### 4.1. Klienta kartes atvēršana

1. **Atrodiet klientu:**
   - Galvenais panelis → Klientu saraksts
   - Meklējiet pēc vārda, uzvārda vai personas koda
   - Dubultklikšķis uz klienta

2. **Klienta kartes cilnes:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ JĀNIS BĒRZIŅŠ (161175-19997)                     │
   ├─────────────────────────────────────────────────────┤
   │ [Pamati] [Soc. anamnēze] [Plāni] [Nodarbības] │
   │ [Protokoli] [Sarunas] [Novērtēšana]          │
   └─────────────────────────────────────────────────────┘
   ```

### 4.2. Pamatinformācijas aizpildīšana

#### 4.2.1. Personas dati

```
┌─────────────────────────────────────────────────────┐
│ PAMATINFORMĀCIJA                                        │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Vārds: Jānis                                         │ │
│ │ Uzvārds: Bērziņš                                   │ │
│ │ Personas kods: 161175-19997                          │ │
│ │ Dzimšanas datums: 16.11.1975                        │ │
│ │ Dzimšanas vieta: Rīga                              │ │
│ │                                                         │ │
│ │ Adrese: Brīvības iela 123, Rīga, LV-1001           │ │
│ │ Telefons: 29123456                                  │ │
│ │ E-pasts: janis.berzins@epasts.lv                   │ │
│ │                                                         │ │
│ │ Statuss: [▼ AKTĪVS ▼]                             │ │
│ │ Iestāšanas datums: 15.01.2024                        │ │
│ │ Aiziešanas datums: [________________]                │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Rediģēt] [Saglabāt] [Atcelt]                         │
└─────────────────────────────────────────────────────┘
```

#### 4.2.2. Sociālā anamnēze

```
┌─────────────────────────────────────────────────────┐
│ SOCIĀLĀ ANAMNĒZE                                        │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Izglītība:                                            │ │
│ │ [Vidējā izglītība]                                 │ │
│ │                                                         │ │
│ │ Profesionālā pieredze:                                 │ │
│ │ [Strādnieks fabrikā (1980-2015)]                     │ │
│ │                                                         │ │
│ │ Ģimenes stāvoklis:                                     │ │
│ │ [Šķīrss, dzīvo ar sievu]                              │ │
│ │                                                         │ │
│ │ Bērni:                                                │ │
│ │ [Dēls (35 g), meita (32 g)]                          │ │
│ │                                                         │ │
│ │ Dzīvesvietas:                                          │ │
│ │ [Īrēja dzīvoklis Rīgas centrā]                     │ │
│ │                                                         │ │
│ │ Ienākumi:                                             │ │
│ │ [Pensija, bērnu pabalsts]                            │ │
│ │                                                         │ │
│ │ Intereses un hobiji:                                   │ │
│ │ [Lasīšana, makšķerēšana, dārza darbi]              │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Rediģēt] [Saglabāt] [Atcelt]                         │
└─────────────────────────────────────────────────────┘
```

### 4.3. Piederīgo pārvaldība

#### 4.3.1. Piederīgo pievienošana

```
┌─────────────────────────────────────────────────────┐
│ PIERIEĪGIE                                               │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Vārds: [________________________]            │ │
│ │ Uzvārds: [______________________]          │ │
│ │ Personas kods: [______________________]      │ │
│ │                                                         │ │
│ │ Radzība: [▼ Dēls ▼]                               │ │
│ │ Telefons: [________________________]          │ │
│ │ Adrese: [________________________________________]        │ │
│ │                                                         │ │
│ │ Epasta kontaktinformācija:                            │ │
│ │ [________________________]                            │ │
│ │                                                         │ │
│ │ Ir tiesības apmeklēt klientu: [✓]                │ │
│ │                                                         │ │
│ │ Piezīmes:                                              │ │
│ │ [Kontaktē tik ārkārtējos gadījumos]           │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Pievienot] [Rediģēt] [Dzēst]                         │
└─────────────────────────────────────────────────────┘
```

---

## 5. APRŪPES UN REHABILITĀCIJAS PLĀNI

### 5.1. Aprūpes plāna izveide

1. **Atveriet plānu veidotāju:**
   - Klienta karte → Plāni → Izveidot aprūpes plānu

2. **Plāna pamatinformācija:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ APRŪPES PLĀNS                                         │
   ├─────────────────────────────────────────────────────┤
   │ ┌─────────────────────────────────────────────────┐ │
   │ │ Plāna numurs: AP-2024-001                         │ │
   │ │ Izveides datums: 15.01.2024                        │ │
   │ │                                                         │ │
   │ │ Sākuma datums: [15.01.2024]                       │ │
   │ │ Beigu datums: [15.04.2024]                         │ │
   │ │                                                         │ │
   │ │ Atbildīgais darbinieks:                            │ │
   │ │ [Anna Bērziņa ▼]                                  │ │
   │ │                                                         │ │
   │ │ Plāna mērķi:                                       │ │
   │ │ [________________________________________]        │ │
   │ │                                                         │ │
   │ │ • Uzlabot kustību kustību                           │ │
   │ │ • Palielināt pašapkalpošanās prasmes              │ │
   │ │ • Saglabāt sociālās prasmes                       │ │
   │ │                                                         │ │
   │ │ Plāna apraksts:                                     │ │
   │ │ [________________________________________]        │ │
   │ └─────────────────────────────────────────────────┘ │
   │                                                         │
   │ [Turpināt] [Saglabāt] [Atcelt]                   │
   └─────────────────────────────────────────────────────┘
   ```

### 5.2. Plāna punktu izveide

#### 5.2.1. Plāna punktu pievienošana

```
┌─────────────────────────────────────────────────────┐
│ PLĀNA PUNKTI                                           │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ 1. Mērķis: Uzlabot kustību kustību               │ │
│ │    Darbības:                                            │ │
│ │    • Vingrinājumi 3x nedēļā                         │ │
│ │    • Pastaigas 2x dienā                             │ │
│ │    • Masāža 1x nedēļā                              │ │
│ │                                                         │ │
│ │    Atbildīgais: Pēters Kalniņš (fizioterapeits)     │ │
│ │    Termiņš: 15.02.2024                              │ │
│ │    Statuss: [▼ PLĀNOTS ▼]                           │ │
│ │                                                         │ │
│ │ 2. Mērķis: Palielināt pašapkalpošanās prasmes      │ │
│ │    Darbības:                                            │ │
│ │    • Mācības pašapkalpošanās veidišanas              │ │
│ │    • Praktiski vingrinājumi mājās                   │ │
│ │                                                         │ │
│ │    Atbildīgais: Līga Ozola (māsa)                   │ │
│ │    Termiņš: 28.02.2024                              │ │
│ │    Statuss: [▼ PLĀNOTS ▼]                           │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Pievienot punktu] [Rediģēt] [Dzēst]                 │
│ [Eksportēt plānu] [Drukāt] [Nosūtīt ārstam]        │
└─────────────────────────────────────────────────────┘
```

### 5.3. Rehabilitācijas plāns

#### 5.3.1. Rehabilitācijas plāna struktūra

```
┌─────────────────────────────────────────────────────┐
│ REHABILITĀCIJAS PLĀNS                                  │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Plāna numurs: REH-2024-001                        │ │
│ │ Sākuma datums: 15.01.2024                           │ │
│ │ Beigu datums: 15.07.2024                             │ │
│ │                                                         │ │
│ │ Rehabilitācijas mērķi:                             │ │
│ │ • Atjaunot kustību funkcijas līdz 100m              │ │
│ │ • Samazināt sāpes no 5/10 līdz 2/10                 │ │
│ │ • Atjaunot pašapkalpošanās prasmes līdz 4/5        │ │
│ │                                                         │ │
│ │ Rehabilitācijas komanda:                             │ │
│ │ • Fizioterapeits: Pēters Kalniņš                      │ │
│ │ • Māsa: Anna Bērziņa                                  │ │
│ │ • Ergoterapeits: Līga Ozola                           │ │
│ │ • Sociālais darbinieks: Jānis Ozols                  │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Turpināt] [Saglabāt] [Atcelt]                   │
└─────────────────────────────────────────────────────┘
```

---

## 6. NODARBĪBU UN AKTIVITĀŠU VADĪBA

### 6.1. Nodarbību reģistrēšana

1. **Atveriet nodarbību reģistrāciju:**
   - Galvenais panelis → Nodarbības

2. **Reģistrējiet nodarbību:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ NODARBĪBU REĢISTRĀCIJA                              │
   ├─────────────────────────────────────────────────────┤
   │ ┌─────────────────────────────────────────────────┐ │
   │ │ Datums: [15.01.2024]                               │ │
   │ │ Laiks: [10:30]                                      │ │
   │ │                                                         │ │
   │ │ Klients: [Jānis Bērziņš ▼]                         │ │
   │ │                                                         │ │
   │ │ Nodarbības veids: [▼ Fizioterapija ▼]            │ │
   │ │ Speciālists: [Anna Bērziņa ▼]                       │ │
   │ │                                                         │ │
   │ │ Nodarbības apraksts:                                 │ │
   │ │ [Vingrinājumi kustību kustībai]                   │ │
   │ │                                                         │ │
   │ │ Ilgums: [45____] minūtes                             │ │
   │ │                                                         │ │
   │ │ Klienta reakcija:                                     │ │
   │ │ [Klients veica vingrinājumus, sūdzēja par nelielu] │ │
   │ │ [sāpēm, bet turpināja nodarbību]                   │ │
   │ └─────────────────────────────────────────────────┘ │
   │                                                         │
   │ [Saglabāt] [Atcelt]                                 │
   └─────────────────────────────────────────────────────┘
   ```

### 6.2. Aktivitāšu klasifikators

#### 6.2.1. Aktivitāšu veidi

```
┌─────────────────────────────────────────────────────┐
│ AKTIVITĀŠU KLASIFIKATORS                              │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Bloks: [▼ TERAPIJA ▼]                              │ │
│ │                                                         │ │
│ │ Speciālists: [▼ FIZIOTERAPEITS ▼]                  │ │
│ │                                                         │ │
│ │ Joma: [▼ KUSTĪBU KUSTĪBA ▼]                        │ │
│ │                                                         │ │
│ │ Līmenis: [▼ PAMATNIVELIS ▼]                          │ │
│ │                                                         │ │
│ │ Aktivitāte:                                          │ │
│ │ [Vingrinājumi stāvus vietā]                         │ │
│ │                                                         │ │
│ │ Apraksts:                                            │ │
│ │ [Pamatu vingrinājumi kustību stiprināšanai]       │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Pievienot] [Rediģēt] [Dzēst]                         │
└─────────────────────────────────────────────────────┘
```

### 6.3. Nodarbību statistika

```
┌─────────────────────────────────────────────────────┐
│ NODARBĪBU STATISTIKA (2024. gada janvāris)          │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Nodarbības veids       │ Nodarbības │ Stundas │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Fizioterapija          │ 124        │ 93      │ │
│ │ Ergoterapija           │ 67         │ 50      │ │
│ │ Runas terapija          │ 45         │ 34      │ │
│ │ Darbu terapija         │ 34         │ 26      │ │
│ │ Masāža                 │ 23         │ 17      │ │
│ │                                                         │ │
│ │ Kopā:                   │ 293        │ 220     │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Grafiki] [Eksportēt]         │
└─────────────────────────────────────────────────────┘
```

---

## 7. SARUNU UN PROTOKOLU VADĪBA

### 7.1. Sarunu reģistrēšana

1. **Atveriet sarunu žurnālu:**
   - Klienta karte → Sarunas

2. **Reģistrējiet sarunu:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ SARUNAS APRAKSTS                                      │
   ├─────────────────────────────────────────────────────┤
   │ ┌─────────────────────────────────────────────────┐ │
   │ │ Datums: [15.01.2024]                               │ │
   │ │ Laiks: [14:30]                                      │ │
   │ │                                                         │ │
   │ │ Klients: Jānis Bērziņš (161175-19997)               │ │
   │ │                                                         │ │
   │ │ Sarunas veids: [▼ Individuāla ▼]                   │ │
   │ │ Dalībnieki:                                             │ │
   │ │ • Sociālais darbinieks: Jānis Ozols                  │ │
   │ │ • Klients: Jānis Bērziņš                            │ │
   │ │                                                         │ │
   │ │ Sarunas tēma:                                         │ │
   │ │ [Klienta pašsajūta par rehabilitācijas progresu]    │ │
   │ │                                                         │ │
   │ │ Sarunas saturs:                                      │ │
   │ │ [Klients izteica apmierinātību par fizioterapijas] │ │
   │ │ [rezultātiem. Ziņoja, ka sāpes kustībā ir]       │ │
   │ │ [samazinājušās. Diskutējām par turpmāko]          │ │
   │ │ [rehabilitācijas plānu.]                               │ │
   │ │                                                         │ │
   │ │ Secinājumi:                                            │ │
   │ │ [Klients ir motivēts turpināt rehabilitāciju.]       │ │
   │ │ [Nepieciešams papildus fokus uz kāju stiprināšanu.] │ │
   │ │                                                         │ │
   │ │ Turpmākie pasākumi:                                    │ │
   │ │ [1. Papildināt fizioterapijas vingrinājumus]       │ │
   │ │ [2. Plānot kāju stiprināšanas sesijas]             │ │
   │ │ [3. Novērtēt progresu pēc 2 nedēļām]             │ │
   │ └─────────────────────────────────────────────────┘ │
   │                                                         │
   │ [Saglabāt] [Drukāt] [Atcelt]                         │
   └─────────────────────────────────────────────────────┘
   ```

### 7.2. Protokolu veidošana

#### 7.2.1. Rehabilitācijas protokols

```
┌─────────────────────────────────────────────────────┐
│ REHABILITĀCIJAS PROTOKOLS                             │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Protokola numurs: REP-2024-001                         │ │
│ │ Datums: 15.01.2024                                      │ │
│ │                                                         │ │
│ │ Klients: Jānis Bērziņš (161175-19997)               │ │
│ │                                                         │ │
│ │ Rehabilitācijas mērķi:                             │ │
│ │ 1. Atjaunot kustību kustību līdz 100 metru bez palīdzības │ │
│ │ 2. Samazināt sāpes no 5/10 līdz 2/10                 │ │
│ │ 3. Atjaunot pašapkalpošanās prasmes līdz 4/5        │ │
│ │                                                         │ │
│ │ Rehabilitācijas plāns:                                   │ │
│ │ ┌─────────────────────────────────────────────────┐ │ │
│ │ │ Nedēļa │ Mērķis                             │ Intervences                    │ │
│ │ ├─────────────────────────────────────────────────┤ │ │
│ │ │ 1-2     │ Sāpju samazināšana                 │ • Siltuma terapija              │ │
│ │ │         │                                     │ • Vieglas vingrinājumi       │ │
│ │ │ 3-4     │ Kustību kustības uzlabošana      │ • Balanss vingrinājumi       │ │
│ │ │         │                                     │ • Pastaigas vingrinājumi     │ │
│ │ │ 5-6     │ Spēka palielināšana               │ │ • Pretestības treniņš         │ │
│ │ │         │                                     │ │ • Funkcionālie vingrinājumi   │ │
│ │ │ 7-8     │ Funkcijas atjaunošana            │ │ • Ikdienas darbību treniņš   │ │
│ │ │         │                                     │ │ • Sadzīves prasmju treniņš   │ │
│ │ └─────────────────────────────────────────────────┘ │ │
│ │                                                         │ │
│ │ Atbildīgās personas:                                      │ │
│ │ • Fizioterapeits: Pēters Kalniņš                         │ │
│ │ • Māsa: Anna Bērziņa                                    │ │
│ │ • Sociālais darbinieks: Jānis Ozols                  │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Saglabāt] [Drukāt] [Nosūtīt ārstam]               │
└─────────────────────────────────────────────────────┘
```

---

## 8. STATISTIKA UN ATSKAITES

### 8.1. Klientu statistika

1. **Piekļūstiet statistikai:**
   - Galvenais panelis → Statistika → Klientu statistika

2. **Pieejamā statistika:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ KLIENTU STATISTIKA (2024. gada janvāris)           │
   ├─────────────────────────────────────────────────────┤
   │ ┌─────────────────────────────────────────────────┐ │
   │ │ Rādītājs                     │ Vērtība          │ │
   │ ├─────────────────────────────────────────────────┤ │
   │ │ Kopējais klientu skaits       │ 156              │ │
   │ │ Jauni klienti (mēnesī)       │ 12               │ │
   │ │ Aizgājuši (mēnesī)          │ 3                │ │
   │ │ Aktīvie klienti              │ 141              │ │
   │ │                                                         │ │
   │ │ Vecuma sadalījums:                                   │ │
   │ │ • 18-30 gadi                │ 15 (9.6%)        │ │
   │ │ • 31-50 gadi                │ 45 (28.8%)       │ │
   │ │ • 51-70 gadi                │ 72 (46.2%)       │ │
   │ │ • >70 gadi                   │ 24 (15.4%)       │ │
   │                                                         │ │
   │ │ Dzimuma sadalījums:                                   │ │
   │ │ • Vīrieši                    │ 89 (57.1%)       │ │
   │ │ • Sievietes                  │ 67 (42.9%)       │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Grafiki] [Eksportēt]         │
└─────────────────────────────────────────────────────┘
   ```

### 8.2. Klientu kustības analīze

```
┌─────────────────────────────────────────────────────┐
│ KLIENTU KUSTĪBAS ANALĪZE (2024. gada janvāris)     │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Datums      │ Ienākošie │ Aizgājuši │ Aktīvie │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ 01.01.2024 │ 0          │ 0          │ 141     │ │
│ │ 08.01.2024 │ 3          │ 0          │ 144     │ │
│ │ 15.01.2024 │ 2          │ 1          │ 145     │ │
│ │ 22.01.2024 │ 1          │ 0          │ 146     │ │
│ │ 29.01.2024 │ 6          │ 2          │ 150     │ │
│ │                                                         │ │
│ │ Kopā mēnesī:              │ 12         │ 3          │ 156     │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ │ Kustības rādītāji:                                   │ │
│ │ • Ienākošo ātrums: 2.7 nedēļās                     │ │
│ │ • Aiziešanas ātrums: 0.6 nedēļās                     │ │
│ │ • Vidējais uzturēšanās laiks: 18.5 mēneši          │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Prognozes] [Eksportēt]        │
└─────────────────────────────────────────────────────┘
```

### 8.3. Nodarbību efektivitātes analīze

```
┌─────────────────────────────────────────────────────┐
│ NODARBĪBU EFEKTIVITĀTES ANALĪZE                        │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Nodarbības veids       │ Vidējais │ Efektivitātes │ │
│ │                        │ apmeklējums │ indekss       │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Fizioterapija          │ 85%       │ 4.2/5          │ │
│ │ Ergoterapija           │ 78%       │ 3.9/5          │ │
│ │ Runas terapija          │ 92%       │ 4.6/5          │ │
│ │ Darbu terapija         │ 65%       │ 3.3/5          │ │
│ │ Masāža                 │ 88%       │ 4.4/5          │ │
│ │                                                         │ │
│ │ Kopējais efektivitātes indekss: 4.08/5               │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ │ Ieteikumi:                                             │ │
│ │ • Palielināt darbu terapijas apmeklējumu             │ │
│ │ │ • Optimizēt fizioterapijas grupu veidošanu           │ │
│ │ │ • Papildināt ergoterapijas resursus               │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Uzlabojumi] [Eksportēt]       │
└─────────────────────────────────────────────────────┘
```

---

## 9. DROŠĪBAS PASĀKUMI

### 9.1. Personu datu aizsardzība

**GDPR atbilstības prasības:**
- Iegūstiet informētu piekrišanu pirms datu vākšanas
- Vāciet tikai nepieciešamos datus
- Nodrošiniet datu drošību un konfidencialitāti
- Ļaujiet klientiem piekļūt saviem datiem
- Dzēšiet datus, kad tie vairs nav nepieciešami

### 9.2. Datu apstrādes principi

**Tiesības pamatprincipi:**
- **Likumība:** Apstrādāt tikai likumīgiem mērķiem
- **Pareizība:** Nodrošināt datu precizitābu un atjaunināšanu
- **Ierobežotība:** Vākt tikai nepieciešamos datus
- **Uzglabāšana:** Glabāt datus tikai nepieciešamo laiku
- **Integritāte:** Aizsargāt datus pret neatļautu izmainīšanu
- **Konfidencialitāte:** Aizsargāt datus pret neautorizētu piekļuvi

### 9.3. Darba drošība

**Fiziskā drošība:**
- Noslēgt datoru, kad atstājat darba vietu
- Izmantot tikai autorizētus programmatūras resursus
- Nekopēt paroles vai sensitīvu informāciju
- Ziņot par aizdomīgām darbībām

**Digitālā drošība:**
- Izmantot stipras un unikālas paroles
- Regulāri mainīt paroles
- Izmantot divfaktoru autentifikāciju, ja iespējams
- Uzraudzīt piekļuves mēģinājumus

---

## 10. BIEDĪGI PADOMI

### 10.1. Efektīva darba veidi

**Laika pārvaldība:**
- Plānojiet dienu iepriekš
- Prioritizējiet uzdevumus pēc steiguma
- Atvēliet laiku neparedzētiem gadījumiem
- Veiciet regulārus pārskatus

**Dokumentācija:**
- Rakstiet protokolus tūlīt pēc notikuma
- Būtiet specifiski un detalizēti
- Izmantojiet standarta terminoloģiju
- Saglabājiet dokumentus organizēti

### 10.2. Klientu aprūpes padomi

**Komunikācija:**
- Runājiet skaidri un vienkārši
- Klausieties uzmanīgi klientiem
- Izvairieties no profesionālā žargona
- Rādiet empātiju un izpratni

**Novērtēšana:**
- Veiciet regulārus novērtējumus
- Izmantojiet standartizētus novērtēšanas rīkus
- Fiksējiet visas izmaiņas
- Paprasiet klientam atsauksmi

### 10.3. Profesionālā attīstība

**Zināšanu atjaunināšana:**
- Sekojiet jaunākajām metodēm un vadlīnijām
- Apmācieties jaunas tehnikas un pieejas
- Apmeklējiet jaunus resursus un instrumentus
- Piedalieties profesionālajos kursos

**Pašrefleksija:**
- Analizējiet savu darbu un rezultātus
- Meklējiet iespējas uzlabojumiem
- Lūdziet atsauksmi no kolēģiem un klientiem
- Uzturiet profesionālo attīstības plānu

---

## PIELIKUMI

### Pielikums A: Sociālās aprūpes plānošanas vadlīnijas

| Plāna elements | Nepieciešamā informācija | Avots |
|----------------|-------------------------|--------|
| Klienta vēsture | Iepriekšējās aprūpes, terapijas | Klienta karte |
| Novērtējums | Funkcionālie spēji, vajadzības | Novērtēšanas karte |
| Mērķi | Konkrēti, mērāmi, reālistiski | Team diskusijas |
| Intervences | Terapeitiskās metodes, resursi | Profesionālās vadlīnijas |
| Laika grafiks | Sākuma/beigu datumi, biežums | Plāna prasības |
| Atbildīgās personas | Komandas locekļi, lomas | Personāla plāns |
| Novērtēšana | Kritēriji, termiņi, metodes | Standartizēti rīki |

### Pielikums B: Nodarbību klasifikācija

| Bloks | Speciālists | Joma | Līmenis | Piemēri |
|-------|-------------|-------|----------|----------|
| TERAPIJA | FIZIOTERAPEITS | KUSTĪBU KUSTĪBA | PAMATNIVELIS | Vingrinājumi stāvus vietā |
| TERAPIJA | FIZIOTERAPEITS | KUSTĪBU KUSTĪBA | VIDĒJAIS | Pastaigas, peldēšana |
| TERAPIJA | ERGOTERAPEITS | PAŠAPKALPOŠANĀS | PAMATNIVELIS | Ēšanas mācība |
| TERAPIJA | RUNAS TERAPEITS | KOMUNIKĀCIJA | PAMATNIVELIS | Runas vingrinājumi |
| SOCIĀLA | SOCIĀLAIS DARBINIEKS | INTEGRĀCIJA | PAMATNIVELIS | Sabiedriskās prasmju treniņš |

### Pielikums C: Noderīgi kontakti

**Tehniskais atbalsts:**
- E-pasts: davisstrazds@gmail.com
- Tālrunis: +371 26482667
- Darba laiks: Darbdienās 9:00-18:00

**Profesionālās organizācijas:**
- Latvijas Sociālo darbinieku asociācija: www.lsda.lv
- Latvijas Fizioterapeitu asociācija: www.lfa.lv
- Latvijas Ergoterapeitu asociācija: www.lea.lv

**Tiesību akti:**
- MK noteikumi Nr. 138 "Sociālās aprūpes pakalpojumi"
- MK noteikumi Nr. 338 "Sociālās aprūpes centru nolīgumi"
- GDPR (Vispārā datu aizsardzības regula)

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī rokasgrāmata ir paredzēta sociālajiem darbiniekiem un satur profesionālu informāciju. Tās izplatīšana bez atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2024. gada 15. janvārī*

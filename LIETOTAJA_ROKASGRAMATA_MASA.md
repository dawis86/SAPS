# Klientu Reģistrs - Māsas rokasgrāmata

**Versija:** 2.1.0  
**Loma:** Māsa  
**Izstrādātājs:** Dāvis Strazds  

---

## SATURA RĀDĪTĀJS

1. [IEVADS](#1-ievads)
2. [PIEKĻUVE UN AUTENTIFIKĀCIJA](#2-piekļuve-un-autentifikācija)
3. [KLIENTA KARTES PĀRVALDĪBA](#3-klienta-kartes-pārvaldība)
4. [MEDIKAMENTU PĀRVALDĪBA](#4-medikamentu-pārvaldība)
5. [NODARBĪBU REĢISTRĀCIJA](#5-nodarbibu-reģistrācija)
6. [VESLĪBAS NOVĒRTĒŠANA](#6-veselības-novērtēšana)
7. [SARUNU UN PROTOKOLU VADĪBA](#7-sarunu-un-protokolu-vadība)
8. [STATISTIKA UN ATSKAITES](#8-statistika-un-atskaites)
9. [DROŠĪBAS PASĀKUMI](#9-drošības-pasākumi)
10. [BIEDĪGI PADOMI](#10-biedīgi-padomi)

---

## 1. IEVADS

### 1.1. Māsas atbildība

Kā māsa jums ir atbildība par:
- Klientu veselības stāvokļa uzraudzību
- Medikamentu izsniegšanu un lietošanas kontroli
- Veselības rādītāju mērīšanu un fiksēšanu
- Nodarbību un procedūru reģistrēšanu
- Sadarbību ar ārstiem un citu medicīnisko personālu
- Klientu izglītošanu par veselības uzturēšanu

### 1.2. Sistēmas māsas funkcijas

**Galvenās māsas funkcijas:**
- Klientu kartes pārskatīšana un atjaunināšana
- Medikamentu izsniegšanas reģistrēšana
- Vitalo rādītāju ierakstīšana
- Nodarbību un procedūru žurnāļu uzturēšana
- Veselības novērtēšanas veikšana
- Sarunu ar klientiem protokolēšana

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

3. **Māsas saskarne:**
   Pēc veiksmīgas pieteikšanās nonāksiet galvenajā panelī ar māsas funkcijām.

### 2.2. Māsas tiesības

Jūsu loma (USER/MEDIC) ļauj piekļūt:
- ✅ Klientu veselības datiem
- ✅ Medikamentu izsniegšanas žurnālam
- ✅ Nodarbību reģistrācijai
- ✅ Vitalo rādītāju ierakstīšanai
- ✅ Veselības novērtēšanai
- ❌ Klientu reģistrācijai
- ❌ Administratīvajām funkcijām

---

## 3. KLIENTA KARTES PĀRVALDĪBA

### 3.1. Klienta meklēšana un atvēršana

1. **Atrodiet klientu:**
   - Galvenais panelis → Klientu saraksts
   - Meklējiet pēc vārda, uzvārda vai personas koda
   - Dubultklikšķis uz klienta

2. **Klienta kartes cilnes:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ JĀNIS BĒRZIŅŠ (161175-19997)                     │
   ├─────────────────────────────────────────────────────┤
   │ [Pamati] [Veselība] [Plāni] [Nodarbības]     │
   │ [Protokoli] [Sarunas] [Novērtēšana]          │
   └─────────────────────────────────────────────────────┘
   ```

### 3.2. Veselības informācijas pārskatīšana

#### 3.2.1. Vitalie rādītāji

```
┌─────────────────────────────────────────────────────┐
│ VITALIE RĀDĪTĀJI                                      │
├─────────────────────────────────────────────────────┤
│ PĒDĒJIE IERAKSTI:                                   │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Datums     │ Asinssp. │ Pulss │ Temp. │ Svars │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ 15.01.2024 │ 140/90  │ 78    │ 36.6  │ 85kg  │ │
│ │ 14.01.2024 │ 135/85  │ 75    │ 36.5  │ 85kg  │ │
│ │ 13.01.2024 │ 142/92  │ 80    │ 36.7  │ 85kg  │ │
│ │ 12.01.2024 │ 138/88  │ 76    │ 36.4  │ 86kg  │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Pievienot mērījumu] [Grafiks] [Eksportēt]        │
└─────────────────────────────────────────────────────┘
```

#### 3.2.2. Jauna vitalo rādītāju ieraksta pievienošana

1. **Spiediet "Pievienot mērījumu"**
2. **Aizpildiet veidlapu:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ VITALO RĀDĪTĀJU IERAKSTS                             │
   ├─────────────────────────────────────────────────────┤
   │ Datums un laiks: [15.01.2024 09:30]              │
   │                                                         │
   │ Asinsspiediens:                                        │
   │ Sistoliskais: [140___] mmHg                           │
   │ Diastoliskais: [90____] mmHg                           │
   │                                                         │
   │ Pulss: [78____] sit/min                                │
   │ Temperatūra: [36.6__] °C                               │
   │ Svars: [85____] kg                                      │
   │ Augums: [175___] cm                                      │
   │                                                         │
   │ Elpošanas frekvence: [16___] reiz/min                 │
   │ Skābekļa saturs: [98___]%                             │
   │                                                         │
   │ Piezīmes:                                              │
   │ [Klients jūtas labi, asinsspiediens nedaudz paaugstināts] │
   │                                                         │
   │ [Saglabāt] [Atcelt]                                 │
   └─────────────────────────────────────────────────────┘
   ```

### 3.3. Medikamentu informācijas pārskatīšana

```
┌─────────────────────────────────────────────────────┐
│ PAŠREIZĒJIE MEDIKAMENTI                               │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Zāles           │ Deva    │ Biežums │ Nākamā │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Metoprolols     │ 50mg    │ 2x dienā │ 08:00   │ │
│ │ Metformīns      │ 1000mg  │ 2x dienā │ 08:00   │ │
│ │ Amlodipīns     │ 10mg    │ 1x dienā │ 09:00   │ │
│ │ Atorvastatīns  │ 20mg    │ 1x dienā │ 21:00   │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Medikamentu izsniegšana] [Mainīt] [Vēsture]         │
└─────────────────────────────────────────────────────┘
```

---

## 4. MEDIKAMENTU PĀRVALDĪBA

### 4.1. Medikamentu izsniegšana

1. **Atveriet medikamentu izsniegšanas žurnālu:**
   - Klienta karte → Medikamenti → Izsniegšana

2. **Veiciet izsniegšanas ierakstu:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ MEDIKAMENTU IZSNIEGŠANA                               │
   ├─────────────────────────────────────────────────────┤
   │ Datums: [15.01.2024 08:30]                          │
   │ Klients: Jānis Bērziņš (161175-19997)               │
   │                                                         │
   │ Medikaments: [Metoprolols ▼]                           │
   │ Deva: 50mg                                             │
   │ Forma: Tabletes                                         │
   │ Daudzums: 14 gab.                                       │
   │                                                         │
   │ Izsniedzēja: [Anna Bērziņa]                           │
   │                                                         │
   │ Piezīmes:                                              │
   │ [Izsniegts uz 7 dienām, līdz 22.01.2024]           │
   │                                                         │
   │ [Saglabāt] [Drukāt] [Atcelt]                         │
   └─────────────────────────────────────────────────────┘
   ```

### 4.2. Medikamentu lietošanas kontrole

#### 4.2.1. Medikamentu lietošanas grafiks

```
┌─────────────────────────────────────────────────────┐
│ MEDIKAMENTU LIETOŠANAS GRAFIKS                         │
├─────────────────────────────────────────────────────┤
│ 15.01.2024 (Pirmdiena)                               │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Laiks │ Medikaments    │ Deva   │ Statuss   │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ 08:00 │ Metoprolols    │ 50mg   │ ✅        │ │
│ │ 08:00 │ Metformīns     │ 1000mg │ ✅        │ │
│ │ 09:00 │ Amlodipīns    │ 10mg   │ ⏳        │ │
│ │ 12:00 │ Metformīns     │ 1000mg │ ⏳        │ │
│ │ 18:00 │ Metoprolols    │ 50mg   │ ⏳        │ │
│ │ 18:00 │ Metformīns     │ 1000mg │ ⏳        │ │
│ │ 21:00 │ Atorvastatīns │ 20mg   │ ⏳        │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ Apzīmējiet kā izsniegtu: [Apzīmēt visas]            │
└─────────────────────────────────────────────────────┘
```

#### 4.2.2. Medikamentu atsaukšana

Ja nepieciešams atsaukt medikamentu:
1. **Medikamenti → Atsaukšana**
2. **Ievadiet atsaukšanas iemeslu:**
   - Kļūda izsniegšanā
   - Klienta alerģija
   - Zāļu bojāšana
   - Ārsta norīkojums

3. **Atsaukšanas protokols:**
   - Fiksējiet atsaukšanas datumu un laiku
   - Norādiet atsaukšanas iemeslu
   - Informējiet ārstu
   - Atjaunojiet klienta karti

---

## 5. NODARBĪBU REĢISTRĀCIJA

### 5.1. Nodarbību žurnāls

1. **Atveriet nodarbību reģistrāciju:**
   - Galvenais panelis → Nodarbības

2. **Reģistrējiet nodarbību:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ NODARBĪBU REĢISTRĀCIJA                              │
   ├─────────────────────────────────────────────────────┤
   │ Datums: [15.01.2024]                                   │
   │ Laiks: [10:30]                                          │
   │                                                         │
   │ Klients: [Jānis Bērziņš ▼]                           │
   │                                                         │
   │ Nodarbības veids: [Fizioterapija ▼]                     │
   │ Speciālists: [Anna Bērziņa ▼]                         │
   │                                                         │
   │ Nodarbības apraksts:                                   │
   │ [Vingrinājumi kustību kustības atjaunošanai]           │
   │                                                         │
   │ Ilgums: [45____] minūtes                               │
   │                                                         │
   │ Klienta reakcija:                                       │
│ │ [Klients veica vingrinājumus, sūdzēja par nelielu sāpēm] │
   │                                                         │
   │ [Saglabāt] [Atcelt]                                 │
   └─────────────────────────────────────────────────────┘
   ```

### 5.2. Nodarbību plānošana

#### 5.2.1. Nedēļas nodarbību plāns

```
┌─────────────────────────────────────────────────────┐
│ NEDĒĻAS NODARBĪBU PLĀNS (15.01.2024 - 21.01.2024)    │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Datums   │ Laiks  │ Klients     │ Nodarbība      │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ 15.01.24 │ 10:30  │ J. Bērziņš │ Fizioterapija    │ │
│ │ 15.01.24 │ 14:00  │ M. Kalniņš │ Ergoterapija     │ │
│ │ 16.01.24 │ 09:00  │ L. Ozoliņš │ Fizioterapija    │ │
│ │ 16.01.24 │ 11:00  │ J. Bērziņš │ Masāža          │ │
│ │ 17.01.24 │ 10:00  │ K. Bērziņš │ Fizioterapija    │ │
│ │ 17.01.24 │ 15:00  │ M. Kalniņš │ Runas terapija   │ │
│ │ 18.01.24 │ 09:30  │ J. Bērziņš │ Fizioterapija    │ │
│ │ 18.01.24 │ 13:00  │ L. Ozoliņš │ Darbu terapija   │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Pievienot] [Rediģēt] [Drukāt] [Eksportēt]        │
└─────────────────────────────────────────────────────┘
```

### 5.3. Nodarbību statistika

```
┌─────────────────────────────────────────────────────┐
│ NODARBĪBU STATISTIKA (2024. gada janvāris)          │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Nodarbības veids    │ Nodarbības │ Stundas │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Fizioterapija       │ 124        │ 93      │ │
│ │ Ergoterapija         │ 67         │ 50      │ │
│ │ Masāža              │ 45         │ 34      │ │
│ │ Runas terapija       │ 23         │ 17      │ │
│ │ Darbu terapija       │ 34         │ 26      │ │
│ │                                                         │ │
│ │ Kopā:               │ 293        │ 220     │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Grafiki] [Eksportēt]         │
└─────────────────────────────────────────────────────┘
```

---

## 6. VESĪBAS NOVĒRTĒŠANA

### 6.1. Novērtēšanas kartes

1. **Atveriet novērtēšanas karti:**
   - Klienta karte → Novērtēšana

2. **Veiciet Bartela indeksa novērtējumu:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ BARTELA INDEKSA NOVĒRTĒŠANA                         │
├─────────────────────────────────────────────────────┤
│ Klients: Jānis Bērziņš (161175-19997)               │
│ Datums: 15.01.2024                                      │
│ Novērtētājs: Anna Bērziņa                              │
│                                                         │
│ ĒDĪBAS:                                                  │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Uzdevums                    │ Punkti (0-15)      │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Ēšanas                     │ [10___]           │ │
│ │ Pārvietošanās              │ [12___]           │ │
│ │ Personiskās higiēnas      │ [8____]           │ │
│ │ Izmantošanas tualetes     │ [15___]           │ │
│ │                                                         │ │
│ │ Kopējais punktu skaits: [45___] / 60              │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ MOBILITĀTE:                                               │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Uzdevums                    │ Punkti (0-15)      │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Pārvietošanās gultas      │ [12___]           │ │
│ │ Pozīcijas mainīšana      │ [10___]           │ │
│ │ Pastaigā pārvietošanās  │ [8____]           │ │
│ │ Kāpšanas                   │ [5____]           │ │
│ │                                                         │ │
│ │ Kopējais punktu skaits: [35___] / 60              │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Saglabāt] [Aprēķināt rezultātu] [Atcelt]         │
└─────────────────────────────────────────────────────┘
   ```

### 6.2. Novērtēšanas rezultātu analīze

```
┌─────────────────────────────────────────────────────┐
│ NOVĒRTĒŠANAS REZULTĀTI                                 │
├─────────────────────────────────────────────────────┤
│ Kopējais Bartela indekss: 80 / 100                    │
│                                                         │
│ Novērtējuma līmenis: Maza atkarība                     │
│                                                         │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Kategorija       │ Punkti │ Līmenis              │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Ēdības           │ 45/60  │ Maza atkarība      │ │
│ │ Mobilitāte       │ 35/60  │ Mērena atkarība    │ │
│ │                                                         │ │
│ │ Kopājais rezultāts: 80/100 - Maza atkarība          │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ Ieteikumi:                                              │
│ • Turpināt fizioterapiju 3x nedēļā                     │
│ │ • Vingrināt mobilitātes vingrinājumus                 │ │
│ │ • Uzraudzīt ēšanas progresu                         │ │
│ │                                                         │ │
│ │ [Izveidot plānu] [Drukāt] [Sūtīt ārstam]        │ │
│ └─────────────────────────────────────────────────┘ │
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
│ Datums: [15.01.2024]                                   │
│ Laiks: [14:30]                                          │
│                                                         │
│ Klients: Jānis Bērziņš (161175-19997)               │
│                                                         │
│ Sarunas veids: [Individuāla ▼]                           │
│ Dalībnieki:                                             │
│ • Māsa Anna Bērziņa                                   │
│ • Klients Jānis Bērziņš                                 │
│                                                         │
│ Sarunas tēma:                                           │
│ [Klienta pašsajūta par fizioterapijas progresa]          │
│                                                         │
│ Sarunas saturs:                                          │
│ [Klients izteica apmierinātību par fizioterapijas rezultātiem. │
│  Ziņoja, ka sāpes kustību kustībā ir samazinājušās.        │
│  Diskutējām par turpmāko rehabilitācijas plānu.]           │
│                                                         │
│ Secinājumi:                                            │
│ [Klients ir motivēts turpināt rehabilitāciju.               │
│  Nepieciešams papildus fokus uz kāju stiprināšanu.]       │
│                                                         │
│ Turpmākie pasākumi:                                      │
│ [1. Papildināt fizioterapijas vingrinājumus              │
│ 2. Plānot kāju stiprināšanas sesijas                     │
│ 3. Novērtēt progresi pēc 2 nedēļām]                     │
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
│ Protokola numurs: REP-2024-001                         │
│ Datums: 15.01.2024                                      │
│                                                         │
│ Klients: Jānis Bērziņš (161175-19997)               │
│                                                         │
│ Rehabilitācijas mērķi:                                 │
│ 1. Atjaunot kustību kustību līdz 100 metru bez palīdzības │
│ 2. Samazināt sāpes locītavās no 5/10 līdz 2/10         │
│ 3. Uzlabot līdzsvaru spēju līdz patstāvīgi staigāšanai   │
│                                                         │
│ Rehabilitācijas plāns:                                   │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Nedēļa │ Mērķis                             │ Intervences                    │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ 1-2     │ Sāpju samazināšana                 │ • Siltuma terapija              │ │
│ │         │                                     │ • Vieglas vingrinājumi       │ │
│ │ 3-4     │ Kustību kustības uzlabošana      │ • Balanss vingrinājumi       │ │
│ │         │                                     │ • Pastaigas vingrinājumi     │ │
│ │ 5-6     │ Spēka palielināšana               │ │ • Pretestības treniņš         │ │
│ │         │                                     │ │ • Funkcionālie vingrinājumi   │ │
│ │ 7-8     │ Funkcijas atjaunošana            │ │ • Ikdienas darbību treniņš   │ │
│ │         │                                     │ │ • Sadzīves prasmju treniņš   │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ Atbildīgās personas:                                      │
│ • Fizioterapeits: Pēters Kalniņš                         │
│ • Māsa: Anna Bērziņa                                    │
│                                                         │
│ [Saglabāt] [Drukāt] [Nosūtīt ārstam]               │
└─────────────────────────────────────────────────────┘
```

---

## 8. STATISTIKA UN ATSKAITES

### 8.1. Māsas darba statistika

1. **Piekļūstiet statistikai:**
   - Galvenais panelis → Statistika → Māsas darbs

2. **Pieejamā statistika:**
   ```
   ┌─────────────────────────────────────────────────────┐
   │ MĀSAS DARBA STATISTIKA (2024. gada janvāris)          │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Rādītājs                     │ Vērtība          │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Apskatītie klienti            │ 156              │ │
│ │ Medikamentu izsniegšanas     │ 234              │ │
│ │ Vitalo rādītāju mērījumi     │ 412              │ │
│ │ Nodarbības                   │ 293              │ │
│ │ Novērtēšanas                  │ 45               │ │
│ │ Sarunu protokoli             │ 67               │ │
│ │                                                         │ │
│ │ Darba stundas                │ 220              │ │
│ │ Vidējais laiks uz klientu      │ 1.4 stundas      │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ [Detalizēts atskaite] [Grafiki] [Eksportēt]         │
└─────────────────────────────────────────────────────┘
   ```

### 8.2. Klientu progresa atskaite

```
┌─────────────────────────────────────────────────────┐
│ KLIENTU PROGRESA ATSKAITE                              │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Klients      │ Sākuma indekss │ Pašreizējais │ Izmaiņa │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ J. Bērziņš │ 65              │ 80              │ +15     │ │
│ │ M. Kalniņš │ 70              │ 75              │ +5      │ │
│ │ L. Ozoliņš │ 55              │ 68              │ +13     │ │
│ │ K. Bērziņš │ 60              │ 72              │ +12     │ │
│ └─────────────────────────────────────────────────┘ │
│                                                         │
│ Vidējais progresa rādītājs: +11.25 punkti              │
│                                                         │
│ [Detalizēts atskaite] [Progresa grafiki] [Eksportēt]  │
└─────────────────────────────────────────────────────┘
```

---

## 9. DROŠĪBAS PASĀKUMI

### 9.1. Medikamentu drošība

**Medikamentu izsniegšanas noteikumi:**
- Vienmēr pārbaudiet klienta identitāti
- Pārbaudiet medikamentu derīguma termiņu
- Ierakstiet izsniegšanas laiku un datumu
- Norādiet izsniegšanas iemeslu
- Fiksējiet klienta stāvokli pirms izsniegšanas

**Medikamentu glabāšana:**
- Glabājiet medikamentus slēgtā telpā
- Ievērojiet temperatūras režīmu
- Kontrollējiet medikamentu krājumus
- Veiciet regulārus inventarizācijas aktus

### 9.2. Datu konfidencialitāte

**Svarīgi noteikumi:**
- Neatslēdzieties no sistēmas, kamēr klienta karte ir atvērta
- Nekopējiet sensitīvu informāciju
- Izmantojiet tikai darba paredzētos datorus
- Ziņojiet par aizdomīgām darbībām

### 9.3. Higiēnas un epidemioloģijas prasības

**Darba higiēna:**
- Rokas mazgāšana pirms un pēc katru klienta apmeklēšanas
- Cimdiem lietošana, ja nepieciešams
- Apģērbu maiņa un higiēna
- Darba virsmu dezinfekcija

**Infekciju kontrole:**
- Izolējiet slimus klientus
- Izmantojiet personīgo aizsargaprīkojumu
- Pārbaudiet klientus infekcijas pazīmēm
- Ziņojiet par aizdomīgiem gadījumiem

---

## 10. BIEDĪGI PADOMI

### 10.1. Efektīva darba veidi

**Laika pārvaldība:**
- Plānojiet dienu iepriekš
- Prioritizējiet uzdevumus pēc steiguma
- Atvēliet laiku neparedzētiem gadījumiem
- Veiciet regulārus pārskatus

**Komunikācija:**
- Runājiet skaidri un vienkārši
- Klausieties uzmanīgi klientiem
- Rakstiet skaidrus un konkrētus protokolus
- Sadarbojieties ar citu medicīnisko personālu

### 10.2. Klientu aprūpes padomi

**Novērtēšana:**
- Veiciet regulārus vitalo rādītāju mērījumus
- Novērtējiet klienta stāvokli pirms katras procedūras
- Fiksējiet visas izmaiņas klienta stāvoklī
- Paprasiet klientam atsauksmi

**Dokumentācija:**
- Rakstiet protokolus tūlīt pēc notikuma
- Būtiet specifiski un detalizēti
- Izmantojiet standarta terminoloģiju
- Saglabājiet dokumentus organizēti

### 10.3. Profesionālā attīstība

**Zināšanu atjaunināšana:**
- Sekojiet jaunākajām medicīniskajām vadlīnijām
- Apmācieties jaunas procedūras un tehnikas
- Apmeklējiet jaunus medikamentus
- Piedalieties profesionālajos kursos

**Pašaprūpe:**
- Atcerieties par savu labsajūtu
- Nestrādājiet pārāk daudz
- Meklējiet atbalstu, ja nepieciešams
- Uzturiet darba un dzīves līdzsvaru

---

## PIELIKUMI

### Pielikums A: Vitalo rādītāju normālās vērtības

| Rādītājs | Normālā vērtība (pieaugušajiem) | Piezīmes |
|-----------|-----------------------------------|----------|
| Asinsspiediens (sistoliskais) | 90-120 mmHg | |
| Asinsspiediens (diastoliskais) | 60-80 mmHg | |
| Pulss | 60-100 sit/min | Sports var pazemināt |
| Temperatūra | 36.1-37.2°C | |
| Elpošanas frekvence | 12-20 reiz/min | |
| Skābekļa saturs | 95-100% | |

### Pielikums B: Bartela indeksa novērtēšanas tabula

| Kategorija | Uzdevums | Punkti (0-15) |
|-----------|-----------|----------------|
| Ēdības | Ēšana (bez palīdzības) | 0-15 |
| Pārvietošanās | Pārvietošanās gultas | 0-15 |
| Personiskās higiēnas | Personiskās higiēnas | 0-15 |
| Izmantošana | Tualetes lietošana | 0-15 |
| Pastaigā | Pastaigā | 0-15 |
| Kāpšana | Kāpšana | 0-15 |

**Rezultātu interpretācija:**
- 0-20: Pilna atkarība
- 21-60: Smaga atkarība
- 61-90: Mērena atkarība
- 91-99: Neliela atkarība
- 100: Pilnīga neatkarība

### Pielikums C: Noderīgi kontakti

**Tehniskais atbalsts:**
- E-pasts: davisstrazds@gmail.com
- Tālrunis: +371 26482667
- Darba laiks: Darbdienās 9:00-18:00

**Ārkārtas situācijas:**
- Tālrunis: +371 26482667 (24/7)

**Medicīniskā palīdzība:**
- Ārstu palīdzība: 113
| Narkotiku un psihotropo vielu valsts dienests: 67031234
| Valsts medicīnas komisija: 67045555

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī rokasgrāmata ir paredzēta māsām un satur medicīnisku informāciju. Tās izplatīšana bez atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2024. gada 15. janvārī*

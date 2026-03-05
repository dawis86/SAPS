# Klientu Reģistrs - API Dokumentācija

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**API tipa:** REST/JSON  

---

## SATURA RĀDĪTĀJS

1. [API PĀRSKATS](#1-api-pārskats)
2. [AUTENTIFIKĀCIJA UN AUTORIZĀCIJA](#2-autentifikācija-un-autorizācija)
3. [KLIENTU API](#3-klientu-api)
4. [APRŪPES UN REHABILITĀCIJAS API](#4-aprupes-un-rehabilitācijas-api)
5. [MEDIKAMENTU API](#5-medikamentu-api)
6. [NODARBĪBU API](#6-nodarbibu-api)
7. [STATISTIKAS API](#7-statistikas-api)
8. [DATU SINHRONIZĀCIJAS API](#8-datu-sinhronizācijas-api)
9. [KĻŪDU KODI](#9-kļūdu-kodi)
10. [PIELIKUMI](#10-pielikumi)

---

## 1. API PĀRSKATS

### 1.1. Bāzes informācija

**Base URL:** `https://api.klienturegistrs.lv/v2.1`

**Protokols:** HTTPS  
**Dat formāts:** JSON  
**Kodējums:** UTF-8  

**API tipi:**
- **RESTful API:** Standarta REST operācijas
- **Internal API:** Iekšējie servisu API
- **Sync API:** Datu sinhronizācijas API

### 1.2. Galvenās īpašības

- **Stateless:** Katrs pieprasījums satur nepieciešamo autorizācijas informāciju
- **JSON:** Visi dati tiek pārsūtīti JSON formātā
- **HTTP status kodi:** Standarta HTTP status kodi
- **Rate limiting:** 100 pieprasījumi minūtē vienam lietotājam
- **Pagination:** Iekļauts visos saraksta tipa galapunktos

### 1.3. API versiju pārvaldība

**Versiju stratēģija:** URL Path versijas

```
https://api.klienturegistrs.lv/v2.1/clients
https://api.klienturegistrs.lv/v2.0/clients
```

**Atbalstītās versijas:**
- v2.1 (pašreizējā)
- v2.0 (legacy, atbalsts līdz 2025.12.31)

---

## 2. AUTENTIFIKĀCIJA UN AUTORIZĀCIJA

### 2.1. Autentifikācija

**Pieprasījuma galvene:**
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**JWT token struktūra:**
```json
{
  "sub": "user123",
  "username": "janis.berzins",
  "roles": ["USER", "MEDIC"],
  "iat": 1642234567,
  "exp": 1642238167
}
```

### 2.2. Pieteikšanās API

**POST /auth/login**

**Pieprasījuma ķermenis:**
```json
{
  "username": "janis.berzins",
  "password": "securePassword123"
}
```

**Atbildes ķermenis (200 OK):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 123,
    "username": "janis.berzins",
    "fullName": "Jānis Bērziņš",
    "roles": ["USER", "MEDIC"],
    "permissions": ["clients:read", "clients:write", "medical:read"]
  },
  "expiresIn": 3600
}
```

**Kļūdu kodi:**
- 200: Veiksmīga pieteikšanās
- 401: Nederīgs lietotājvārds vai parole
- 403: Konts bloķēts
- 429: Pārāk mēģinājumi

### 2.3. Token atsvaidzināšana

**POST /auth/refresh**

**Pieprasījuma ķermenis:**
```json
{
  "refreshToken": "refresh_token_here"
}
```

**Atbildes ķermenis (200 OK):**
```json
{
  "success": true,
  "token": "new_jwt_token_here",
  "expiresIn": 3600
}
```

---

## 3. KLIENTU API

### 3.1. Klientu saraksts

**GET /clients**

**Query parametri:**
- `page` (int, noklusējums: 0): Lappuse numurs
- `size` (int, noklusējums: 20): Ierakstu skaits lappusē
- `search` (string): Meklēšanas teksts
- `status` (string): Klienta statusa filtrs
- `sortBy` (string): Kārtošanas lauks
- `sortOrder` (string): Kārtošanas secība (asc/desc)

**Pieprasījuma piemērs:**
```
GET /clients?page=0&size=20&search=jānis&status=AKTĪVS&sortBy=vards&sortOrder=asc
```

**Atbildes ķermenis (200 OK):**
```json
{
  "content": [
    {
      "id": 123,
      "personasKods": "161175-19997",
      "vards": "Jānis",
      "uzvards": "Bērziņš",
      "dzimšanasDatums": "1975-11-16",
      "statuss": "AKTĪVS",
      "iestāšanasDatums": "2024-01-15",
      "telefons": "29123456",
      "epasts": "janis.berzins@epasts.lv"
    }
  ],
  "pageable": {
    "page": 0,
    "size": 20,
    "totalElements": 156,
    "totalPages": 8,
    "first": true,
    "last": false
  }
}
```

### 3.2. Klienta informācija

**GET /clients/{id}**

**Atbildes ķermenis (200 OK):**
```json
{
  "id": 123,
  "personasKods": "161175-19997",
  "vards": "Jānis",
  "uzvards": "Bērziņš",
  "dzimšanasDatums": "1975-11-16",
  "statuss": "AKTĪVS",
  "iestāšanasDatums": "2024-01-15",
  "aiziešanasDatums": null,
  "adrese": "Brīvības iela 123, Rīga, LV-1001",
  "telefons": "29123456",
  "epasts": "janis.berzins@epasts.lv",
  "klientaInfo": {
    "izglītība": "Vidējā izglītība",
    "profesija": "Strādnieks",
    "valodas": "Latviešu, Krievu",
    "intereses": "Lasīšana, makšķerēšana",
    "ieradumi": "Rīta pastaigas",
    "sociālāSituācija": "Dzīvo ar sievu",
    "dzīvesvietas": "Īrēja dzīvoklis",
    "ģimenesStāvoklis": "Šķīrss, 2 bērni"
  },
  "familyMembers": [
    {
      "id": 456,
      "vards": "Anna",
      "uzvards": "Bērziņa",
      "radzība": "SIEVA",
      "telefons": "29123457",
      "epasts": "anna.berzina@epasts.lv"
    }
  ],
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-20T14:45:00Z"
}
```

### 3.3. Jauna klienta izveide

**POST /clients**

**Pieprasījuma ķermenis:**
```json
{
  "personasKods": "161175-19997",
  "vards": "Jānis",
  "uzvards": "Bērziņš",
  "dzimšanasDatums": "1975-11-16",
  "iestāšanasDatums": "2024-01-15",
  "adrese": "Brīvības iela 123, Rīga, LV-1001",
  "telefons": "29123456",
  "epasts": "janis.berzins@epasts.lv",
  "klientaInfo": {
    "izglītība": "Vidējā izglītība",
    "profesija": "Strādnieks",
    "valodas": "Latviešu, Krievu",
    "intereses": "Lasīšana, makšķerēšana",
    "ieradumi": "Rīta pastaigas",
    "sociālāSituācija": "Dzīvo ar sievu",
    "dzīvesvietas": "Īrēja dzīvoklis",
    "ģimenesStāvoklis": "Šķīrss, 2 bērni"
  },
  "familyMembers": [
    {
      "vards": "Anna",
      "uzvards": "Bērziņa",
      "radzība": "SIEVA",
      "telefons": "29123457",
      "epasts": "anna.berzina@epasts.lv"
    }
  ]
}
```

**Atbildes ķermenis (201 Created):**
```json
{
  "id": 123,
  "personasKods": "161175-19997",
  "vards": "Jānis",
  "uzvards": "Bērziņš",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### 3.4. Klienta atjaunināšana

**PUT /clients/{id}**

**Pieprasījuma ķermenis:**
```json
{
  "vards": "Jānis Updated",
  "uzvards": "Bērziņš",
  "telefons": "29123456",
  "epasts": "janis.updated@epasts.lv",
  "klientaInfo": {
    "intereses": "Lasīšana, makšķerēšana, dārza darbi"
  }
}
```

### 3.5. Klienta dzēšana

**DELETE /clients/{id}**

**Atbildes ķermenis (204 No Content):**
- Tukšs atbildes ķermenis
- Header: `X-Resource-Deleted: true`

---

## 4. APRŪPES UN REHABILITĀCIJAS API

### 4.1. Plānu saraksts

**GET /plans**

**Query parametri:**
- `clientId` (int): Klienta ID
- `planaVeids` (string): Plāna veids (APRŪPE/REHABILITĀCIJA)
- `statuss` (string): Plāna statuss
- `startDate` (date): Sākuma datums
- `endDate` (date): Beigu datums

**Atbildes ķermenis (200 OK):**
```json
{
  "content": [
    {
      "id": 789,
      "klientaId": 123,
      "planaVeids": "APRŪPE",
      "sākumaDatums": "2024-01-15",
      "beiguDatums": "2024-04-15",
      "statuss": "AKTĪVS",
      "mērķi": "Uzlabot kustību kustību un pašapkalpošanās prasmes",
      "atbildīgais": "Anna Bērziņa",
      "createdAt": "2024-01-15T11:00:00Z",
      "updatedAt": "2024-01-20T15:30:00Z",
      "punkti": [
        {
          "id": 101,
          "rindasNr": 1,
          "mērķis": "Uzlabot kustību kustību līdz 100m",
          "darbības": "Vingrinājumi 3x nedēļā, pastaigas 2x dienā",
          "atbildīgais": "Pēters Kalniņš",
          "termiņš": "2024-02-15",
          "statuss": "PLĀNOTS"
        }
      ]
    }
  ]
}
```

### 4.2. Jauna plāna izveide

**POST /plans**

**Pieprasījuma ķermenis:**
```json
{
  "klientaId": 123,
  "planaVeids": "APRŪPE",
  "sākumaDatums": "2024-01-15",
  "beiguDatums": "2024-04-15",
  "mērķi": "Uzlabot kustību kustību un pašapkalpošanās prasmes",
  "atbildīgais": "Anna Bērziņa",
  "punkti": [
    {
      "rindasNr": 1,
      "mērķis": "Uzlabot kustību kustību līdz 100m",
      "darbības": "Vingrinājumi 3x nedēļā, pastaigas 2x dienā",
      "atbildīgais": "Pēters Kalniņš",
      "termiņš": "2024-02-15",
      "statuss": "PLĀNOTS"
    },
    {
      "rindasNr": 2,
      "mērķis": "Palielināt pašapkalpošanās prasmes",
      "darbības": "Mācības pašapkalpošanās veidišanas",
      "atbildīgais": "Līga Ozola",
      "termiņš": "2024-03-01",
      "statuss": "PLĀNOTS"
    }
  ]
}
```

### 4.3. Plāna atjaunināšana

**PUT /plans/{id}**

**Pieprasījuma ķermenis:**
```json
{
  "statuss": "BEIGTS",
  "beiguDatums": "2024-04-10",
  "punkti": [
    {
      "id": 101,
      "statuss": "PABEIGTS"
    },
    {
      "id": 102,
      "statuss": "PABEIGTS"
    }
  ]
}
```

---

## 5. MEDIKAMENTU API

### 5.1. Medikamentu saraksts

**GET /medications**

**Query parametri:**
- `clientId` (int): Klienta ID (optional)
- `statuss` (string): Statuss (AKTĪVS/NEAKTĪVS)
- `search` (string): Meklēšanas teksts

**Atbildes ķermenis (200 OK):**
```json
{
  "content": [
    {
      "id": 201,
      "nosaukums": "Metoprolols",
      "deva": "50mg",
      "forma": "Tabletes",
      "statuss": "AKTĪVS",
      "apraksts": "Beta blokators",
      "kontrindikācijas": "B receptes",
      "createdAt": "2024-01-15T12:00:00Z"
    }
  ],
  "pageable": {
    "page": 0,
    "size": 20,
    "totalElements": 45,
    "totalPages": 3
  }
}
```

### 5.2. Medikamentu pasūtījumi

**GET /medication-requests**

**Query parametri:**
- `statuss` (string): Pasūtījuma statuss
- `startDate` (date): Sākuma datums
- `endDate` (date): Beigu datums

**Atbildes ķermenis (200 OK):**
```json
{
  "content": [
    {
      "id": 301,
      "numurs": "MED-2024-001",
      "statuss": "APPROVED",
      "izveidots": "2024-01-15T10:00:00Z",
      "termiņš": "2024-01-25",
      "pasūtītājs": "Anna Bērziņa",
      "apstiprinātājs": "Pēters Ozols",
      "rindas": [
        {
          "id": 401,
          "medikamentsId": 201,
          "medikaments": "Metoprolols",
          "deva": "50mg",
          "daudzums": 100,
          "piezīmes": "3 mēnešu krājums"
        }
      ]
    }
  ]
}
```

### 5.3. Jauna pasūtījuma izveide

**POST /medication-requests**

**Pieprasījuma ķermenis:**
```json
{
  "termiņš": "2024-01-25",
  "piezīmes": "3 mēnešu krājums",
  "rindas": [
    {
      "medikamentsId": 201,
      "daudzums": 100,
      "piezīmes": "1 tablete dienā"
    },
    {
      "medikamentsId": 202,
      "daudzums": 200,
      "piezīmes": "2 tabletes dienā"
    }
  ]
}
```

---

## 6. NODARBĪBU API

### 6.1. Nodarbību reģistrs

**GET /activities**

**Query parametri:**
- `clientId` (int): Klienta ID
- `date` (date): Nodarbības datums
- `aktivitatesId` (int): Aktivitātes ID
- `speciālists` (string): Speciālista vārds

**Atbildes ķermenis (200 OK):**
```json
{
  "content": [
    {
      "id": 501,
      "datums": "2024-01-15",
      "laiks": "10:30",
      "klientaId": 123,
      "nodarbībasVeids": "Fizioterapija",
      "speciālists": "Anna Bērziņa",
      "apraksts": "Vingrinājumi kustību kustībai",
      "ilgums": 45,
      "klientaReakcija": "Klients veica vingrinājumus, sūdzēja par nelielu sāpēm",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### 6.2. Jaunas nodarbības reģistrēšana

**POST /activities**

**Pieprasījuma ķermenis:**
```json
{
  "datums": "2024-01-15",
  "laiks": "10:30",
  "klientaId": 123,
  "nodarbībasVeids": "Fizioterapija",
  "speciālists": "Anna Bērziņa",
  "apraksts": "Vingrinājumi kustību kustībai",
  "ilgums": 45,
  "klientaReakcija": "Klients veica vingrinājumus, sūdzēja par nelielu sāpēm"
}
```

### 6.3. Aktivitāšu klasifikators

**GET /activities/classifiers**

**Atbildes ķermenis (200 OK):**
```json
{
  "content": [
    {
      "id": 1,
      "bloks": "TERAPIJA",
      "speciālists": "FIZIOTERAPEITS",
      "joma": "KUSTĪBU KUSTĪBA",
      "līmenis": "PAMATNIVELIS",
      "aktivitāte": "Vingrinājumi stāvus vietā",
      "apraksts": "Pamatu vingrinājumi kustību stiprināšanai"
    }
  ]
}
```

---

## 7. STATISTIKAS API

### 7.1. Klientu demogrāfija

**GET /statistics/demographics**

**Query parametri:**
- `startDate` (date): Sākuma datums
- `endDate` (date): Beigu datums
- `groupBy` (string): Grupēšanas lauks (vecums/statuss/dzimums)

**Atbildes ķermenis (200 OK):**
```json
{
  "period": {
    "startDate": "2024-01-01",
    "endDate": "2024-01-31"
  },
  "totalClients": 156,
  "ageDistribution": [
    {
      "group": "18-30",
      "count": 15,
      "percentage": 9.6
    },
    {
      "group": "31-50",
      "count": 45,
      "percentage": 28.8
    },
    {
      "group": "51-70",
      "count": 72,
      "percentage": 46.2
    },
    {
      "group": "70+",
      "count": 24,
      "percentage": 15.4
    }
  ],
  "statusDistribution": [
    {
      "statuss": "AKTĪVS",
      "count": 141,
      "percentage": 90.4
    },
    {
      "statuss": "IZRAKSTĪTS",
      "count": 12,
      "percentage": 7.7
    },
    {
      "statuss": "MIRIS",
      "count": 3,
      "percentage": 1.9
    }
  ]
}
```

### 7.2. Nodarbību statistika

**GET /statistics/activities**

**Query parametri:**
- `startDate` (date): Sākuma datums
- `endDate` (date): Beigu datums
- `groupBy` (string): Grupēšanas lauks (veids/speciālists)

**Atbildes ķermenis (200 OK):**
```json
{
  "period": {
    "startDate": "2024-01-01",
    "endDate": "2024-01-31"
  },
  "totalActivities": 293,
  "totalHours": 220,
  "typeDistribution": [
    {
      "type": "Fizioterapija",
      "count": 124,
      "hours": 93,
      "percentage": 42.3
    },
    {
      "type": "Ergoterapija",
      "count": 67,
      "hours": 50,
      "percentage": 22.9
    }
  ],
  "specialistDistribution": [
    {
      "specialist": "Anna Bērziņa",
      "count": 45,
      "hours": 34,
      "percentage": 15.4
    }
  ]
}
```

---

## 8. DATU SINHRONIZĀCIJAS API

### 8.1. Sinhronizācijas statuss

**GET /sync/status**

**Atbildes ķermenis (200 OK):**
```json
{
  "lastSync": "2024-01-15T14:30:00Z",
  "pendingChanges": 12,
  "conflicts": 2,
  "syncInProgress": false,
  "serverConnection": true,
  "localDatabase": {
    "status": "OK",
    "lastBackup": "2024-01-15T02:00:00Z",
    "size": "125.6 MB"
  }
}
```

### 8.2. Izmaiņu sinhronizācija

**POST /sync/changes**

**Pieprasījuma ķermenis:**
```json
{
  "changes": [
    {
      "type": "UPDATE",
      "tableName": "klienti",
      "recordId": 123,
      "data": {
        "vards": "Jānis Updated",
        "updatedAt": "2024-01-15T14:30:00Z"
      },
      "timestamp": "2024-01-15T14:30:00Z"
    }
  ]
}
```

**Atbildes ķermenis (200 OK):**
```json
{
  "success": true,
  "processed": 1,
  "conflicts": 0,
  "errors": [],
  "syncId": "sync_20240115_143000_001"
}
```

### 8.3. Konfliktu risināšana

**GET /sync/conflicts**

**Atbildes ķermenis (200 OK):**
```json
{
  "conflicts": [
    {
      "id": "conflict_001",
      "tableName": "klienti",
      "recordId": 123,
      "localVersion": {
        "vards": "Jānis Local",
        "updatedAt": "2024-01-15T14:30:00Z"
      },
      "serverVersion": {
        "vards": "Jānis Server",
        "updatedAt": "2024-01-15T14:45:00Z"
      },
      "conflictType": "VERSION_CONFLICT"
    }
  ]
}
```

**POST /sync/resolve-conflicts**

**Pieprasījuma ķermenis:**
```json
{
  "resolutions": [
    {
      "conflictId": "conflict_001",
      "resolution": "USE_SERVER",
      "resolvedData": {
        "vards": "Jānis Server",
        "updatedAt": "2024-01-15T14:45:00Z"
      }
    }
  ]
}
```

---

## 9. KĻŪDU KODI

### 9.1. HTTP status kodi

| Kods | Nozīme | Apraksts |
|------|----------|----------|
| 200 | OK | Pieprasījums veiksmīgi izpildīts |
| 201 | Created | Resurss veiksmīgi izveidots |
| 204 | No Content | Pieprasījums veiksmīgi izpildīts, bez atbildes satura |
| 400 | Bad Request | Nederīgs pieprasījuma formāts |
| 401 | Unauthorized | Autentifikācija nepieciešama vai neveiksmīga |
| 403 | Forbidden | Nav piekļuves tiesību |
| 404 | Not Found | Resurss nav atrasts |
| 409 | Conflict | Konflikts ar esošu resursu |
| 422 | Unprocessable Entity | Semantiski kļūdains pieprasījums |
| 429 | Too Many Requests | Pārsniegts pieprasījumu limits |
| 500 | Internal Server Error | Servera iekšējā kļūda |

### 9.2. API kļūdu struktūra

**Kļūdu atbildes ķermenis:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "personasKods",
        "message": "Personas kodam jābūt formātā DDMMYY-XXXXX"
      }
    ],
    "timestamp": "2024-01-15T14:30:00Z",
    "path": "/api/v2.1/clients",
    "requestId": "req_20240115_143000_001"
  }
}
```

### 9.3. Biežākie kļūdu kodi

| Kods | Apraksts | Risinājums |
|------|----------|-----------|
| AUTH_001 | Nederīgs lietotājvārds vai parole | Pārbaudiet pieteikšanās datus |
| AUTH_002 | Token ir iztecējis | Atjauniniet token |
| AUTH_003 | Nav piekļuves tiesību | Pārbaudiet lietotāja lomas un tiesības |
| VALID_001 | Nederīgs personas kods | Izmantojiet pareizu formātu DDMMYY-XXXXX |
| VALID_002 | Nederīgs e-pasta formāts | Izmantojiet derīgu e-pasta adresi |
| VALID_003 | Nederīgs datuma formāts | Izmantojiet formātu DD.MM.YYYY |
| RESOURCE_001 | Klients nav atrasts | Pārbaudiet klienta ID |
| RESOURCE_002 | Plāns nav atrasts | Pārbaudiet plāna ID |
| CONFLICT_001 | Klients ar šādu personas kodu jau eksistē | Izmantojiet citu personas kodu |
| RATE_001 | Pārsniegts pieprasījumu limits | Samaziniet pieprasījumu biežumu |

---

## 10. PIELIKUMI

### Pielikums A: API versiju saderības matrica

| Versija | Statuss | Beigu datums | Atbalstītās galapunkti |
|---------|----------|---------------|-------------------------|
| v2.1 | Aktīva | 2025.12.31 | Visi |
| v2.0 | Legacy | 2025.12.31 | Visi |
| v1.9 | Deprecated | 2024.06.30 | Tikai lasīšana |

### Pielikums B: Rate limiting noteikumi

| Loma | Limits | Time window |
|------|--------|-------------|
| USER | 100 pieprasījumi | 1 minūte |
| MANAGER | 200 pieprasījumi | 1 minūte |
| ADMIN | 500 pieprasījumi | 1 minūte |
| MEDIC | 150 pieprasījumi | 1 minūte |

### Pielikums C: Datu formātu specifikācijas

**Datumi:**
- Formāts: `YYYY-MM-DD`
- Laiks: `HH:mm:ss`
| Datums/Laiks | `YYYY-MM-DDTHH:mm:ssZ`

**Numeriskie lauki:**
- Veseli skaitļi: `integer`
| Decimālskaitļi: `number`

**Teksta lauki:**
- Maksimālais garums: atkarīgs no lauka
- Kodējums: UTF-8

### Pielikums D: Integrācijas piemēri

**Python piemērs:**
```python
import requests
import json

# Autentifikācija
auth_response = requests.post('https://api.klienturegistrs.lv/v2.1/auth/login', json={
    'username': 'janis.berzins',
    'password': 'securePassword123'
})

if auth_response.status_code == 200:
    token = auth_response.json()['token']
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    # Klientu saraksts
    clients_response = requests.get(
        'https://api.klienturegistrs.lv/v2.1/clients',
        headers=headers,
        params={'page': 0, 'size': 20}
    )
    
    if clients_response.status_code == 200:
        clients = clients_response.json()['content']
        print(f"Atrasti {len(clients)} klienti")
```

**JavaScript piemērs:**
```javascript
// Autentifikācija
const authResponse = await fetch('https://api.klienturegistrs.lv/v2.1/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'janis.berzins',
        password: 'securePassword123'
    })
});

if (authResponse.ok) {
    const authData = await authResponse.json();
    const token = authData.token;
    
    // Klientu saraksts
    const clientsResponse = await fetch('https://api.klienturegistrs.lv/v2.1/clients?page=0&size=20', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    
    if (clientsResponse.ok) {
        const clientsData = await clientsResponse.json();
        console.log(`Atrasti ${clientsData.content.length} klienti`);
    }
}
```

---

**Dokumenta beigas**

© 2024 Dāvis Strazds. Visas tiesības aizsargātas.

Šī API dokumentācija ir paredzēta izstrādātājiem un integrācijas partneriem. Tās izplatīšana bez atļaujas ir aizliegta.

*Pēdējoreiz atjaunināts: 2024. gada 15. janvārī*

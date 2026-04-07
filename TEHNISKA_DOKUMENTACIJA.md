# Klientu Reģistrs - Tehniskā Dokumentācija

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.04.09  

---

## SATURA RĀDĪTĀJS

1. [TEHNISKĀS PRASĪBAS](#1-tehniskās-prasības)
2. [IZSTRĀDES VIDE](#2-izstrādes-vide)
3. [BUILD UN DEPLOYMENT](#3-build-un-deployment)
4. [KONFIGURĀCIJA](#4-konfigurācija)
5. [DATU BĀZES KONFIGURĀCIJA](#5-datu-bāzes-konfigurācija)
6. [LICENCĒŠANA](#6-licencēšana)
7. [ŽURNĀLIERAKSTI](#7-žurnālieraksti)
8. [VEIKTSPĒJA](#8-veiktspēja)
9. [KĻŪDU NOVĒRŠANA](#9-kļūdu-novēršana)

---

## 1. TEHNISKĀS PRASĪBAS

### 1.1. Sistēmas prasības (faktiskās)

**Operētājsistēma:**
- **Windows 10/11** (64-bit) - primārā platforma
- **Linux** (Ubuntu 20.04+) - atbalstīta
- **macOS** (10.15+) - atbalstīta

**Java:**
- **Java 21 LTS** (obligāta)
- **JavaFX 21** (iekļauta)
- **JVM parametri:** `-Xms512m -Xmx2048m`

**Procesora prasības:**
- **Minimums:** 2 cores @ 2.0 GHz
- **Ieteicams:** 4 cores @ 2.5 GHz

**Atmiņas prasības:**
- **Minimums:** 4 GB RAM
- **Ieteicams:** 8 GB RAM

**Diska vieta:**
- **Minimums:** 50 GB SSD
- **Ieteicams:** 100 GB SSD

**Tīkla prasības:**
- **Minimums:** 100 Mbps
- **Ieteicams:** 1 Gbps
- **Porti:** 3306 (MySQL), 8080 (ja nepieciešams)

---

## 2. IZSTRĀDES VIDE

### 2.0. Izstrādes metodoloģija (Prakses specifika)
Projekts realizēts, izmantojot **AI-Assisted Software Engineering** pieeju. Tas ietver mākslīgā intelekta rīku integrāciju izstrādes procesā, veicot precīzu tehnisko uzdevumu formulēšanu (**Prompt Engineering**) un ģenerētā koda kvalitātes auditu, nodrošinot augstu stabilitāti un GDPA atbilstību.

### 2.1. Izstrādes rīki (faktiski)

**IDE:**
- **Visual Studio Code** (ar Java Extension Pack)

**Build rīks:**
- **Apache Maven 3.9.0+**

**Java versija:**
- **OpenJDK 21 LTS**
- **JavaFX 21**

**Datu bāzes:**
- **MySQL Server 8.0+**
- **SQLite 3.40+** (iekļauta)

### 2.2. Maven konfigurācija (faktiskā)

**`pom.xml` galvenās atkarības:**
```xml
<dependencies>
    <!-- JavaFX -->
    <dependency>
        <groupId>org.openjfx</groupId>
        <artifactId>javafx-controls</artifactId>
        <version>21</version>
    </dependency>
    <dependency>
        <groupId>org.openjfx</groupId>
        <artifactId>javafx-fxml</artifactId>
        <version>21</version>
    </dependency>
    
    <!-- MySQL -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.33</version>
    </dependency>
    
    <!-- SQLite -->
    <dependency>
        <groupId>org.xerial</groupId>
        <artifactId>sqlite-jdbc</artifactId>
        <version>3.45.1.0</version>
    </dependency>
    
    <!-- HikariCP -->
    <dependency>
        <groupId>com.zaxxer</groupId>
        <artifactId>HikariCP</artifactId>
        <version>5.0.1</version>
    </dependency>
    
    <!-- Apache POI -->
    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi</artifactId>
        <version>5.2.5</version>
    </dependency>
    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi-ooxml</artifactId>
        <version>5.2.5</version>
    </dependency>
    
    <!-- Gson -->
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.10.1</version>
    </dependency>
    
    <!-- SLF4J + Logback -->
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-api</artifactId>
        <version>2.0.9</version>
    </dependency>
    <dependency>
        <groupId>ch.qos.logback</groupId>
        <artifactId>logback-classic</artifactId>
        <version>1.4.14</version>
    </dependency>
</dependencies>
```

**Maven plugini:**
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-maven-plugin</artifactId>
            <version>0.0.8</version>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version>
        </plugin>
    </plugins>
</build>
```

---

## 3. BUILD UN DEPLOYMENT

### 3.1. Build process (faktiskā)

**No `Launcher.java`:**
```java
public class Launcher {
    public static void main(String[] args) {
        // Iestata datu mapi
        System.setProperty("app.data.dir", 
            System.getProperty("user.home") + File.separator + ".klientu_registrs");
        
        // Palaiž galveno aplikāciju
        Main.launch(Main.class, args);
    }
}
```

**Build komandas:**
```bash
# Kompilācija
mvn clean compile

# Testēšana
mvn test

# Package izveide
mvn package

# JAR palaišana
java -jar klientu-registrs-app.jar
```

### 3.2. Deployment opcijas (faktiskās)

**Standalone JAR:**
```bash
# Izveido
mvn clean package

# Palaiž
java -jar target/klientu-registrs-app.jar
```

**Windows installer:**
```bash
# Izveido installer
mvn jfx:native-image

# Instalē
setup.exe
```

**Portable versija:**
```bash
# Izveido ZIP ar JAR un resursiem
mvn clean package assembly:single
```

---

## 4. KONFIGURĀCIJA

### 4.1. Datu mape (faktiskā)

**No `Main.java`:**
```java
private void initializeServices() {
    String dataDirectoryPath = System.getProperty("app.data.dir");
    if (dataDirectoryPath == null) {
        dataDirectoryPath = System.getProperty("user.home") + File.separator + ".klientu_registrs";
    }
    this.dataDirectory = new File(dataDirectoryPath);
    if (!this.dataDirectory.exists()) {
        this.dataDirectory.mkdirs();
    }
}
```

**Mapes struktūra:**
```
.klientu_registrs/
├── db_config.properties          # MySQL konfigurācija
├── license.key                   # Licences atslēga
├── activities_by_level.tsv        # Aktivitāšu saraksts
├── templates/                    # Excel veidnes
├── backups/                      # Rezerves kopijas
├── logs/                         # Žurnālfaili
└── temp/                         # Pagaidu faili
```

### 4.2. Konfigurācijas faili (faktiski)

**`db_config.properties`:**
```properties
# MySQL konfigurācija
mysql.host=localhost
mysql.port=3306
mysql.database=klientu_registrs
mysql.username=root
mysql.password=encrypted_password

# Savienojumu pūla iestatījumi
pool.maximumPoolSize=20
pool.minimumIdle=5
pool.connectionTimeout=30000
pool.idleTimeout=600000
pool.maxLifetime=1800000
```

**`logback.xml`:**
```xml
<configuration>
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/application.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/application.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <root level="INFO">
        <appender-ref ref="FILE" />
    </root>
</configuration>
```

---

## 5. DATU BĀZES KONFIGURĀCIJA

### 5.1. MySQL konfigurācija (faktiskā)

**No `MySQLConfig.java`:**
```java
public class MySQLConfig {
    private String host = "localhost";
    private int port = 3306;
    private String databaseName = "klientu_registrs";
    private String username = "root";
    private String password;
    private File configFile;
    
    // Getters un setters
    public String getHost() { return host; }
    public void setHost(String host) { this.host = host; }
    public int getPort() { return port; }
    public void setPort(int port) { this.port = port; }
    public String getDatabaseName() { return databaseName; }
    public void setDatabaseName(String databaseName) { this.databaseName = databaseName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    // Ielādēšana un saglabāšana
    public void load() { /* implementācija */ }
    public void save() { /* implementācija */ }
    public boolean isConfigured() { /* implementācija */ }
}
```

### 5.2. Savienojumu pūls (faktiskā)

**No `DatabaseConnectionManager.java`:**
```java
public class DatabaseConnectionManager {
    private HikariDataSource dataSource;
    private HikariDataSource localDataSource;
    
    private HikariConfig createConfig(MySQLConfig config) {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setJdbcUrl("jdbc:mysql://" + config.getHost() + ":" + 
            config.getPort() + "/" + config.getDatabaseName());
        hikariConfig.setUsername(config.getUsername());
        hikariConfig.setPassword(config.getPassword());
        
        // Performance optimizācija
        hikariConfig.setMaximumPoolSize(20);
        hikariConfig.setMinimumIdle(5);
        hikariConfig.setConnectionTimeout(30000);
        hikariConfig.setIdleTimeout(600000);
        hikariConfig.setMaxLifetime(1800000);
        
        return hikariConfig;
    }
}
```

---

## 6. LICENCĒŠANA

### 6.1. Licences sistēma (faktiskā)

**No `LicenseManager.java`:**
```java
public class LicenseManager {
    private final ConfigurationService configService;
    private LicenseStatus licenseStatus;
    private SecretKey licenseKey;
    
    public enum LicenseStatus {
        UNINITIALIZED,
        VALID,
        EXPIRED,
        INVALID
    }
    
    // API metodes
    public void initialize()
    public boolean validateLicense()
    public LicenseStatus getLicenseStatus()
    public boolean isLicenseValid()
    public void generateLicenseKey(String customerName, String expiryDate)
    public void saveLicenseKeyToFile(SecretKey key)
    public SecretKey loadLicenseKeyFromFile()
}
```

### 6.2. Drošība (faktiskā)

**No `CryptoUtils.java`:**
```java
public class CryptoUtils {
    private static SecretKey applicationSecretKey;
    
    public static void init(SecretKey key) {
        applicationSecretKey = key;
    }
    
    public static String encrypt(String data) {
        try {
            Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
            cipher.init(Cipher.ENCRYPT_MODE, applicationSecretKey);
            byte[] encryptedData = cipher.doFinal(data.getBytes());
            return Base64.getEncoder().encodeToString(encryptedData);
        } catch (Exception e) {
            throw new RuntimeException("Encryption failed", e);
        }
    }
    
    public static String decrypt(String encryptedData) {
        try {
            Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
            cipher.init(Cipher.DECRYPT_MODE, applicationSecretKey);
            byte[] decodedData = Base64.getDecoder().decode(encryptedData);
            byte[] decryptedData = cipher.doFinal(decodedData);
            return new String(decryptedData);
        } catch (Exception e) {
            throw new RuntimeException("Decryption failed", e);
        }
    }
}
```

---

## 7. ŽURNĀLIERAKSTI

### 7.1. Logging konfigurācija (faktiskā)

**No `LoggingService.java`:**
```java
public class LoggingService {
    private static LoggingService instance;
    private final ConfigurationService configService;
    private final AuditLogRepository auditLogRepository;
    private final DatabaseConnectionManager connectionManager;
    
    // API metodes
    public static void initialize(ConfigurationService configService, 
                               AuditLogRepository auditLogRepository, 
                               DatabaseConnectionManager connectionManager) {
        instance = new LoggingService(configService, auditLogRepository, connectionManager);
    }
    
    public static LoggingService getInstance() {
        return instance;
    }
    
    public List<String> getRecentLogEntries(int limit)
    public void logAction(String username, String action, String details)
    public void logError(String message, Exception e)
    public void logInfo(String message)
    public void logWarning(String message)
}
```

### 7.2. Detalizētais logging (faktiskā)

**No `Main.java`:**
```java
// DETALIZĒTS LOGGING - katras darbības izsekošana
private static final Logger actionLogger = LoggerFactory.getLogger("ACTION_TRACKER");
private static final Logger dataLogger = LoggerFactory.getLogger("DATA_FLOW");
private static final Logger uiLogger = LoggerFactory.getLogger("UI_EVENTS");
private static final Logger dbLogger = LoggerFactory.getLogger("DATABASE_OPERATIONS");
```

**Žurnālu līmeņi:**
- **ACTION_TRACKER** - galvenās darbības
- **DATA_FLOW** - datu plūsmas
- **UI_EVENTS** - UI notikumi
- **DATABASE_OPERATIONS** - datubāzes operācijas

---

## 8. VEIKTSPĒJA

### 8.1. JVM optimizācija (faktiskā)

**No `Launcher.java`:**
```java
public class Launcher {
    public static void main(String[] args) {
        // JVM parametri var tikt iestatīti šeit
        // -Xms512m -Xmx2048m
        // -XX:+UseG1GC
        // -XX:MaxGCPauseMillis=200
        // -XX:+UseStringDeduplication
        // -Dfile.encoding=UTF-8
        // -Duser.timezone=Europe/Riga
        
        Main.launch(Main.class, args);
    }
}
```

### 8.2. Atmiņas pārvaldība (faktiskā)

**No `Main.java` - shutdown process:**
```java
@Override
public void stop() throws Exception {
    try {
        ServiceRegistry registry = ServiceRegistry.getInstance();
        if (registry != null) {
            // SQLite Faila optimizācija
            if (appDataService != null && appDataService.getConnectionManager() != null) {
                try (java.sql.Connection localConn = appDataService.getConnectionManager().getLocalConnection()) {
                    if (localConn != null && !localConn.isClosed()) {
                        String dbProductName = localConn.getMetaData().getDatabaseProductName();
                        try (java.sql.Statement stmt = localConn.createStatement()) {
                            if ("SQLite".equals(dbProductName)) {
                                stmt.execute("VACUUM");
                                logger.info("SQLite datubāze veiksmīgi optimizēta.");
                            }
                        }
                    }
                }
            }
            
            // Fona pavedieni
            if (registry.getExecutorService() != null) {
                registry.getExecutorService().shutdownNow();
            }
            if (registry.getScheduledExecutorService() != null) {
                registry.getScheduledExecutorService().shutdownNow();
            }
            
            ServiceRegistry.reset();
        }
    } catch (Exception e) {
        logger.error("Kļūda, veicot resursu atbrīvošanu", e);
    }
}
```

---

## 9. KĻŪDU NOVĒRŠANA

### 9.1. Kļūdu apstrāde (faktiskā)

**No `UIUtils.java`:**
```java
public class UIUtils {
    public static void logAndExit(Exception e) {
        Logger logger = LoggerFactory.getLogger(UIUtils.class);
        logger.error("Kritiska kļūda, programma tiek aizvērta", e);
        
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.setTitle("Kritiska kļūda");
        alert.setHeaderText("Programma sastapusi kritisku kļūdu");
        alert.setContentText("Programma tiek aizvērta. Lūdzu, sazinieties ar administratoru.\n\n" + 
                           "Kļūda: " + e.getMessage());
        alert.showAndWait();
        
        System.exit(1);
    }
    
    public static void showAlert(Alert.AlertType type, String title, String message, Stage owner) {
        Alert alert = new Alert(type);
        alert.setTitle(title);
        alert.setHeaderText(null);
        alert.setContentText(message);
        alert.initModality(Modality.APPLICATION_MODAL);
        alert.initOwner(owner);
        alert.showAndWait();
    }
}
```

### 9.2. Savienojumu kļūdu apstrāde (faktiskā)

**No `Main.java` - establishDatabaseConnection:**
```java
private boolean establishDatabaseConnection() {
    while (true) {
        try {
            DatabaseConnectionManager dcm = new DatabaseConnectionManager(mySQLConfig);
            try (java.sql.Connection conn = dcm.connect()) {
                String dbType = dcm.getActiveDatabaseLabel();
                logger.info("Savienojums ar datubāzi veiksmīgs. Datubāzes tips: {}", dbType);
            }
            
            ServiceRegistry.initialize(this, mySQLConfig);
            this.appDataService = ServiceRegistry.getInstance().getAppDataService();
            
            return true;
        } catch (Exception e) {
            logger.error("Neizdevās pieslēgties datubāzei. Tiek atvērts konfigurācijas logs.", e);
            
            // Tiek atvērts konfigurācijas dialogs
            java.util.concurrent.atomic.AtomicBoolean configSaved = new java.util.concurrent.atomic.AtomicBoolean(false);
            java.util.concurrent.CountDownLatch latch = new java.util.concurrent.CountDownLatch(1);
            
            Platform.runLater(() -> {
                try {
                    configSaved.set(viewManager.showMySQLConfigDialog(primaryStage, mySQLConfig));
                } finally {
                    latch.countDown();
                }
            });
            
            try {
                latch.await();
            } catch (InterruptedException ex) {
                return false;
            }
            
            if (!configSaved.get()) {
                logger.warn("Lietotājs atcēla datubāzes konfigurāciju. Programma tiek aizvērta.");
                return false;
            }
        }
    }
}
```

---

## TEHNISKĀS INFORMĀCIJAS KOPSAVILKUMS

### Galvenās tehnoloģijas:
- **Java 21 LTS** - galvenā programmēšanas valoda
- **JavaFX 21** - GUI ietvars
- **MySQL 8.0+** - centrālā datubāze
- **SQLite** - lokālā datubāze
- **HikariCP** - savienojumu pūls
- **Apache POI** - Excel apstrāde
- **Gson** - JSON serializācija
- **SLF4J + Logback** - žurnālieraksti

### Konfigurācijas faili:
- **`db_config.properties`** - MySQL konfigurācija
- **`logback.xml`** - žurnālierakstu konfigurācija
- **`pom.xml`** - Maven konfigurācija
- **`license.key`** - licences atslēga

### Datu mapes:
- **`.klientu_registrs/`** - galvenā datu mape
- **`templates/`** - Excel veidnes
- **`backups/`** - rezerves kopijas
- **`logs/`** - žurnālfaili
- **`temp/`** - pagaidu faili

### JVM parametri:
- **`-Xms512m -Xmx2048m`** - atmiņas iestatījumi
- **`-XX:+UseG1GC`** - GC algoritms
- **`-XX:MaxGCPauseMillis=200`** - GC pauzes limits
- **`-Dfile.encoding=UTF-8`** - kodējums
- **`-Duser.timezone=Europe/Riga`** - laika zona

---

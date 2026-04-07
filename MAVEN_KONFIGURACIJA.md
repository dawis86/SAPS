# Klientu Reģistrs - Maven Konfigurācija (Saskaņota)

**Versija:** 2.1.0  
**Statuss:** PRODUKCIJAS GATAVS  
**Izstrādātājs:** Dāvis Strazds  
**Pārbaudīts:** 2026.04.09  

---

## PAMATINFORMĀCIJA

**GroupId:** lv.socialcare  
**ArtifactId:** klientu-aprupes-sistema-parent  
**Version:** 2.1.0  
**Packaging:** pom  
**MainClass:** lv.socialcare.Launcher  

---

## VERSIJAS (Properties)

```xml
<properties>
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
    <maven.compiler.release>21</maven.compiler.release>
    <sqlite.version>3.45.1.0</sqlite.version>
    
    <javafx.version>21.0.2</javafx.version>
    <slf4j.version>2.0.13</slf4j.version>
    <log4j.version>2.23.1</log4j.version>
    <gson.version>2.10.1</gson.version>
    <hikarcp.version>5.1.0</hikarcp.version>
    <mysql.version>8.4.0</mysql.version>
    <junit.version>5.10.2</junit.version>
    <mockito.version>5.12.0</mockito.version>
</properties>
```

---

## ATKARĪBAS

### JavaFX 21.0.2
- javafx-controls
- javafx-fxml  
- javafx-web
- javafx-media
- javafx-swing

### Logging
- slf4j-api 2.0.13
- slf4j-simple 2.0.13
- log4j-to-slf4j 2.23.1
- log4j-api 2.23.1

### Datu bāzes
- HikariCP 5.1.0
- MySQL Connector 8.4.0
- SQLite JDBC 3.45.1.0 (Offline Cache)

### Utilīti
- Gson 2.10.1
- ControlsFX 11.2.1

### Testēšana
- JUnit 5.10.2
- Mockito 5.12.0
- Testcontainers 1.19.7
- TestFX 4.0.17
- Allure 2.27.0

---

## BUILD PLUGINI

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-maven-plugin</artifactId>
            <version>0.0.8</version>
            <configuration>
                <mainClass>lv.socialcare.Launcher</mainClass>
            </configuration>
        </plugin>
    </plugins>
</build>
```

---

## MODUĻI

```xml
<modules>
    <module>klientu-registrs-app</module>
    <module>license-generator</module>
</modules>
```

---

## BUILD KOMANDAS

```bash
# Kompilēt visus moduļus
mvn clean compile

# Testēt visus moduļus  
mvn test

# Izveidot JAR failus
mvn package

# Instalēt lokālajā repozitorijā
mvn install

# Palaiž aplikāciju
mvn javafx:run
```

---

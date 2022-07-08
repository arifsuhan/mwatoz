1. Build JAR
```
./gradlew clean build
```
2. Run JAR
```
java -jar [jar file] --server.port=[port]
Ex: java -jar build/libs/helloSpringBoot-0.0.1-SNAPSHOT.jar --server.port=8080
```
 
Default Port set in below file:
```
Java/helloSpringBoot/src/main/resources/application.properties
```
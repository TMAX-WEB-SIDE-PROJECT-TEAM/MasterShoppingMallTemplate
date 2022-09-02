## Technologies

- java 객체 및 라이브러리 관리 : Spring
- Build tool : gradle 
- Database : Maria DB
- Api document : GitBook

## Requirements

- [Java11](https://www.oracle.com/java/technologies/downloads/#java11) 설치

## Database
- 설치 : `brew install mariadb`
- 실행 : `brew services start mariadb`
- 중지 : `brew services stop mariadb`
- 실행 확인 : `netstat -anv | grep LISTEN` 시 3306 port가 살아있다면 정상적으로 실행중인 것

## How to build

```
./gradlew clean build
```

## How to run

```
cd build/libs
java -jar spring-project-0.0.1-SNAPSHOT.jar
```

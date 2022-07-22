FROM openjdk:11-slim

WORKDIR /apps

COPY target/*.jar /apps/onemock-v1.1.jar

EXPOSE 8080

ENTRYPOINT [ \
    "java",\
    "-jar",\
    "/apps/onemock-v1.1.jar"\
]
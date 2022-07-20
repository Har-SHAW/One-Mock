### To utilize docker functionality for the onemock server, Please follow instructions mentioned below

#### 1. Change the directory to `./Server`

#### 2. Execute following command to generate Jar

``mvn clean package -DskipTests``

It will gererate the jar and place it in the `../target` directory
#### 3. Next, execute following command to create an docker image for onemock server

``docker image build -t onemock . -f src/main/docker/Dockerfile``

#### 4. Finally, start docker container with

``docker run --name onemock -p 8080:8080 onemock:latest``

and in browser, open ``http://localhost:8080``
# !/bin/sh
# exec mvnw spring-boot:run
docker run -it -p 8080:8080 -v "$(pwd):/app" vanspecial
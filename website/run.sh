# !/bin/sh
# exec mvnw spring-boot:run
docker build . -t rrr --no-cache
docker run -it -p 8080:8080 -v "$(pwd):/app" rrr
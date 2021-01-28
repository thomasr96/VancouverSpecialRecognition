# !/bin/sh
# exec mvnw spring-boot:run
docker run -it -p 8080:8080 -v "$(pwd):/app" vanspecial

docker build . --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -t testdb --no-cache

docker system prune
y
docker build . -t testdb --no-cache
docker run -e POSTGRES_DB -e POSTGRES_PASSWORD=mysecretpassword -t testdb
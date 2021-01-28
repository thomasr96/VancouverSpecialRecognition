docker system prune
y
docker build . -t testdb --no-cache
docker run -e POSTGRES_USER=myuser -e POSTGRES_DB=mydb -e POSTGRES_PASSWORD=mysecretpassword -it testdb
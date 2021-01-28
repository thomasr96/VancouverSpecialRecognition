FROM postgres
WORKDIR /app

COPY init_db.sql /docker-entrypoint-initdb.d
COPY init_db.sh .
COPY address_data.csv .
RUN pwd


 



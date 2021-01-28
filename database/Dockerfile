FROM postgres
WORKDIR /app

COPY init_db.sql /docker-entrypoint-initdb.d
COPY init_db.sh .
COPY address_data.csv .
RUN pwd

# USER postgres

# RUN    /etc/init.d/postgresql start &&\
    # psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';" &&\
    # createdb -O docker docker

 



docker run ^
    --name postgres ^
    -e POSTGRES_USER=user ^
    -e POSTGRES_PASSWORD=123 ^
    -e POSTGRES_DB=db ^
    -p 5432:5432 ^
    -d ^
    postgres

docker logs postgres
docker exec -it postgres psql --username user --dbname db 
@REM CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR (255) NOT NULL);
@REM SELECT * FROM warriors;


docker run ^
    --name mongodb ^
    -e MONGO_INITDB_ROOT_USERNAME=user ^
    -e MONGO_INITDB_ROOT_PASSWORD=admin ^
    -p 27017:27017 ^
    -d ^
    mongo:4 

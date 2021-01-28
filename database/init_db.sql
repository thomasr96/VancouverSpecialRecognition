CREATE TABLE addresses (
    latitude numeric(12,8),
    longitude numeric(12,8)
);
  
COPY addresses(latitude, longitude)
FROM '/app/address_data.csv'
DELIMITER ',';

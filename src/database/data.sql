create table users(
    id serial PRIMARY KEY,
    username varchar(20) not null unique,
    email text not null unique,
    password varchar(255) not null
);


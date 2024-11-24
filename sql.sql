-- ejecute este scrip para crear la base de datos y sus tablas
CREATE SCHEMA `crud_nodejs` ;

create table tb_usuario
(
    id       int auto_increment primary key,
    usuario varchar(200)   not null,
    rol    varchar(100) not null,
    estado  int    null,
    fechaCreacion  datetime default now() null
)
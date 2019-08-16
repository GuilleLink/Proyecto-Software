--Creacion de la tabla de secretaria

create table Secretaria
(
	id int auto_increment,
	Nombre varchar(100) not null,
	password varchar(30) not null,
	constraint Secretaria_pk
		primary key (id)
);

--Creacion de la tabla de presidente

create table presidente
(
	ID int auto_increment,
	Nombre varchar(100) not null,
	Clave varchar(30) not null,
	constraint presidente_pk
		primary key (ID)
);

--Creacion de la tabla de mesa de votacion

create table Mesa
(
	IDSecretaria int not null,
	IDPresidente int not null,
	numero varchar(10) not null,
	codigo int not null,
	constraint Mesa_pk
		primary key (codigo),
	constraint Mesa_secretaria_id_fk
		foreign key (IDSecretaria) references secretaria (id),
	constraint Mesa_presidente_id_fk	
		foreign key (IDPresidente) references presidente (ID)
);

--Creacion de la tabla de votante

create table Votante
(
	DPI varchar(13) not null,
	Nombre varchar(100) not null,
	Empadronado bool not null
);

create unique index Votante_DPI_uindex
	on Votante (DPI);

alter table Votante
	add constraint Votante_pk
		primary key (DPI);

--Creacion de la tabla del centro de votacion

create table Centro
(
	ID int not null,
	codigo varchar(15) not null,
	direccion varchar(150) null,
	ID_Mesa int not null,
	constraint Centro_pk
		primary key (ID),
	constraint Centro_mesa_codigo_fk
		foreign key (ID_Mesa) references mesa (codigo)
);

create unique index Centro_codigo_uindex
	on Centro (codigo);

--Creacion de la tabla de la ubicacion de los centros

create table Ubicacion
(
	codigo int not null,
	departamento varchar(75) not null,
	municipio varchar(75) not null
);

create unique index Ubicacion_codigo_uindex
	on Ubicacion (codigo);

alter table Ubicacion
	add constraint Ubicacion_pk
		primary key (codigo);

alter table centro modify codigo int not null;

drop index Centro_codigo_uindex on centro;

alter table centro
	add constraint centro_ubicacion_codigo_fk
		foreign key (codigo) references ubicacion (codigo);

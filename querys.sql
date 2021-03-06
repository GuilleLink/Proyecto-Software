create table Secretaria
(
	Id_Secretaria int auto_increment,
	Nombre VARCHAR(100) not null,
	Clave VARCHAR(30) not null,
	constraint Secretaria_pk
		primary key (Id_Secretaria)
);

create table Presidente
(
	Id_Presidente int auto_increment,
	Nombre VARCHAR(100) not null,
	Clave VARCHAR(30) not null,
	constraint Presidente_pk
		primary key (Id_Presidente)
);

create table Ubicacion
(
	Codigo_Ubicacion VARCHAR(4) not null,
	Departamento VARCHAR(75) not null,
	Municipio VARCHAR(75) not null,
	constraint Ubicacion_pk
		primary key (Codigo_Ubicacion)
);



create table Centro
(
	Id_Centro VARCHAR(10) not null,
	Nombre VARCHAR(100) not null,
	Direccion VARCHAR(50) not null,
	Codigo_Ubicacion varchar(4) not null,
	constraint Centro_pk
		primary key (Id_Centro),
	constraint Centro_Ubicacion_Codigo_Ubicacion_fk
		foreign key (Codigo_Ubicacion) references Ubicacion (Codigo_Ubicacion)
);



create table Mesa
(
	Codigo_Mesa int,
	Codigo_Secretaria int not null,
	Codigo_Presidente int not null,
	Codigo_Centro varchar(10) not null,
	constraint Mesa_pk
		primary key (Codigo_Mesa),
	constraint Mesa_Centro_Id_Centro_fk
		foreign key (Codigo_Centro) references Centro (Id_Centro),
	constraint Mesa_Presidente_Id_Presidente_fk
		foreign key (Codigo_Presidente) references Presidente (Id_Presidente),
	constraint Mesa_Secretaria_Id_Secretaria_fk
		foreign key (Codigo_Secretaria) references Secretaria (Id_Secretaria)
);

create unique index Ubicacion_Codigo_Ubicacion_uindex
	on Ubicacion (Codigo_Ubicacion);


create table Alcalde
(
    ID     int         not null,
    Nombre varchar(70) null,
    constraint Alcalde_ID_uindex
        unique (ID)
);

alter table Alcalde
    add primary key (ID);

create table Votante
(
	DPI varchar(13) not null,
	Nombre varchar(100) not null,
	Empadronado tinyint not null,
	Codigo_Mesa int not null,
	constraint Votante_pk
		primary key (DPI),
	constraint Votante_Mesa_Codigo_Mesa_fk
		foreign key (Codigo_Mesa) references Mesa (Codigo_Mesa)
);

create table Presidente_Vicepresidente
(
    ID             int         not null,
    Presidente     varchar(70) null,
    Vicepresidente varchar(70) null,
    constraint Presidente_Vicepresidente_ID_uindex
        unique (ID)
);

alter table Presidente_Vicepresidente
    add primary key (ID);

create table Diputados_Distrito_Electoral
(
    ID     int           not null,
    Nombre varchar(5000) null,
    constraint Diputados_Distrito_Electoral_ID_uindex
        unique (ID)
);

create table Diputados_Lista_Nacional
(
    ID     int           not null
        primary key,
    Nombre varchar(5000) not null
);

create table Diputados_Parlacen
(
    ID              int         not null,
    PartidoPolitico varchar(70) null,
    constraint Parlacen_ID_uindex
        unique (ID)
);

alter table Diputados_Parlacen
    add primary key (ID);

create table Voto_Emitido
(
    id_voto                      int auto_increment
        primary key,
    id_centro                    varchar(10) not null,
    id_presidente_vicepresidente int         not null,
    id_Alcalde                   int         not null,
    id_Diputados_Parlacen        int         not null,
    id_Diputados_Distrito        int         not null,
    id_Diputados_Lista           int         not null,
    constraint Voto_Emitido_Alcalde_ID_fk
        foreign key (id_Alcalde) references Alcalde (ID),
    constraint Voto_Emitido_Centro_Id_Centro_fk
        foreign key (id_centro) references Centro (Id_Centro),
    constraint Voto_Emitido_Diputados_Distrito_Electoral_ID_fk
        foreign key (id_Diputados_Distrito) references Diputados_Distrito_Electoral (ID),
    constraint Voto_Emitido_Diputados_Lista_Nacional_ID_fk
        foreign key (id_Diputados_Lista) references Diputados_Lista_Nacional (ID),
    constraint Voto_Emitido_Diputados_Parlacen_ID_fk
        foreign key (id_Diputados_Parlacen) references Diputados_Parlacen (ID),
    constraint Voto_Emitido_Presidente_Vicepresidente_ID_fk
        foreign key (id_presidente_vicepresidente) references Presidente_Vicepresidente (ID)
);


	

-- insertando de Ubicacion
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0101', 'Guatemala', 'Guatemala');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0102', 'Guatemala', 'Santa Catarina Pinula');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0103', 'Guatemala', 'San Jose Pinula');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0104', 'Guatemala', 'San Jose del Golfo');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0105', 'Guatemala', 'Palencia');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0106', 'Guatemala', 'Chinautla');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0107', 'Guatemala', 'San Pedro Ayampuc');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0108', 'Guatemala', 'Mixco');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0109', 'Guatemala', 'San Pedro Sacatepequez');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0110', 'Guatemala', 'San Juan Sacatepequez');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0111', 'Guatemala', 'San Raymundo');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0112', 'Guatemala', 'Chuarrancho');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0113', 'Guatemala', 'Fraijanes');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0114', 'Guatemala', 'Amatitlan');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0115', 'Guatemala', 'Villa Nueva');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0116', 'Guatemala', 'Villa Canales');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0117', 'Guatemala', 'San Miguel Petapa');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0201', 'El Progreso', 'Guastatoya');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0202', 'El Progreso', 'Morazan');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0203', 'El Progreso', 'San Agustin Acasaguastlan');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0204', 'El Progreso', 'San Cristobal Acasaguastlan');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0205', 'El Progreso', 'El Jicaro');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0206', 'El Progreso', 'Sansare');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0207', 'El Progreso', 'Sanarate');
INSERT INTO ProyectoTSEIonic.Ubicacion (Codigo_Ubicacion, Departamento, Municipio) VALUES ('0208', 'El Progreso', 'San Antonio La Paz');



-- insertando otras

INSERT INTO ProyectoTSEIonic.Centro (Id_Centro, Nombre, Direccion, Codigo_Ubicacion) VALUES ('1', 'Fundabiem', 'Kilometro 18.5 Carretera Panamericana Zona 8', '0108');
INSERT INTO ProyectoTSEIonic.Centro (Id_Centro, Nombre, Direccion, Codigo_Ubicacion) VALUES ('2', 'Escuela Oficial Urbana Mixta Laboratorio Numero 1 Raymond H. Rignall', '12 Avenida B 8-41 Zona 2', '0101');
INSERT INTO ProyectoTSEIonic.Centro (Id_Centro, Nombre, Direccion, Codigo_Ubicacion) VALUES ('3', 'Escuela Oficial Urbana Mixta Eduardo Caceres Lenhoff', '17 Avenida 6-95 Zona 14', '0101');


-- Metiendo Presidente y secretaria

INSERT INTO ProyectoTSEIonic.Presidente (ID_Presidente, Nombre, Clave) VALUES (1, 'Albert', '66298917');
INSERT INTO ProyectoTSEIonic.Presidente (ID_Presidente, Nombre, Clave) VALUES (2, 'Thomas', '24417141');
INSERT INTO ProyectoTSEIonic.Presidente (ID_Presidente, Nombre, Clave) VALUES (3, 'Sebastian', '25896346');
INSERT INTO ProyectoTSEIonic.Presidente (ID_Presidente, Nombre, Clave) VALUES (4, 'Marcos', '12345678');
INSERT INTO ProyectoTSEIonic.Presidente (ID_Presidente, Nombre, Clave) VALUES (5, 'Julio', '987654321');

INSERT INTO ProyectoTSEIonic.Secretaria (Id_Secretaria, Nombre, Clave) VALUES (2, 'Martha', '123456');
INSERT INTO ProyectoTSEIonic.Secretaria (Id_Secretaria, Nombre, Clave) VALUES (3, 'Juana', '123456');
INSERT INTO ProyectoTSEIonic.Secretaria (Id_Secretaria, Nombre, Clave) VALUES (4, 'Marcos', '123456');
INSERT INTO ProyectoTSEIonic.Secretaria (Id_Secretaria, Nombre, Clave) VALUES (1, 'Martha', '123456');

-- Inserts mesa
INSERT INTO ProyectoTSEIonic.Mesa (Codigo_Mesa, Codigo_Secretaria, Codigo_Presidente, Codigo_centro) VALUES (710, 1, 1, '1');
INSERT INTO ProyectoTSEIonic.Mesa (Codigo_Mesa, Codigo_Secretaria, Codigo_Presidente, Codigo_centro) VALUES (1035, 3, 3, '3');
INSERT INTO ProyectoTSEIonic.Mesa (Codigo_Mesa, Codigo_Secretaria, Codigo_Presidente, Codigo_centro) VALUES (2968, 2, 2, '2');

INSERT INTO ProyectoTSEIonic.Votante (DPI, Nombre, Empadronado, Codigo_Mesa) VALUES ('3001484610101', 'Andrés Urizar', 1, 710);
INSERT INTO ProyectoTSEIonic.Votante (DPI, Nombre, Empadronado, Codigo_Mesa) VALUES ('3280022911101', 'Gustavo de León', 1, 2968);

--Insterts presidente_Vicepresidente
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (0, 'Danilo Roca', 'Valentino Carrera');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (1, 'Benito Morales', 'Mani Perdomo');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (2, 'Julio Estrada', 'Raul Aguilar');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (3, 'Manfredo Marroquin', 'Pedro Silva');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (4, 'Estuardo Galdamez', 'Pedro Aguilar');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (5, 'Mauricio Radford', 'Jose Estrada');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (6, 'Edmond Mulet', 'Juan Garcia');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (7, 'Anibal Garcia', 'Gerardo Hernandez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (8, 'Thelma Cabrera', 'Andrea Perdomo');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (9, 'Roberto Arzu', 'Peter Estrada');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (10, 'Jose Chea', 'Josue Juarez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (11, 'Edwin Escobar', 'Paul Mendez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (12, 'Thelma Aldana', 'Ana Lucia Garcia');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (13, 'Fredy Cabrera', 'Estuardo Rodriguez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (14, 'Sandra Torres', 'Manuel Jimenez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (15, 'Luis Velasquez', 'Rodrigo Perez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (16, 'Pablo Duarte', 'Rodrigo Zea');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (17, 'Pablo Ceto', 'Manuel Jimenez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (18, 'Zury Rios', 'Ximena Estrada');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (19, 'Alejandro Giammattei', 'Andres Perez');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (20, 'Amilcar Rivera', 'Jose Umberto');
insert into ProyectoTSEIonic.Presidente_Vicepresidente (ID, Presidente, Vicepresidente) values (21, 'Isaac Farchi', 'Pedro Sevilla');

create database if not exists UPROOTED;
use UPROOTED;

create table if not exists USER(
idUSER int primary key auto_increment,
nickname varchar(30),
dtInscricao datetime
);

create table if not exists RESULTADO (
idRESULTADO int auto_increment,
tipo varchar(1),
constraint ck_tipo check  (tipo in ('M','C','R','A')),
fkUSER int,
constraint Fkuser FOREIGN KEY (Fkuser) REFERENCES USER(idUSER), 
constraint pkresultado primary key (idRESULTADO,Fkuser)
);
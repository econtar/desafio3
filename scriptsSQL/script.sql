create database lavie;
use lavie;

-- TABELA PSICÓLOGOS

create table tabela_psicologos(
	id int not null auto_increment primary key unique,
    nome varchar(100) not null,
    email varchar(50) not null unique,
    senha varchar(10) not null,
    apresentacao text not null
);

-- TABELA PACIENTES

create table tabela_pacientes(
	id int not null auto_increment primary key unique,
    nome varchar(100) not null,
    email varchar(50) not null unique,
	idade date not null
);

-- TABELA ATENDIMENTOS 

create table tabela_atendimentos(
	id int not null auto_increment primary key unique,
    data_atendimento date not null,
    observacao text not null,
    psicologo_id int not null,
    paciente_id int not null,
    
    foreign key (psicologo_id) references tabela_psicologos(id),
    foreign key (paciente_id) references tabela_pacientes(id)
);
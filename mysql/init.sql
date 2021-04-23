use node_db;
create table peoples(id int not null auto_increment, name varchar(200), primary key(id));
insert into peoples(name) values('Jeferson Almeida');
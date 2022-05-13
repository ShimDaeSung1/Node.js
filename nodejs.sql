create database mydb;


use mydb;

create table customers(
	name varchar(255),
    address varchar(255)
);

drop database Company;
-- create database Company;
create database company default character set utf8 collate utf8_general_ci; -- ci == case insensitive

use Company;

drop table products;

create table products(
	name varchar(50),
    modelnumber varchar(50),
    series varchar(50)
);
INSERT INTO products (name, modelnumber, series) VALUES ('Eric Clapton Stratocaster', '0117602806', 'Artist');
INSERT INTO products (name, modelnumber, series) VALUES
('Jeff Beck Stratocaster', '0119600805', 'Artist'), 
	('American Deluxe Stratocaster', '011900', 'American Deluxe'),
	('American Deluxe Tele', '011950', 'American Deluxe'),
	('Jim Adkins JA-90 Telecaster Thinline', '0262350538', 'Artist'),
	('Vintage Hot Rod 57 Strat', '0100132809', 'Vintage Hot Rod'),
	('American Vintage 57 Stratocaster Reissue', '0100102806', 'American Vintage'),
	('American Standard Stratocaster', '0110400700', 'American Standard'),
	('Road Worn Player Stratocaster HSS', '0131610309', 'Road Worn'),
	('Road Worn Player Telecaster', '0131082306', 'Road Worn');
select * from products;    

select @@autocommit; -- auto commit 사용중. 1: true, 0: false

set autocommit=0; -- auto commit 사용 안함. 수동커밋


delete from products;

select * from products;

rollback;

insert into products values('한글','한글','한글');

-- alter database company default character set utf8 collate utf8_general_ci; -- ci == case insensitive

create table board(
	id int primary key auto_increment,
    title varchar(50) not null,
    content varchar(1000) not null,
    wdate char(10) not null
);
insert into board(title,content,wdate) values('node.js란?','node.js는...','2022-05-09');
insert into board(title,content,wdate) values('node.js란?','node.js는...','2022-05-09');
insert into board(title,content,wdate) values('node.js란?','node.js는...','2022-05-09');

select * from board;

drop table board_repl;
create table board_repl(
	id int primary key auto_increment,   
    parent_id int not null,
    content varchar(500) not null,
    wdate char(10) not null,
    foreign key(parent_id) references board(id)
);
insert into board_repl(parent_id,content,wdate) values(1,'node.js는...','2022-05-09');
insert into board_repl(parent_id,content,wdate) values(1,'node.js는...','2022-05-09');
insert into board_repl(parent_id,content,wdate) values(1,'node.js는...','2022-05-09');
select * from board_repl;
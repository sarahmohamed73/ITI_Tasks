/*
SQLyog Ultimate v11.5 (64 bit)
MySQL - 5.6.22-enterprise-commercial-advanced-log : Database - intake39
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`intake39` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `intake39`;

/*Table structure for table `departments` */

DROP TABLE IF EXISTS `departments`;

CREATE TABLE `departments` (
  `Dname` varchar(50) DEFAULT NULL,
  `Dnum` int(10) NOT NULL DEFAULT '0',
  `MGRSSN` int(10) DEFAULT NULL,
  `MGRStart Date` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`Dnum`),
  UNIQUE KEY `EmployeeDepartments` (`MGRSSN`),
  UNIQUE KEY `MGRSSN` (`MGRSSN`),
  KEY `Dnum` (`Dnum`),
  CONSTRAINT `dept_mgrssn_fk` FOREIGN KEY (`MGRSSN`) REFERENCES `employee` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `departments` */

insert  into `departments`(`Dname`,`Dnum`,`MGRSSN`,`MGRStart Date`) values ('DP1',10,223344,'2005-01-01 00:00:00.000000'),('DP2',20,968574,'2006-01-03 00:00:00.000000'),('DP3',30,512463,'2006-01-06 00:00:00.000000');

/*Table structure for table `employee` */

DROP TABLE IF EXISTS `employee`;

CREATE TABLE `employee` (
  `Fname` varchar(50) DEFAULT NULL,
  `Lname` varchar(50) DEFAULT NULL,
  `SSN` int(10) NOT NULL DEFAULT '0',
  `Bdate` timestamp(6) NULL DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `Salary` int(10) DEFAULT NULL,
  `Superssn` int(10) DEFAULT NULL,
  `Dno` int(10) DEFAULT NULL,
  PRIMARY KEY (`SSN`),
  KEY `DepartmentsEmployee` (`Dno`),
  KEY `EmployeeEmployee` (`Superssn`),
  CONSTRAINT `emp_dept_fk` FOREIGN KEY (`Dno`) REFERENCES `departments` (`Dnum`),
  CONSTRAINT `emp_supssn_fk` FOREIGN KEY (`Superssn`) REFERENCES `employee` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `employee` */

insert  into `employee`(`Fname`,`Lname`,`SSN`,`Bdate`,`Address`,`gender`,`Salary`,`Superssn`,`Dno`) values ('Ahmed','Ali',112233,'0000-00-00 00:00:00.000000','15 Ali fahmy St.Giza','M',1300,223344,10),('Hanaa','Sobhy',123456,'1973-03-18 00:00:00.000000','38 Abdel Khalik Tharwat St. Downtown.Cairo','F',800,223344,10),('Kamel','Mohamed',223344,'1970-10-15 00:00:00.000000','38 Mohy el dien abo el Ezz  St.Cairo','M',1800,321654,10),('Amr','Omran',321654,'0000-00-00 00:00:00.000000','44 Hilopolis.Cairo','M',2500,NULL,NULL),('Edward','Hanna',512463,'1972-08-19 00:00:00.000000','18 Abaas El 3akaad St. Nasr City.Cairo','M',1500,321654,30),('Maged','Raoof',521634,'1980-06-04 00:00:00.000000','18 Kholosi st.Shobra.Cairo','M',1000,968574,30),('Mariam','Adel',669955,'1982-12-06 00:00:00.000000','269 El-Haram st. Giza','F',750,512463,20),('Noha','Mohamed',968574,'1975-01-02 00:00:00.000000','55 Orabi St. El Mohandiseen .Cairo','F',1600,321654,20);

/*Table structure for table `project` */

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `Pname` varchar(50) DEFAULT NULL,
  `Pnumber` int(10) NOT NULL DEFAULT '0',
  `Plocation` varchar(50) DEFAULT NULL,
  `City` varchar(50) DEFAULT NULL,
  `Dnum` int(10) DEFAULT NULL,
  PRIMARY KEY (`Pnumber`),
  KEY `DepartmentsProject` (`Dnum`),
  KEY `Dnum` (`Dnum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `project` */

insert  into `project`(`Pname`,`Pnumber`,`Plocation`,`City`,`Dnum`) values ('AL Solimaniah',100,'Cairo_Alex Road','Alex',10),('Al Rabwah',200,'6th of October City','Giza',10),('Al Rawdah',300,'Zaied City','Giza',10),('Al Rowad',400,'Cairo_Faiyom Road','Giza',20),('Al Rehab',500,'Nasr City','Cairo',30),('Pitcho american',600,'Maady','Cairo',30),('Ebad El Rahman',700,'Ring Road','Cairo',20);

/*Table structure for table `works_for` */

DROP TABLE IF EXISTS `works_for`;

CREATE TABLE `works_for` (
  `ESSn` int(10) NOT NULL DEFAULT '0',
  `Pno` int(10) NOT NULL DEFAULT '0',
  `Hours` int(10) DEFAULT NULL,
  PRIMARY KEY (`ESSn`,`Pno`),
  KEY `EmployeeWorks_for` (`ESSn`),
  KEY `ProjectWorks_for` (`Pno`),
  CONSTRAINT `emp_proj_essn_fk` FOREIGN KEY (`ESSn`) REFERENCES `employee` (`SSN`),
  CONSTRAINT `emp_proj_pno_fk` FOREIGN KEY (`Pno`) REFERENCES `project` (`Pnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `works_for` */

insert  into `works_for`(`ESSn`,`Pno`,`Hours`) values (112233,100,40),(223344,100,10),(223344,200,10),(223344,300,10),(223344,500,10),(512463,500,10),(512463,600,25),(521634,300,6),(521634,400,4),(521634,500,10),(521634,600,20),(669955,300,10),(669955,400,20),(669955,700,7),(968574,300,10),(968574,400,15),(968574,700,15);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;










CREATE TABLE `intake39`.`dependent`(
  `ESSN` INT(11) NOT NULL,
  `dependent_name` VARCHAR(200) NOT NULL,
  `sex` VARCHAR(1),
  `bdate` DATE,
  PRIMARY KEY (`ESSN`, `dependent_name`)
);


INSERT INTO dependent
VALUES
(112233, 'Hala Saeid Ali', 'F', '1970-10-18'),
(223344, 'Ahmed Kamel Shawky', 'M', '1998-3-27'),
(223344, 'Mona Adel Mohamed', 'F', '1975-4-25'),
(321654, 'Ramy Amr Omran', 'M', '1990-1-26'),
(321654, 'Omar Amr Omran', 'M', '1993-3-30'),
(321654, 'Sanaa Gawish', 'F', '1973-5-16'),
(512463, 'Sara Edward', 'F', '2001-9-15'),
(512463, 'Nora Ghaly', 'F', '1976-6-22');

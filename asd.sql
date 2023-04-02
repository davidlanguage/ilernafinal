-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: alacartas
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cuenta`
--

DROP TABLE IF EXISTS `cuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuenta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(45) NOT NULL,
  `contrasenya` varchar(45) NOT NULL,
  `usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_usuario_UNIQUE` (`nombre_usuario`),
  KEY `fk_cuenta_usuario_idx` (`usuario_id`),
  CONSTRAINT `fk_cuenta_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta`
--

LOCK TABLES `cuenta` WRITE;
/*!40000 ALTER TABLE `cuenta` DISABLE KEYS */;
INSERT INTO `cuenta` VALUES (1,'psicologo1','psico1',1),(2,'psicologo2','psico2',2),(3,'psicologo3','psico3',3),(4,'psicologo4','psico4',4),(5,'usuario1','usu1',5),(6,'usuario2','usu2',6),(7,'usuario3','usu3',7),(8,'usuario4','usu4',8),(9,'usuario5','usu5',9),(10,'usuario6','usu6',10),(18,'psicologo1442','psico1442',NULL),(20,'psicologo142','psico142',NULL),(22,'pepe','pepe',20),(23,'psicologotest','psicotest',21),(28,'123','123',26),(29,'asd','asd',27),(30,'bbbb','bbbb',28);
/*!40000 ALTER TABLE `cuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (28);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `contenido` longtext NOT NULL,
  `usuario_id` int NOT NULL,
  `destinatario_id` int NOT NULL,
  PRIMARY KEY (`id`,`usuario_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_mensaje_usuario1_idx` (`usuario_id`),
  KEY `FKfi1dp7psgd7wi7n4x7aberitn` (`destinatario_id`),
  CONSTRAINT `fk_mensaje_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `FKfi1dp7psgd7wi7n4x7aberitn` FOREIGN KEY (`destinatario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
INSERT INTO `mensaje` VALUES (1,'psicologo1 título modificado','Buenos días, usuario1. Soy experto en depresión laboral y creo que podría apoyarte. Mi correo es psicologo1@gmail.com',1,5),(3,'psicolog 1 título ','Buenos días, usuario 2. Soy experto en depresión laboral y creo que podría apoyarte. Mi correo es psicologo1@gmail.com',1,6),(27,'Depresión Postparto','Buenas tardes: me llamo María y tras el parto de mi hijo creo sufrir de depresión. Me encuentro triste, sola y necesitaría poder contar con ayuda profesional. Mi correo es el siguiente: maria@maria.com',7,7),(28,'Adolescente Descontrolado','Buenos días: me llamo Pepe y me gustaría poder hablar con un experto en problemas de conducta de adolescentes. Gracias. Mi correo es pepe@pepe.com',8,8),(29,'Adición al tabaco','Buenos días: me llamo Pedro y soy adicto al tabaco. Todo lo que he intentado no funciona. No sé que más hacer',10,10);
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `tipo_usuario` int NOT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  `genero` varchar(45) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'psicologo1','psico1',1,'psicologo1@gmail.com','M',30),(2,'psicologo2','psico2',1,'psicologo2@gmail.com','M',32),(3,'psicologo3','psico3',1,'psicologo3@gmail.com','F',34),(4,'psicologo4','psico4',1,'psicologo4@gmail.com','F',36),(5,'usuario1','usu1',2,'usu1@gmail.com','F',32),(6,'usuario2','usu2',2,'usu2@gmail.com','F',21),(7,'María','López Saez',2,'usu3@gmail.com','M',26),(8,'José','González Espronceda',2,'usu4@gmail.com','M',56),(9,'usuario5','usu5',2,'usu5@gmail.com','M',63),(10,'usuario6','usu6',2,'usu6@gmail.com','F',87),(17,'psicologo1442','psico1442',1,'psicologo1@gmail.com','M',54),(19,'psicologo142','psico142',1,'psicologo1@gmail.com','F',44),(20,'pepe','pepe',1,'psicologo1@gmail.com','M',29),(21,'psicologotest','psicotest',1,'psicologotest@gmail.com',NULL,NULL),(26,'123','123',2,'123',NULL,NULL),(27,'asd','asd',1,'asd',NULL,NULL),(28,'bbbb','bbbb',2,'bbbb',NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-02 18:09:12

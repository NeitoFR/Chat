-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 19 avr. 2018 à 16:23
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sc-proj`
--

-- --------------------------------------------------------

--
-- Structure de la table `pilluliers`
--

DROP TABLE IF EXISTS `pilluliers`;
CREATE TABLE IF NOT EXISTS `pilluliers` (
  `id_pillulier` int(11) NOT NULL AUTO_INCREMENT,
  `case_1` int(1) NOT NULL DEFAULT '1',
  `case_2` int(1) NOT NULL DEFAULT '1',
  `case_3` int(1) NOT NULL DEFAULT '1',
  `case_4` int(1) NOT NULL DEFAULT '1',
  `case_5` int(1) NOT NULL DEFAULT '1',
  `case_6` int(1) NOT NULL DEFAULT '1',
  `case_7` int(1) NOT NULL DEFAULT '1',
  `contenu_1` varchar(25) DEFAULT NULL,
  `contenu_2` varchar(25) DEFAULT NULL,
  `contenu_3` varchar(25) DEFAULT NULL,
  `contenu_4` varchar(25) DEFAULT NULL,
  `contenu_5` varchar(25) DEFAULT NULL,
  `contenu_6` varchar(25) DEFAULT NULL,
  `contenu_7` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_pillulier`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pilluliers`
--

INSERT INTO `pilluliers` (`id_pillulier`, `case_1`, `case_2`, `case_3`, `case_4`, `case_5`, `case_6`, `case_7`, `contenu_1`, `contenu_2`, `contenu_3`, `contenu_4`, `contenu_5`, `contenu_6`, `contenu_7`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 'Doliprane 500', 'Xanax', 'Sucre', 'Itroplafe', 'Flixmetane', 'Itylzuril', 'Magnefibre'),
(2, 1, 1, 1, 1, 1, 1, 1, 'Atchoum', 'Fraganus 15', 'Taglif 200', 'Mastuflex', 'Creme epilatoire', 'Ignifus', 'Doliprane 1000'),
(3, 1, 1, 1, 1, 1, 1, 1, 'Doliprane 500', 'Xanax', 'Taglif 200', 'Mastuflex', 'Helicidine', 'Itylzuril', 'Doliprane 1000'),
(4, 1, 1, 1, 1, 1, 1, 1, 'Advil ', 'Pivalone', 'Toperec', 'Nurophene', 'Canabix', 'Mucomixt', 'Smecta');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `age` int(11) NOT NULL,
  `id_pillulier` int(11) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `nom`, `prenom`, `age`, `id_pillulier`) VALUES
(1, 'Garland', 'Philippe', 83, 1),
(2, 'Nishi', 'Fukuda', 73, 2),
(5, 'Flixx', 'Jean-Mathias', 78, 3),
(6, 'Porlune', 'Catherine', 76, 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

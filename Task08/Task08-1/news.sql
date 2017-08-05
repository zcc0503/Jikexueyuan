-- phpMyAdmin SQL Dump
-- version 3.3.7
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 06 月 25 日 07:39
-- 服务器版本: 5.0.90
-- PHP 版本: 5.2.14

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `baidu_new`
--

CREATE TABLE IF NOT EXISTS `baidu_new` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(255) default NULL,
  `type` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `baidu_new`
--

INSERT INTO `baidu_new` (`id`, `title`, `type`) VALUES
(9, '新闻1', 2),
(10, '新闻2', 1230),
(11, '新闻3', 1),
(13, '测试新闻1', 1);

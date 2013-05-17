--建表

-- ********************************
--   1、用户表（USERS table)
-- ********************************
--DROP TABLE USERS

CREATE TABLE [USERS] (
  [USER_NO] INT Primary key, 
  [USER_ID] NVARCHAR(20), 
  [USER_PWD] NVARCHAR(50), 
  [USER_NAME] NVARCHAR(20), 
  [USER_EMAIL] NVARCHAR(50), 
  [USER_COMPANY] NVARCHAR(50)
  );
  
-- ***********************************
-- 	2、告警信息表(ALARM table)
-- ***********************************

--DROP TABLE ALARM

CREATE TABLE [ALARM](
  [ALARM_ID] INT Primary key,
  [ORG_STRUC_ID] int not null,
  [ALARM_CODE] nvarchar(10),
  [ALARM_CLASS] int,
  [ALARM_INFO] nvarchar(100),
  [DESCRIPTION] nvarchar(100),
  [ALARM_DATETIME] datetime,
  FOREIGN KEY([ORG_STRUC_ID]) REFERENCES [ORG_STRUCTURE]([ORG_STRUC_ID]) 
  );

-- ********************************
--  组织结构结构物表(ORG_STUCTURE)
-- ********************************
  
create table [ORG_STRUCTURE] (
   [ORG_STRUC_ID]         int          Primary key,
   [ORGANIZATION_ID]      int                  not null,
   [ABB_NAME_CN]          nvarchar(50)         null,
   [FULL__NAME_CN]        nvarchar(50)         null,
   [TRIAL_NAME_CN]        nvarchar(50)         null,
   [STRUCTURE_NAME_CN]    nvarchar(50)         null,
   [STRUCTURE_ALIAS_CN]   nvarchar(50)         null,
   [STRUCTURE_TRIAL_CN]   nvarchar(50)         null
);
  
create table [PERMISSION] (
   [PERMISSION_ID]        tinyint             Primary key,
   [ORG_STRUC_ID]         int                 not null,
   [USER_NO]              int                 not null,
   [ABB_NAME_CN]          varchar(20)          null,
   FOREIGN KEY([ORG_STRUC_ID]) REFERENCES [ORG_STRUCTURE]([ORG_STRUC_ID]),
   FOREIGN KEY([USER_NO]) REFERENCES [USERS]([USER_NO])
);
  
-- **************************************
--   安全因素类型表(SAFETY_FACTOR_TYPE)
-- **************************************
CREATE TABLE [SAFETY_FACTOR_TYPE](
   [SAFETY_FACTOR_TYPE_ID] int      primary key,
   [SAFETY_FACTOR_TYPE_PARENT_ID] int                  null,
   [SAFETY_FACTOR_TYPE_NAME] nvarchar(20)         null,
   [SAFETY_FACTOR_FLAG]   tinyint              null,
   [SAFETY_FACTOR_TYPE_COLOR] char(11)             null,
   [DESCRIPTION]          nvarchar(100)        null
  );
 
insert into [SAFETY_FACTOR_TYPE]([SAFETY_FACTOR_TYPE_ID],[SAFETY_FACTOR_TYPE_PARENT_ID],[SAFETY_FACTOR_TYPE_NAME],[SAFETY_FACTOR_TYPE_COLOR]) VALUES(1,0,'环境主题','0.255.0');   
insert into [SAFETY_FACTOR_TYPE]([SAFETY_FACTOR_TYPE_ID],[SAFETY_FACTOR_TYPE_PARENT_ID],[SAFETY_FACTOR_TYPE_NAME],[SAFETY_FACTOR_TYPE_COLOR]) VALUES(2,0,'变形主题','0.0.255');
insert into [SAFETY_FACTOR_TYPE]([SAFETY_FACTOR_TYPE_ID],[SAFETY_FACTOR_TYPE_PARENT_ID],[SAFETY_FACTOR_TYPE_NAME],[SAFETY_FACTOR_TYPE_COLOR]) VALUES(3,0,'应力/应变主题','69.114.167');
insert into [SAFETY_FACTOR_TYPE]([SAFETY_FACTOR_TYPE_ID],[SAFETY_FACTOR_TYPE_PARENT_ID],[SAFETY_FACTOR_TYPE_NAME],[SAFETY_FACTOR_TYPE_COLOR]) VALUES(4,0,'受力主题','105.105.105');

-- *******************************
-- 3、 结构物安全评分表
-- *******************************
CREATE TABLE [STRUCTURE_SCORE](
  [ID]  integer PRIMARY KEY autoincrement,
  [ORG_STRUC_ID] int,
  [STRUCTURE_SCORE] TINYINT,
  [EVALUATION_DATETIME] DATETIME,
  [DESCRIPTION] NVARCHAR(100)
  );

-- *******************************
-- 3、 结构物安全因素评分表
-- *******************************

CREATE TABLE [SAFETY_FACTOR_SCORE](
  [ID] integer PRIMARY KEY autoincrement,
  [SAFETY_FACTOR_TYPE_ID] INT,
  [SAFETY_FACTOR_SCORE] TINYINT,
  [EVALUATION_DATETIME] DATETIME,
  [DESCRIOTION] NVARCHAR(100)
  );
  
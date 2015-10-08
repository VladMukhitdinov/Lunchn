Create Table UserAccount(
	Id int Primary key Identity(1,1),
	Name nvarchar(255) not null
)

Create Table Lunch(
	Id int Primary key  Identity(1,1),
	Venue  nvarchar(255) not null,
	LunchDate datetime not null,
	Comments nvarchar(2048),
	Latitute Decimal(9,6),
	Longitude Decimal(9,6)
)

Create Table LunchMate(
	Id int Primary key  Identity(1,1),
	UserAccountId int not null,
	LunchId int not null,
	IsHaveVehicle int not null default 0,
	IsCanTakePassengers int not null default 0,
	FreeSeatsNumber int not null default 0
)

alter table LunchMate add constraint FK_LunchMate_UserAccount foreign key (UserAccountId) references UserAccount(Id)
alter table LunchMate add constraint FK_LunchMate_Lunch foreign key (LunchId) references Lunch(Id)

Create table ChatFeed(
	Id int Primary key  Identity(1,1),
	UserAccountId int not null,
	LunchId int not null,
	[Message] nvarchar(1024) not null,
	MessageTypeId int not null
)

alter table ChatFeed add constraint FK_ChatFeed_UserAccount foreign key (UserAccountId) references UserAccount(Id)
alter table ChatFeed add constraint FK_ChatFeed_Lunch foreign key (LunchId) references Lunch(Id)
Create Table UserAccount(
	Id int Primary key Identity(1,1),
	Name nvarchar(255) not null
)

Create Table Venue(
	Id int Primary key  Identity(1,1),
	Name  nvarchar(255) not null,
	[Date] datetime not null,
	Comments nvarchar(2048),
	Latitute Decimal(9,6),
	Longitude Decimal(9,6)
)

Create Table VenueAttendee(
	Id int Primary key  Identity(1,1),
	UserAccountId int not null,
	VenueId int not null,
	IsHaveVehicle int not null default 0,
	IsCanTakePassengers int not null default 0,
	FreeSeatsNumber int not null default 0
)

alter table VenueAttendee add constraint FK_VenueAttendee_UserAccount foreign key (UserAccountId) references UserAccount(Id)
alter table VenueAttendee add constraint FK_VenueAttendee_Venue foreign key (VenueId) references Venue(Id)

Create table ChatFeed(
	Id int Primary key  Identity(1,1),
	UserAccountId int not null,
	VenueId int not null,
	[Message] nvarchar(1024) not null,
	MessageTypeId int not null
)

alter table ChatFeed add constraint FK_ChatFeed_UserAccount foreign key (UserAccountId) references UserAccount(Id)
alter table ChatFeed add constraint FK_ChatFeed_Venue foreign key (VenueId) references Venue(Id)
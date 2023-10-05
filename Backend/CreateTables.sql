
Create Table Book_Details(
    Book_Details_ID int NOT NULL,
    Title text,
    Description text,
    Primary Key(Book_Details_ID)
);

Create Table Books (
    Book_ID int NOT NULL,
    Author text,
    Book_Details_ID int,
    ISBN char(13),
    ASIN char(10),
    Primary Key(Book_ID),
    Foreign Key (Book_Details_ID) references dbo.Book_Details(Book_Details_ID) ON DELETE CASCADE
);

Create Table Sellers(
    Seller_ID int NOT NULL,
    Seller_Name text,
    field char(10)
    Primary Key(Seller_ID)
);

Create Table Prices(
    Price_ID int NOT NULL,
    Date_collected datetime,
    Book_ID int,
    Seller_ID int,
    Value money,
    Primary Key(Price_ID),
    Foreign Key (Book_ID) references dbo.Books(Book_ID),
    Foreign Key (Seller_ID) references dbo.Sellers(Seller_ID)
);
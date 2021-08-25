# NodeJS.MysSql
NodeJS + MysSql

[Download the Node.js](https://nodejs.org/en/download/ "Download the Node.js")

```shell
npm -v

npm init

npm install express -save

npm install ejs --save

npm install -g nodemon

npm install mysql --save

nodemon app
```

```yaml
version: '3'

services:

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: "Fibonacci"
      MYSQL_DATABASE: "Node"
    ports:
      - 3306:3306
```

```sql
CREATE TABLE Technology(  
    Id int NOT NULL primary key AUTO_INCREMENT,
    Name varchar(50)
) default charset utf8 comment '';

INSERT INTO Technology(Name) VALUES('Drones')
```

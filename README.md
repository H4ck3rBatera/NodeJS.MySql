# NodeJS.MysSql
NodeJS + MysSql

[Download the Node.js](https://nodejs.org/en/download/ "Download the Node.js")

### VSCode Extensions | Recommendations
```json
{
    "recommendations": [
        "codezombiech.gitignore",
        "ms-azuretools.vscode-docker",
        "cweijan.vscode-mysql-client2"
    ]
}
```

### Shell
```shell
npm -v

npm init

npm install express -save

npm install ejs --save

npm install -g nodemon

npm install mysql --save

nodemon app
```

### Docker | Yaml
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

### Sql
```sql
CREATE TABLE Technology(  
    Id int NOT NULL primary key AUTO_INCREMENT,
    Name varchar(50)
) default charset utf8 comment '';

INSERT INTO Technology(Name) VALUES('Drones')
```

### DbConnection
```javascript
const mysql = require('mysql2/promise');

module.exports = async function () {
    return await mysql.createConnection("mysql://root:Fibonacci@localhost:3306/Node");
};
```

### Technology Repository
```javascript
const dbConnection = require('../config/dbConnection');

async function list() {
    const connection = await dbConnection();

    const [rows] = await connection.query("SELECT Id, Name FROM Technology;");
    return rows;
}

module.exports = { list }
```

### Technology Route
```javascript
const repository = require('../../data/technologyRepository');

module.exports = function (app) {
    app.get('/technology', async function (req, res) {
        const list = await repository.list();

        res.render("technology/listView", { list: list });
    });
}
```

### List View
```html
<html>

<body>
    <table>
        <tr>
            <td>
                ID
            </td>
            <td>
                Name
            </td>
        </tr>

        <% for(var i=0; i < list.length; i++) {%>
            <tr>
                <td>
                    <%= list[i].Id %>
                </td>
                <td>
                    <%= list[i].Name %>
                </td>
            </tr>
            <% } %>

    </table>
</body>

</html>
```

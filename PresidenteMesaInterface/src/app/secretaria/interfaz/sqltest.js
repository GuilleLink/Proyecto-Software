var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

//Para correr y probar el archivo: node src/app/secretaria/interfaz/sqltest.js


// Create connection to database
var config =
{
    authentication: {
        options: {
            userName: 'azureuser', // update me
            password: 'Ingsoftware123' // update me
        },
        type: 'default'
    },
    server: 'mysqlserveringsoftware.database.windows.net', // update me
    options:
    {
        database: 'DBVotaciones2019', //update me
        encrypt: true
    }
}

var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            //queryDatabase_Test()
            CheckEmpadronamiento(123);   //metodo que chequea
            //queryDatabase_Test();
            //console.log(DBresults["columname"]);
           // console.log(DBresults["colvalue"]); //Aqui deberia de imprimirse los arrays con los datos pero no se imprimen.

        }
    }
);

function CheckEmpadronamiento(dpi)
{
    console.log('Reading rows from the Table...');

    // Read all rows from table
    var request = new Request(
        "SELECT * FROM padronE WHERE dpi ="+dpi,
        function(err, rowCount, rows)
        {
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    //cuando la funcion termina, sus datos tambien se van a ala baby al parecer aunque se hayan guardado en un array
    request.on('row', function(columns) {
        columns.forEach(function(column) {
            DBresults["columname"].push(String(column.metadata.colName)); //deberian guardarse los datos con el push
            DBresults["colvalue"].push(String(column.value));
            //console.log("%s: %s", column.metadata.colName, column.value);
        });
        console.log(DBresults["columname"]); //aqui si imprime
        console.log(DBresults["colvalue"]);        
        //DBresults["columname"] = names;
        //DBresults["colvalue"] = values;
    });
   // console.log(DBresults["columname"]); //aqui ya no
    //console.log(DBresults["colvalue"]);  
    connection.execSql(request);
}

function queryDatabase_Test()
{
    console.log('Reading rows from the Table...');

    // Read all rows from table
    var request = new Request(
        "SELECT * FROM mesas",
        function(err, rowCount, rows)
        {
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}

var DBresults = { //para guardar los resultados y mandar el objeto al ts
    columname:[],
    colvalue:[]
};

var Objectt = function() {
    this.init= function() {
        columname = [],
        colvalue= []}}


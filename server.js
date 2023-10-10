const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =       //bu orinda MongoDB ni ulab olamiz 
"mongodb+srv://doni:kjil35Fo8aHsyx80@cluster0.xbvoiwi.mongodb.net/Reja";

mongodb.connect(// mongo db ichida connect nomli mehod bor va u 3 a paramer oladi 1) Sring 2) options 3) callbackFunction
    connectionString, //1-Sring
    {
        useNewUrlParser: true,//2- true bilan useNewUrlParser va true bilan useUnifiedTopology
        useUnifiedTopology: true, 
    }, 
    (err, client) => {// 3- parametr bu callBack boladi
        try{ //2 - qadam
            console.log("MongoDB connection succead");
            module.exports = client; //server.js ni app.js ga ulash uchun module.export qildim
                                    //client ichida db nomli object bor shuning uchun export qildik va app ichida chaqiriladi 

            const app = require("./views/app");//mongoDB ga ulanish muvifaqyatli bolsa, app.js da express boshlanadi
            const server = http.createServer(app);
            let PORT = 7002;
            server.listen(PORT, function () {
                console.log(`The server is running successfully on part : ${PORT}, http://localhost:${PORT}`//http://localhost:${PORT} orqali linkniyam consolda kora olamiz
                );
            });   

        }catch{ //1 - qadam
                // bu functionda catch Erorni tekshiriladi agar eror yoq bolsa yani => MongoDB ga client muvofaqyatli ulansa 2- qadam ishlaydi
            console.log("ERROR on connection MongoDB! Firstly check MongoDB connection");
        }  
    });
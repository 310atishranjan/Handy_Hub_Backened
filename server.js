const express=require("express");

const app=express();

const dotenv=require("dotenv");
dotenv.config();

const connect=require("./db/configDb");
connect();


app.use(express.json());
app.use(express.urlencoded());


const cors=require("cors");
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST","GET"],
    credentials:true,
})
)
// app.use((req, res, next) => {
//         res.setHeader("Access-Control-Allow-Origin", "https://handyhub31.netlify.app/"),
//         res.header(
//             "Access-Control-Allow-Headers",
//             "Origin, X-Requested-with, Content-Type, Accept",
           
//         );
        
//         res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials
       
//         next();
//     });
app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
})


app.use('/api/v1/user',require("./routes/userRoutes"));
app.use('/api/v1/work',require("./routes/workRoutes"));

const PORT=process.env.PORT;

app.listen(PORT,(req,res)=>{
    console.log('server is listening');
})
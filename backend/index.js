const express = require ("express");
const mysql = require ("mysql");
const cors = require("cors");

const app= express();

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "tutor",
});

app.post("/sregister", (req,res)=>{
    const username=req.body.Username;
    const password= req.body.Password;
    const qualification=req.body.Qualification;
    db.query(
        "INSERT INTO student (Username, Password,Qualification) VALUES (?,?,?)",
        [username, password,qualification],
        (err, result)=>{
            console.log(err);
        }
    );
});

app.post("/tregister", (req,res)=>{
    const course=req.body.Course;
    const username=req.body.Username;
    const password= req.body.Password;
    const qualification=req.body.Qualification;
    console.log(course,username,password,qualification);
    db.query(
        "INSERT INTO teacher ( Username, Password, Course, Qualification) VALUES (?,?,?,?)",
        [username, password, course, qualification],
        (err, result)=>{
            console.log(err);
        }
    );
});

app.post("/slogin", (req,res)=>{
    const username=req.body.Username;
    const password= req.body.Password;
    const qualification=req.body.Qualification;
    db.query(
        "SELECT * FROM student where Username=? AND password=?",
        [username, password,qualification],
        (err, result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length > 0){
                res.send(result);
            }else{
                res.send({message: "Wrong username/password"});
            }
        }
    );
});

app.post("/tlogin", (req,res)=>{
    const username=req.body.Username;
    const password= req.body.Password;
    const qualification=req.body.Qualification;
    db.query(
        "SELECT * FROM teacher where Username=? AND password=?",
        [username, password,qualification],
        (err, result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length > 0){
                res.send(result);
            }else{
                res.send({message: "Wrong username/password"});
            }
        }
    );
});

app.get("/eng", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'English'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/hin", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Hindi'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/math", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Maths'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});






app.get("/sc", (req, res) => {
    const q = "SELECT * FROM teacher WHERE Course = 'Science'";
    db.query(q, (err, data) => {
        if (err) {
        console.log(err);
        return res.json(err);
        }
        return res.json(data);
    });
});




app.listen(3001, ()=>{
    console.log("server says HI..");
});
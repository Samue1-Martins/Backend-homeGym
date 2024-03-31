import express from "express"
import { superioirsExercise } from "./database/superiors.exercises.js";
const app = express();

app.use(express.json())

app.get("/teste", function (req, res){
    res.send (superioirsExercise);
});

const port = process.env.PORT || 7000

if(!port){
    throw new Error('Port not defined')
}

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(cors());

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"satyam",
            age:22,
            contact:12254
        }
    })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

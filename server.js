import express from "express";
import routes from "./src/routes/postsRoutes.js";


const posts = [

    { 
        id: 1,
        discricao: "Uma foto qualquer",
        imagem: "https://placecats.com/millie/300/150",
    },
    
    { 
        id: 2,
        discricao: "Uma foto qualquer",
        imagem: "https://placecats.com/millie/300/150",
    },
    
    { 
        id: 3,
        discricao: "Uma foto qualquer",
        imagem: "https://placecats.com/millie/300/150",
    },
    
    { 
        id: 4,
        discricao: "Uma foto qualquer",
        imagem: "https://placecats.com/millie/300/150",
    },
    
    { 
        id: 5,
        discricao: "Uma foto qualquer",
        imagem: "https://placecats.com/millie/300/150",
    }
    
];

const app = express();

app.use(express.static("uploads"));

routes(app);

app.use(express.json());

app.listen(3000, () =>{
    console.log("Servidor escutando...");
});


app.get("/posts", async(req,res) =>{
    const posts = await getTodosPosts()
    res.status(200).json(posts);
});





const Router=require("express").Router();
Router.get("/json",(req,res)=>{
    res.send({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      })
})
Router.get("/express",(req,res)=>{
    res.send("<h1>EXPRESS</h1><p>In the context of Node.js, express typically refers to Express.js, which is a popular web application framework for building server-side applications and APIs. It simplifies the process of developing robust and scalable web applications in Node.js.To use Express.js in a Node.js application, you first need to install it. You can do this using npm (Node Package Manager), which is the package manager for Node.js.In the context of Node.js, express typically refers to Express.js, which is a popular web application framework for building server-side applications and APIs. It simplifies the process of developing robust and scalable web applications in Node.js.To use Express.js in a Node.js application, you first need to install it. You can do this using npm (Node Package Manager), which is the package manager for Node.js. In the context of Node.js, express typically refers to Express.js, which is a popular web application framework for building server-side applications and APIs. It simplifies the process of developing robust and scalable web applications in Node.js.To use Express.js in a Node.js application, you first need to install it. You can do this using npm (Node Package Manager), which is the package manager for Node.js. In the context of Node.js, express typically refers to Express.js, which is a popular web application framework for building server-side applications and APIs. It simplifies the process of developing robust and scalable web applications in Node.js.To use Express.js in a Node.js application, you first need to install it. You can do this using npm (Node Package Manager), which is the package manager for Node.js.  </p>")
    res.send("")
})
Router.get("/comment",(req,res)=>{
    res.send("<h1>THIS IS COMMENT PAGE</h1>")
})
module.exports = Router;
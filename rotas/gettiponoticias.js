module.exports=(app)=>{
    app.get("/noticias/tipo/:tipo", async (req, res)=>{
        res.send(req.params.tiponoticias)

    })
}
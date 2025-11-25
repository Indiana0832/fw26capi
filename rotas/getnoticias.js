module.exports = (app)=>{
    app.get('/noticias', async (req, res)=>{
        try{
            await app.dbClient.connect();
            const users = await app.dbClient.db('portalnoticias')
            .collection('noticias')
            .find()
            .toArray();
            res.json(users);
        }catch(error){
            await app.dbClient.close()
            res.send("erro:"+error)
        }
        finally{
            await app.dbClient.close()
        }
    })
}
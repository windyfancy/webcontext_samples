module.exports= {  
    onRequest() {  
        var data=this.request.data;
        this.database.select("wb_article",{id:data.id}).then( (result)=>{
            this.render(JSON.stringify(result));
        })
    }
  }
const urlModel = require('../models/urlModel')

const getUrl = async function (req, res){
    try{
        let urlCode = req.params.urlCode
        if(!urlCode) return res.status(400).send({status : false, msg : "Please insert a url code!"})

        if(urlCode.toLowerCase() !== true) return res.status(400).send({status : false, msg : "The Url Code should be in lower case only!"})
        // let lowercase = /[ A-Za-z]/;
        // if(!lowercase.test(urlCode))return res.status(400).send({status:false,msg:"The url code should be in lowercase only!"})


        let url= await urlModel.findOne({urlCode : urlCode})
        if(url){
            return res.redirect(url.longUrl)
        }
        else{
            return res.status(404).send({msg: "No Url Found"})
        }
       
    }catch(error){
        res.status(500).send({message : error.message})
    }
}







module.exports.getUrl = getUrl
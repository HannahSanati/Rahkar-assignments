function Logger(req, res, next){
    console.log("Logger");
    next();
}

module.exports= Logger;

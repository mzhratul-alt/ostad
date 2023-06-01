function notFoundHandler(req,res,next){
    res.status(404).json('URL not Found!')
}
module.exports = notFoundHandler;
const BookModel=require('./model.js')



exports.postBook= async (req, res)=>
{
    try {
        const obj = await BookModel.create(req.body);
        res.send({"status":"Success",
        "data":obj })}
        catch (err) {
            res.send({status:"Failed","mesaage":"Insert failed",err});
    }
    }

// exports.updateView= async (req, res)=>


// exports.postRating= async (req, res)=>


exports.getBook= async (req, res)=>
{
    try {
        
         obj= await BookModel.findById(req.params.id);
        //  console.log(obj)
        res.status(200).json({"status": "Success", "data": obj})
    }
    catch (err) {
        res.status(404).json({status:"Failed","mesaage":"Getting failed","Error":err.message});
    }
}


exports.getAllBooks= async (req, res)=>
{
    try {
       obj= await BookModel.find();
        res.status(200).json({"status": "Success", "data": obj})
    }
    catch (err) {
        res.status(500).json({status:"Failed","mesaage":"Getting failed","Error":err.message});
    }
}

exports.postReview=async ( req, res)=>
{
    try {
        // console.log(req.body)
        const obj= await BookModel.findById(req.params.id);
        obj.ratings.push(req.body);
        obj.save();
        res.status(200).json({"status": "Success", "data": obj.ratings})
    }
    catch (err) {
        res.status(500).json({status:"Failed","mesaage":"Getting failed","Error":err.message});
    }
}
exports.updateViews=async ( req, res)=>
{
    try {
        // console.log(req.body)
        const obj= await BookModel.findById(req.params.id);
        obj.interests++;
        obj.save();
        res.status(200).json({"status": "Success", "data": obj})
    }
    catch (err) {
        res.status(500).json({status:"Failed","mesaage":"Getting failed","Error":err.message});
    }
}

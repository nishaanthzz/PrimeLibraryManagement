const BookModel=require('./model.js')



//ForSale
exports.getForSale= async (req, res)=>
{
    try {
       obj= await BookModel.find();
        res.status(200).json({"status": "Success", "data": obj})
    }
    catch (err) {
        res.status(500).json({status:"Failed","mesaage":"Getting failed","Error":err.message});
    }


}
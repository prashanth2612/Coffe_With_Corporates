const create = async(Model,req,res)=>{

    //Create a New Document in the collection

    req.body.removed = false;

    const result = await new Model({
        ...req.body,
    }).save();



    return res.status(200).json({
        success:true,
        result,
        messgae:'SucessFully Created the Document'
    });




}


module.exports = create;
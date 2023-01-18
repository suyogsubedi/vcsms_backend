const mongoose = require('mongoose');

exports.getAll = (model) => async (req, res) => {
    try {
        const data = await model.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.create = (model) => async (req, res) => {
    try {
        const data = new model(req.body);
        await data.save();
        return res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.deleteData = (model) => async (req, res) => {
    try {
        const data = await model.findByIdAndDelete(req.params.id);
        if (!data) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            res.status(200).json({ message: 'Data deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateData = (model) => async (req, res) => {
    try {
        const data = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSingleData = (model)=>async(req,res)=>{
    try{
        const data = await model.findOne()
    }catch(err){}
}
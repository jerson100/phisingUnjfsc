const User = require('../models/user');

const createUser = async (req, res) => {

    const { user: username, pass: password} = req.body;

    const find = await User.findOne({username,password});
   
    if(!find){

        const device = req.headers['user-agent'] || 'Dispositivo desconocido';

        const newUser = new User({username, password, device});

        await newUser.save();

    }
    
    res.status(200).json({code:1,msg:"Ok!"});

};

module.exports = {
    createUser
}
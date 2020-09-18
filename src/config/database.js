const mongoose= require('mongoose');

const connection = async () => {
    try{
        const db = process.env.MONGODB_URI || 'mongodb://localhost/unjfsc';
        await mongoose.connect(db,{
            useUnifiedTopology: true, 
            useNewUrlParser: true
        });
        console.log("DB Connected");
    }catch(e){
        console.log("No se pudo conectar la base de datos");
    }
};

module.exports = connection;

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Avenger:Minabala123@cluster0.7iov3.mongodb.net/Ashish?retryWrites=true&w=majority",{

    useNewUrlParser: true, 
    useUnifiedTopology: true,useCreateIndex:true,
    useFindAndModify:true})

     .then(() => console.log('Database connected'))
    .catch(err => console.timeLog(err));


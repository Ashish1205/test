const Hapi = require('@hapi/hapi');
const User= require('./user');
const Mongoose = require('mongoose');

Mongoose.connect("mongodb+srv://Avenger:Minabala123@cluster0.7iov3.mongodb.net/Babu?retryWrites=true&w=majority/Ashish",
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:true});

Mongoose.connection.once('open',()=>{
    console.log('Database connected')

}).catch(err =>{
    console.log('Databse error')
})


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });


    server.route({
        method: 'GET',
        path:'/users',
        handler: async (request, h) => {
           try{ const user = await User.find().exec()
            return h.response(user);
           } catch (error){
            return h.response(error).code(500);
            }
    
          
        }
    });
    server.route({
        method: 'GET',
        path:'/users/{id}',
        handler: async (request, h) => {
           try{ const user = await User.findById(request.params.id).exec();
            return h.response(user);
           } catch (error){
            return h.response(error).code(500);
            }
    
          
        }
    });



    server.route({
        method: 'POST',
        path:'/users',
        handler: async (request, h) => {
            try{ 
                const user = new User(request.payload);
                
                var result = await user.save();
                return h.response(result);
                } catch (error){
                return h.response(error).code(500);
                }
        }
    });
    server.route({
        method: 'PUT',
        path:'/users/{id}',
        handler: async (request, h) => {
            try{
                var user = await User.findByIdAndUpdate(request.params.id,request.payload,{new:true});
                return h.response( `your database has been submitted Safely:  ${user}`);
            }catch (error){
                return h.response(error).code(500);
            }
          
        }
    });
    server.route({
        method: 'DELETE',
        path:'/users/{id}',
        handler: async (request, h) => {
            try{
                var result = await User.findByIdAndDelete(request.params.id);
                return h.response( {msg: `company deleted with id: ${request.params.id}`});
            }catch (error){
                return h.response(error).code(500);
            }
         
        }
    });
    

    await server.start();
    console.log('Server running on port 3000');
};

init();
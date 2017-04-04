'use strict'

var telegram=require('telegram-node-bot');

class todoController extends telegram.TelegramBaseController {

   addHandler($){
          
          // slice /add and add items in array
         let todo=$.message.text.split(' ').slice(1).join(' '); 

         if(!todo)
          return $.sendMessage('Please add todo item');

             

         $.getUserSession('todos')
         
        .then(todos=>{
        
              if(!Array.isArray(todos)) 
              
               $.setUserSession('todos',[todo]);

              else 
               $.setUserSession('todos',todos.concat([todo]));
            
            
             $.sendMessage('Added')
             console.log(todo);
         });
 
   }

   getHandler($){

    $.getUserSession('todos')
    .then(todos=>{

      $.sendMessage(this._serializeTodos(todos),{parse_mode:'Markdown'});

    });
   

   }

   get routes(){

       return {
           'addCommand':'addHandler',
           'getCommand':'getHandler'
       }
   }

   _serializeTodos(todosList){

      let serialized=`*Your Todos:*\n\n`;

      todosList.forEach((t,i)=>{
      
      serialized +=`*${i}* - ${t}\n`;
     console.log(serialized);
      });
    return serialized;
   }

}

module.exports=todoController;
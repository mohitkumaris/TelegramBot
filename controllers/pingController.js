'use strict'

var telegram=require('telegram-node-bot');

class pingController extends telegram.TelegramBaseController {

   pingHandler($){

       $.sendMessage('Pong')
   }

   get routes(){

       return {
           'pingCommand':'pingHandler'
       }
   }

}

module.exports=pingController;
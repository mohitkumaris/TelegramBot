'use strict'

var telegram=require('telegram-node-bot');

class otherwiseController extends telegram.TelegramBaseController {

handle($){
    $.sendMessage('Sorry i didnt understand');  
}
  

}

module.exports=otherwiseController;
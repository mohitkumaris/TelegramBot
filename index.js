'use strict'

var telegram=require('telegram-node-bot');

const tg=new telegram.Telegram('testtoken',{

workers:1
});

const pingController=require('./controllers/pingController')
, otherwiseController=require('./controllers/otherwiseController');

tg.router.when(new telegram.TextCommand('/ping','pingCommand'),new pingController())
.otherwise(new otherwiseController())
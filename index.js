'use strict'

var telegram=require('telegram-node-bot');

var token=require('./token');

const tg=new telegram.Telegram(token,{

workers:1
});

const pingController=require('./controllers/pingController')
, otherwiseController=require('./controllers/otherwiseController');

tg.router.when(new telegram.TextCommand('/ping','pingCommand'),new pingController())
.otherwise(new otherwiseController())
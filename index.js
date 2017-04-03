'use strict'

var telegram=require('telegram-node-bot');

const tg=new telegram.Telegram('345183813:AAGwofUgYiKn2OqeTtqapgj_D8koa3uztg8',{

workers:1
});

const pingController=require('./controllers/pingController')
, otherwiseController=require('./controllers/otherwiseController');

tg.router.when(new telegram.TextCommand('/ping','pingCommand'),new pingController())
.otherwise(new otherwiseController())
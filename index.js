'use strict'

var telegram=require('telegram-node-bot');

var token=require('./token');

const tg=new telegram.Telegram(token,{

workers:1
});

const pingController=require('./controllers/pingController')
, otherwiseController=require('./controllers/otherwiseController'),
todoController=require('./controllers/todoController');

//new telegram.TextCommand('/ping','pingCommand'),new pingController(),

const todoCtrl=new todoController();

tg.router.when(new telegram.TextCommand('/add','addCommand'),todoCtrl)
.when(new telegram.TextCommand('/get','getCommand'),todoCtrl)
.otherwise(new otherwiseController())
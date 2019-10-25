// Express框架语法
var express = require('express');//引入express框架文件
var path = require('path');//路劲文件
var bodyParser = require('body-parser');

var app = express();//创建 express 框架对象

//配置ejs  可用来显示视图,以及传参 使用 res.render()方法
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({ extended: true }));

// use 使用中间件   在post/get 请求监听,都会执行一次
app.use(function(req,res,next){
	console.log('aaaaa')
	next();
})

// 设置静态目录
app.use(express.static(path.join(__dirname,'public')))


// get请求  
app.get('/',function(req,res){   //主页请求
	res.send('这个是主页')  // 返回字段
})


//表单中的get请求    query()可获取表单提交上来的所有数据集合
app.get('/getform',function(req,res){
	//获取 get请求传过来的表单数据
	console.log(req.query.uname)	
	console.log(req.query.age)

	res.send('ok')
})

//http://127.0.0.1:9999/pp/hhyGFN6654jg
app.get('/pp/:id',function(req,res){
	res.send(req.params.id)  //输出的为  hhyGFN6654jg
})

//post 请求
app.post('/getpostform',function(req,res){
	console.log(req.body)
	res.send('post ok')
})


//post请求接口  并且返回一个json 数据
app.post('/book',function(req,res){
	res.json({
		book:[
			{name:'book1'},
			{name:'book2'},
			{name:'book3'}
		]
	})
})

//下载文件
app.get('/dd',function(req,res){
	res.download(path.join(__dirname,'public','canvas.html'))
})

//读取文件内容
app.get('/cvs',function(req,res){
	res.sendFile(path.join(__dirname,'public','canvas.html'))
})

//ejs  可来显示视图,并且向视图文件中传递参数
app.get('/ejs',function(req,res){
	var book = {
		books:[
			{name:'book1'},
			{name:'book2'},
			{name:'book3'}
		]
	}
	// res.render('index', {name:'young'})
	res.render('index', book)
}）

	
	
	
	

// Express框架语法
var express = require('express');//引入express框架文件
var path = require('path');//路劲文件
var bodyParser = require('body-parser');//post请求处理方法

var app = express();//创建 express 框架对象

//配置ejs  可用来显示视图,以及传参 使用 res.render()方法
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({ extended: true })); //post请求处理

//开启服务  启动端口监听
app.listen(9999, function() {
  console.log('\x1B[32m成功开启服务....  http://127.0.0.1:9999 \x1B[40m');
})


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

Express框架中连接MYSQL 数据库进行增删改查
npm i mysql   //下载mysql包
	
var mysql=require('mysql')//引入mysql

//mysql数据库连接信息
var connetcion=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:"root",
    database:'stu'
})

connetcion.connect()//连接数据库

connetcion.query('这里写SQL语句   ',function(error,results,fields){
    if (error) throw error;
	console.log('The solution is: ', results);
})

connetcion.end() //关闭数据库连接



//multer插件使用-------上传文件
var multer  = require('multer');   //引入插件

var upload = multer({ dest: path.join(__dirname,'public','img') }) //定义单个上传文件的保存地址
--------------------------
var storage = multer.diskStorage({     //修改上传地址以及文件的信息修改
	destination:function(req,file,cb){
		cb(null, path.join(__dirname,'public','img'))
	},
	filename:function(req,file,cb){
		console.log(file.originalname);
		var hz = file.originalname.split('.');
		cb(null, Date.now()+'.'+hz[hz.length-1])
	}
})

var upload = multer({storage:storage});
---------------------------------------------
app.post('/up',upload.single('avatar'),function(req,res){    //添加上传文件的请求
	res.send('ok')
})	


// express-session 插件   ---用来保存数据到服务器
var session = require('express-session');   //引入插件
app.use(session({
	secret: 'yy',   //加密 密钥
	cookie:{
		maxAge: Date.now()+10000000   //保存时间
	}
}))

app.get('/test1',function(req,res){
	req.session.user = 'young' //创建一个session
	res.render('test1')
})
app.get('/test2',function(req,res){
	// req.session.user  ==>单独使用用来获取当前user 的session值
	res.locals.user = req.session.user;
	res.render('test2')
	// res.render('test2',{user:'young'}) ===> res.locals.user = req.session.user;
})

	











	

## odoList案例相关知识点
       1. 拆分组件、实现静态组件，注意:className、style的写法

       2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
          ——某个组件使用：放在自身的state中
          ——某些组件使用：放在他们共同的父组件的state中(官方称此操作为：状态提升)

       3. 关于父子之间通信：
          1. 【父组件】给【子组件】传递数据：通过props传递
          2. 【子组件】给【父组件】传递数据，通过props传递，要求父提前给子传递一个函数

       4. 注意 defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value
          defaultChecked、defaultValue只有第一次才生效

       5. 状态在哪里，操作状态的方法就在那里


##  react ajax
  前置说明
  1. React本身只关注界面，并不包含发送ajax请求的代码
  2. 前端应用需要通过 ajax 请求与后台进行交互（json数据）
  3. react 应用中需要集成第三方 ajax 库（或自己封装）

  常见的 ajax 请求库
  1. jQuery：比较重，如果需要另外引入不建议使用
  2. axios：轻量级，建议使用
     1) 封装 XmlHttpRequest 对象的 ajax
     2) promise 风格
     3) 可以用在浏览器和 node 服务器


## 解决跨域问题之react脚手架代理(proxy)配置方法一
Access-Control-Allow-Origin 跨域问题的本质是因为同源策略的限制
本案例中react项目所处的位置是localhost:3000,
而axios发送请求的位置是localhost:5000,
显然 ajax 引擎是不能允许的这样的事儿发生的，

那么问题来了
倒低是因为跨域，导致该 ajax 请求不能发送，
还是因为跨域，该 ajax 请求能发送，但是数据回不来？
这个问题你得搞明白了，到底是发都不能发，
还是 是能发的，请求已经送给服务器了，但是回来的时候，ajax 引擎不让你的数据回来
答案是 发是能发的，但是数据回不来

那么这跨域问题怎么解决呢？
在react脚手架中，我们通过代理 （proxy）去解决
就本案例来说，目前，客户端所处的端口号是3000，服务器所处的端口号是5000，
当你发送 ajax 请求时，首先会经过 ajax 引擎，ajax 引擎放行发送至 5000 服务器，
但是当响应往回发的时候，该响应直接被 ajax 引擎栏住了，因为跨域了，
那么所谓的代理就此诞生了，就是一个中间人，中间商，
那么重点来了，本案例中，这个中间人呢，他的位置也是开在 3000 端口的，
你可以理解为中间人和客户端是一伙儿的，
该客户端3000端口，跑着一个 react 脚手架，3000端口其实还开着一台非常微小的服务器，
那么这个中间人呢，就相当于这个微小的服务器，
然后呢，你所处的位置是3000，然后给这个中间人发送请求，
然后这个中间人就把你的发送的请求转发给了服务器（处于5000的服务器），
那么为5000的服务器把再把响应返回给这个中间人，
问题又来了，那这个为3000的中间人怎么能收到响应呢？
因为这个中间人，它没有 ajax 引擎，产生跨域本质是 ajax 引擎 把你的响应给拦住了，
恰好这个中间人就没有 ajax引擎，只负责转发，所以不存在跨域问题，同源策略压根不限制他，
这中间人可能就是我们罗翔老师常说的法外狂徒张三吧，
那么中间人接收到来自5000服务器的响应，再把响应传递给真正发送请求的客户端3000，
然后就完事儿！

那怎么去开启这个中间商（代理服务器）呢？
在react中有两种方式
方式一：
   1. 在 package.json中的最后一行加入："proxy": "http://localhost:5000"
      这什么意思呢？这意思就是你所有发送给中间人3000的请求都转发给5000，
      这就是中间人将来要转发的人，好理解吧
   2. 在react中发送请求时，就不要直接给服务器发送啦，直接给端口号为3000的中间商发啊
      即：axios.get('http://localhost:5000/students')改成
          axios.get('http://localhost:3000/students')
   这样就能通过代理解决跨域问题了

   那么问题又接憧而至了，是不是所有的请求中间商都会转发给 5000的服务器呢？
   那么我们来做个试验
   将axios.get('http://localhost:3000/students')改为
     axios.get('http://localhost:3000/index.html')
     再去点击按钮发送请求时，返回的是 这个react脚手架项目下的public下的index.html
     并且服务器cmd中没有显示收到请求
     所以返回的是这个项目npm start 之后脚手架帮你开启的的这台服务器
     所以，如果你请求的东西自己有的话，就不会再转发了
方式一完结！快去试试吧~

方式二：
由于代码繁琐这里不做讲解


## 路由的基本使用
   1. 明确好界面中的导航区、展示区
   2. 导航区的a标签改为Link标签
      <Link to="/xxx">Demo</Link>
   3. 展示区写Route标签进行路由的匹配
      <Route path="/xxx" component={Dmoe}/>
   4. <App/>的最外层包裹了一个<BrowserRouter>或<HashRouter>
  

## 路由组件与一般组件
   1. 写法不同：
      一般组间: <Demo/> 
      路由组件: <Route path="/xxx" component={Dmoe}/> 

   2. 存放位置不同：
      一般组间: 通常放在components文件夹下
      路由组件: 通常放在pages文件夹下

   3. 接收到的props不同：
      一般组件: 写组件标签时传递了什么，就能收到什么
      路由组件: 接收到一个对象，有三个固定的属性 history、location、match
               history:
                        go: ƒ go(n)
                        goBack: ƒ goBack()
                        goForward: ƒ goForward()
                        location: {pathname: "/about", search: "", hash: "", state: undefined, key: "d41oja"}
                        push: ƒ push(path, state)
                        replace: ƒ replace(path, state)
                        [[Prototype]]: Object

               location:
                        hash: ""
                        key: "d41oja"
                        pathname: "/about"
                        search: ""
                        state: undefined
                        [[Prototype]]: Object

               match:
                        isExact: true
                        params: {}
                        path: "/about"
                        url: "/about"
                        [[Prototype]]: Object


## NavLink与封装NavLink
   1. NavLink可以实现路由链接的好亮，通过activeClassName指定样式名
   2. 标签体内容是一个特殊的标签属性 props中的children
   3. 通过this.props.children可以获取便签体内容


## Switch的使用
   1. 通常情况下，path和component是一一对应的关系
   2. Switch可以提高路由匹配效率（单一匹配）


## 解决多级路径刷新页面样式丢失的问题
   1. public/index.html中 引入样式时不写 ./ 写 / (常用)
   2. public/index.html中 引入样式时不写 ./ 写 %PUBLIC_URL% (常用)
   3. 使用HashRouter


## 路由的严格匹配与模糊匹配
   1. 默认使用的是模糊匹配（简单记：【输入的路径】必须要包含【匹配的路径】，且顺序要一致）
   2. 开启严格匹配：<Route exact={true} path="/about" component={About}>
   3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由


## Redirect的使用
   1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
   2. 具体编码：
      <Switch>
         <Route path="/about" component={About} />
         <Route path="/home" component={Home} />
         <Redirect to="/about" />
       </Switch>


## 嵌套路由
   1. 注册子路由时要写父路由的path值
   2. 路由的匹配是按照注册路由的顺序（层级）进行的


## 向路由组件传递参数
   1. params参数
      路由链接（携带参数）：<Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
      注册路由（声明接收）：<Route path="/home/message/detail/:id/:title" component={Detail} />
      接收参数：this.props.match.params
      会拼接在地址栏

   2. search参数
      路由链接(携带参数): <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>
      注册路由(无需声明，正常注册即可): <Route path="/home/message/detail" component={Detail} />
      接收参数：this.props.location.search
      备注：获取到的search是urlencoded编码字符串，需要借助querystring包解析
      会拼接在地址栏

   3. state参数
      路由链接(携带参数): <Link to={{pathname:'/home/message/detail', state:{id:message.id, title:message.title}}}>{message.title}</Link>
      注册路由(无需声明，正常注册即可): <Route pathname="/home/message/detail" component={Detail} />
      接收参数：this.props.location.state
      备注：刷新也可以保留住参数
      不会拼接在地址栏


##  push与replace模式
   路由链接默认开启push模式，操作history对象
   开启replace替换模式：<MyNavLink replace to="/home">Home</MyNavLink>


## 编程式路由导航
   借助路由组件的 this.props.history 对象上的API操作路由的跳转、前进、后退
      -- this.props.history.push()
      -- this.props.history.replace()
      -- this.props.history.goBack()
      -- this.props.history.goForward()
      -- this.props.history.go()


## BrowserRouter与HashRouter的区别
   1. 底层原理不一样：
      BrowserRouter使用的是H5的history API ，不兼容IE9及以下版本
      HashRouter使用的是URL的哈希值 => 没有操作history API，类似于锚点不会发送给服务器
   2. path表现形式不一样
      BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
      HashRouter的路径包含#，例如：localhost:3000/#/demo/test
   3. 刷新后对路由state参数的影响
      (1). BrowserRouter没有任何影响，因为state保存在history对象中
      (2). HashRouter刷新后会导致路由state参数丢失！！！
   4. 备注：HashRouter可以用于解决一些路径错误相关的问题，例如之前讲的，丢失样式问题

   总得来说就是HashRouter不具备history对象，但是兼容性好


按需引入 => package.json => eject =>(用于暴露配置) => npm eject
   
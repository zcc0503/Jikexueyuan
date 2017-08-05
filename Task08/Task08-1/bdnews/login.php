
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable;" />
    <meta charset="utf-8">
    <title>后台登录界面</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/denglu.css">
</head>

<body>
    <!--这是容器-->
    <div class="container">
        <p class="text-center">后台登录管理系统</p>
        <form class="form-inline">
            <div class="form-group div1">
                <label for="user">用户名：</label>
                <input type="text" class="form-control" id="user" placeholder="用户名" autofocus="autofocus">
            </div>
            <br />
            <div class="form-group div2">
                <label for="Password">密&nbsp;&nbsp;&nbsp;码：</label>
                <input type="password" class="form-control" id="Password" placeholder="密码">
            </div>
            <br />
            <a class="btn btn-default btn-info" href="php/manage.php" role="button">登录</a>
        </form>
    </div>
</body>

</html>



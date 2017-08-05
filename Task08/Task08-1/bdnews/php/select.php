<?php
//连接数据库
require_once('config.php');

$result = mysql_query("SELECT * FROM baidu_new");
echo "
<!DOCTYPE html>
<html>
    <style>
        body{margin:0;}
    </style>
<table border='0' width='100%'>
<h1 align='center'>百度新闻查看系统</h1>
<tr>
<th>序号</th>
<th>标题</th>
<th>类型</th>

</tr>";

while($row = mysql_fetch_array($result))
  {
  echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
  echo "<td>" . $row['title'] . "</td>";
    echo "<td>" . $row['type'] . "</td>";
  echo "</tr>";
  }
echo "</table>";
echo "</html>";
mysql_close($con);
?>
  








<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
<?php
   $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = 'andrei12';
   
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
   
   if(! $conn ) {
      die('Could not connect: ' . mysql_error());
   }
   
   $sql = 'SELECT * FROM wishlist';
   mysql_select_db('paw');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not get data: ' . mysql_error());
   }
   
   while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
      echo "<p>EMP ID :{$row[0]}  <br> </p>";
   }
   
   echo "</p><br>Fetched data successfully\n</p>";
   
   mysql_close($conn);
?>
</body>
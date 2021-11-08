<?php
  if( isset( $_POST['ouinon'] ) )
  {
    $ouinon = $_POST['ouinon'];
    $link = mysqli_connect('localhost','root','', 'escapegame');
    $insert = " INSERT INTO user VALUES( '$ouinon' ) ";
    mysqli_query($link, $insert); 
  }
?>
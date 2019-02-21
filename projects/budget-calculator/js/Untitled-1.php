<?php

function whatismyip($randval){
    $IP[0] = 7*(int)substr($randval,0,2);
    $IP[1] = 2*(int)substr($randval,0,3)-11;
    $IP[2] = (int)substr($randval,0,3)+(int)substr($randval,1,2);
    $IP[3] = (int)substr($randval,5,2)-20;
    return $IP[0].'.'.$IP[1].'.'.$IP[2].'.'.$IP[3];
}

#If you run this php function like following, you will get the host information for the database

$ip_address = whatismyip('1178568022');

#Use following user name and database name information
#DB Name: adrsin_ik_db
#DB Username: adrsin_ik_user
?>

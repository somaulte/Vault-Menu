<?php include("../../html/inc/core.php"); header('Content-type: application/json; charset=utf8'); header("Access-Control-Allow-Origin: *");
$list=get_url("http://158.69.166.144:8080/list"); if($list == NULL) { $list=get_url("http://eldewrito.red-m.net/list"); }
$servs = json_decode($list, 1);
foreach ($servs['result']['servers'] as $srv) {
    $fetch = get_url("http://".$srv);
    $ip=str_replace(':11775',':11774',$srv);   
    //$results['port'] = $ip;
    $results[] = json_decode($fetch, 1);
    //var_dump($results);
    $rslt = $results;
}
/*foreach($results as $rslt) {
	if ($rslt['players'] !== FALSE) {
	    foreach($rslt['players'] as $player) {
	        $player['uid'] = bswap($player['uid']);
	    } 
	}
}*/
$enc = json_encode($rslt, JSON_PRETTY_PRINT);
print_r($enc); ?>
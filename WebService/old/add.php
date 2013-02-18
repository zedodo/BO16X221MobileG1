<?php

	if (isset($_GET['gid']) && isset($_GET['name']) && isset($_GET['score']))
	{
		$dsn = 'mysql:dbname=1219045_db;host=fdb4.awardspace.com';
		$user = '1219045_db';
		$password = '1219045_db';
		
		try {
			$conn = new PDO($dsn, $user, $password);
			
			$query1 = 'select * from score where ip = ' . $conn->quote($_SERVER['REMOTE_ADDR']). ' and date > ' . (time() - 1) . ';';
			$res = $conn->query($query1)->fetchAll(PDO::FETCH_ASSOC);
			$count = count($res);
			
			//if ($count == 0)
			//{
				$query2 = 'insert into score (name, score, gameId, ip, date) values ( ' . $conn->quote($_GET['name']) . ',  ' . $conn->quote($_GET['score']) . ',  ' . $conn->quote($_GET['gid']) . ',  ' . $conn->quote($_SERVER['REMOTE_ADDR']). ', ' . time() . ');';
				$conn->exec($query2);
			//}
			
			$query3 = 'select * from score where gameId = ' . $conn->quote($_GET['gid']) . ' order by score desc;';
			
			$res = $conn->query($query3)->fetchAll(PDO::FETCH_ASSOC);
			
			$id = $conn->lastInsertId();
			
			$i = 1;
			foreach ($res as $row) {
			
				if ($row['id'] == $id) {
				
					echo $i;
					break;
				}
				
				$i++;
			}
			
		} catch (PDOException $e) {
			var_dump($e);
		}
	}
	
?>
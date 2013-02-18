<?php

	if (isset($_GET['gid']) && isset($_GET['output']))
	{
		$dsn = 'mysql:dbname=1219045_db;host=fdb4.awardspace.com';
		$user = '1219045_db';
		$password = '1219045_db';
		
		try {
			$conn = new PDO($dsn, $user, $password);
			$query = 'select * from score where gameId = ' . $conn->quote($_GET['gid']) . ' order by ';
			
			if (isset($_GET['sort']))
				$query .= $_GET['sort'];
			else
				$query .= 'date';
			
			$query .= ' ';
			
			if (isset($_GET['asc']))
				$query .= $_GET['asc'];
			else
				$query .= 'desc';

			$query .= ' limit ';
				
			if (isset($_GET['limit']))
				$query .= $_GET['limit'];
			else
				$query .= '10';
			
			$res = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);
			$count = count($res);
			
			if ($_GET['output'] == 'json')
			{
				if ($count > 0)
				{
					echo '[ ';
				
					for  ($i = 0; $i < $count; $i++) {
					
						echo '{"pseudo":"' . $res[$i]['name'] . '", "score":' . $res[$i]['score'] . '}';
						
						if ($i < ($count-1))
							echo ', ';
					}
					
					echo ' ]';
				}
			}
		} catch (PDOException $e) {
		}
	}
	
?>
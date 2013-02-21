<?php

    //include '';

    function GetParamValue($paramName, $params)
    {
        $index = array_search($paramName, $params) + 1;

        if (count($params) > $index)
            return $params[$index];
        else
            return null;
    }

    if (isset($_GET['type']) && isset($_GET['params']))
	{
        $type = $_GET['type'];
        $params = explode('*', $_GET['params']);
        $count = count($params);
        $extraction = array();

        for ($i = 0; $i + 1 < $count; $i += 2)
        {
            $extraction[$params[$i]] = $params[$i+1];
        }

        $dsn = 'mysql:dbname=1293383_mobile;host=fdb5.awardspace.com';
        $user = '1293383_mobile';
        $password = 'bo16x221mobileg1@gmail.com';

        try {

            $conn = new PDO($dsn, $user, $password);

            //ETAPE SUIVANTE
            if ($type == 'etapeSuivante' && array_key_exists('groupe', $extraction))
            {
                /*
                 * 0 = pas fait
                 * 1 = réussie
                 * 2 = échouée
                 */
                $query = 'select e.* from Etape e left join Ordre o on o.Etape_idEtape = e.idEtape where o.Groupe_idGroupe = ' . $conn->quote($extraction['groupe']) . ' and o.etatEtapeOrdre = \'0\' order by o.positionEtapeOrdre asc';

                $res = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);

                if (count($res) > 0)
                    $res = $res[0];

                if ($res != null)
                    echo json_encode(array_map('utf8_encode', $res));

                /*$test = utf8_encode('coucou');

                echo json_encode($test);*/
            }
            //LISTE GROUPES
            else if ($type == 'listeGroupes' && array_key_exists('enquete', $extraction))
            {
                $query = 'select g.* from Groupe g where g.Enquete_idEnquete = ' . $conn->quote($extraction['enquete']);

                $res = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);
                $parsed = array();

                foreach ($res as $group)
                {
                    $parsed[] = array_map('utf8_encode', $group);
                }

                echo json_encode($parsed);
            }
            //MAJ GEOLOC
            else if ($type == 'majGeoloc' && array_key_exists('groupe', $extraction) && array_key_exists('longitude', $extraction) && array_key_exists('latitude', $extraction))
            {
                $query = 'update Groupe set latitudeGroupe = ' . $conn->quote($extraction['latitude']) . ', longitudeGroupe = ' . $conn->quote($extraction['longitude']) . ' where idGroupe = ' . $conn->quote($extraction['groupe']);

                $res = $conn->exec($query);
            }
            //PHPINFO
            else if ($type == 'phpinfo')
            {
                phpinfo();
            }
            else if ($type == 'curlTest')
            {
                echo file_get_contents("http://www.google.com/");


                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, "http://www.google.com/");
                curl_setopt($ch, CURLOPT_HEADER, 0);
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTP);
                curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
                var_dump(curl_getinfo($ch));
                echo '<br />'.curl_exec($ch).'<br />';
                echo curl_error($ch).'<br />';;
                curl_close($ch);
            }
            //AJOUT ETAPE
            else if ($type == 'ajoutEtape' && array_key_exists('nom', $extraction)  && array_key_exists('descriptif', $extraction) && array_key_exists('instruction', $extraction) && array_key_exists('scenario', $extraction))
            {
                $query = 'insert into Etape (nomEtape, descriptifEtape, instructionEtape, Scenario_idScenario) values (' . $conn->quote($extraction['nom']) . ', ' . $conn->quote($extraction['descriptif']) . ', ' . $conn->quote($extraction['instruction']) . ', ' . $conn->quote($extraction['scenario']) . ');';

                $res = $conn->exec($query);
            }
            //REGISTRATION ID GCM
            else if ($type == 'gcmRegistration' && array_key_exists('groupe', $extraction) && array_key_exists('id', $extraction))
            {
                $query = 'update Groupe set registrationIdGroupe = ' . $conn->quote($extraction['id']) . ' where idGroupe = ' . $conn->quote($extraction['groupe']);

                $res = $conn->exec($query);
            }
            //ENVOI NOTIFICATION GCM
            else if ($type == 'gcmNotification' && array_key_exists('groupe', $extraction) && array_key_exists('notification', $extraction))
            {
                $query = 'select g.* from Groupe g where g.idGroupe = '. $conn->quote($extraction['groupe']);

                $res = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);

                if (count($res) > 0)
                {
                    $registrationId = $res[0]['registrationIdGroupe'];

                    echo $registrationId;

                    if (isset($registrationId) && $registrationId != null && $registrationId != '')
                    {
                        $apiKey = "AIzaSyDSvom9U4oqQw9HBw4bW1SNpXU5MozNuZQ";
                        $message = $extraction['notification'];
                        $url = 'https://android.googleapis.com/gcm/send';

                        // Replace with real client registration IDs
                        $registrationIDs = array($registrationId);

                        $fields = array(
                            'registration_ids' => $registrationIDs,
                            'data' => array( "message" => $message ),
                        );

                        $headers = array(
                            'Authorization: key=' . $apiKey,
                            'Content-Type: application/json'
                        );

                        $ch = curl_init();

                        curl_setopt($ch, CURLOPT_URL, $url);
                        curl_setopt($ch, CURLOPT_POST, true);
                        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

                        $result = curl_exec($ch);

                        echo curl_error($ch);

                        curl_close($ch);
                        //echo $result;
                        //print_r($result);
                        var_dump($result);
                    }
                }
            }

        } catch (PDOException $e) {
        }
    }
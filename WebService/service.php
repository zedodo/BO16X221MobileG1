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
        $params = explode('-', $_GET['params']);
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
                 * 1 = en cours
                 * 2 = réussie
                 * 3 = échouée
                 */
                $query = 'select e.* from Etape e left join Ordre o on o.Etape_idEtape = e.idEtape where o.Groupe_idGroupe = ' . $conn->quote($extraction['groupe']) . ' and o.etatEtapeOrdre = \'0\' order by o.positionEtapeOrdre asc';

                $res = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);

                if (count($res) > 0)
                    $res = $res[0];

                if ($res != null)
                    echo json_encode(array_map('utf8_encode', $res));
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

        } catch (PDOException $e) {
        }
    }
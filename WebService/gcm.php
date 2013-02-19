<?php

    if (isset($_GET['type']))
	{
        $type = $_GET['type'];

        if ($type == 'registration')
        {

        }

        $apiKey = "AIzaSyDSvom9U4oqQw9HBw4bW1SNpXU5MozNuZQ";
        $message = "Push notification test";
        $url = 'https://android.googleapis.com/gcm/send';

        // Replace with real client registration IDs
        $registrationIDs = array("APA91bFt3slFE96jaB5qnoD5gR0TCwsxe5StEGyrECR0umYviG0cfG1JNnFxYqP1ERr1RoWc38rsuWjRUx5SZ7cgUNG9-mQ4mSsY8_XQLquft5DLnqWcLCEB2wtQpfA6EAp5OQmOWzpUZU5bohfG4sfLWNUco7XxXg");

        $fields = array(
            'registration_ids' => $registrationIDs,
            'data' => array( "message" => $message ),
        );

        $headers = array(
            'Authorization: key=' . $apiKey,
            'Content-Type: application/json'
        );

        $ch = curl_init();

        curl_setopt( $ch, CURLOPT_URL, $url );
        curl_setopt( $ch, CURLOPT_POST, true );
        curl_setopt( $ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode( $fields ));

        $result = curl_exec($ch);

        curl_close($ch);
        //echo $result;
        //print_r($result);
        var_dump($result);
    }
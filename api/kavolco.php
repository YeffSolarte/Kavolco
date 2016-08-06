<?php									
	// Cargamos Vendor
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

	require __DIR__ . '/vendor/autoload.php';

	$method = $_SERVER['REQUEST_METHOD'];
	$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));	

	switch ($method) {     
	    case 'POST':       
	        header('Content-Type: application/json');
	        $data = json_decode(utf8_encode(file_get_contents("php://input")), true);
	        print_r(json_encode(mandar_email($data)));
	        break;
	}


	function mandar_email($dataSend)
	{
	    $email_to = "produccion12@softpymes.com.co";
		$email_subject = "Contacto desde el sitio web"; 
	 
	    $email_message = "Detalles del formulario de contacto:\n\n";
		$email_message .= "Nombre: " . $dataSend['name'] . "\n";
		$email_message .= "E-mail: " . $dataSend['email'] . "\n";
		$email_message .= "Teléfono: " . $dataSend['cellphone'] . "\n";
		$email_message .= "Mensaje: " . $dataSend['message'] . "\n\n";

		//$sendgrid = new SendGrid("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");

		$from = new SendGrid\Email($dataSend['name'], $dataSend['email']);
		$to = new SendGrid\Email(null, $email_to);
		$content = new SendGrid\Content("text/plain", $email_message);
		$mail = new SendGrid\Mail($from, $email_subject, $to, $content);

		$apiKey = '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';
		$sg = new \SendGrid($apiKey);

		$response = $sg->client->mail()->send()->post($mail);
		return $response;
		//echo $response->headers();
		//echo $response->body();

	}

?>
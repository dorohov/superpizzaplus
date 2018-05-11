<?

require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');
CModule::IncludeModule('main');
CModule::IncludeModule('iblock');

if(count($_POST['f']) && isset($_SESSION['tmp']['cart']['uid']) && $_SESSION['tmp']['cart']['uid'] != '') {
	
	$to_save = $_POST['f'];
	
	$cart_uid = date('Y.m.d') . '.' . $_SESSION['tmp']['cart']['uid'];
	
	$cart_uid_arr = explode('.', $cart_uid);
	
	$to_save['uid'] = $cart_uid;
	
	$to_save['cart'] = $_SESSION['tmp']['cart'];
	
	$UCS_CFG = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/azbn/ucs/config.json'), true);
	
	$req = new \Azbn7\UCS();
	
	$req->init($UCS_CFG);
	
	$to_save['order'] = $req->buildOrderEntity($to_save);
	
	$url_path = 'SaveDeliveryOrder';
	
	/*
	if($USER->isAdmin()) {
		
		$to_save['response'] = $req->rjson($url_path, $to_save['order']);
		
	} else {
		
		$to_save['response'] = $req->sendEmails($to_save);
		
	}
	*/
	$to_save['response'] = $req->rjson($url_path, $to_save['order']);
	
	if(is_array($to_save['response']['response']['error']) && count($to_save['response']['response']['error'])) {
		
		$to_save['email'] = $req->sendEmails($to_save);
		
	}
	
	$cart_uid_moment = $_SESSION['tmp']['cart']['uid'] . '_' . date('U');
	
	$req->save2file($url_path . '/' . $cart_uid_moment);
	
	@mkdir($_SERVER['DOCUMENT_ROOT'] . '/local/data/cart/orders/' . $cart_uid_arr[0] . '/' . $cart_uid_arr[1] . '/' . $cart_uid_arr[2], 0777, true);
	
	$fp = fopen($_SERVER['DOCUMENT_ROOT'] . '/local/data/cart/orders/' . $cart_uid_arr[0] . '/' . $cart_uid_arr[1] . '/' . $cart_uid_arr[2] . '/' . $cart_uid_moment . '.json', 'w+');
	fwrite($fp, azbn_getJSON($to_save));
	fclose($fp);
	
	$is_error = 0;
	/*
	if(isset($to_save['response']['response'])) {
		if(isset($to_save['response']['response']['status'])) {
			if($to_save['response']['response']['status'] == 'Err') {
				$is_error = 1;
			}
		}
	}
	*/
	if($is_error) {
		
	} else {
		$_SESSION['tmp']['cart'] = array();
	}
	
	Header('Location: /cart/order/?is_error=' . $is_error . '&cart_uid=' . $cart_uid);
	die();
	
} else {
	
	Header('Location: /cart/delivery/');
	die();
	
}
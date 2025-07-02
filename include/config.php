<?php

$actual_link = 'http' . ( ( $_SERVER[ 'SERVER_PORT' ] == 443 ) ? 's' : '' ) . '://' . $_SERVER[ 'HTTP_HOST' ] .'/';

if ( isset( $_SERVER[ 'HTTPS' ] ) && $_SERVER[ 'HTTPS' ] === 'on' ) {
    $url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

} else {
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

}

$url_components = parse_url( $url );

define('ADMIN_EMAIL', 'info@dummy');
define('PHONE', '(323) 648-8401');
define('PHONE_HREF', 'tel:3236488401');
define('PHONE_TWO', '(323) 614-0787');
define('PHONE_HREF_TWO', 'tel:3236140787');
define('EMAIL', 'info@dummy');
define('EMAIL_HREF', 'mailto:info@dummy');
define('CONTACT_EMAIL', 'info@dummy');
define('CONTACT_EMAIL_HREF', 'mailto:info@dummy');
define('ADDRESS', '224 W 35th St Ste 500 PMB 33 New York, NY 10001');
define('WEBSITE_NAME', 'website name');
define('WEBSITE_LOGO', 'https://dummy/assets/img/logo.png');

  ///------ Get Client IP & Address --------
$user_ip = $_SERVER['REMOTE_ADDR'];

// Optionally, check for proxies (if necessary)
if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
}


$country = '';
$city = '';
$state = '';
$address = $city . ', ' . $country;
/// ------ End Code ----------------------------
?>
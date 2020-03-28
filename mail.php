<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['request_name'];
$phone = $_POST['request_phone'];
$callback_name = $_POST['callback_name'];
$callback_phone = $_POST['callback_phone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'php.mailer.bot'; // Логин на почте
    $mail->Password   = 'phpmailer001'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('php.mailer.bot@gmail.com', 'php mailer'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('hi_tai@mail.ru');  
    //$mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен


        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
if(isset($phone)) {
    $mail->Subject = 'Сертификат (заявка)';
    $mail->Body    = "<b>Имя:</b> $name <br>
    <b>Телефон:</b> $phone<br>";

} 
else {
    $mail->Subject = 'Заявка на обратный звонок';
    $mail->Body    = "<b>Имя:</b> $callback_name <br>
    <b>Телефон:</b> $callback_phone<br>";
}

        


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

?>
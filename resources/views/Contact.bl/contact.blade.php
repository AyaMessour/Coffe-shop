<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<h2>Nouveau message de contact</h2>

<p><strong>Nom :</strong> {{ $data['name'] }}</p>
<p><strong>Email :</strong> {{ $data['email'] }}</p>
<p><strong>Message :</strong></p>
<p>{{ $data['message'] }}</p>

</body>
</html>
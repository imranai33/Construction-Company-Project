<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>New Contact Message</h2>

<p><b>Name:</b> {{ $data['name'] }}</p>
<p><b>Email:</b> {{ $data['email'] }}</p>
<p><b>Phone:</b> {{ $data['phone'] ?? 'N/A' }}</p>
<p><b>Message:</b></p>
<p>{{ $data['message'] }}</p>
</body>
</html>

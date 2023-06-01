<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="theme-rosePineDawn">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @viteReactRefresh
        @vite('resources/css/app.css')
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>

    <body class="text-text">
        @inertia
    </body>

</html>

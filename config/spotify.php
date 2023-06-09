<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication
    |--------------------------------------------------------------------------
    |
    | The Client ID and Client Secret of your Spotify App.
    |
    */

    'auth' => [
        'client_id' => env('SPOTIFY_CLIENT_ID'),
        'client_secret' => env('SPOTIFY_CLIENT_SECRET'),
        'refresh_token' => env('SPOTIFY_REFRESH_TOKEN'),
        'scope' => env('SPOTIFY_SCOPE', 'user-read-currently-playing'),
    ],

    'endpoint' => [
        'authentication' => env('SPOTIFY_AUTHENTICATION_URL', 'https://accounts.spotify.com/api/token'),
        'api' => env('SPOTIFY_API_URL', 'https://api.spotify.com/v1'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Default Config
    |--------------------------------------------------------------------------
    |
    | You may define a default country, locale and market that will be used
    | for your Spotify API requests.
    |
    */

    'default_config' => [
        'country' => null,
        'locale' => null,
        'market' => null,
    ],

];

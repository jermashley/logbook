<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SpotifyService
{
    private $clientId;

    private $clientSecret;

    private $authenticationUrl;

    private $apiUrl;

    private $authToken;

    private $refreshToken;

    private $scope;

    private $tokenType;

    private $accessToken;

    public function __construct()
    {
        $this->clientId = config('spotify.auth.client_id');
        $this->clientSecret = config('spotify.auth.client_secret');

        $this->authenticationUrl = config('spotify.endpoint.authentication');
        $this->apiUrl = config('spotify.endpoint.api');

        $this->authToken = base64_encode($this->clientId.':'.$this->clientSecret);
        $this->refreshToken = config('spotify.auth.refresh_token');
        $this->scope = config('spotify.auth.scope');
    }

    public function authorize()
    {
        $response = Http::withHeaders([
            'Authorization' => 'Basic '.$this->authToken,
            'Content-Type' => 'application/x-www-form-urlencoded',
        ])->asForm()->post($this->authenticationUrl, [
            'grant_type' => 'refresh_token',
            'refresh_token' => $this->refreshToken,
            'scope' => $this->scope,
        ]);

        $this->tokenType = $response->json()['token_type'];
        $this->accessToken = $response->json()['access_token'];

        return $response->json();
    }

    public function me()
    {
        $this->authorize();

        $response = Http::withHeaders([
            'Authorization' => "{$this->tokenType} {$this->accessToken}",
        ])->get($this->apiUrl.'/me');

        return $response->json();
    }

    public function currentTrack()
    {
        $this->authorize();

        $response = Http::withHeaders([
            'Authorization' => "{$this->tokenType} {$this->accessToken}",
        ])->get($this->apiUrl.'/me/player');

        return $response->json();
    }

    public function recentlyPlayed()
    {
        $this->authorize();

        $response = Http::withHeaders([
            'Authorization' => "{$this->tokenType} {$this->accessToken}",
        ])->get($this->apiUrl.'/me/player/recently-played');

        return $response->json();
    }

    public function top($type = 'tracks')
    {
        $this->authorize();

        $response = Http::withHeaders([
            'Authorization' => "{$this->tokenType} {$this->accessToken}",
        ])->get($this->apiUrl.'/me/top/{$type}');

        return $response->json();
    }
}

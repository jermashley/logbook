<?php

namespace App\Http\Controllers;

use App\Services\SpotifyService;

class SpotifyController extends Controller
{
    protected $spotify;

    public function __construct(SpotifyService $spotify)
    {
        $this->spotify = $spotify;
    }

    public function me()
    {
        return $this->spotify->me();
    }

    public function nowPlaying()
    {
        return $this->spotify->currentTrack();
    }

    public function recentlyPlayed()
    {
        return $this->spotify->recentlyPlayed();
    }

    public function top($type)
    {
        return $this->spotify->top($type);
    }
}

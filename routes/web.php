<?php

use App\Http\Controllers\FotoController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\SpotifyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Index');
});

Route::get('/log', [LogController::class, 'index'])->name('log.index');
Route::get('/log/{slug}', [LogController::class, 'show'])->name('log.show');

Route::get('/foto', [FotoController::class, 'index'])->name('foto.index');
Route::get('/foto/{id}', [FotoController::class, 'show'])->name('foto.show');

Route::get('/projects', [ProjectsController::class, 'index'])->name('projects.index');
Route::get('/projects/{slug}', [ProjectsController::class, 'show'])->name('projects.show');

Route::get('/resume', function () {
    return Inertia::render('Resume/Index');
});

Route::get('/spotify/me', [SpotifyController::class, 'me'])->name('spotify.me');
Route::get('/spotify/now-playing', [SpotifyController::class, 'nowPlaying'])->name('spotify.nowPlaying');
Route::get('/spotify/recently-played', [SpotifyController::class, 'recentlyPlayed'])->name('spotify.recentlyPlayed');
Route::get('/spotify/top/{type}', [SpotifyController::class, 'top'])->name('spotify.top');

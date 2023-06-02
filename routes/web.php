<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Statamic\Facades\Entry;

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

Route::get('/log', function () {
    $entries = Entry::query()
        ->where('collection', 'log')
        ->orderBy('date', 'desc')
        ->get();

    return Inertia::render('Log/Index', [
        'entries' => $entries,
    ]);
});

Route::get('/log/{slug}', function ($slug) {
    $entry = Entry::query()
        ->where('collection', 'log')
        ->where('slug', $slug)
        ->first();

    return Inertia::render('Log/Entry', [
        'entry' => $entry,
    ]);
});

Route::get('/foto', function () {
    return Inertia::render('Foto/Index');
});

Route::get('/work', function () {
    return Inertia::render('Work/Index');
});

Route::get('/resume', function () {
    return Inertia::render('Resume/Index');
});

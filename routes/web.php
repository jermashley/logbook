<?php

use App\Http\Controllers\FotoController;
use App\Http\Controllers\LogController;
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

Route::get('/work', function () {
    return Inertia::render('Work/Index');
});

Route::get('/resume', function () {
    return Inertia::render('Resume/Index');
});

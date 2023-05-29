<?php

use App\Http\Controllers\CaddyController;
use Illuminate\Support\Facades\Route;

Route::get('/caddy-check', [CaddyController::class, 'check']);

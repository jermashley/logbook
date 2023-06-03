<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;

class LogController extends Controller
{
    public function index(): \Inertia\Response
    {
        $entries = Entry::query()
            ->where('collection', 'log')
            ->orderBy('date', 'desc')
            ->get();

        return Inertia::render('Log/Index', [
            'entries' => $entries,
        ]);
    }

    public function show(string $slug): \Inertia\Response
    {
        $entry = Entry::query()
            ->where('collection', 'log')
            ->where('slug', $slug)
            ->first();

        return Inertia::render('Log/Entry', [
            'entry' => $entry,
        ]);
    }
}

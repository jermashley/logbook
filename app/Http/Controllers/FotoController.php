<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;

class FotoController extends Controller
{
    public function index(): \Inertia\Response
    {
        $entries = Entry::query()
            ->where('collection', 'foto')
            ->orderBy('date', 'desc')
            ->get();

        return Inertia::render('Foto/Index', [
            'entries' => $entries,
        ]);
    }

    public function show(string $id): \Inertia\Response
    {
        $entry = Entry::query()
            ->where('collection', 'foto')
            ->where('id', $id)
            ->first();

        return Inertia::render('Foto/Entry', [
            'entry' => $entry,
        ]);
    }
}

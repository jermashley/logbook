<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;

class ProjectsController extends Controller
{
    public function index(): \Inertia\Response
    {
        $projects = Entry::query()
            ->where('collection', 'projects')
            ->get();

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
        ]);
    }

    public function show(string $slug): \Inertia\Response
    {
        $project = Entry::query()
            ->where('collection', 'projects')
            ->where('slug', $slug)
            ->first();

        return Inertia::render('Projects/Entry', [
            'project' => $project,
        ]);
    }
}

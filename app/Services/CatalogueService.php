<?php

namespace App\Services;

use App\Models\Course;
use App\Models\LiveLearning;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;

use Log;

class CatalogueService
{
    public function getAll(): Collection
    {
        try {
            $json = Storage::get('catalogue.json');
            $items = json_decode($json, true)['data']['items'] ?? [];

            return collect($items)->map(function ($item) {
                return match ($item['contenttype']) {
                    'Course' => (new Course($item))->toArray(),
                    'Live Learning' => (new LiveLearning($item))->toArray(),
                    default => null
                };
            })->filter()->values();
        } catch (\Exception $e) {
            Log::error('Failed to load or parse catalogue.json', [
                'message' => $e->getMessage()
            ]);

            return collect();
        }
    }
}
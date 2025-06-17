<?php

namespace App\Services;

use App\Models\Course;
use App\Models\LiveLearning;
use App\Models\Video;
use App\Models\Resource;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

use Log;

class CatalogueService
{
    protected function mapCatalogueItem(array $item): ?array
    {
        if (!isset($item['contenttype']) || !is_array($item)) {
            return null;
        }

        return match ($item['contenttype'] ?? null) {
            'Course' => (new Course($item))->toArray(),
            'Live Learning' => (new LiveLearning($item))->toArray(),
            'Resource' => (new Resource($item))->toArray(),
            'Video' => (new Video($item))->toArray(),
            default => function () use ($item) {
                    Log::warning('Unknown content type: ' . json_encode($item));
                    return null;
                },
        };
    }

    public function getAll(): Collection
    {

        try {
            $apiKey = config('services.acorn.api_key');
            $baseUrl = config('services.acorn.base_url');
            $tenantId = config('services.acorn.tenant_id');

            $url = "{$baseUrl}/local/acorn_coursemanagement/index.php/api/1/external_catalogue/{$tenantId}?perPage=16";

            $response = Http::retry(2, 100)->withToken($apiKey)->get($url);

            if (!$response->successful()) {
                throw $response;
            }

            $items = data_get($response->json(), 'data.items', []);

            return collect($items)
                    ->map(fn($item) => $this->mapCatalogueItem($item))
                    ->filter()
                    ->values();

        } catch (\Exception $e) {
            throw $e;
        }
    }
}
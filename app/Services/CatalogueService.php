<?php

namespace App\Services;
use Illuminate\Support\Facades\Storage;

class CatalogueService
{
    public function getAll(){
        $json = Storage::get('catalogue.json');
        $items = json_decode($json, true)['data']['items'] ?? [];

        return $items;
    }
}
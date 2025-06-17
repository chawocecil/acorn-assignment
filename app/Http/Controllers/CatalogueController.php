<?php

namespace App\Http\Controllers;

use App\Services\CatalogueService;
use Log;

class CatalogueController extends Controller
{
    public function __construct(protected CatalogueService $catalogueService)
    {
    }
    public function index()
    {
        try {
            $content = $this->catalogueService->getAll();
            return response()->json($content);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve catalogues', [
                'message' => $e->getMessage(),
                'exception' => $e
            ]);
            return response()->json(['error' => 'Failed to retrieve catalogues'], 500);
        }
    }
}
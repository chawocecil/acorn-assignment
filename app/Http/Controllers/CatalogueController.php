<?php

namespace App\Http\Controllers;

use App\Services\CatalogueService;

class CatalogueController extends Controller{
    public function __construct(protected CatalogueService $catalogueService){}
    public function index(){
        $content = $this->catalogueService->getAll();
        return response()->json($content);
    }
}
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\CatalogueController;

Route::get('/catalogues', [CatalogueController::class, 'index']);

Route::get('/api-integration',[SampleController::class,'index']);

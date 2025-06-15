<?php

namespace App\Http\Controllers;

use App\Services\ExternalApiClient;

class SampleController extends Controller{
    public function __construct(protected ExternalApiClient $externalApiClient){}
    public function index(){
        $content = $this->externalApiClient->getUserDetails();
        return response()->json($content);
    }
}
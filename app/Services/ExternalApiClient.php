<?php

namespace App\Services;

use App\Models\AuthToken;
use Illuminate\Support\Facades\Http;

class ExternalApiClient
{
    protected string $baseUrl = 'https://dummyjson.com';
    protected string $username = 'emilys';
    protected string $password = 'emilyspass';

    public string $token = '';

    protected function getAccessToken(): string
    {
        if ($this->token != '') {
            return $this->token;
        }
        return $this->refreshAccessToken();
    }

    protected function refreshAccessToken(): string
    {
        $response = Http::post('https://dummyjson.com/auth/login', [
            'username' => 'emilys',
            'password' => 'emilyspass',
            'expiresInMins' => 30,
        ]);

        $token = AuthToken::fromApiResponse($response->json());
        $this->token = $token->accessToken;

        return $this->token;
    }

    public function getUserDetails(): array
    {
        $token = $this->getAccessToken();
        $response = Http::withHeader('Authorization', "Bearer {$token}")->get('https://dummyjson.com/auth/me');
        $details = $response->json();
        return $details;

    }
}
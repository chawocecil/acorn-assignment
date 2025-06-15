<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuthToken extends Model
{
    protected $fillable = [
        'accessToken',
        'refreshToken',
    ];



    protected $attributes = [
        'accessToken' => null,
        'refreshToken' => null,
    ];

    public static function fromApiResponse(array $data): self
    {
        $model = new self([
            'accessToken' => $data['accessToken'],
            'refreshToken' => $data['refreshToken'],
        ]);


        return $model;
    }
}
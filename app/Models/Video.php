<?php

namespace App\Models;

class Video extends Content
{

    public function toArray(): array
    {
        return $this->baseAttributes();
    }

    protected function getBgColor(): string
    {
        return 'secondary.dark';
    }
}
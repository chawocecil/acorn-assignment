<?php

namespace App\Models;

class Resource extends Content
{

    public function toArray(): array
    {
        return $this->baseAttributes();
    }

    protected function getBgColor(): string
    {
        return 'primary.dark';
    }
}
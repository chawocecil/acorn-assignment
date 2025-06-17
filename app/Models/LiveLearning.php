<?php

namespace App\Models;

class LiveLearning extends Content
{
    public function toArray(): array
    {
        return $this->baseAttributes();
    }

    protected function getBgColor(): string
    {
        return 'primary.light';
    }
}

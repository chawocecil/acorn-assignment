<?php

namespace App\Models;

class Course extends Content
{
    public string $duration = "";

    public function __construct(array $data)
    {
        parent::__construct($data);
        $this->duration = $data["duration"] ?? '';
    }

    public function toArray(): array
    {
        return array_merge($this->baseAttributes(), [
            'duration' => $this->duration,
        ]);
    }

    protected function getBgColor(): string
    {
        return 'secondary.light';
    }
}
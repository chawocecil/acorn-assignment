<?php

namespace App\Models;

class Course extends Content
{
    public string $duration = "";

    public function __construct(array $data)
    {
        parent::__construct($data);
        $this->duration = $data["duration"];
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->fullname,
            'summary' => $this->summary,
            'image' => $this->image,
            'type' => $this->type,
            'status' => $this->status,
            'duration' => $this->duration,
        ];
    }
}
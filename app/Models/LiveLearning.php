<?php

namespace App\Models;

class LiveLearning extends Content
{
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->fullname,
            'summary' => $this->summary,
            'image' => $this->image,
            'type' => $this->type,
            'status' => $this->status,
            'recommenedLevels' => $this->recommenedLevels,
        ];
    }
}

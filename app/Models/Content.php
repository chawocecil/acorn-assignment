<?php

namespace App\Models;

use Illuminate\Support\Arr;

abstract class Content
{
    protected string $id;
    protected string $fullname;
    protected string $summary;
    protected string $image;
    protected string $type;
    protected int $cost;
    protected array $tags = [];
    protected string $category;
    protected bool $isActive;


    public function __construct(array $data)
    {

        $this->id = (string) Arr::get($data, 'contentid');
        $this->fullname = Arr::get($data, 'fullname');
        $this->summary = Arr::get($data, 'summary');
        $this->image = Arr::get($data, 'imageurl');
        $this->type = Arr::get($data, 'contenttype');
        $this->cost = (int) Arr::get($data, 'cost');
        $this->completionStatus = Arr::get($data, 'completionstatus');
        $this->category = Arr::get($data, 'category.name');
        $this->isActive = Arr::get($data, 'contentstatus') === "Active";

        $tags = Arr::get($data, 'tags', []);
        $tagNames = array_column($tags, 'name');
        $this->tags = array_merge($this->tags, $tagNames);
    }

    protected function baseAttributes(): array
    {
        return [
            'id' => $this->id,
            'cost' => $this->cost,
            'title' => $this->fullname,
            'summary' => $this->summary,
            'image' => $this->image,
            'type' => $this->type,
            'bgColor' => $this->getBgColor(),
            'category' => $this->category,
            'tags' => $this->tags,
            'isActive' => $this->isActive,
        ];
    }

    abstract public function toArray(): array;

    abstract protected function getBgColor(): string;
}
<?php

namespace App\Models;

use Illuminate\Support\Arr;

abstract class Content
{
    public string $id;
    public string $fullname;
    public string $summary;
    public string $image;
    public string $type;
    public array $status;
    public array $recommenedLevels = [];

    protected array $statusMap = [
        'Not Enrolled' => [
            'label' => 'Not Enrolled',
            'color' => 'warning',
        ],
        'Not Started' => [
            'label' => 'Enrolled',
            'color' => 'info',
        ],
        'Started' => [
            'label' => 'In Progress',
            'color' => 'primary',
        ],
        'Completed' => [
            'label' => 'Completed',
            'color' => 'success',
        ],
    ];

    public function __construct(array $data)
    {

        $this->id = (string) Arr::get($data, 'contentid');
        $this->fullname = Arr::get($data, 'fullname');
        $this->summary = Arr::get($data, 'summary');
        $this->image = Arr::get($data, 'imageurl');
        $this->type = Arr::get($data, 'contenttype');
        $this->completionStatus = Arr::get($data, 'completionstatus');

        $completionStatus = Arr::get($data, 'completionstatus');
        $this->status = $this->statusMap[$completionStatus] ?? [];

        $this->setRecommendedLevels($data['customfields'] ?? []);
    }

    protected function setRecommendedLevels(array $customFields): void
    {
        foreach ($customFields as $field) {
            if ($field['name'] === 'Recommended Levels') {
                $decoded = json_decode($field['data'], true);
                $this->recommenedLevels = is_array($decoded) ? $decoded : [];
                break;
            }
        }
    }

    abstract public function toArray(): array;
}
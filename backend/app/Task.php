<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = "task";

    protected $fillable = [
        'task_name', 'startdate', 'enddate',
    ];
}

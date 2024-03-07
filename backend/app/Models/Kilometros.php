<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kilometros extends Model
{
    use HasFactory;
    protected $fillable = [
        'kilometro',
        'kilometros_id'

     ];
}

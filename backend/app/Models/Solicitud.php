<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Solicitud extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'solicitud',
        'tipo',
        'cantidad',
        'estatus',
        'fecha'
     ];

     public function user()
     {
         return $this->belongsTo(User::class);
     }

}

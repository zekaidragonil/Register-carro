<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asignacion extends Model
{
    use HasFactory;
    protected $fillable = [
        'fecha',
        'Cargo',
        'duracion',
        'carros_id',
        'final_id',
        'resposable_id',
     ];

     public function usuario()
     {
         return $this->belongsTo(Usuario::class);
     }

     public function carro()
     {
         return $this->belongsTo(Carro::class);
     }
}

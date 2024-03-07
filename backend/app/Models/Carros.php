<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carros extends Model
{
    use HasFactory;
    protected $fillable = [
        'Bien',
        'tipo',
        'marca',
        'condicion',
        'modelo',
        'placa',
        'ano',
        'Vin',
        'carroseria',
        'motor',
        'color',
        'estatus',
        'origen',
        'img'
     ];


    public function asignaciones()
    {
        return $this->hasMany(Asignacion::class);
    }


}

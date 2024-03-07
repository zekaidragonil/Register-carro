<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inpseccion extends Model
{
    use HasFactory;
    protected $fillable = [
       'Date',
       'dependencia',
       'pernota',
       'Neumaticos',
       'aceite',
       'Kilometraje',
       'placa',
       'Combustible',
       'vidrio',
       'vidrioLa',
       'retrovisor',
       'gasolina',
       'Moldura',
       'Carroseria',
       'Antena',
       'LucesDelanterasAl',
       'LucesDelanterasBa',
       'LucesIntermitente',
       'LucesCruceD',
       'LucesCruceT',
       'instrumento',
       'calefacion',
       'LuzInterna',
       'reproductor',
       'Bocina',
       'Encededor',
       'Espejo',
       'Ceniceros',
       'Cinturones',
       'Botones',
       'Manijas',
       'Herramienta',
       'Gato',
       'llave',
       'Triangulo',
       'Caucho',
       'Extintor',
       'Asientos',
       'LuzRetro',
       'Limpiaparabrisas',
       'Alfombras',
       'bateria',
       'descripcion',
       'neutmatico'
     ];
}

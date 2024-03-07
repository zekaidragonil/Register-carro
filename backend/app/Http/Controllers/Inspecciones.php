<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inpseccion;

class Inspecciones extends Controller
{
    public function index()
    {
        $inspe  = Inpseccion::all();

        return $inspe;
    }


    public function show($id)
    {
        $inspec  = Inpseccion::find($id);
         return $inspec;
    }


    public  function store(Request $request)
    {

        $inspes = new Inpseccion();
         $inspes->Date = $request->Date;
         $inspes->dependencia = $request->dependencia;
         $inspes->pernota = $request->pernota;
         $inspes->Neumaticos = $request->Neumaticos;
         $inspes->aceite = $request->aceite;
         $inspes->Kilometraje = $request->Kilometraje;
         $inspes->placa = $request->placa;
         $inspes->Combustible = $request->Combustible;
         $inspes->vidrio = $request->vidrio;
         $inspes->vidrioLa = $request->vidrioLa;
         $inspes->retrovisor = $request->retrovisor;
         $inspes->Carroseria = $request->Carroseria;
         $inspes->Moldura = $request->Moldura;
         $inspes->Antena = $request->Antena;
         $inspes->LucesDelanterasAl = $request->LucesDelanterasAl;
         $inspes->LucesDelanterasBa = $request->LucesDelanterasBa;
         $inspes->LucesIntermitente = $request->LucesIntermitente;
         $inspes->LucesCruceD = $request->LucesCruceD;
         $inspes->LucesCruceT = $request->LucesCruceT;
         $inspes->instrumento = $request->instrumento;
         $inspes->calefacion = $request->calefacion;
         $inspes->LuzInterna = $request->LuzInterna;
         $inspes->reproductor = $request->reproductor;
         $inspes->Bocina = $request->Bocina;
         $inspes->Encededor = $request->Encededor;
         $inspes->Espejo = $request->Espejo;
         $inspes->Cinturones = $request->Cinturones;
         $inspes->Botones = $request->Botones;
         $inspes->Manijas = $request->Manijas;
         $inspes->Herramienta = $request->Herramienta;
         $inspes->Gato = $request->Gato;
         $inspes->llave = $request->llave;
         $inspes->Triangulo = $request->Triangulo;
         $inspes->Caucho = $request->Caucho;
         $inspes->Extintor = $request->Extintor;
         $inspes->Asientos = $request->Asientos;
         $inspes->LuzRetro = $request->LuzRetro;
         $inspes->Limpiaparabrisas = $request->Limpiaparabrisas;
         $inspes->Alfombras = $request->Alfombras;
         $inspes->bateria = $request->bateria;
         $inspes->gasolina = $request->gasolina;
         $inspes->Ceniceros = $request->Ceniceros;
         $inspes->descripcion = $request->descripcion;
         $inspes->neutmatico = $request->neutmatico;

          $inspes->save();


  return response()->json(['message' => 'Registro agregado con existo']);

    }
}

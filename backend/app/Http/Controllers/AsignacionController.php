<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Asignacion;

class AsignacionController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
       $carros = Asignacion::all();
       return $carros;
    }

    public function registrar( Request $request)
    {

        $carro = new Asignacion();
            $carro->carros_id = $request->carros_id;
            $carro->fecha = $request->fecha;
            $carro->duracion = $request->duracion;
            $carro->Cargo = $request->Cargo;
            $carro->resposable_id = $request->resposable_id;
            $carro->final_id = $request->final_id;
            $carro->save();

        return response()->json(['message' => 'Registro agregado con existo']);
    }

}

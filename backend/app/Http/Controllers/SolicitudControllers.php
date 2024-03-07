<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Solicitud;

class SolicitudControllers extends Controller

{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

     public function Solictud()
     {
        $soli = Solicitud::with('user')->get();
        return $soli;
     }

     public function show($id)
     {
        $solicitud = Solicitud::find($id);
       return $solicitud;
     }

    public  function solicitudes(Request $request)
    {

        $Soli = new solicitud();
        $Soli->user_id = $request->user_id;
        $Soli->tipo = $request->tipo;
        $Soli->solicitud = $request->solicitud;
        $Soli->cantidad = $request->cantidad;
        $Soli->estatus = $request->estatus;
        $Soli->fecha = $request->fecha;
        $Soli->save();

  return response()->json(['message' => 'Registro agregado con existo']);

    }



    public function update( Request $request ,$id)
    {
        $Soli = solicitud::find($id);
        $Soli->estatus = $request->estatus;
        $Soli->save();

  return response()->json(['message' => 'Solicitud Completada']);

    }
}

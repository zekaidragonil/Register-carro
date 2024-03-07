<?php

namespace App\Http\Controllers;
use App\Models\Carros;
use Illuminate\Http\Request;

class CarrosController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $carros = Carros::all();
        return $carros;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $carro = new Carros();
        $carro->Bien = $request->Bien;
        $carro->tipo = $request->tipo;
        $carro->marca = $request->marca;
        $carro->condicion = $request->condicion;
        $carro->modelo = $request->modelo;
        $carro->ano = $request->ano;
        $carro->Vin = $request->Vin;
        $carro->carroseria = $request->carroseria;
        $carro->motor = $request->motor;
        $carro->color = $request->color;
        $carro->estatus = $request->estatus;
        $carro->origen = $request->origen;
        // $carro->img = $request['img']->store('upload-equipos', 'public');

        $igual = $request->placa;
        $placa = Carros::where('placa' , $igual)->first();
        if($placa){
            return response()->json(['error' => 'Placa no existe'], 401);
        }else{
            $carro->placa = $request->placa;
            $carro->save();
        }

        return response()->json(['message' => 'Registro agregado con existo']);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
       $carro =  Carros::find($id);
       return $carro;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}

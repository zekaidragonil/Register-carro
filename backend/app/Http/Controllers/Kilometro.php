<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\kilometros;

class Kilometro extends Controller
{
     public function index()
     {
        $kilometro = kilometros::all();

        return $kilometro;
     }


     public function store(Request $request)

     {

        $kilo = new kilometros;
        $kilo->kilometro = $request->kilometro;
        $kilo->kilometros_id = $request->kilometros_id;
        $kilo->save();

        return response()->json(['message' => 'kilometros actualizado correctamente ']);

     }




 }



<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarrosController;
use App\Http\Controllers\AsignacionController;
use App\Http\Controllers\SolicitudControllers;
use App\Http\Controllers\Inspecciones;
use App\Http\Controllers\Kilometro;


Route::group([
 'middleware' => 'api',
  'prefix' => 'auth'], function ($router) {

    Route::post('/registro', [AuthController::class, 'register']);

    Route::controller(AuthController::class)->group(function (){
        Route::post('/login', 'login');
        Route::post('/logout', 'logout');
        Route::post('/refresh', 'refresh');
        Route::get('/user', 'getUser');
        Route::get('/users', 'index');
        Route::get('/users/{id}', 'show');
        Route::post('/user/{id}', 'update');

    });

     Route::controller(CarrosController::class)->group(function(){
        Route::post('/carro', 'store');
        Route::get('/carros', 'index');
        Route::get('/showCarros/{id}', 'show');
     });

     Route::controller(AsignacionController::class)->group(function(){
        Route::get('/asignaciones', 'index');
        Route::post('/asignacion', 'registrar');
     });
     Route::controller(Inspecciones::class)->group(function(){
        Route::get('/inspeccion', 'index');
        Route::post('/inspecciones', 'store');
        Route::get('/inspeccion/{id}', 'show');
     });

     Route::controller(SolicitudControllers::class)->group(function(){
        Route::get('/soli', 'Solictud');
        Route::get('/reporte/{id}', 'show');
        Route::post('/reporte/{id}', 'update');
        Route::post('/solicitud', 'Solicitudes');
     });
     Route::controller(Kilometro::class)->group(function(){
        Route::get('/kilometros', 'index');
        Route::post('/kilometro', 'store');
     });

});

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inpseccions', function (Blueprint $table) {
            $table->id();
            $table->string('Date');
            $table->string('dependencia');
            $table->string('pernota');
            $table->string('Neumaticos');
            $table->string('aceite');
            $table->string('Kilometraje');
            $table->string('placa');
            $table->string('Combustible');
            $table->string('vidrio');
            $table->string('vidrioLa');
            $table->string('retrovisor');
            $table->string('gasolina');
            $table->string('Moldura');
            $table->string('Carroseria');
            $table->string('Antena');
            $table->string('LucesDelanterasAl');
            $table->string('LucesDelanterasBa');
            $table->string('LucesIntermitente');
            $table->string('LucesCruceD');
            $table->string('LucesCruceT');
            $table->string('instrumento');
            $table->string('calefacion');
            $table->string('LuzInterna');
            $table->string('reproductor');
            $table->string('Bocina');
            $table->string('Encededor');
            $table->string('Espejo');
            $table->string('Ceniceros');
            $table->string('Cinturones');
            $table->string('Botones');
            $table->string('Manijas');
            $table->string('Herramienta');
            $table->string('Gato');
            $table->string('llave');
            $table->string('Triangulo');
            $table->string('Caucho');
            $table->string('Extintor');
            $table->string('Asientos');
            $table->string('LuzRetro');
            $table->string('Limpiaparabrisas');
            $table->string('Alfombras');
            $table->string('bateria');
            $table->string('descripcion');
            $table->string('neutmatico');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inpseccions');
    }
};

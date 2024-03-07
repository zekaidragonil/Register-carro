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
        Schema::create('carros', function (Blueprint $table) {
            $table->id();
            $table->string('Bien');
            $table->string('tipo');
            $table->string('marca');
            $table->string('placa')->unique();
            $table->string('condicion');
            $table->string('modelo');
            $table->string('ano');
            $table->string('Vin')->nullable();
            $table->string('carroseria');
            $table->string('motor');
            $table->string('color');
            $table->string('estatus');
            $table->string('origen');
            $table->string('img')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carros');
    }
};

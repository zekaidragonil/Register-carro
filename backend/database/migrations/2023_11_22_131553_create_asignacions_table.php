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
        Schema::create('asignacions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('carros_id');
            $table->foreign('carros_id')->references('id')->on('carros');
            $table->unsignedBigInteger('resposable_id');
            $table->foreign('resposable_id')->references('id')->on('users');
            $table->unsignedBigInteger('final_id');
            $table->foreign('final_id')->references('id')->on('users');
            $table->string('fecha');
            $table->string('Cargo');
            $table->string('duracion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asignacions');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountdetailsTable extends Migration
{
    public function up()
    {
        Schema::create('accountdetails', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 30);
            $table->string('last_name', 30);
            $table->string('father', 30);
            $table->string('cnic', 14)->unique();
            $table->date('date_of_birth');
            $table->string('occupation')->nullable();
            $table->string('city');
            $table->text('address');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('accountdetails');
    }
}

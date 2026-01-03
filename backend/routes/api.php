<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AccountdetailsController;

Route::post('register', [AccountdetailsController::class, 'register']);
Route::get('accounts', [AccountdetailsController::class, 'index']);
Route::delete('accounts/{id}', [AccountdetailsController::class, 'destroy']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

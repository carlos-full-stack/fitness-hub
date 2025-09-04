<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\UserController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('plans', [PlanController::class, 'showPlans']);

// Protected Routes

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [UserController::class, 'showUser']);
    Route::post('update', [UserController::class, 'update']);
    Route::post('logout', [AuthController::class, 'logout']);
});

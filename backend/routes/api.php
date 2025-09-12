<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkoutController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('plans', [PlanController::class, 'showPlans']);

// Protected Routes

Route::middleware('auth:sanctum')->group(function () {

    Route::get('user', [UserController::class, 'showUser']);
    Route::get('user/bmi', [UserController::class, 'showUserBMI']);
    Route::post('update', [UserController::class, 'update']);

    Route::post('logout', [AuthController::class, 'logout']);

    Route::post('workout/store', [WorkoutController::class, 'store']);
    Route::get('workout/getKmsProgress', [WorkoutController::class, 'getKmsProgress']);
    Route::get('workout/getCaloriesProgress', [WorkoutController::class, 'getCaloriesProgress']);
    Route::get('workout/getAttendanceProgress', [WorkoutController::class, 'getAttendanceProgress']);
});

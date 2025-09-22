<?php

namespace App\Http\Controllers;

use App\Models\Plan;

class PlanController extends Controller
{
    public function showPlans()
    {

        $plans = Plan::all();

        if ($plans->isEmpty()) {
            return response()->json([
                "message" => "No plans found",
                "plans" => $plans
            ], 404);
        } else {
            return response()->json([
                "message" => "Plans retrieved successfully",
                "plans" => $plans
            ], 200);
        }
    }
}

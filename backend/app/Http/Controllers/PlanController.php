<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;

class PlanController extends Controller
{
    public function showPlans() {
        $plans = Plan::all();

        return response()->json($plans);
    }
}

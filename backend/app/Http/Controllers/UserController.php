<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function showUser(Request $request)
    {
        $user = $request->user();

        if (!$user) return response()->json(['message' => 'User not found'], 404);

        return response()->json([
            'user' => $user,

        ], 200);
    }

    public function showUserBMI(Request $request): JsonResponse
    {
        $user = $request->user();

        if (!$user) return response()->json(['message' => 'User not found'], 404);

        $userWeight = $user->weight;
        $userHeight = $user->height;

        if (!$userWeight | !$userHeight) {
            return response()->json([
                'message' => "Weight or height not found",
                "user_message" => "Please set your weight and height",
                'category' => "No data",
            ], 200);
        }

        $imc = ($userWeight / ($userHeight ** 2)) * 10000;
        $imc = round($imc, 2);


        if ($imc < 18.5) {
            $category = "Underweight";
        } elseif ($imc < 25) {
            $category = "Normal";
        } elseif ($imc < 30) {
            $category = "Overweight";
        } else {
            $category = "Obesity";
        }

        return response()->json([
            'message' => 'BMI calculated successfully',
            'category' => $category,
            'imc' => $imc
        ], 200);
    }


    public function update(Request $request)
    {
        $request->validate([
            'name' => 'sometimes|string|max:25',
            'last_name' => 'sometimes|string|max:50',
            'height' => 'sometimes|integer|max:250',
            'weight' => 'sometimes|integer|max:300',
            'email' => 'sometimes|string|email|unique:users,email,' . $request->user()->id,
            'user_url' => 'sometimes|image|max:1000',
            'plan_id' => 'sometimes|integer',
            'weekly_goal_days' => 'sometimes|integer|min:0|max:7'
        ]);

        $user = $request->user();

        if (!$user) return response()->json(['message' => 'User not found'], 404);

        $updateData = [];


        if ($request->has('name')) $updateData['name'] = $request->name;
        if ($request->has('last_name')) $updateData['last_name'] = $request->last_name;
        if ($request->has('height')) $updateData['height'] = $request->height;
        if ($request->has('weight')) $updateData['weight'] = $request->weight;
        if ($request->has('email')) $updateData['email'] = $request->email;
        if ($request->has('plan_id')) $updateData['plan_id'] = $request->plan_id;
        if ($request->has('weekly_goal_days')) $updateData['weekly_goal_days'] = $request->weekly_goal_days;

        if ($request->hasFile('user_url')) {
            $path = $request->file('user_url')->store('profile_photos', 'public');
            $updateData['user_url'] = '/storage/' . $path;
        }

        if (!empty($updateData)) {
            $user->update($updateData);
        }

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user->fresh(),
        ], 200);
    }
}

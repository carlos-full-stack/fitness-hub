<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

public function showUser(Request $request) {
$user = $request->user();
return response()->json([
    'user'=> $user,

], 200);
}


public function update(Request $request) {
    $request->validate([
        'name' => 'sometimes|string|max:25',
        'last_name' => 'sometimes|string|max:50',
        'height' => 'sometimes|integer|max:250',
        'weight' => 'sometimes|integer|max:300',
        'email' => 'sometimes|string|email|unique:users,email,' . $request->user()->id,
        'user_url' => 'sometimes|image|max:1000',
        'plan_id' => 'sometimes|integer',
    ]);

    $user = $request->user();

    $updateData = [];

    if ($request->has('name')) $updateData['name'] = $request->name;
    if ($request->has('last_name')) $updateData['last_name'] = $request->last_name;
    if ($request->has('height')) $updateData['height'] = $request->height;
    if ($request->has('weight')) $updateData['weight'] = $request->weight;
    if ($request->has('email')) $updateData['email'] = $request->email;
    if ($request->has('plan_id')) $updateData['plan_id'] = $request->plan_id;

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

<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;
use Carbon\Carbon;

class WorkoutController extends Controller
{
    public function store(Request $request)
    {

        $user = $request->user();
        if (!$user) return response()->json(['message' => 'User not found'], 404);

        $todayWorkout = Workout::where('user_id', $user->id)
            ->whereDate('created_at', Carbon::today())
            ->get();

        $request->validate([
            'kms' => 'required|integer|min:0',
            'calories' => 'required|integer|min:0',
            'weight' => 'required|integer|min:1'
        ]);

        // Update user weight

        $user->update([
            'weight' => $request->weight
        ]);

        if ($todayWorkout->isEmpty()) {
            $workout = Workout::create([
                'kms' => $request->kms,
                'calories' => $request->calories,
                'weight' => $request->weight,
                'user_id' => $request->user()->id,
            ]);
            return response()->json([
                'message' => 'Workout created successfully',
                'workout' => $workout
            ], 201);
        } else {

            $workout =  $todayWorkout->first();

            $workout->update([
                'kms' => $request->kms,
                'calories' => $request->calories,
                'weight' => $request->weight,
            ]);

            return response()->json([
                'message' => 'Workout updated successfully',
                'workout' => $workout
            ], 200);
        }
    }

    public function getWorkouts($user)
    {
        $endDate = Carbon::now();
        $startDate = Carbon::now()->subDays(6);

        $workouts_last_7_days = Workout::where('user_id', $user->id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->orderBy('created_at', 'asc')
            ->get();

        return $workouts_last_7_days;
    }

    public function getKmsProgress(Request $request)
    {
        $user = $request->user();

        if (!$user) return response()->json(['message' => 'User not found'], 404);

        $workouts_last_7_days = $this->getWorkouts($user);

        if ($workouts_last_7_days->isEmpty()) {
            return response()->json([
                'message' => 'No data available',
                'average_kms' => 0,
                'total_kms' => 0
            ], 200);
        }

        $totalKms = $workouts_last_7_days->sum('kms');
        $averageKms = round($workouts_last_7_days->avg('kms'), 2);

        return response()->json([
            'message' => 'Kms data available',
            'average_kms' => $averageKms,
            'total_kms' => $totalKms
        ], 200);
    }

    public function getCaloriesProgress(Request $request)
    {
        $user = $request->user();

        if (!$user) return response()->json(['message' => 'User not found'], 404);

        $workouts_last_7_days = $this->getWorkouts($user);

        if ($workouts_last_7_days->isEmpty()) {
            return response()->json([
                'message' => 'No data available',
                'average_calories' => 0,
                'total_calories' => 0
            ], 200);
        }

        $totalCalories = $workouts_last_7_days->sum('calories');
        $averageCalories = round($workouts_last_7_days->avg('calories'), 2);

        return response()->json([
            'message' => 'Calories data available',
            'average_calories' => $averageCalories,
            'total_calories' => $totalCalories

        ], 200);
    }

    public function getAttendanceProgress(Request $request)
    {

        $user = $request->user();
        $category = "";

        if (!$user) return response()->json(['message' => 'User not found'], 404);

        $workouts_last_7_days = $this->getWorkouts($user);
        $weeklyGoalDays = $user->weekly_goal_days;

        if (!$weeklyGoalDays) return response()->json([
            'message' => 'No goal defined',
            'attendance_last_7_days' => null
        ], 200);

        $totalWorkouts = $workouts_last_7_days->count(); // 10
        $attendanceProgress = round(($totalWorkouts / $weeklyGoalDays) * 100, 0);

        if ($attendanceProgress < 25) {
            $category = "Low";
        } elseif ($attendanceProgress < 50) {
            $category = "Average";
        } elseif ($attendanceProgress < 75) {
            $category = "On Track!";
        } elseif ($attendanceProgress < 100) {
            $category = "Almost!";
        } else {
            $category = "Done!";
        }

        return response()->json([
            'message' => 'Data available',
            'category' => $category,
            'attendance_last_7_days' => $attendanceProgress,
            'totalWorkouts' => $totalWorkouts,
            'weeklyGoalDays' => $weeklyGoalDays
        ], 200);
    }
}

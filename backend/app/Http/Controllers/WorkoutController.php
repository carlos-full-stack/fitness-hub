<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;
use Carbon\Carbon;

class WorkoutController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'kms' => 'required|integer|min:0',
            'calories' => 'required|integer|min:0',
            'weight' => 'required|integer|min:1'
        ]);

        $workout = Workout::create([
            'kms' => $request->kms,
            'calories' => $request->calories,
            'weight' => $request->weight,
            'user_id' => $request->user()->id,
        ]);

        // Update user weight

        $user = $request->user();

        if (!$user) return response()->json(['Message' => 'User not found'], 404);

        $user->update([
            'weight' => $request->weight
        ]);

        return response()->json([
            'message' => 'Workout created successfully',
            'workout' => $workout
        ], 201);
    }

    public function getWorkouts($user)
    {
        $endDate = Carbon::now();
        $startDate = Carbon::now()->subDays(6);

        $workouts = Workout::where('user_id', $user->id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->orderBy('created_at', 'asc')
            ->get();

        return $workouts;
    }

    public function getKmsProgress(Request $request)
    {
        $user = $request->user();

        if (!$user) return response()->json(['Message' => 'User not found'], 404);

        $workouts = $this->getWorkouts($user);

        if ($workouts->isEmpty()) {
            return response()->json([
                'message' => 'No data available',
                'total_kms' => null,
                'kms_progress' => null
            ], 200);
        }

        if ($workouts->count() == 1) {

            $totalKms = $workouts->first()->kms;

            return response()->json([
                'message' => 'No data to compare',
                'total_kms' => $totalKms,
                'kms_progress' => null

            ], 200);
        }

        if ($workouts->count() > 1) {


            $totalKms = $workouts->sum('kms');

            $lastWorkout = $workouts->last()->kms;
            $firstWorkout = $workouts->first()->kms;

            if ($firstWorkout > 0) {
                $kmsProgress = (($lastWorkout - $firstWorkout) /  $firstWorkout) * 100;
                $roundedKmsProgress = round($kmsProgress, 0);
            } else {
                $kmsProgress = null;
            }

            return response()->json([
                'message' => 'Full data available',
                'total_kms' => $totalKms,
                'kms_progress' => $roundedKmsProgress

            ], 200);
        };
    }
    public function getCaloriesProgress(Request $request)
    {
        $user = $request->user();

        if (!$user) return response()->json(['Message' => 'User not found'], 404);

        $workouts = $this->getWorkouts($user);

        if ($workouts->isEmpty()) {
            return response()->json([
                'message' => 'No data available',
                'total_calories' => null,
                'calories_progress' => null
            ], 200);
        }

        if ($workouts->count() == 1) {

            $totalCalories = $workouts->first()->calories;

            return response()->json([
                'message' => 'No data to compare',
                'total_calories' => $totalCalories,
                'calories_progress' => null

            ], 200);
        }

        if ($workouts->count() > 1) {

            $totalCalories = $workouts->sum('calories');

            $lastWorkout = $workouts->last()->calories;
            $firstWorkout = $workouts->first()->calories;

            if ($firstWorkout > 0) {
                $caloriesProgress = (($lastWorkout - $firstWorkout) /  $firstWorkout) * 100;
                $roundedCaloriesProgress = round($caloriesProgress, 0);
            } else {
                $caloriesProgress = null;
            }

            return response()->json([
                'message' => 'Full data available',
                'total_calories' => $totalCalories,
                'calories_progress' => $roundedCaloriesProgress

            ], 200);
        };
    }

    public function getAttendanceProgress(Request $request)
    {

        $user = $request->user();

        if (!$user) return response()->json(['Message' => 'User not found'], 404);

        $workouts = $this->getWorkouts($user);
        $weeklyGoalDays = $user->weekly_goal_days;

        if (!$weeklyGoalDays) return response()->json([
            'Message' => 'No goal defined',
            'attendance_progress' => null
        ], 200);

        $totalWorkouts = $workouts->count();
        $attendanceProgress = round(($totalWorkouts / $weeklyGoalDays) * 100, 0);

        if ($attendanceProgress < 25) {
            $category = "Low";
        } elseif ($attendanceProgress < 50) {
            $category = "Average";
        } elseif ($attendanceProgress < 75) {
            $category = "On Track!";
        } else {
            $category = "Done!";
        }

        return response()->json([
            'message' => 'Data available',
            'category' => $category,
            'attendance_progress' => $attendanceProgress,
        ], 200);
    }
}

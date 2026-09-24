"use client";

import { useWorkout } from "@/context/WorkoutContext";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

type WorkoutActionsProps = {
  workout: Workout;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout } = useWorkout();

  function handleAddToPlan() {
    addToPlan(workout);
  }

  function handleSave() {
    saveWorkout(workout);
  }

  return (
    <div className="mt-10 flex gap-3">
      <button
        onClick={handleAddToPlan}
        className="rounded-md bg-[#CCFF00] px-5 py-3 text-xs font-bold text-black"
      >
        ADD TO TODAY&apos;S PLAN
      </button>

      <button
        onClick={handleSave}
        className="rounded-md border border-[#343740] px-5 py-3 text-xs font-bold text-white"
      >
        SAVE FOR LATER
      </button>
    </div>
  );
}
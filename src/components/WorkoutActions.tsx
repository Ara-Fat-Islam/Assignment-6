"use client";

import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import Toast from "./Toast";

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
  const { plan, addToPlan, saveWorkout } = useWorkout();

  const [message, setMessage] = useState("");

  const alreadyAdded = plan.some(
    (item) => item.id === workout.id
  );

  const planIsFull = plan.length >= 5;

  function showToast(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function handleAddToPlan() {
    if (alreadyAdded) {
      showToast("Workout is already in today's plan");
      return;
    }

    if (planIsFull) {
      showToast("Today's plan is full (5 workouts)");
      return;
    }

    addToPlan(workout);
    showToast("Added to today's plan");
  }

  function handleSave() {
    saveWorkout(workout);
    showToast("Saved for later");
  }

  return (
    <>
      <div className="mt-10 flex gap-3">
       <button
  onClick={handleAddToPlan}
  disabled={alreadyAdded || planIsFull}
  className="inline-flex items-center gap-2 rounded-md bg-[#CCFF00] px-5 py-3 text-xs font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
>
  <span aria-hidden="true" className="text-base leading-none">
    +
  </span>

  {alreadyAdded
    ? "ALREADY IN PLAN"
    : planIsFull
      ? "PLAN FULL"
      : "ADD TO TODAY'S PLAN"}
</button>
<button
  onClick={handleSave}
  className="inline-flex items-center gap-2 rounded-md border border-[#343740] px-5 py-3 text-xs font-bold text-white"
>
  <span aria-hidden="true" className="text-sm leading-none">
    ♡
  </span>

  SAVE FOR LATER
</button>
      </div>

      <Toast message={message} />
    </>
  );
}
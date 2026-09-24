"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

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

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data = await response.json();

        setWorkouts(data);
      } catch {
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <section
      id="library"
      className="mx-auto max-w-[1232px] py-16"
    >
      <div>
        <h2 className="text-[28px] font-black uppercase leading-[28px] tracking-[-0.02em] text-white">
          THE LIBRARY
        </h2>

        <p className="text-[13px] leading-[20px] text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {loading && (
        <p className="mt-8 text-sm text-[#9CA3AF]">
          Loading workouts...
        </p>
      )}

      {error && (
        <p className="mt-8 text-sm text-red-400">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
}
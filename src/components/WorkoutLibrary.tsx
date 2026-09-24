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

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

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

  const sortedWorkouts = [...workouts].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    }
  );

  return (
    <section
      id="library"
      className="mx-auto max-w-[1232px] py-16"
    >
      {/* Library Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[28px] font-black uppercase leading-[28px] tracking-[-0.02em] text-white">
            THE LIBRARY
          </h2>

          <p className="text-[13px] leading-[20px] text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <label
            htmlFor="sort-workouts"
            className="text-[11px] font-semibold uppercase tracking-wide text-[#777B84]"
          >
            Sort By
          </label>

          <div className="relative">
            <select
              id="sort-workouts"
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as SortOption
                )
              }
              className="appearance-none rounded-md border border-[#343740] bg-[#15171D] py-2 pl-4 pr-9 text-[11px] font-semibold uppercase text-white outline-none transition focus:border-[#CCFF00]"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#CCFF00]">
              ↓
            </span>
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <p className="mt-8 text-sm text-[#9CA3AF]">
          Loading workouts...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="mt-8 text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Workout Grid */}
      {!loading && !error && (
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
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
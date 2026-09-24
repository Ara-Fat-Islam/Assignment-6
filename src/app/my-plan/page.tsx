"use client";

import Link from "next/link";
import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import Toast from "@/components/Toast";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    completed,
    removeFromPlan,
    removeSaved,
    markAsDone,
    addToPlan,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [message, setMessage] = useState("");

  function showToast(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentWorkouts =
    activeTab === "plan" ? plan : saved;

  function handleMarkAsDone(id: number) {
    markAsDone(id);
    showToast("Workout marked as done");
  }

  function handleRemoveFromPlan(id: number) {
    removeFromPlan(id);
    showToast("Workout removed from plan");
  }

  function handleRemoveSaved(id: number) {
    removeSaved(id);
    showToast("Removed from saved workouts");
  }

  function handleAddToPlan(
    workout: (typeof plan)[number]
  ) {
    if (plan.length >= 5) {
      showToast("Today's plan is full (5 workouts)");
      return;
    }

    addToPlan(workout);
    showToast("Added to today's plan");
  }

  return (
    <main className="mx-auto min-h-screen max-w-[1232px] flex-1 px-6 py-16">
      {/* Header */}
      <div>
        <p className="text-[10px] font-bold tracking-[0.12em] text-[#CCFF00]">
          FITLOG
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.02em] text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-sm text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[#222630] bg-[#15171D] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#777B84]">
            Exercises
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {plan.length}
          </p>
        </div>

        <div className="rounded-xl border border-[#222630] bg-[#15171D] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#777B84]">
            Minutes
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="rounded-xl border border-[#222630] bg-[#15171D] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#777B84]">
            Calories
          </p>

          <p className="mt-2 text-3xl font-black text-[#CCFF00]">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex gap-2 border-b border-[#222630]">
        <button
          onClick={() => setActiveTab("plan")}
          className={`px-5 py-3 text-[11px] font-bold uppercase transition ${
            activeTab === "plan"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
              : "text-[#777B84] hover:text-white"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`px-5 py-3 text-[11px] font-bold uppercase transition ${
            activeTab === "saved"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
              : "text-[#777B84] hover:text-white"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Workout List */}
      <div className="mt-8">
        {currentWorkouts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#343740] bg-[#111318] px-6 py-20 text-center">
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#CCFF00]">
              FITLOG
            </p>

            <h2 className="mt-3 text-2xl font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#8B8E96]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-md bg-[#CCFF00] px-5 py-3 text-[10px] font-bold uppercase text-black transition hover:bg-[#d8ff33]"
            >
              GO TO WORKOUTS
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {currentWorkouts.map((workout) => {
              const isDone = completed.includes(workout.id);

              return (
                <article
                  key={workout.id}
                  className={`flex flex-col gap-5 rounded-xl border border-[#222630] bg-[#15171D] p-4 transition md:flex-row md:items-center ${
                    isDone ? "opacity-60" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-28 w-full rounded-lg object-cover md:w-40"
                  />

                  {/* Workout Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {workout.muscleGroups.map((group) => (
                        <span
                          key={group}
                          className="rounded-full bg-[#202A0D] px-2.5 py-1 text-[9px] font-semibold uppercase text-[#CCFF00]"
                        >
                          {group}
                        </span>
                      ))}
                    </div>

                    <h2
                      className={`mt-2 text-lg font-bold uppercase ${
                        isDone
                          ? "text-[#777B84] line-through"
                          : "text-white"
                      }`}
                    >
                      {workout.name}
                    </h2>

                    <p className="mt-1 text-xs text-[#8B8E96]">
                      {workout.equipment}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-5 text-[11px] text-[#9CA3AF]">
                      <span>
                        {workout.duration} min
                      </span>

                      <span>
                        {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ★ {workout.rating}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="rounded-md border border-[#343740] px-4 py-2 text-[10px] font-bold uppercase text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
                    >
                      VIEW DETAILS
                    </Link>

                    {activeTab === "plan" ? (
                      <button
                        onClick={() =>
                          handleMarkAsDone(workout.id)
                        }
                        disabled={isDone}
                        className="rounded-md bg-[#CCFF00] px-4 py-2 text-[10px] font-bold uppercase text-black disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isDone
                          ? "DONE"
                          : "MARK AS DONE"}
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleAddToPlan(workout)
                        }
                        disabled={
                          plan.length >= 5 ||
                          plan.some(
                            (item) =>
                              item.id === workout.id
                          )
                        }
                        className="rounded-md bg-[#CCFF00] px-4 py-2 text-[10px] font-bold uppercase text-black disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {plan.some(
                          (item) =>
                            item.id === workout.id
                        )
                          ? "IN PLAN"
                          : plan.length >= 5
                            ? "PLAN FULL"
                            : "ADD TO PLAN"}
                      </button>
                    )}

                    <button
                      onClick={() =>
                        activeTab === "plan"
                          ? handleRemoveFromPlan(
                              workout.id
                            )
                          : handleRemoveSaved(
                              workout.id
                            )
                      }
                      aria-label={`Remove ${workout.name}`}
                      className="rounded-md border border-[#343740] px-3 py-2 text-[12px] font-bold text-[#9CA3AF] transition hover:border-red-400 hover:text-red-400"
                    >
                      ×
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <Toast message={message} />
    </main>
  );
}
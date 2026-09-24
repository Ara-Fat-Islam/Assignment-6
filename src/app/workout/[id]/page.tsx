import Link from "next/link";
import WorkoutActions from "@/components/WorkoutActions";

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

async function getWorkout(id: string): Promise<Workout | null> {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    return null;
  }

  const workouts: Workout[] = await response.json();

  return (
    workouts.find((workout) => workout.id === Number(id)) ?? null
  );
}

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <main className="mx-auto max-w-[1232px] px-6 pb-20 pt-[129px]">
        <h1 className="text-3xl font-bold text-white">
          Workout not found
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block text-[#CCFF00] hover:underline"
        >
          ← Back to workouts
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1232px] px-6 pb-16 pt-[129px]">
      <Link
        href="/"
        className="text-sm text-[#9CA3AF] transition hover:text-[#CCFF00]"
      >
        ← Back to workouts
      </Link>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Workout Image */}
        <div className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full min-h-[450px] w-full object-cover"
          />
        </div>

        {/* Workout Information */}
        <div>
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#202A0D] px-3 py-1 text-[10px] font-semibold uppercase text-[#CCFF00]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h1 className="mt-5 text-4xl font-black uppercase text-white">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-5 leading-7 text-[#9CA3AF]">
            {workout.description}
          </p>

          {/* Workout Specs */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#777B84]">
                Equipment
              </p>

              <p className="mt-1 text-sm text-white">
                {workout.equipment}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">
                Difficulty
              </p>

              <p className="mt-1 text-sm text-white">
                {workout.difficulty}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">
                Sets
              </p>

              <p className="mt-1 text-sm text-white">
                {workout.sets}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">
                Reps
              </p>

              <p className="mt-1 text-sm text-white">
                {workout.reps}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">
                Duration
              </p>

              <p className="mt-1 text-sm text-white">
                {workout.duration} min
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">
                Calories
              </p>

              <p className="mt-1 text-sm text-white">
                {workout.caloriesBurned} kcal
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-8">
            <p className="text-xs text-[#777B84]">
              Rating
            </p>

            <p className="mt-1 text-lg text-[#CCFF00]">
              ★ {workout.rating}
            </p>
          </div>

          {/* Instructions */}
          <div className="mt-10">
            <h2 className="text-xl font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-3 text-sm leading-6 text-[#9CA3AF]"
                  >
                    <span className="font-bold text-[#CCFF00]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Actions */}
          <WorkoutActions workout={workout} />
        </div>
      </section>
    </main>
  );
}
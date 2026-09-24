import Link from "next/link";

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
      <main className="mx-auto max-w-[1232px] px-6 py-20">
        <h1 className="text-3xl font-bold text-white">
          Workout not found
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block text-[#CCFF00]"
        >
          ← Back to workouts
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1232px] px-6 py-16">
      <Link
        href="/"
        className="text-sm text-[#9CA3AF] hover:text-[#CCFF00]"
      >
        ← Back to workouts
      </Link>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full min-h-[450px] w-full object-cover"
          />
        </div>

        <div>
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

          <h1 className="mt-5 text-4xl font-black uppercase text-white">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-[#9CA3AF]">
            {workout.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#777B84]">Equipment</p>
              <p className="mt-1 text-sm text-white">
                {workout.equipment}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">Difficulty</p>
              <p className="mt-1 text-sm text-white">
                {workout.difficulty}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">Sets</p>
              <p className="mt-1 text-sm text-white">
                {workout.sets}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">Reps</p>
              <p className="mt-1 text-sm text-white">
                {workout.reps}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">Duration</p>
              <p className="mt-1 text-sm text-white">
                {workout.duration} min
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777B84]">Calories</p>
              <p className="mt-1 text-sm text-white">
                {workout.caloriesBurned} kcal
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs text-[#777B84]">Rating</p>
            <p className="mt-1 text-lg text-[#CCFF00]">
              ★ {workout.rating}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-3 text-sm leading-6 text-[#9CA3AF]"
                >
                  <span className="font-bold text-[#CCFF00]">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex gap-3">
            <button className="rounded-md bg-[#CCFF00] px-5 py-3 text-xs font-bold text-black">
              ADD TO TODAY&apos;S PLAN
            </button>

            <button className="rounded-md border border-[#343740] px-5 py-3 text-xs font-bold text-white">
              SAVE FOR LATER
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
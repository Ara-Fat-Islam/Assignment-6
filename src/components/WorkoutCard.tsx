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

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="block overflow-hidden rounded-xl border border-[#222630] bg-[#15171D] transition hover:border-[#CCFF00]/40"
    >
      <div className="h-[220px] overflow-hidden bg-[#1B1E25]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
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

        <h3 className="mt-3 text-[20px] font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-[12px] text-[#8F949F]">
          {workout.equipment}
        </p>

        <div className="mt-4 flex items-center justify-between text-[11px] text-[#9CA3AF]">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
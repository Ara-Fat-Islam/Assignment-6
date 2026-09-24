# B14-A6-Fit Log

FitLog is a modern workout library and daily workout planning application built with Next.js, TypeScript, and Tailwind CSS. Users can browse workouts, view detailed exercise information, save workouts, and build a daily workout plan with a maximum of five exercises.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Context API
- LocalStorage
- REST API

## Key Features

1. **Workout Library**
   - Browse workouts with exercise images, muscle groups, equipment, duration, calories, and ratings.
   - Sort workouts by duration, calories, or rating.

2. **Workout Details**
   - View complete workout information including description, equipment, difficulty, sets, reps, calories, rating, and instructions.

3. **Daily Workout Plan**
   - Add workouts to today's plan.
   - A maximum of five workouts can be added.
   - Track total exercises, minutes, and calories.

4. **Saved Workouts**
   - Save workouts for later.
   - Add saved workouts directly to today's plan.
   - Remove saved workouts when no longer needed.

5. **Workout Progress & Persistence**
   - Mark workouts as completed.
   - Toast notifications provide feedback for user actions.
   - Plan, saved workouts, and completed workouts persist using LocalStorage.

## Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   ├── workout/
│   │   └── [id]/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Toast.tsx
│   ├── WorkoutActions.tsx
│   ├── WorkoutCard.tsx
│   └── WorkoutLibrary.tsx
│
└── context/
    └── WorkoutContext.tsx

public/
├── banner.png
└── logo.png
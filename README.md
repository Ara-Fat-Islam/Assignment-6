# B14-A6 FitLog

FitLog is a dark, modern workout library and daily workout planning application built with Next.js, TypeScript, and Tailwind CSS. Users can browse exercises, view workout details, save workouts, build a daily plan, and track completed exercises.

## Live Project

- **Live Website:** https://b14-a6-fit-log-lyart.vercel.app/
- **GitHub Repository:** https://github.com/Ara-Fat-Islam/Assignment-6

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Context API
- LocalStorage
- REST API
- Vercel

## Key Features

### 1. Workout Library

- Browse workouts from the FitLog REST API.
- Responsive workout card grid.
- Muscle-group category tags.
- Equipment, duration, calories, and rating information.
- Sort workouts by Duration, Calories, or Rating.
- Loading skeleton while workout data is being fetched.

### 2. Workout Details

- Dedicated dynamic route for each workout.
- Workout image, description, muscle groups, equipment, difficulty, sets, reps, duration, calories, and rating.
- Step-by-step workout instructions.
- Add a workout to today's plan.
- Save a workout for later.
- Action feedback through toast notifications.

### 3. My Plan

- Daily plan with a maximum of five workouts.
- Live Exercises, Minutes, and Calories metrics.
- Today's Plan and Saved tabs.
- View workout details directly from the plan.
- Mark workouts as completed.
- Remove workouts from the plan or saved list.
- Empty-state UI with a link back to the workout library.

### 4. Persistent Workout Data

- Today's plan persists using LocalStorage.
- Saved workouts persist using LocalStorage.
- Completed workout state persists after page refresh.
- Plan and Saved counters update automatically.

### 5. Responsive & Production Ready

- Responsive layout for mobile, tablet, and desktop.
- Fixed navigation bar with active route highlighting.
- Custom 404 page for invalid routes.
- Production build tested with Next.js.
- Deployed to Vercel.
- GitHub-based deployment workflow.

## Main Routes

| Route | Description |
|---|---|
| `/` | Workout Library |
| `/workout/[id]` | Workout Details |
| `/my-plan` | Today's Plan and Saved Workouts |

## Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
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
```

## API

Workout data is fetched from the FitLog API:

https://api.abcz.workers.dev/api/fitlog

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

http://localhost:3000

## Production

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

The production application is deployed on Vercel.

## Deployment

The project is connected to GitHub and deployed through Vercel.

```text
GitHub → Vercel → Production
```

## Author

**Arafat Islam**

Daffodil International University
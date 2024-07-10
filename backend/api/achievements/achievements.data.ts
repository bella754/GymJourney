import { IAchievements } from 'backend/api/achievements/achievements.interface.ts'

export const achievements: IAchievements[] = [
  {
    id: 'profileCreated',
    title: 'Welcome to the club',
    description: 'You created your profile',
    image: '/@uix/src/common/public/achievements/profile-created.png',
  },
  {
    id: 'firstWorkout',
    title: "Let's gooo!",
    description: 'You completed your first workout',
    image: '/@uix/src/common/public/achievements/first-workout.png',
  },
]

import { IExercise, IWorkout } from 'backend/api/training/training.interface.ts'

export const exercises: IExercise[] = [
  {
    name: 'Ab Rollout',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/03/standing-wheel-rollout-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/ab-rollout.mp4',
    description: 'An exercise that targets the abdominals using a roller.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Bicycle Crunch',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/bicycle-crunch-resized-1.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/bicycle-crunch.mp4',
    description: 'An exercise that targets the obliques and abdominals.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: "Captain's Chair",
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/07/Captains-chair-straight-leg-raise.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/captains-chair.mp4',
    description: "An exercise that targets the lower abs using a captain's chair.",
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Crunch',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2022/12/Crunch-with-leg-raise.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/crunch.mp4',
    description: 'An exercise that targets the abdominals.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Hanging Leg Raise',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2019/05/Hanging-leg-raise-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/hanging-leg-raise.mp4',
    description: 'An exercise that targets the lower abs and hip flexors using a hanging bar.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Hip Thrust',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/04/barbell-hip-thrust-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/hip-thrust.mp4',
    description: 'An exercise that targets the glutes and hamstrings.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Kneeling Cable Crunch',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Cable-Kneeling-Crunch-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/kneeling-cable-crunch.mp4',
    description: 'An exercise that targets the abdominals using a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Leg Raise',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/06/lying-straight-leg-raise-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/leg-raise.mp4',
    description: "An exercise that targets the lower abs using a captain's chair or lying leg raise station.",
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Plank',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Front-Plank-resized.png?ezimgfmt=ng:webp/ngcb4.png',
    videoUrl: 'common/public/videos/plank.mp4',
    description: 'An exercise that targets the core muscles and stabilizes the spine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Russian Twist',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/weighted-russian-twist-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/russian-twist.mp4',
    description: 'An exercise that targets the obliques using a medicine ball or dumbbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Sit Up',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/04/V2F-Sit-up.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/sit-up.mp4',
    description: 'An exercise that targets the abdominals using bodyweight.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Stability Ball Crunch',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/weighted-crunch-on-stability-ball-resized.png?ezimgfmt=ng:webp/ngcb4.png',
    videoUrl: 'common/public/videos/stability-ball-crunch.mp4',
    description: 'An exercise that targets the abdominals using a stability ball.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Superman',
    muscleGroup: 'Core',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/superman-exercise-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/superman.mp4',
    description: 'An exercise that targets the lower back muscles.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  // Arms exercises
{
    name: 'Bicep Curl (Cable)',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/Cable-curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/bicep-curl-cable.mp4',
    description: 'An exercise that targets the biceps using a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Bicep Curl (Dumbbell)',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2023/07/Two-arm-supinated-dumbbell-curl.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/bicep-curl-dumbbell.mp4',
    description: 'An exercise that targets the biceps using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Bicep Curl (EZ Bar)',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/barbell-curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/bicep-curl-ez-bar.mp4',
    description: 'An exercise that targets the biceps using an EZ curl bar.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Chin Up',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Chin-up.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/chin-up.mp4',
    description: 'An exercise that targets the lats and biceps using bodyweight.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Concentration Curl',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Concentration-Curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/concentration-curl.mp4',
    description: 'An exercise that targets the biceps using dumbbells or a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Dip',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Triceps-Dip-resized.png?ezimgfmt=ngcb4/notWebP.png',
    videoUrl: 'common/public/videos/dip.mp4',
    description: 'An exercise that targets the triceps and chest using parallel bars.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Dip (Machine)',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/assisted-triceps-dip-resized-1.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/dip-machine.mp4',
    description: 'An exercise that targets the triceps and chest using a dip machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Hammer Curl',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/Dumbbell-Hammer-Curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/hammer-curl.mp4',
    description: 'An exercise that targets the biceps and forearms using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Lying Tricep Extension (Dumbbell)',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2023/10/Lying-one-arm-cross-body-dumbbell-triceps-extension.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/lying-tricep-extension-dumbbell.mp4',
    description: 'An exercise that targets the triceps using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Overhead Tricep Extension',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2018/04/Standing-overhead-one-arm-cable-triceps-extension-resized.png?ezimgfmt=ng:webp/ngcb4.png',
    videoUrl: 'common/public/videos/overhead-tricep-extension.mp4',
    description: 'An exercise that targets the triceps using a cable machine or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Preacher Curl',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2019/03/Machine-preacher-curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/preacher-curl.mp4',
    description: 'An exercise that targets the biceps using a preacher curl bench and barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Reverse Curl',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/09/EZ-bar-reverse-curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/reverse-curl.mp4',
    description: 'An exercise that targets the forearms and brachialis using a barbell or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Rope Tricep Pushdown',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Triceps-Rope-Pushdown-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/rope-tricep-pushdown.mp4',
    description: 'An exercise that targets the triceps using a cable machine and rope attachment.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Skull Crusher',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2018/11/Barbell-skull-crusher-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/skull-crusher.mp4',
    description: 'An exercise that targets the triceps using a barbell or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Wrist Curl',
    muscleGroup: 'Arms',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2022/04/Dumbbell-wrist-curl-over-bench-1.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/wrist-curl.mp4',
    description: 'An exercise that targets the forearms and wrist flexors using a barbell or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },

  // Back exercises
  {
    name: 'Back Extension',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/45-degree-hyperextension.png?ezimgfmt=ng:webp/ngcb4.png',
    videoUrl: 'common/public/videos/back-extension.mp4',
    description: 'An exercise that targets the lower back muscles.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Bent Over Barbell Row',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Bent-over-barbell-row.png?ezimgfmt=ng%3Awebp%2Fngcb4.png',
    videoUrl: 'common/public/videos/bent-over-barbell-row.mp4',
    description: 'An exercise that targets the upper back muscles and biceps using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Bent Over Dumbbell Row',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png',
    videoUrl: 'https://www.youtube.com/embed/DhewkuU_95s',
    description: 'An exercise that targets the upper back muscles and biceps using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  { 
    name: 'Chin-Up',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Chin-up.png',
    videoUrl: 'https://www.youtube.com/embed/1EJ3A3rEtlo',
    description: 'An exercise that targets the upper back muscles and biceps using bodyweight.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Close Grip Lat Pulldown',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Cable-close-grip-pull-down-resized.png',
    videoUrl: 'https://www.youtube.com/embed/uAyrz5GTEHg',
    description: 'An exercise that targets the upper back muscles and biceps using a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Deadlift',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Barbell-Deadlift-1.png',
    videoUrl: 'https://www.youtube.com/embed/wjsu6ceEkAQ',
    description: 'A compound exercise that targets the lower back, glutes, and hamstrings using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Good Morning',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/03/Barbell-good-morning.png',
    videoUrl: 'https://www.youtube.com/embed/nWyx81AfTos',
    description: 'An exercise that targets the lower back, glutes, and hamstrings using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Inverted Row',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/Inverted-row.png',
    videoUrl: 'https://www.youtube.com/embed/KOaCM1HMwU0',
    description: 'An exercise that targets the upper back muscles using a horizontal bar.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Lat Pulldown',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/01/Lat-pull-down-resized.png',
    videoUrl: 'https://www.youtube.com/embed/iKrKgWR9wbY',
    description: 'An exercise that targets the upper back muscles and biceps using a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Pull-Up',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/pull-up-2-resized.png',
    videoUrl: 'https://www.youtube.com/embed/XB_7En-zf_M',
    description: 'An exercise that targets the upper back muscles and biceps using bodyweight.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Seated Cable Row',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2023/09/Straight-back-seated-cable-row-with-straight-bar.png',
    videoUrl: 'https://www.youtube.com/embed/xQNrFHEMhI4',
    description: 'An exercise that targets the upper back muscles and biceps using a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'T-Bar Row',
    muscleGroup: 'Back',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/lever-t-bar-row-plate-loaded-resized.png',
    videoUrl: 'https://www.youtube.com/embed/KDEl3AmZbVE',
    description: 'An exercise that targets the upper back muscles and biceps using a T-bar row machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },

  // Chest exercises#
  {
    name: 'Bench Press',
    muscleGroup: 'Chest',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/04/Wide-reverse-grip-barbell-bench-press.png',
    videoUrl: 'https://www.youtube.com/embed/dGqI0Z5ul4k',
    description: 'A compound exercise that targets the chest using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Cable Crossover',
    muscleGroup: 'Chest',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2022/12/Standing-high-to-low-cable-fly.png',
    videoUrl: 'https://www.youtube.com/embed/taI4XduLpTk',
    description: 'An exercise that targets the chest using a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Chest Dip',
    muscleGroup: 'Chest',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Chest-dip.png',
    videoUrl: 'https://www.youtube.com/embed/4la6BkUBLgo',
    description: 'An exercise that targets the lower chest and triceps using parallel bars.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Chest Fly (Dumbbell)',
    muscleGroup: 'Chest',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2018/02/Incline-dumbbell-fly-resized.png',
    videoUrl: 'https://www.youtube.com/embed/Nhvz9EzdJ4U',
    description: 'An exercise that targets the chest using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Incline Bench Press',
    muscleGroup: 'Chest',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/incline-dumbbell-bench-press-resized.png',
    videoUrl: 'https://www.youtube.com/embed/8nNi8jbbUPE',
    description: 'A variation of the bench press that targets the upper chest using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Decline Bench Press',
    muscleGroup: 'Chest',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/Decline-Dumbbell-Bench-Press-resized.png',
    videoUrl: 'https://www.youtube.com/embed/Pf1nDoqx_1A',
    description: 'A variation of the bench press that targets the lower chest using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Push-Up',
    muscleGroup: 'Chest',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/push-up-tall-resized.png',
    videoUrl: 'https://www.youtube.com/embed/JyCG_5l3XLk',
    description: 'An exercise that targets the chest and triceps using bodyweight.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },

  // Legs exercises
  {
    name: 'Barbell Back Squat',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/barbell-squat-resized-FIXED-2.png',
    videoUrl: 'https://www.youtube.com/embed/R2dMsNhN3DE',
    description: 'A compound exercise that targets the quads, hamstrings, and glutes using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Bulgarian Split Squat',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/10/Bulgarian-split-squat.png',
    videoUrl: 'https://www.youtube.com/embed/TEXl2b3__S4',
    description: 'An exercise that targets the quads and glutes using a split stance.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Calf Raise',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Lever-Standing-Calf-Raise-resized.png',
    videoUrl: 'https://www.youtube.com/embed/eMTy3qylqnE',
    description: 'An exercise that targets the calf muscles using a calf raise machine or bodyweight.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Glute Bridge',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/08/barbell-glute-bridge.png',
    videoUrl: 'https://www.youtube.com/embed/cruqsnAyU6A',
    description: 'An exercise that targets the glutes and hamstrings.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Leg Press',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Sled-45-degree-Leg-Press-resized.png',
    videoUrl: 'https://www.youtube.com/embed/qCR9bN3G1t4',
    description: 'An exercise that targets the quads, hamstrings, and glutes using a leg press machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Lunge',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2018/11/Lunge-resized.png',
    videoUrl: 'https://www.youtube.com/embed/9gglI77Kzq8',
    description: 'An exercise that targets the quads, hamstrings, and glutes using bodyweight or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Romanian Deadlift',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Barbell-Romanian-Deadlift.png',
    videoUrl: 'https://www.youtube.com/embed/-m45n1_x32E',
    description: 'An exercise that targets the hamstrings and glutes using a barbell or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Step-Up',
    muscleGroup: 'Legs',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2021/03/Step-up.png',
    videoUrl: 'https://www.youtube.com/embed/wfhXnLILqdk',
    description: 'An exercise that targets the quads, hamstrings, and glutes using a step or box.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },

  // Shoulders exercises
  {
    name: 'Arnold Press',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Arnold-press-resized.png',
    videoUrl: 'https://www.youtube.com/embed/jeJttN2EWCo',
    description: 'An exercise that targets the shoulders using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Barbell Overhead Press',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2022/04/Standing-wide-grip-barbell-overhead-press.png',
    videoUrl: 'https://www.youtube.com/embed/j7ULT6dznNc',
    description: 'An exercise that targets the shoulders using a barbell.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Face Pull',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Face-pull-resized.png',
    videoUrl: 'https://www.youtube.com/embed/0Po47vvj9g4',
    description: 'An exercise that targets the rear delts and upper back using a cable machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Front Dumbbell Raise',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Dumbbell-Standing-Alternate-Front-Raise-resized.png',
    videoUrl: 'https://www.youtube.com/embed/hRJ6tR5-if0',
    description: 'An exercise that targets the front delts using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Lateral Dumbbell Raise',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/dumbbell-lateral-raise-resized.png',
    videoUrl: 'https://www.youtube.com/embed/XPPfnSEATJA',
    description: 'An exercise that targets the side delts using dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Reverse Pec Deck Fly',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/12/Machine-Fly-resized.png',
    videoUrl: 'https://www.youtube.com/embed/5YK4bgzXDp0',
    description: 'An exercise that targets the rear delts using a pec deck machine.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Seated Dumbbell Shoulder Press',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Shoulder-Press-resized.png',
    videoUrl: 'https://www.youtube.com/embed/FRxZ6wr5bpA',
    description: 'An exercise that targets the shoulders using dumbbells while seated.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Shrug',
    muscleGroup: 'Shoulders',
    synonyms: [],
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Barbell-Shrug-resized.png',
    videoUrl: 'https://www.youtube.com/embed/_t3lrPI6Ns4',
    description: 'An exercise that targets the trapezius muscles using a barbell or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
  {
    name: 'Upright Row',
    muscleGroup: 'Shoulders',
    synonyms: [], 
    imageUrl: 'https://cdn-0.weighttraining.guide/wp-content/uploads/2022/11/EZ-bar-wide-grip-upright-row.png',
    videoUrl: 'https://www.youtube.com/embed/um3VVzqunPU',
    description: 'An exercise that targets the shoulders and upper traps using a barbell or dumbbells.',
    sets: [
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
      { repetitions: 10, weight: 20 },
    ],
  },
]

export const workouts: IWorkout[] = [
  {
    id: 'workout1',
    name: 'Chest',
    category: 'Category1',
    exercises: [exercises[0], exercises[1], exercises[2]],
  },
  {
    id: 'workout2',
    name: 'Back',
    category: 'Category2',
    exercises: [exercises[3], exercises[4], exercises[5]],
  },
  {
    id: 'workout3',
    name: 'Legs',
    category: 'Category3',
    exercises: [exercises[6], exercises[7], exercises[8]],
  },
]

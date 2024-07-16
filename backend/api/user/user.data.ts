import { IAvatar } from 'backend/api/user/user.interface.ts'

export const avatars: IAvatar = {
  male: {
    light: [
      { name: 'maleLightPlusSize', url: '/@uix/src/common/public/character/male/light/plusSize.png' },
      { name: 'maleLightAverage', url: '/@uix/src/common/public/character/male/light/average.png' },
      { name: 'maleLightMuscular', url: '/@uix/src/common/public/character/male/light/muscular.png' },
    ],
    dark: [
      { name: 'maleDarkPlusSize', url: '/@uix/src/common/public/character/male/dark/plusSize.png' },
      { name: 'maleDarkAverage', url: '/@uix/src/common/public/character/male/dark/average.png' },
      { name: 'maleDarkMuscular', url: '/@uix/src/common/public/character/male/dark/muscular.png' },
    ],
  },
  female: {
    light: [
      { name: 'femaleLightPlusSize', url: '/@uix/src/common/public/character/female/light/plusSize.png' },
      { name: 'femaleLightAverage', url: '/@uix/src/common/public/character/female/light/average.png' },
      { name: 'femaleLightMuscular', url: '/@uix/src/common/public/character/female/light/muscular.png' },
    ],
    dark: [
      { name: 'femaleDarkPlusSize', url: '/@uix/src/common/public/character/female/dark/plusSize.png' },
      { name: 'femaleDarkAverage', url: '/@uix/src/common/public/character/female/dark/average.png' },
      { name: 'femaleDarkMuscular', url: '/@uix/src/common/public/character/female/dark/muscular.png' },
    ],
  },
  diverse: {
    light: [
      { name: 'diverseLightPlusSize', url: '/@uix/src/common/public/character/diverse/light/plusSize.png' },
      { name: 'diverseLightAverage', url: '/@uix/src/common/public/character/diverse/light/average.png' },
      { name: 'diverseLightMuscular', url: '/@uix/src/common/public/character/diverse/light/muscular.png' },
    ],
    dark: [
      { name: 'diverseDarkPlusSize', url: '/@uix/src/common/public/character/diverse/dark/plusSize.png' },
      { name: 'diverseDarkAverage', url: '/@uix/src/common/public/character/diverse/dark/average.png' },
      { name: 'diverseDarkMuscular', url: '/@uix/src/common/public/character/diverse/dark/muscular.png' },
    ],
  },
}

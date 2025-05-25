export type NavigationItem =
  | {
    label: string
    children: {
      label: string
      target: string
    }[]
  }
  | {
    label: string
    target: string
  }

export const navigation: NavigationItem[] = [
  {
    label: 'Helpers',
    children: [
      { label: 'Converter', target: '/converter' },
      { label: 'Hex', target: '/hex' },
      { label: 'Text', target: '/text' },
    ],
  },
  {
    label: 'InfiStas',
    target: '/infistas',
  },
]

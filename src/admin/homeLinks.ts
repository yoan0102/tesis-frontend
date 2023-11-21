export const mainMenu: {
  defaultOptions: Array<any>
} = {
  defaultOptions: [
    {
      name: 'users',
      icon: 'mdi:account',
      router: { name: 'admin-users' },
    },
    {
      name: 'tracks',
      icon: 'mdi:music-note-eighth',
      router: { name: 'admin-tracks' },
    },
  ],
}

type Link = {
  name: string
  icon: string
  router: { name: string }
}
export const mainMenu: {
  defaultOptions: Array<Link>
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

export const mainMenu: {
  defaultOptions: Array<any>
  accessLink: Array<any>
} = {
  defaultOptions: [
    {
      name: 'Inicio',
      icon: 'mdi-light:home',
      router: { name: 'home' },
    },
    {
      name: 'Buscar',
      icon: 'mdi-search',
      router: { name: 'search' },
    },
    {
      name: 'Orientaciones',
      icon: 'mdi:guitar-pick',
      router: { name: 'Guidelines' },
    },
  ],
  accessLink: [
    {
      name: 'Subir una canción',
      icon: 'mdi:music-note-plus',
      router: { name: 'tracks-create' },
    },
    {
      name: 'Canciones que te gustan',
      icon: 'mdi:heart-outline',
      router: { name: 'favorites' },
    },
  ],
}

export const customOptions: Array<any> = [
  // {
  //   name: 'Lista de Reproducción',
  //   icon: 'mdi:format-list-bulleted',
  //   router: ['/', 'playlist']
  // }
]

export const mainMenu: {
  defaultOptions: Array<any>
  accessLink: Array<any>
} = {
  defaultOptions: [
    {
      name: 'Inicio',
      icon: 'mdi-light:home',
      router: ['/', 'auth']
    },
    {
      name: 'Buscar',
      icon: 'mdi-search',
      router: '/search'
    }
  ],
  accessLink: [
    {
      name: 'Crear lista',
      icon: 'mdi:plus-box-outline'
    },
    {
      name: 'Canciones que te gustan',
      icon: 'mdi:heart-outline',
      router: ['/', 'favorites']
    }
  ]
}

export const customOptions: Array<any> = [
  {
    name: 'Lista de Reproducción',
    icon: 'mdi:format-list-bulleted',
    router: ['/', 'playlist']
  }
]

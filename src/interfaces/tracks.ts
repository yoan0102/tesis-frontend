// Generated by https://quicktype.io

export interface ResponseTrack {
  error?: boolean
  data: Track[]
}

export interface Track {
  duration: Duration
  _id: string
  name: string
  album: Album
  artist: Artist
  artitCNames: string[]
  cover: string
  gender: Gender
  published: boolean
  rating: number
  release_date: string
  url: string
  user_id: string
  createdAt: string
  updatedAt: string
}

export interface Album {
  name: string
  _id: string
}

export interface Gender {
  name: string
  _id: string
}

export interface Artist {
  name: string
  nationality: string
  nickname: string
  _id: string
}

export interface Duration {
  start: number
  end: number
}

import { vodDuration } from '../utils'

export interface VodDTO {
  id: string
  user_id: string
  user_login: string
  title: string
  url: string
  thumbnail_url: string
  view_count: number
  duration: string
  published_at: string
}

export interface HelixVodsResponse {
  data: Array<VodDTO>
}

export class Vod {
  id: string
  userId: string
  userLogin: string
  title: string
  url: string
  thumbnailUrl: string
  viewCount: number
  duration: string
  publishedAt: string

  constructor(dto: VodDTO) {
    this.id = dto.id
    this.userId = dto.user_id
    this.userLogin = dto.user_login
    this.title = dto.title
    this.url = dto.url
    this.thumbnailUrl =
      dto.thumbnail_url
        .replace('%{width}', '320')
        .replace('%{height}', '180') ||
      'https://vod-secure.twitch.tv/_404/404_processing_320x180.png'
    this.viewCount = dto.view_count
    this.duration = vodDuration(dto.duration)
    this.publishedAt = dto.published_at
  }
}

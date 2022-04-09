import { duration } from '~/utils/dates'

export interface StreamDTO {
  id: string
  user_id: string
  user_name: string
  game_id: string
  game_name: string
  type: string
  title: string
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids: string[]
}

export interface HelixStreamsResponse {
  data: StreamDTO[]
}

export class Stream {
  id: string
  userId: string
  userName: string
  profileImageUrl?: string
  login: string
  gameName: string
  title: string
  viewerCount: number
  duration: string
  thumbnailUrl: string

  constructor(dto: StreamDTO) {
    this.id = dto.id
    this.userId = dto.user_id
    this.userName = dto.user_name
    this.login = dto.user_name.toLowerCase()
    this.gameName = dto.game_name
    this.title = dto.title
    this.viewerCount = dto.viewer_count
    this.duration = duration(dto.started_at)
    this.thumbnailUrl = dto.thumbnail_url
      .replace('{width}', '320')
      .replace('{height}', '180')
  }
}

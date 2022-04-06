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
  gameId: string
  gameName: string
  type: string
  title: string
  viewerCount: number
  startedAt: string
  language: string
  thumbnailUrl: string
  tagIds: string[]

  constructor(dto: StreamDTO) {
    this.id = dto.id
    this.userId = dto.user_id
    this.userName = dto.user_name
    this.login = dto.user_name.toLowerCase()
    this.gameId = dto.game_id
    this.gameName = dto.game_name
    this.type = dto.type
    this.title = dto.title
    this.viewerCount = dto.viewer_count
    this.startedAt = duration(dto.started_at)
    this.language = dto.language
    this.thumbnailUrl = dto.thumbnail_url
      .replace('{width}', '320')
      .replace('{height}', '180')
    this.tagIds = dto.tag_ids
  }
}

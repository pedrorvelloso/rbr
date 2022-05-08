import type { StreamDTO, StreamerDTO, VodDTO } from '~/services/twitch/dtos'
import { vodDuration } from '~/services/twitch/utils'

import { duration } from '~/utils/dates'

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

export class Streamer {
  id: string
  login: string
  displayName: string
  type: string
  broadcasterType: string
  description: string
  profileImageUrl: string
  offlineImageUrl: string
  viewCount: number
  email: string
  createdAt: string

  constructor(dto: StreamerDTO) {
    this.id = dto.id
    this.login = dto.login
    this.displayName = dto.display_name
    this.type = dto.type
    this.broadcasterType = dto.broadcaster_type
    this.description = dto.description
    this.profileImageUrl = dto.profile_image_url
    this.offlineImageUrl = dto.offline_image_url
    this.viewCount = dto.view_count
    this.email = dto.email
    this.createdAt = dto.created_at
  }
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

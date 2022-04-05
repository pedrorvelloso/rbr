export interface StreamerDTO {
  id: string
  login: string
  display_name: string
  type: string
  broadcaster_type: string
  description: string
  profile_image_url: string
  offline_image_url: string
  view_count: number
  email: string
  created_at: string
}

export interface HelixStreamersResponse {
  data: StreamerDTO[]
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

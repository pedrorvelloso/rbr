interface HelixResponse<T> {
  data: Array<T>
}

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

export type HelixStreamsResponse = HelixResponse<StreamDTO>
export type HelixStreamersResponse = HelixResponse<StreamerDTO>
export type HelixVodsResponse = HelixResponse<VodDTO>

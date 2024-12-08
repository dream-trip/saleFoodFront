export type UserInfoResponseData = ApiResponseData<{
  id: number
  username: string
  password: string
}>
export type ImageData = ApiResponseData<{ url: string }>

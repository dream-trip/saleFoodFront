import * as UserType from './type'
import { request } from '@/utils/http'

export function getUserInfoApi(id: number) {
  return request<UserType.UserInfoResponseData>({
    url: 'api/user/info',
    method: 'get',
    params: {
      id: id,
    },
  })
}

export function uploadImageTest(formData: FormData) {
  return request<UserType.ImageData>({
    url: 'api/oss/upload',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  })
}

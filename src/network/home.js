import {request} from '../network/request.js'

export function getHomeUrl() {
  return request({
    url:'/home/multidata'
  }) 
}

import axios from 'axios'

export function request(config) {
  
    //创建实例
    const instance = axios.create({
      baseURL:'http://152.136.185.210:7878/api/hy66'
    })

    //拦截器
    instance.interceptors.request.use(config=>{
      // console.log(config);
      return config
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
      return res.data
    },err=>{
      
    })



  //发送网络请求
   return instance(config)

}
import axios from 'axios'
import store from '@/store'
let baseURL = process.env.BASE_URL;
if (process.env.NODE_ENV == "production") {
	baseURL = 'http://ticket.sunlue.com/api/'
}else{
	baseURL='http://ticket.sunlue.io/api/'
}

// 创建一个axios请求
const service = axios.create({
	baseURL: baseURL, // api 的 base_url
	timeout: 5000 // 超时时间
})

// 请求拦截
service.interceptors.request.use(
	config => {
		config.headers['auth-token'] = store.getters.token
		config.headers.common['authorization'] = window.location.hostname
		config.onUploadProgress = function() {}
		return config
	},
	error => {
		Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => {
		const result = response.data;
		if (result.code !== 0) {
			return Promise.reject('error')
		} else {
			iView.LoadingBar.finish();
			return result;
		}
	},
	error => {
		return Promise.reject(error)
	}
)

export default service

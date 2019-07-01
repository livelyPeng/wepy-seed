import wxRequest from '../utils/wxRequest'
import apiUrl from '../apiUrl'
export default {
  // 请求实例
  gettext (params) {
    return wxRequest.requestData(apiUrl.menus, params).then(res => res)
  }
}

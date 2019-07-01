// 引入请求封装函数
import wxRequest from '../utils/wxRequest'
// 配置基础地址
wxRequest.requestData.baseUrl = ''
// 地址
const proxyAddress = wxRequest.requestData.baseUrl + 'wyethErp/wyeth' // 开发环境
// const proxyAddress = '/erp' // 线上环境

const publics = {
  menus: proxyAddress + '/menus', // 菜单数据地址
  token: proxyAddress + '/token' // token
}
export default Object.assign({}, publics)

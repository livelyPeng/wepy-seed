import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: ''
  }
  methods = {
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}

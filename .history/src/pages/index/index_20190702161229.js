import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  constructor(){
    thjis.handleSub=
  }
  config = {
    navigationBarTitleText: 'questions'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  //发布问题
  handleSub(){

  }
  render () {
    return (
      <View className='index'>
        <View className='questions'>questions</View>
        <Button className='button' onClick={this.handleSub}>发布</Button>
      </View>
     
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Dialog from '../dialog/dialog'

export default class Index extends Component {
  constructor(){
    this.handleSub=this.handleSub.bind(this);
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
        <Dialog>a</Dialog>
        <Button className='button' onClick={this.handleSub}>发布</Button>
      </View>
     
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View,  Button } from '@tarojs/components'
import './index.less'
import AddQutions from './addQuestion'

export default class Index extends Component {
  constructor(){
    this.handleSub=this.handleSub.bind(this);
  }
  state={
    showQuestionsModel: false
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
        {
          this.state.showQuestionsModel ? <AddQutions /> : 
        }
          
        <Button className='button' onClick={this.handleSub}>发布</Button>
      </View>
     
    )
  }
}

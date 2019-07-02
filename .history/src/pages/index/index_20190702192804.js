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
  onhandleSub(){
    this.setState({
      showQuestionsModel:true
    })
  }
  onHandleClonse(){
    this.setState({
      showQuestionsModel:false
    })
  }
  render () {
    return (
      <View className='index'>
        <View className='questions'>questions</View>
        {
          this.state.showQuestionsModel ? <AddQutions onHandleClonse={this.onHandleClonse.bind(this)} /> : false
        }
        <Button className='button' onClick={this.onhandleSub.bind(this)}>发布</Button>
      </View>
     
    )
  }
}

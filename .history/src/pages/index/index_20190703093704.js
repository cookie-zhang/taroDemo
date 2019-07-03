import Taro, { Component } from '@tarojs/taro'
import { View, Text,  Button } from '@tarojs/components'
import './index.less'
import AddQutions from './addQuestion'

function getStore(key){
  let str = Taro.getStorageInfoSync(key);
  if(!str){
    return []
  }
  return JSON.parse(str);
}
function setStore(key,obj){
  let str = obj;
  if(typeof obj == 'object'){
    str = JSON.stringify(str)
  }
  Taro.setStorageSync(key,str)
}

export default class Index extends Component {
  constructor(){
  this.onhandleSub=this.onhandleSub.bind(this);
  }
  state={
    showQuestionsModel: false,
    optionsList:getStore('questions')
  }
  config = {
    navigationBarTitleText: 'questions'
  }
  nentWillMount () { }

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
  onRecive(options){
    let { optionsList } = this.state;
    optionsList.push(options);
    this.setState({
      optionsList:optionsList
    },()=>{
      setStore('')
    })
    this.onHandleClonse();
    Taro.showToast({title:'发布成功 ', icon:'success'});

  }
  render () {
    let { optionsList } = this.state;
    return (
      <View className='index'>
        <View className='questions'>questions</View>
        {
          this.state.showQuestionsModel ? <AddQutions onHandleClonse={this.onHandleClonse.bind(this)} onRecive={this.onRecive.bind(this)} /> : false
        }
        {
          optionsList.map((item, index)=>{
            return (
              <View key={index}>
                <View>
                  <Text>{item.title}</Text>
                </View>
                <View>
                  <Text>{item.des}</Text>
                </View>
              </View>
            )
          })
        }
        <Button className='button' onClick={this.onhandleSub}>发布</Button>
      </View>
     
    )
  }
}

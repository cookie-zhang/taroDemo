import Taro, { Component } from '@tarojs/taro'
import { View, Text,  Button } from '@tarojs/components'
import './index.less'
import AddQutions from './addQuestion'

function getStore(key){
  let str = Taro.getStorageSync(key);
  if(!str){
    console.log(str)
    return []
  }
  console.log(str)
  return JSON.parse(str);
}
function setStore(key,obj){
  let str = obj;
  if(typeof obj == 'object'){
    str = JSON.stringify(str)
  }
  console.log(str)
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
      setStore('questions',this.state.optionsList)
    })
    this.onHandleClonse();
    Taro.showToast({title:'发布成功 ', icon:'success'});

  }
  add(){
    
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
              <View className='questionContanier' key={index}>
                <View  className='questionsList' >
                  <View className='questionsList-title' >{item.title}</View>
                  <View className='questionsList-des' >{item.des}</View>
                </View>
                <View className='questionGodContanier'>
                  <View onClick={this.add.bind(this,item)}>+</View>
                    <Text className='num'>{item.vote?item.vote:0}</Text>
                  <View onClick={this.min.bind(this,item)}>-</View>
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

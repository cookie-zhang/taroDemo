import Taro, { Component } from '@tarojs/taro'
import { View, Text,  Button } from '@tarojs/components'
import './index.less'
import AddQutions from './addQuestion'

function getStore(key){
  let str = Taro.getStorageSync(key);
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
    optionsList.push({id: parseInt(Math.random()*10000),...options});
    this.setState({
      optionsList:optionsList
    },()=>{
      setStore('questions',this.state.optionsList)
    })
    this.onHandleClonse();
    Taro.showToast({title:'发布成功 ', icon:'success'});

  }
  //点赞加
  addVote(item){
    let { optionsList } = this.state;
    if(item){
      item.vote = item.vote?(item.vote+1):1;
    }
    let arr = optionsList.map((itemQustions)=>{
      if(itemQustions.id == item.id){
        itemQustions={...item}
      }
      return itemQustions;
    })
    this.setState({
      optionsList:arr
    },()=>{
      setStore('questions',this.state.optionsList)
    })
  }
  //点赞减
  minVote(item){
    let { optionsList } = this.state;
    if(item){
      item.vote = item.vote?(item.vote-1):0;
    }
    let arr = optionsList.map((itemQustions)=>{
      if(itemQustions.id == item.id){
        itemQustions={...item}
      }
      return itemQustions;
    })
    this.setState({
      optionsList:arr
    },()=>{
      setStore('questions',this.state.optionsList)
    })
  }
  render () {
    let { optionsList } = this.state;
    optionsList.sort((a,b)=>a.vote<b.vote);
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
                  <View onClick={this.addVote.bind(this,item)}>+</View>
                    <Text className='num'>{item.vote?item.vote:0}</Text>
                  <View onClick={this.minVote.bind(this,item)}>-</View>
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

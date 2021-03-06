/* eslint-disable react/no-unused-state */
import Taro,{ Component } from '@tarojs/taro'
import {  View, Input, Textarea, Button } from '@tarojs/components'
import Dialog from '../dialog/dialog'
import './addquetions.less'

class AddQutions extends Component {
    //取消关闭弹窗 上层组件需要传递方法去关闭
    handleClose(){
        this.props.onHandleClonse();
    }
    okSub(){
        if(this.state.title && this.state.des ){
            this.props.onRecive&&this.props.onRecive(this.state.title,)
            this.props.onHandleClonse();
            Taro.showToast({title:'发布成功 ', icon:'success'})
        }else{
           Taro.showToast({title:'请输入标题或者描述 ', icon:'warning'})
        }
    }
    changeTitle(value){
        this.setState({
            title: value
        })
    }
    changeDes(value){
        this.setState({
            des: value
        })
    }
    render(){
        return(
            <Dialog>
                <View className='addquetions'>
                    <View className='addquetions-body'>
                        <Input onInput={this.changeTitle.bind(this)} className='questions-title' placeholder='请输入title' />
                        <Textarea onInput={this.changeDes.bind(this)} className='questions-des' placeholder='请输入描述' />
                        <View className='btn-group'>
                            <Button onClick={this.okSub.bind(this)} className='btn-questions ok'>确定</Button>
                            <Button onClick={this.handleClose.bind(this)} className='btn-questions cancel'>取消</Button>
                        </View>
                    </View>
                </View>
            </Dialog>
        )
    }
}
export default AddQutions;
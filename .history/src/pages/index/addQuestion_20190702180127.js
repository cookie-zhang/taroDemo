import Taro,{ Component } from '@tarojs/taro'
import {  View, Input, Textarea, Button } from '@tarojs/components'
import Dialog from '../dialog/dialog'
import './addquetions.less'

class AddQutions extends Component {
    //取消关闭弹窗 上层组件需要传递方法去关闭
    handleClose(){
        this.props.onHandleClonse();
    }
    render(){
        return(
            <Dialog>
                <View className='addquetions'>
                    <View className='addquetions-body'>
                        <Input className='questions-title' placeholder='请输入title' />
                        <Textarea className='questions-des' placeholder='请输入描述' />
                        <View className='btn-group'>
                            <Button className='btn-questions ok'>确定</Button>
                            <Button onClick={this.handleClose.bind(this)} className='btn-questions cancel'>取消</Button>
                        </View>
                    </View>
                </View>
            </Dialog>
        )
    }
}
export default AddQutions;
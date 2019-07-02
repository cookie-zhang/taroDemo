import Taro,{ Component } from '@tarojs/taro'
import {  View, Input, Textarea } from '@tarojs/components'
import Dialog from '../dialog/dialog'
import './addquetions.less'

class AddQutions extends Component {

    render(){
        return(
            <Dialog>
                <View className='addquetions'>
                    <View className='addquetions-body'>
                    <Input placeholder='请输入title'></Input>
                    <Textarea placeholder='请输入描述'></Textarea>
                    </View>
                </View>
            </Dialog>
        )
    }
}
export default AddQutions;
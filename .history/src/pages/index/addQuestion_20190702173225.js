import Taro,{ Component } from '@tarojs/taro'
import {  View, Input, Textarea, Button } from '@tarojs/components'
import Dialog from '../dialog/dialog'
import './addquetions.less'

class AddQutions extends Component {

    render(){
        return(
            <Dialog>
                <View className='addquetions'>
                    <View className='addquetions-body'>
                        <Input className='questions-title' placeholder='请输入title' />
                        <Textarea className='questions-des' placeholder='请输入描述' />
                    </View>
                    <View>
                        <Button></Button>
                    </View>
                </View>
            </Dialog>
        )
    }
}
export default AddQutions;
import Taro,{ Component } from '@tarojs/taro'
import {  View, Text, Input, Textarea  } from '@tarojs/components'
import Dialog from '../dialog/dialog'
import './addquetions.less'

class AddQutions extends Component {

    render(){
        return(
            <Dialog>
                <View className='addquetions'>
                 questions
                </View>
            </Dialog>
        )
    }
}
export default AddQutions;
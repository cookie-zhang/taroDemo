import Taro,{ Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './dialog.less'


class Dialog extends Component {

    render(){
        return(
            <View className='dialogCon'>
                {
                    this
                }
            </View>
        )
    }
}
export default Dialog;
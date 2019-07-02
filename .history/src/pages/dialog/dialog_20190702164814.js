import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './dialog.less'


class Dialog extends Component {

    render(){
        return(
            <View className='dialogCon'>
                {
                    this.props.children
                }
            </View>
        )
    }
}
export default Dialog;
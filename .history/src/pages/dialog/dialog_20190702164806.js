import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './dialog.less'


class Dialog extends Component {

    render(){
        return(
            <View className='dialogCont'>
                {
                    this.props.children
                }
            </View>
        )
    }
}
export default Dialog;
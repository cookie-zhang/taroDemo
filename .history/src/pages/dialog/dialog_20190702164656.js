import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './dialog.less'
import Di

class Dialog extends Component {

    render(){
        return(
            <View>
                {
                    this.props.children
                }
            </View>
        )
    }
}
export default Dialog;
import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './dialog.less'
import Dialog from '../dialog/dialog'

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
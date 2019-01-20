import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

class GifItem extends Component{

  _onPress = () => {
    this.props.onPressItem(this.props.item)
  }

  render(){
    return(
      <TouchableOpacity {...this.props}
        onPress={this._onPress}>
        <Image style={{width:125,height:100}}
          source={{uri:this.props.item.images.downsized.url}}/>
      </TouchableOpacity>
    )
  }
}

export default GifItem;

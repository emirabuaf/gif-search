import React,{Component} from 'react';
import {View,Text,Modal,TouchableOpacity,Image} from 'react-native';

class GifModal extends Component {


  render(){
    return(
      <View >
        <Modal
           animationType="slide"
           transparent={false}
           visible={this.props.modalVisible}
           onRequestClose={() => {
          }}>
            <View style={{height:250,marginTop:200}}>
                <Image
                  style= {{flex:1,width:380 }}
                  source={{uri:this.props.selectedItem.images.downsized.url}}/>
                <TouchableOpacity
                  onPress={() => { this.props.hideModal() }}>
                  <Text style={{alignSelf:'center'}}>Close</Text>
                </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

export default GifModal;

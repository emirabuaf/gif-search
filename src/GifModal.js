import React,{Component} from 'react';
import {View,Text,Modal,TouchableOpacity,Image} from 'react-native';

class GifModal extends Component {

  state = {
    isModalVisible: this.props.modalVisible
  }
  _setModalVisible(visible) {
  this.setState({isModalVisible: visible});
}

  render(){
    return(
      <View >
        <Modal
           animationType="slide"
           transparent={false}
           visible={this.state.isModalVisible}
           onRequestClose={() => {
            Alert.alert('Modal has been closed.');
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

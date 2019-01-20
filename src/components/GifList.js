import React, {Component} from 'react';
import{ ScrollView,View, Text, FlatList} from 'react-native';
import GifItem from './GifItem';
import GifModal from './GifModal';

class GifList extends Component{

  state = {
    isModalVisible:false,
    selectedItem:null
  }

  _onPressItem=(item) => {
    this._showModal(item)
  }

  _hideModal = () => {
    this.setState({isModalVisible:false})
  }

  _showModal = (item) => this.setState({
    isModalVisible:true,
    selectedItem:item
  })

  render(){
    return(
      <View>
        <FlatList
        data={this.props.gifs}
        numColumns={3}
        renderItem={({item}) =>
        <GifItem
          item={item}
          onPressItem= {() => this._onPressItem(item)} />
       }
        keyExtractor={(item) => item.id }
        />
      { this.state.isModalVisible && <GifModal selectedItem={this.state.selectedItem} modalVisible={this.state.isModalVisible} hideModal={this._hideModal} /> }
      </View>
    )
  }
}



export default GifList;

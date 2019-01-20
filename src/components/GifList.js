import React, {Component} from 'react';
import{ ScrollView,View, Text, FlatList} from 'react-native';
import GifItem from './GifItem';
import GifModal from './GifModal';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';



class GifList extends Component{


  render(){
    return(
      <View>
        <FlatList
        data={this.props.gifs}
        numColumns={3}
        renderItem={({item}) =>
        <GifItem
          item={item}
          onPressItem= {(selectedItem) => this.props.actions.showModal({selectedItem})} />
       }
        keyExtractor={(item) => item.id }
        />
        { this.props.isModalVisible && <GifModal selectedItem={this.props.selectedItem} modalVisible={this.props.isModalVisible} hideModal={this.props.actions.hideModal} /> }
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    isModalVisible:state.modal.isModalVisible,
    selectedItem:state.modal.selectedItem
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(GifList);

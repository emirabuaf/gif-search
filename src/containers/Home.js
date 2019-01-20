import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';


class Home extends React.Component {


  render() {
    return (
      <ScrollView>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList gifs={this.props.gifs} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs:state.gifs.data
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(Actions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

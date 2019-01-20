import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from './src/SearchBar';
import GifList from './src/GifList';
import axios from 'axios';

export default class App extends React.Component {

  state = {
    gifs:[]
  }

  handleTermChange = async (term) =>{
  const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=1crAtkyf4etLc0sxzZT10EgAYW12LlbS`);
  this.setState({gifs:response.data.data})
}


  render() {
    return (
      <ScrollView>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </ScrollView>
    );
  }
}

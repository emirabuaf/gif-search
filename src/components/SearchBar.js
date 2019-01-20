import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Input,Card,CardSection} from './common';


class SearchBar extends Component {

  onInputChange(term){
    this.props.onTermChange(term);
  }

  render(){
    return(
      <View>
      <Card>
        <CardSection>
          <Input
            placeholder="GIF-SEARCH"
            onChangeText={this.onInputChange.bind(this)}
             />
        </CardSection>
      </Card>
      </View>
    )
  }
}

export default SearchBar;

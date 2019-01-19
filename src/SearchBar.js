import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Input,Card,CardSection} from './components/common';


class SearchBar extends Component {

  state={
    term:''
  }

  onInputChange(term){
    this.setState({term})
    this.props.onTermChange(term);

  }

  render(){
    return(
      <View>
      <Card>
        <CardSection>
          <Input
            placeholder="GIF-SEARCH"
            value={this.state.term}
            onChangeText={this.onInputChange.bind(this)}
             />
        </CardSection>
      </Card>
      </View>
    )
  }
}

export default SearchBar;

import React, {useReducer} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import users from '../data/Users';

export default props => {
  function getUserItem({item}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: item.avatarUrl}}}
        key={item.id}
        title={item.name}
        subtitle={item.email}
      />
    );
  }
  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};

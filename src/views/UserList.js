import React from 'react';
import {Alert} from 'react-native';
import {View, FlatList} from 'react-native';
import {ListItem, Avatar, Icon} from 'react-native-elements';
import {Button} from 'react-native-elements/dist/buttons/Button';
// import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import users from '../data/Users';

export default props => {
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuario', 'Deseja excluir o usuario?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete');
        },
      },
      {
        text: 'Nao',
      },
    ]);
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        key={user.id}
        onPress={() => props.navigation.navigate('UserForm', user)}
        bottomDivider>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Button
          onPress={() => {
            props.navigation.navigate('UserForm', user);
          }}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => {
            confirmUserDeletion(user);
          }}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </ListItem>
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

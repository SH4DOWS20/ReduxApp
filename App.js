import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const [newItem, setNewItem] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleAddItem = () => {
    dispatch(addItem(newItem));
    setNewItem('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={newItem}
        onChangeText={(text) => setNewItem(text)}
        placeholder="Enter a new item"
      />
      <Button title="Add Item" onPress={handleAddItem} />
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/11/FlatList_item_1.png' }}
            />
            <Text style={{ marginLeft: 10 }}>{item}</Text>
          </View>
        )}
        />
        </View>
      );
    };
    
    export default App;
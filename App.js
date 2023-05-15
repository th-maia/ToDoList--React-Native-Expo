import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import Empty from './components/Empty';
import Task from './components/Task';
import Input from './components/Input';


export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTask) => {
      return [
        {
          value: value,
          key: Math.random().toString()
        },
        ...prevTask
      ]
    })
  };

  const deleteItem = (key) => {
    setData((prevTask) => {
      return prevTask.filter((task) => { return task.key != key} )
    })
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => <Header/>}
        ListEmptyComponent={() => <Empty/>}
        renderItem={({item}) => <Task item={item} deleteItem={deleteItem} />}
      />
      <View>
        <Input submitHandler={submitHandler}/>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingVertical: 60
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

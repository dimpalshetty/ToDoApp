import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import Todo from './components/todo';
import AddTodo from './components/addTodo';




export default function App() {
  const [todos, settodos] = useState([
    { text: 'buy coffee', key:'1'},
    { text: 'create an app', key:'2'},
    { text: 'play on the switch', key:'3'},

  ]);

  const pressHandler = (key) => {
    settodos((prevTodos) => {
      return prevTodos.filter (todo => todo.key!= key);
    })
  }

  const submitHandler=(text)=>{
    settodos((prevTodos)=>{
      return[
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
        <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data= {todos}
          renderItem={({item}) => (
            < Todo item={item} pressHandler={pressHandler}/>

          )}
          
          
          />

        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
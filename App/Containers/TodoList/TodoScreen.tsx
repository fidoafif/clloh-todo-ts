import React, { FunctionComponent } from 'react'
import { Platform, Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Style from './TodoScreenStyle'
import { Colors } from '../../Theme'
import { Dispatch } from 'redux'
import { AppState } from '../../Stores'
import { ITodo } from '../../Stores/Todo/Actions.type'
import { addTodo, deleteTodo } from '../../Stores/Todo/Actions'
import { TouchableOpacity } from 'react-native-gesture-handler'

import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

interface TodoScreenBaseProps {
  todos: ITodo[];
  doAddTodo: (data: any) => void;
  doDeleteTodo: (id: string) => void;
  navigation: any;
}

const TodoScreenBase: FunctionComponent<TodoScreenBaseProps> = (props) => {
  const { todos, doDeleteTodo } = props

  const renderItem = (item: ITodo) => {
    return (
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderWidth: 0.5,
          borderRadius: 8,
          elevation: 5,
          marginBottom: 8,
          paddingHorizontal: 8,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditTodoScreen', { todo: item })}
          style={{ flexDirection: 'row', alignContent: 'center', paddingVertical: 8 }}
        >
          <Text style={{ flex: 1 }}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              doDeleteTodo(item.id)
            }}
            style={{
              borderRadius: 25,
              backgroundColor: Colors.error,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: Colors.white }}>{'Delete'}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={Style.container}>
      {todos.length ? (
        <FlatList
          style={{ width: '100%', top: 15 }}
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem(item)}
        />
      ) : (
        <View style={{ alignItems: 'center' }}>
          <Text>{'No Data'}</Text>
        </View>
      )}

      <ActionButton
        buttonColor={Colors.primary}
        onPress={() => props.navigation.navigate('AddTodoScreen')}
      >
        <Icon name="md-create" style={Style.actionButtonIcon} />
      </ActionButton>
    </View>
  )
}

const mapStateToProps = (state: AppState): any => ({
  todos: state.todoReducer,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doAddTodo: (data: { title: string, description: string }) => {
    dispatch(addTodo(data))
  },
  doDeleteTodo: (id: string) => {
    dispatch(deleteTodo(id))
  },
})

const TodoScreen = connect(mapStateToProps, mapDispatchToProps)(TodoScreenBase)

export { TodoScreen }

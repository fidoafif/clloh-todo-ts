import React, { FunctionComponent, useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Style from './TodoScreenStyle'
import { Colors } from '../../Theme'
import { Dispatch } from 'redux'
import { AppState } from '../../Stores'
import { editTodo } from '../../Stores/Todo/Actions'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { ITodo } from '../../Stores/Todo/Actions.type'

interface EditTodoScreenBaseProps {
  doEditTodo: (data: any) => void;
  navigation: any;
}

const EditTodoScreenBase: FunctionComponent<EditTodoScreenBaseProps> = (props) => {
  const { doEditTodo, navigation } = props

  const { params } = navigation.state
  const todo: ITodo = { ...params.todo }

  const [title, setTitle] = useState(todo.title)
  const [description, setDesc] = useState(todo.description)

  const formFilled = () => {
    return title && description
  }

  return (
    <View style={Style.container}>
      <ScrollView>
        <TextInput
          placeholder={'Title'}
          style={{
            height: 40,
            borderRadius: 8,
            borderColor: 'gray',
            borderWidth: 0.5,
            paddingHorizontal: 8,
            marginBottom: 16,
          }}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <TextInput
          placeholder={'Description'}
          style={{
            height: 80,
            borderRadius: 8,
            borderColor: 'gray',
            borderWidth: 0.5,
            paddingHorizontal: 8,
            marginBottom: 16,
          }}
          numberOfLines={5}
          onChangeText={(text) => setDesc(text)}
          value={description}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          const entry: ITodo = todo
          entry.title = title
          entry.description = description
          entry.updatedAt = new Date().toString()
          doEditTodo(entry)
          props.navigation.goBack()
        }}
        disabled={!formFilled()}
        style={{
          borderRadius: 25,
          backgroundColor: formFilled() ? Colors.success : 'grey',
          paddingHorizontal: 8,
          paddingVertical: 4,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: Colors.white }}>{'Update Todo'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state: AppState): any => ({
  todos: state.todoReducer,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doEditTodo: (data: ITodo) => {
    dispatch(editTodo(data))
  },
})

const EditTodoScreen = connect(mapStateToProps, mapDispatchToProps)(EditTodoScreenBase)

export { EditTodoScreen }

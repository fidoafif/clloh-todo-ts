import React, { FunctionComponent, useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Style from './TodoScreenStyle'
import { Colors } from '../../Theme'
import { Dispatch } from 'redux'
import { AppState } from '../../Stores'
import { addTodo } from '../../Stores/Todo/Actions'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

interface AddTodoScreenBaseProps {
  doAddTodo: (data: any) => void;
  navigation: any;
}

const AddTodoScreenBase: FunctionComponent<AddTodoScreenBaseProps> = (props) => {
  const { doAddTodo } = props
  useEffect(() => {}, [])

  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')

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
          doAddTodo({ title, description })
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
        <Text style={{ color: Colors.white }}>{'Add Todo'}</Text>
      </TouchableOpacity>
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
})

const AddTodoScreen = connect(mapStateToProps, mapDispatchToProps)(AddTodoScreenBase)

export { AddTodoScreen }

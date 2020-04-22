import { createAppContainer, createStackNavigator } from 'react-navigation'


import SplashScreen from '../Containers/SplashScreen/SplashScreen'
import { TodoScreen } from '../Containers/TodoList/TodoScreen'
import { Colors } from '../Theme'
import { AddTodoScreen } from '../Containers/TodoList/AddTodo'
import { EditTodoScreen } from '../Containers/TodoList/EditTodo'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.

    TodoScreen: TodoScreen,
    AddTodoScreen: AddTodoScreen,
    EditTodoScreen: EditTodoScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    // headerMode: 'none',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 16

      },
      headerTitle: 'Todo App',
    }
  }
)

export default createAppContainer(StackNavigator)

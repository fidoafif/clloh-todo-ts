import React, { FunctionComponent, useEffect } from 'react'
import NavigationService from '../../Services/NavigationService'
import AppNavigator from '../../Navigators/AppNavigator'
import { View } from 'react-native'
import styles from './RootScreenStyle'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { startup } from '../../Stores/Startup/Actions'
import { AppState } from '../../Stores'

interface RootScreenBaseProps {
  startup?: typeof startup;
}

const RootScreenBase: FunctionComponent<RootScreenBaseProps> = ({ startup }) => {
  useEffect(() => {
    if (startup) {
      startup()
    }
  }, [startup])

  return (
    <View style={styles.container}>
      <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </View>
  )
}

const mapStateToProps = (state: AppState): any => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  startup: () => dispatch(startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreenBase)

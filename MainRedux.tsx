import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import ReduxList from './screens/ReduxList'
import { store } from './Redux/reduxwithts/store'

export default function MainRedux() {
  return (
    <Provider store = {store}>

        <ReduxList />

    </Provider>

  )
}

const styles = StyleSheet.create({})
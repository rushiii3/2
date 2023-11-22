import React from 'react'
import { View, Text, Touchable, Image } from 'react-native'
import { Button } from 'react-native-paper';

import styles from './screenheader.style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ScreenHeaderBtn = ({iconUrl,dimension,handlepress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image 
      source={iconUrl}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
  </TouchableOpacity>
    // <Button icon={iconUrl} mode="text" onPress={() => console.log('Pressed')}>
    
    // </Button>
  )
}

export default ScreenHeaderBtn
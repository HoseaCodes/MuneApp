import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header({
        title,
        iconLeft,
        iconRight,
        IconType,
        navigation
        }: {
        title: string,
        iconLeft: string, 
        iconRight: string, 
        IconType: any,
        navigation: any
}) {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconType name={iconLeft} size={24} color="#3B423D" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <IconType name={iconRight} size={24} color="#949895" />
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 16,
  },
  headerText: {
      fontSize: 20,
      fontWeight: '700',
      lineHeight: 30,
      color: '#3B423D',
      textAlign: 'center',
  },
})
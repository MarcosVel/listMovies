import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function Detalhes(props) {
  return (

    <TouchableWithoutFeedback onPress={ props.voltar }>
      <View style={ styles.container }>
        <TouchableWithoutFeedback onPress={ () => { } } style={ styles.modalContainer }>
          <View style={ styles.modalContainer }>
            <TouchableOpacity style={ styles.btnVoltar } onPress={ props.voltar }>
              <Text style={ { color: '#fff', fontSize: 16 } }>Voltar</Text>
            </TouchableOpacity>

            <Text style={ styles.title }>{ props.filme.nome }</Text>
            <Text style={ styles.sinopse }>Sinopse: </Text>
            <Text style={ styles.descricao }>{ props.filme.sinopse }</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '98%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingBottom: 50

  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  }
})
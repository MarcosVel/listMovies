import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Filmes({ data }) {
  return (
    <View>
      <View style={ styles.card }>
        <Text style={ styles.nome }>{ data.nome }</Text>
        <Image
          source={ { uri: data.foto } }
          style={ styles.capa }
        />

        <View style={ styles.areaBotao }>
          <TouchableOpacity style={ styles.botao } onPress={ () => { } }>
            <Text style={ styles.botaoTexto }>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2
  },
  nome: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  capa: {
    height: 250,
    zIndex: 2
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 3
  },
  botao: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
  }
})
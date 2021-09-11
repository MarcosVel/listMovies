import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import api from './src/services/api';
import Filmes from './src/filmes';

export default function App() {
  const [ filmes, setFilmes ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      // console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={ styles.loading }>
        <ActivityIndicator color='#121212' size={ 45 } />
      </View>
    )
  } else {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ filmes }
          keyExtractor={ item => String(item.id) } // passando o id para String - preferível pelo FlatList
          renderItem={ ({ item }) =>
            <Filmes
              data={ item }
            />
          }
          contentContainerStyle={ { paddingBottom: 30 } }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
  }
});

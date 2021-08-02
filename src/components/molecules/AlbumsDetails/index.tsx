import { styled } from '@emotion/native/types/base'
import React from 'react'
import { Button, Image, Text, View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../../models/IState'
import { actualizarSelectedAlbum } from '../../store/actions/Albu'



const AlbumsDetails: React.FC = () => {
    const dispatch = useDispatch();
    const selectedAlbum = useSelector((state: IState) => state.albumes.selectedAlbum);
    const albumes = useSelector((state: IState) => state.albumes.albumes);
    const { userId, id, title, photo } = albumes[selectedAlbum || 0];

    const onBackPress = () => {
        dispatch(actualizarSelectedAlbum(null));
    }
    return (

        <View>
            <Text>USuario_ID: {userId}</Text>
            <Text>ID: {id}</Text>
            <Text>Titulo: {title}</Text>

            <FlatList data={photo}
                renderItem={({ item }) =>
                    <Image
                        style={styles.image}
                        source={{ uri: item.url }}
                    />
                }
            />


            <Button title="Atras" onPress={onBackPress} />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,

    }
});


export default AlbumsDetails

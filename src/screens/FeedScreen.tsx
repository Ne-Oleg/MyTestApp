import {observer} from 'mobx-react';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import rootStore from '../state/RootState';
import {FeedScreenStyle} from '../styles/screens/FeedScreenStyle';

export const FeedScreen = observer(() => {
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const getImages = async (page: number) => {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=20`,
        {method: 'Get', headers: {'Content-Type': 'application/json'}},
      );
      const result = await response.json();

      rootStore.setImages([...rootStore.userImages, ...result]);
    } catch (e) {
      console.log(e);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getImages(page);
    setPage(prevState => prevState + 1);
    setRefreshing(false);
  }, []);
  useEffect(() => {
    setRefreshing(true);
    getImages(page);
    setRefreshing(false);
  }, []);

  const renderItem = (item: any) => {
    return (
      <ImageBackground
        source={{uri: item.item.download_url}}
        style={FeedScreenStyle.itemContainer}
        imageStyle={FeedScreenStyle.imageStyle}>
        <View style={FeedScreenStyle.textContainer}>
          <Text style={FeedScreenStyle.textStyle}>{item.item.author}</Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <View style={FeedScreenStyle.container}>
      {rootStore.images.length > 0 && (
        <FlatList
          data={rootStore.userImages}
          keyExtractor={(item, i) => item.download_url + i}
          renderItem={renderItem}
          extraData={rootStore.userImages}
          onEndReached={onRefresh}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
});

import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  ActivityIndicator,
  VirtualizedList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {setQuery, loadMore, resetImages} from '../../middleware';
import {AppHeader} from '../../components';
import {styles} from './styles';

export const Item = ({name, total, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.leftBox}>
        <Image source={{uri: image}} style={styles.userLogo} />
      </View>
      <View style={styles.rightBox}>
        <Text numberOfLines={1} style={styles.title}>
          Username: {name}
        </Text>
        <Text numberOfLines={1} style={styles.title}>
          Total Posted: {total}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Search = (props) => {
  const [query, setQuery] = useState(props.query);

  const debounceSearchResults = (text) => {
    props.setQuery(text);
  };

  const debounceHandler = useCallback(
    _.debounce(debounceSearchResults, 500),
    [],
  );

  const onChangeText = (text) => {
    setQuery(text);
    debounceHandler(text);
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <TextInput
        style={styles.inputBox}
        placeholder="Type something..."
        onChangeText={(text) => onChangeText(text)}
        value={query}
      />
      <VirtualizedList
        data={props.users}
        initialNumToRender={0}
        renderItem={({item}) =>
          item ? (
            <Item
              name={item.name}
              total={item.total}
              image={item.image}
              onPress={() => {
                props.resetImages();
                props.navigation.navigate('Gallery', {key: item.id});
              }}
            />
          ) : null
        }
        keyExtractor={(item) => item.id}
        getItemCount={(data) => data.length}
        getItem={(data, index) => {
          return data[index]
            ? {
                id: data[index].id,
                name: data[index].name,
                total: data[index].total_photos,
                image: data[index].profile_image.large,
              }
            : null;
        }}
        onEndReached={() => {
          if (props.canLoadMore && !props.isLoading) {
            props.loadMore();
          }
        }}
        ListFooterComponent={() =>
          props.isLoading ? <ActivityIndicator /> : null
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.unsplash.isLoading,
    canLoadMore: state.unsplash.canLoadMore,
    query: state.unsplash.query,
    users: state.unsplash.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetImages: () => dispatch(resetImages()),
    setQuery: (query) => dispatch(setQuery(query)),
    loadMore: () => dispatch(loadMore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

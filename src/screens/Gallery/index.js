import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ActivityIndicator,
  Modal,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {findImages, loadMoreImages} from '../../middleware';
import {styles} from './styles';

const Item = ({name, total, image}) => {
  return (
    <View style={styles.item}>
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
    </View>
  );
};

const Gallery = (props) => {
  const itemId = props.route.params.key;
  const item = props.users.find((user) => user.id === itemId);

  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  if (!item) {
    return (
      <View style={styles.main}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ActivityIndicator />
      </View>
    );
  }

  useEffect(() => {
    if (!props.images || (props.images.length === 0 && !props.isLoading)) {
      props.findImages(item.username);
    }
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <Modal visible={showModal} transparent={false}>
        <TouchableOpacity
          style={styles.xButton}
          onPress={() => setShowModal(false)}>
          <Text style={styles.textX}>X</Text>
        </TouchableOpacity>
        <ImageViewer
          imageUrls={props.images.map((image) => ({
            url: image.urls.regular,
          }))}
          index={modalIndex}
        />
      </Modal>
      <Item
        name={item.name}
        total={item.total_photos}
        image={item.profile_image.large}
      />
      <FlatList
        data={props.images || []}
        initialNumToRender={0}
        renderItem={({item}) => {
          return item ? (
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
                setModalIndex(
                  props.images.findIndex((image) => image.id === item.id),
                );
              }}
              style={styles.imageItem}
              key={item.id}>
              <Image
                style={styles.imageItemImage}
                source={{uri: item.urls.regular}}></Image>
            </TouchableOpacity>
          ) : null;
        }}
        numColumns={3}
        keyExtractor={(item) => item.id}
        onEndReached={() => {
          if (props.canLoadMoreImages && !props.isLoading) {
            props.loadMoreImages(item.username);
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
    canLoadMoreImages: state.unsplash.canLoadMoreImages,
    images: state.unsplash.images,
    users: state.unsplash.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findImages: (id) => dispatch(findImages(id)),
    loadMoreImages: (id) => dispatch(loadMoreImages(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

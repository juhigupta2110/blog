import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/blogContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IndexScreen = () => {
  //const {data, addBlogPost} = useContext(BlogContext);
  //const value = useContext(BlogContext);

  const {state, addBlogPost, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <Text>This is the index screen</Text>

      <Button title="add blog" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({item}) => {
          return (
            <View style={styles.blogNameStyle}>
              <Text>
                {item.title}-{item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Icon name="delete-outline" size={30} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  blogNameStyle: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

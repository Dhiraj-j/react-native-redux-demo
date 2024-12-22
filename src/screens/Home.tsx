import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UserCard from '../components/UserCard';
import {colors} from '../theme/colors';
import {User} from '../type/User.types';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, setPage} from '../store/reducers/userSlice';
import {RootStackParamList} from '../type/Navigation.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const {users, loading, error, currentPage} = useSelector(
    (state: RootState) => state.user,
  );

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, currentPage]);

  const nextPage = () => {
    dispatch(setPage(currentPage + 1));
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchUsers());
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={!loading}
        onEndReached={() => {
          if (!loading) {
            nextPage();
          }
        }}
        data={users}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('UserDetails', {user: item});
            }}>
            <UserCard user={item} />
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.noUsers}>No users found</Text>}
        keyExtractor={(item: User) => item.login.uuid}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      {loading && <ActivityIndicator size="large" color={colors.primary} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  noUsers: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: colors.textSecondary,
  },
});

export default Home;

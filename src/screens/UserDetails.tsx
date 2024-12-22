import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../type/Navigation.types';

type UserDetailsRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'UserDetails'
>;

const UserDetailsScreen: React.FC<UserDetailsRouteProp> = ({
  route,
  navigation,
}) => {
  const {user} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri: user.picture.large}} style={styles.avatar} />
        <Text style={styles.name}>
          {user.name.first} {user.name.last}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Address:</Text>
        <Text>
          {user.location.street.number} {user.location.street.name}
        </Text>
        <Text>
          {user.location.city}, {user.location.state}
        </Text>
        <Text>
          {user.location.country}, {user.location.postcode}
        </Text>
      </View>

      <View style={styles.additionalInfoContainer}>
        <Text style={styles.title}>Gender:</Text>
        <Text>{user.gender}</Text>

        <Text style={styles.title}>Date of Birth:</Text>
        <Text>{new Date(user.dob.date).toLocaleDateString()}</Text>

        <Text style={styles.title}>Nationality:</Text>
        <Text>{user.nat}</Text>
      </View>

      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: 'gray',
  },
  phone: {
    fontSize: 18,
    color: 'gray',
  },
  addressContainer: {
    marginVertical: 20,
  },
  addressTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  additionalInfoContainer: {
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
});

export default UserDetailsScreen;

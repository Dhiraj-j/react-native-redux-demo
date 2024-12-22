import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {User} from '../type/User.types';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({user}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.picture.large}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {user.name.first} {user.name.last}
        </Text>
        <Text style={styles.username}>@{user.login.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.location}>
          {user.location.city}, {user.location.state}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 2, // Adds shadow on Android
    shadowColor: colors.primary, // iOS shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 2, // Shadow blur radius
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  username: {
    fontSize: 14,
    color: colors.secondary,
  },
  email: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  location: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default UserCard;

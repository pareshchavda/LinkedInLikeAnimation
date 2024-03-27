import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../assets/images';

export const data = [
  {
    title: 'Like',
    imageUrl: Images.like,
    image: <MaterialIcons name="celebration" size={24} color="black" />,
    isLike: false,
  },
  {
    title: 'Celebrate',
    imageUrl: Images.party,
    image: <MaterialIcons name="celebration" size={24} color="black" />,
  },
  {
    title: 'Support',
    imageUrl: Images.handshake,
    image: <MaterialIcons name="support" size={24} color="black" />,
  },
  {
    title: 'Love',
    imageUrl: Images.heart,
    image: (
      <MaterialCommunityIcons name="cards-heart" size={24} color="black" />
    ),
  },
  {
    title: 'Funny',
    imageUrl: Images.happy,
    image: <Feather name="smile" size={24} color="black" />,
  },
];

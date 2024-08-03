import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export const Inicio = () => {
  const images = [
    {
      id: 1,
      imageUrl: { uri: 'https://i.pinimg.com/564x/19/30/09/193009f3173e4666f834a65e6e20a806.jpg' },
      price: 25, 
    },
    {
      id: 2,
      imageUrl: { uri: 'https://i.pinimg.com/736x/86/45/36/8645363dc53f3390b7fe87168c627d1c.jpg' },
      price: 30,
    },
    {
      id: 3,
      imageUrl: { uri: 'https://i.pinimg.com/736x/2b/af/b2/2bafb2dbe46efafc3b56234abf0e0369.jpg' },
      price: 20,
    },
    {
      id: 4,
      imageUrl: { uri: 'https://i.pinimg.com/564x/79/b1/4d/79b14dae42caa55e9955a3cd78cf96ac.jpg' },
      price: 40,
    },
    {
      id: 5,
      imageUrl: { uri: 'https://i.pinimg.com/564x/c7/3c/65/c73c65209be527586fee8b36ff57f88e.jpg' },
      price: 35,
    },
    {
      id: 6,
      imageUrl: { uri: 'https://i.pinimg.com/564x/90/1c/7a/901c7a7dd2e4e248543ed6cee272b6cf.jpg' },
      price: 50,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fashion Store</Text>
      <View style={styles.imageContainer}>
        {images.map((image) => (
          <View key={image.id} style={styles.imageBox}>
            <Image source={image.imageUrl} style={styles.image} />
            <Text style={styles.price}>${image.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#d3d2d4',
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Arial',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageBox: {
    width: 150,
    height:160, 
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 3,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
  
  },
});


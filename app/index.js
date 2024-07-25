import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Cam from '../components/camera';

export default function index() {
  return (
    <View style={styles.container}>
      <Link href="/" asChild style={{paddingStart:20, padding:5, backgroundColor:'lightgray', width:100}}>
        <Pressable>
          <Text style={styles.came}>Accueil</Text>
          <Cam />
        </Pressable>
      </Link>
      <Link href="/" asChild style={{paddingStart:20, padding:5, backgroundColor:'lightgray', width:100}}>
        <Pressable>
          <Text>Liste</Text>
        </Pressable>
      </Link>
      <Link href="/" asChild style={{paddingStart:20, padding:5, backgroundColor:'lightgray', width:100}}>
        <Pressable>
          <Text>Carte</Text>
        </Pressable>
      </Link>
      <Link href="/" asChild style={{paddingStart:20, padding:5, backgroundColor:'lightgray', width:100}}>
        <Pressable>
          <Text>Photos</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position:'absolute',
    top: 50
  },
  came: {
    flexDirection: 'row',
    width: 175
  }
})
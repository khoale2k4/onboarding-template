import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  onFinish: () => void;
};

export default function OnboardingScreen({ onFinish }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng bạn đến với App!</Text>
      <Text style={styles.subtitle}>Một vài giới thiệu ngắn về ứng dụng.</Text>
      {/* Bạn có thể thêm nhiều "slide" hơn: hình ảnh, animation, swipe, … */}
      <Button title="Bắt đầu" onPress={onFinish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 30 },
});


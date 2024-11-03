import { FC } from 'react';
import { StyleSheet, Platform, FlatList, View, Text } from 'react-native';
import { GridButton } from '../components/GridButton';
import { CATEGORIES } from '../mocks/mocks1';

export type MeelsOverviewProps = {}

export const MeelsOverview: FC<MeelsOverviewProps> = () => {
  return (
    <View style={styles.container}>
      <Text>MeelsOverview</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});
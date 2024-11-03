import { FC } from 'react';
import { FlatList } from 'react-native';
import { GridButton } from '../components/GridButton';
import { CATEGORIES } from '../mocks/mocks1';

export type GridTemplateProps = {
  navigation: any;
}

export const GridTemplate: FC<GridTemplateProps> = ({ navigation }) => {
  // const pressHandler = () => {navigation.navigate('MeelsOverview') }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <GridButton title={item.title} color={item.color} onPress={() => navigation.navigate('MeelsOverview')} />}
      numColumns={2}
    />
  )
}
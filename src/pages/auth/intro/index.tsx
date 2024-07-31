import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import {colors} from '../../../assets/config';
import {Button} from '../../../components/molecules';
import {Divider, Text} from '../../../components/atoms';

import styles from './styles';

const SLIDES = [
  {
    id: 0,
    title: '',
    body: '',
    shape: require('./../../../assets/images/header-contacts.png'),
    image: require('./../../../assets/images/header-contacts.png'),
  },
  {
    id: 1,
    title: 'Encontre o motorista perfeito para sua entrega',
    body: 'Encontre cargas e fretes pelo aplicativo e comece agora a transportar encomendas com segurança e garantia de pagamento.',
    shape: require('./../../../assets/images/header-contacts.png'),
    image: require('./../../../assets/images/header-contacts.png'),
  },
  {
    id: 2,
    title: 'O que deseja fazer?',
    body: 'Envie suas cargas e encomendas com  mais segurança e garantia de recebimento na data estipulada pelo aplicativo.',
    shape: require('./../../../assets/images/header-contacts.png'),
    image: require('./../../../assets/images/header-contacts.png'),
  },
  {
    id: 3,
    title: 'Crie sua conta gratuita e envie ou transporte cargas',
    body: 'Crie sua conta gratuita e tenha acesso a milhares de fretes e cargas para transportar ou enviar suas encomendas',
    shape: require('./../../../assets/images/header-contacts.png'),
    image: require('./../../../assets/images/header-contacts.png'),
  },
];

const Intro = ({navigation}: any) => {
  const safeArea = useSafeAreaInsets();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onNavigate = async (screen: string) => {
    await AsyncStorage.setItem('@viewedIntro', 'true');
    navigation.replace(screen);
  };

  const renderItem = ({
    item,
  }: {
    item: {id: number; title: string; body: string; image: any; shape: any};
  }) => (
    <View style={styles.slide}>
      <ImageBackground
        source={item.shape}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '110%',
        }}>
        <Image
          source={item.image}
          style={[styles.slideImage, {marginTop: safeArea.top}]}
        />

        <View style={styles.slideContent}>
          <Text type="title" style={styles.textCenter} color={colors.primary}>
            {item.title}
          </Text>

          <Divider size="xs" />

          <Text style={styles.textCenter} color={colors.text.color}>
            {item.body}
          </Text>
        </View>

        <Divider />
      </ImageBackground>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <StatusBar backgroundColor={colors.primary} />

        <AppIntroSlider
          keyExtractor={item => item.id.toString()}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={renderItem}
          data={SLIDES}
          renderDoneButton={() => <></>}
          renderNextButton={() => <></>}
          renderPagination={() => <></>}
          onSlideChange={item => setSelectedIndex(item)}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {Array(SLIDES.length)
            .fill(0)
            .map((circle, i) => (
              <View
                key={i}
                style={
                  i === selectedIndex
                    ? styles.paginationItemSelected
                    : styles.paginationItem
                }
              />
            ))}
        </View>
        <Divider />
        <Button
          width="full"
          label="Criar uma conta"
          onPress={() => onNavigate('Register')}
        />
        <Divider size="xs" />
        <Button
          outline
          width="full"
          label="Já tenho uma conta"
          onPress={() => onNavigate('Login')}
          color={colors.primary}
        />
      </View>
    </View>
  );
};

export default Intro;

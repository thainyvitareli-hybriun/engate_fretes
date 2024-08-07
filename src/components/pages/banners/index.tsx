import {Image, Linking, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {BannerHooks} from '../../../hooks';
import {iBanners} from '../../../interfaces/banner';
import styles from './styles';
import Carousel from 'react-native-reanimated-carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const LINK_TYPE = {
  extern: 1,
  intern: 2,
};

export default function Banners() {
  const [banners, setBanners] = useState<iBanners>();

  const navigator = useNavigation();

  useEffect(() => {
    handleBanners();
  }, []);

  const handleBanners = async () => {
    const result = await BannerHooks.findMany();

    if (result) {
      setBanners(result);
    }
  };

  const handleLink = (url: string, linkType: number) => {
    console.log(url, linkType);
    if (linkType === LINK_TYPE.extern) {
      Linking.openURL(url).catch(err =>
        console.error('Failed to open URL:', err),
      );
    } else {
      //@ts-ignore
      navigator.navigate(url);
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={400}
        height={300}
        autoPlay={false}
        data={banners?.records || []}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        mode="parallax"
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleLink(item.link, item.link_type)}>
            <Image source={{uri: item.uri}} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Header} from '../../../components/molecules';
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../../contexts';
import Icons from '../../../assets/svg/icons';
import userPvs from '../../../assets/config/user-pvs';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '../../../components/atoms';

interface MenuItem {
  icon: React.JSX.Element;
  title: string;
  onPress: () => void;
  onlyDriverCanAccess: boolean;
}

export default function Settings() {
  const [itemsMenu, setItemsMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = () => {
    const items = [
      {
        icon: <Icons.Car />,
        title: 'Meus Veículos',
        onPress: () => navigator.navigate('Vehicle'),
        onlyDriverCanAccess: true,
      },
      {
        icon: <Icons.Notification />,
        title: 'Notificações',
        onPress: () => navigator.navigate('Home'),
        onlyDriverCanAccess: false,
      },
      {
        icon: <Icons.CreditCard />,
        title: 'Histórico de compras',
        onPress: () => navigator.navigate('Home'),
        onlyDriverCanAccess: true,
      },
      {
        icon: <Icons.User />,
        title: 'Meu perfil',
        onlyDriverCanAccess: false,
        onPress: () => navigator.navigate('Profile'),
      },
      {
        icon: <Icons.Security />,
        title: 'Privacidade e Segurança',
        onPress: () => navigator.navigate('Home'),

        onlyDriverCanAccess: false,
      },

      {
        icon: <Icons.SignOut />,
        title: 'Sair',
        onPress: () => signOut(),
        onlyDriverCanAccess: false,
      },
    ];

    if (user.pv === userPvs.consumer) {
      let temp = items.filter(value => !value.onlyDriverCanAccess);

      setItemsMenu(temp);
    } else {
      setItemsMenu(items);
    }
  };

  const {user, signOut} = useContext(AuthContext);

  const navigator = useNavigation();

  function renderItem({item, index}: ListRenderItemInfo<MenuItem>) {
    return (
      <TouchableOpacity
        style={styles.menuRow}
        key={index}
        onPress={item.onPress}>
        {item.icon}
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header.Default />

      <FlatList
        data={itemsMenu}
        renderItem={renderItem}
        style={{
          width: '90%',
          padding: 5,
          alignSelf: 'center',
        }}
        ItemSeparatorComponent={() => <Divider size="xs" line />}
      />
    </SafeAreaView>
  );
}

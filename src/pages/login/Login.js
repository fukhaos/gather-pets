import React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, commonsStyle} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';
import logoW from '../../assets/images/logoWhite.png';

const Login = () => {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.backgroundAppColor);
    }, []),
  );

  const callRegister = () => {
    navigation.navigate('Register');
  };

  const callHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <Animatable.View
          style={styles.containerTopLogo}
          duration={2000}
          animation="bounceInDown">
          <Image style={styles.logo} source={logoW} />
          <Text style={styles.nameApp}>Gather Pets</Text>
        </Animatable.View>
        <Animatable.View
          duration={2000}
          animation="bounceIn"
          style={styles.cardLogin}>
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="mail"
              size={16}
              color={colors.textPrimaryColor}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              placeholder="E-mail"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={20} />
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="key"
              size={16}
              color={colors.textPrimaryColor}
            />
            <TextInput
              autoCorrect={false}
              secureTextEntry
              autoCompleteType="password"
              placeholder="Senha"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={32} />
          <Text onPress={callRegister} style={styles.dontHave}>
            Não tem conta? Inscreva-se agora
          </Text>
        </Animatable.View>
        <Spacer value={32} />
        <Animatable.View duration={2000} animation="bounceInUp">
          <View style={styles.orLogin}>
            <View style={styles.divider} />
            <Text style={styles.orSocialLabel}>
              Ou entre usando uma mídia social
            </Text>
            <View style={styles.divider} />
          </View>
          <Spacer value={12} />
          <View style={styles.rowSocial}>
            <TouchableOpacity style={styles.buttonFace}>
              <FontAwesome name="facebook" size={24} color={colors.white} />
            </TouchableOpacity>
            <Spacer value={24} />
            <TouchableOpacity style={styles.buttonGoogle}>
              <FontAwesome name="google" size={24} color={colors.white} />
            </TouchableOpacity>
            {Platform.OS === 'ios' && (
              <>
                <Spacer value={24} />
                <TouchableOpacity style={styles.buttonApple}>
                  <FontAwesome name="apple" size={24} color={colors.black} />
                </TouchableOpacity>
              </>
            )}
          </View>
          <Spacer value={18} />
          <TouchableOpacity onPress={callHome} style={styles.buttonLogin}>
            <Text style={[styles.labelLogin, commonsStyle.fontMedium]}>
              Entrar
            </Text>
          </TouchableOpacity>
          <Spacer value={12} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={[styles.labelForgot]}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  nameApp: {
    fontFamily: fonts.LOGO,
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 12,
    color: colors.white,
  },
  cardLogin: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.secundaryColor,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rowSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFace: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: colors.face,
  },
  buttonGoogle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: colors.google,
  },
  buttonApple: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: colors.white,
  },
  orLogin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginHorizontal: 20,
    flex: 1,
    height: 0.5,
    backgroundColor: colors.grey,
  },
  orSocialLabel: {
    textAlign: 'center',
    color: colors.white,
  },
  iconInput: {
    paddingLeft: 14,
    paddingRight: Platform.OS === 'android' ? 4 : 8,
  },
  inputStyle: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
    borderRadius: 10,
    paddingBottom: 16,
    paddingTop: 16,
    paddingRight: 16,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secundaryColor,
    borderRadius: 10,
    borderColor: colors.backgroundAppColor,
    borderWidth: 1,
  },
  labelRegister: {
    fontSize: 16,
    color: colors.yellowHeader,
    letterSpacing: 2,
  },
  buttonLogin: {
    height: 46,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.yellowHeader,
  },
  labelLogin: {
    fontFamily: fonts.BOLD,
    fontSize: 14,
    color: colors.primaryColor,
  },
  labelForgot: {
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    color: colors.greenButton,
  },
  dontHave: {
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    color: colors.white,
  },
  terms: {
    marginHorizontal: 60,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  containerTopLogo: {
    alignItems: 'center',
  },
});

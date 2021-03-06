import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {colors, commonsStyle} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const comeBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <TouchableOpacity onPress={comeBack} style={styles.backButton}>
        <Feather
          name="chevron-left"
          size={32}
          color={colors.textPrimaryColor}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Spacer value={100} />
        <Text style={styles.title}>Esqueceu a Senha ?</Text>
        <Spacer value={100} />
        <Text style={styles.desc}>
          Digite seu e-mail registrado acima para receber instruções de
          redefinição de senha
        </Text>
        <Spacer value={42} />
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
        <Spacer value={16} />
        <TouchableOpacity style={styles.buttonForgot}>
          <Text style={[styles.labelForgot, commonsStyle.fontMedium]}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 32,
    color: colors.textPrimaryColor,
    fontFamily: fonts.BOLD,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  desc: {
    color: colors.textPrimaryColor,
    textAlign: 'center',
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
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonForgot: {
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.yellowHeader,
  },
  labelForgot: {
    fontSize: 14,
    color: colors.primaryColor,
  },
});

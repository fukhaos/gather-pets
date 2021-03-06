/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors, commonsStyle} from '../../styles/commons-styles';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';
import ModalOptionPhoto from '../../components/ModalOptionPhoto';

const configImagePicker = {
  mediaType: 'photo',
  width: 140,
  height: 220,
  cropping: true,
};

export default function AddPet() {
  const [genderSelected, setGenderSelected] = useState(0);
  const [image, setImage] = useState('');
  const [isModalPhotoVisible, setIsModalPhotoVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.backgroundAppColor);
    }, []),
  );

  const selectMale = () => {
    setGenderSelected(0);
  };

  const selectFemale = () => {
    setGenderSelected(1);
  };

  const openModalPhoto = () => {
    setIsModalPhotoVisible(true);
  };

  const callCamera = () => {
    actionPhoto('camera');
  };

  const callGallery = () => {
    actionPhoto('gallery');
  };

  const cancelAction = () => {
    setIsModalPhotoVisible(false);
  };

  const actionPhoto = async (typeAction) => {
    const method =
      typeAction === 'camera' ? ImagePicker.openCamera : ImagePicker.openPicker;

    method(configImagePicker)
      .then((image) => {
        console.log(image.path);
        setImage(image.path);
        setIsModalPhotoVisible(false);
      })
      .catch((error) => {
        setIsModalPhotoVisible(false);
        console.log('ImagePickerError: ', error);
      });
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <Spacer value={8} />
      <View style={styles.containerHeader}>
        <Text style={styles.headerTitle}>Adicionar Pet</Text>
      </View>
      <Spacer value={8} />
      <KeyboardAwareScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.container}>
          <View style={styles.containerChooseImage}>
            <TouchableOpacity
              style={styles.containerPhoto}
              onPress={openModalPhoto}>
              {image === '' ? (
                <Feather
                  style={styles.iconCam}
                  name="camera"
                  size={32}
                  color={colors.textPrimaryColor}
                />
              ) : (
                <Image style={styles.image} source={{uri: image}} />
              )}
            </TouchableOpacity>
          </View>
          <Spacer value={16} />
          <View style={styles.containerInput}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome"
              placeholderTextColor={colors.textPrimaryColor}
              style={
                Platform.OS === 'ios'
                  ? styles.inputStyle
                  : styles.paddingInputAndroid
              }
            />
          </View>
          <Spacer value={16} />
          <View style={styles.containerRow}>
            <View style={[styles.containerInput, styles.col]}>
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Raça"
                placeholderTextColor={colors.textPrimaryColor}
                style={
                  Platform.OS === 'ios'
                    ? styles.inputStyle
                    : styles.paddingInputAndroid
                }
              />
            </View>
            <View style={[styles.containerInput, styles.col]}>
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Idade"
                placeholderTextColor={colors.textPrimaryColor}
                style={
                  Platform.OS === 'ios'
                    ? styles.inputStyle
                    : styles.paddingInputAndroid
                }
              />
            </View>
          </View>
          <Spacer value={16} />
          <View style={styles.containerInput}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Endereço"
              placeholderTextColor={colors.textPrimaryColor}
              style={
                Platform.OS === 'ios'
                  ? styles.inputStyle
                  : styles.paddingInputAndroid
              }
            />
          </View>
          <Spacer value={16} />
          <Text style={styles.gender}>Gênero</Text>
          <Spacer value={8} />
          <View style={styles.containerRow}>
            <TouchableOpacity
              style={[
                styles.buttonGenderSelected,
                genderSelected !== 0 && {
                  borderColor: colors.textPrimaryColor,
                },
              ]}
              onPress={selectMale}>
              <Text
                style={[
                  styles.labelGenderSelected,
                  genderSelected !== 0 && {color: colors.textPrimaryColor},
                ]}>
                Macho
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonGenderSelected,
                genderSelected !== 1 && {
                  borderColor: colors.textPrimaryColor,
                },
              ]}
              onPress={selectFemale}>
              <Text
                style={[
                  styles.labelGenderSelected,
                  genderSelected !== 1 && {color: colors.textPrimaryColor},
                ]}>
                Fêmea
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer value={16} />
          <Text style={styles.gender}>Conte um pouco sobre o pet</Text>
          <Spacer value={8} />
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textArea}
          />
          <Spacer value={16} />
          <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.labelSave}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <ModalOptionPhoto
        isVisible={isModalPhotoVisible}
        camera={callCamera}
        gallery={callGallery}
        cancel={cancelAction}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: fonts.BOLD,
    fontSize: 24,
    color: colors.textPrimaryColor,
  },
  iconCam: {
    position: 'absolute',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  paddingInputAndroid: {
    paddingHorizontal: 12,
  },
  containerKeyboarding: {
    flex: 1,
  },
  containerChooseImage: {
    flex: 1,
    alignItems: 'center',
  },
  col: {
    width: '46%',
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 32,
    color: colors.textPrimaryColor,
    fontFamily: fonts.BOLD,
  },
  containerPhoto: {
    width: 140,
    height: 220,
    borderRadius: 20,
    backgroundColor: colors.secundaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 220,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secundaryColor,
    borderRadius: 10,
    borderColor: colors.backgroundAppColor,
    borderWidth: 1,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputStyle: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  gender: {
    color: colors.textPrimaryColor,
    fontSize: 16,
  },
  buttonGenderSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: '46%',
    borderColor: colors.yellowHeader,
    borderWidth: 2,
    borderRadius: 10,
  },
  labelGenderSelected: {
    color: colors.yellowHeader,
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
    padding: 20,
    color: colors.white,
    backgroundColor: colors.secundaryColor,
    borderRadius: 10,
  },
  containerScroll: {
    paddingBottom: 60,
  },
  buttonSave: {
    height: 46,
    backgroundColor: colors.yellowHeader,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelSave: {
    fontFamily: fonts.BOLD,
    fontSize: 14,
    color: colors.primaryColor,
  },
});

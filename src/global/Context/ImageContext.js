import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
 
export const useCamera = async (setImage,setLoading) => {
  await setLoading(true)
  await launchCamera(
    {
        width: 300,
        height: 400,
        cropping: true,
      },
    async res => {
      const formData = new FormData();
      formData.append('key', '292e93baf139ef4fb8b9f89680c2dc9a');
      formData.append('image', {
        name: '_products',
        uri: res?.assets[0].uri,
        type: 'image/jpg',
      });

      const uploadUrl = await axios.post(
        'https://api.imgbb.com/1/upload',
        formData,
      );
      await setImage(uploadUrl.data.data.display_url);
      await setLoading(true)
    },
  );
};




export const useGallery = async (setImage, setLoading) => {
    await setLoading(true)
    await launchImageLibrary(
      {mediaType: 'photo', maxWidth: 200, maxHeight: 100, selectionLimit: 1},
      async res => {
        const formData = new FormData();
        formData.append('key', '292e93baf139ef4fb8b9f89680c2dc9a');
        formData.append('image', {
          name: '_products',
          uri: res?.assets[0].uri,
          type: 'image/jpg',
        });
  
        const uploadUrl = await axios.post(
          'https://api.imgbb.com/1/upload',
          formData,
        );
        await setImage(uploadUrl.data.data.display_url);
        await setLoading(false)
      },
    );
  };
  

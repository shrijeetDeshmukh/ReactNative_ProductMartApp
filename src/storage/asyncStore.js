import EncryptedStorage from 'react-native-encrypted-storage';
import { SAVE_USER_SESSION, USER_DETAILS } from '../util/constant';

export const storeData = async (data) => {
    try {
        await EncryptedStorage.setItem(
            USER_DETAILS,
            JSON.stringify({
                email: data.email,
                password: data.password,
            })
        );
        return true;
    } catch (error) {
        console.error('error saving data', error)
    }
}

export const getData = async () => {
    try {
        const session = await EncryptedStorage.getItem(USER_DETAILS);
        return session;
    } catch (error) {
        console.error('error while storing data', error);
        return error;
    }
}

export const removeData = async (navigation) => {
    console.log('Inside remove');
    try {
        const session =  await EncryptedStorage.clear();
        return session;
    } catch (error) {
        console.error('error while removing data', error);
        return error;
    }
}
export const saveLoggedIn = async () => {
    try {
        await EncryptedStorage.setItem(
            SAVE_USER_SESSION,
            'true'
        );
    } catch (error) {
        console.error('error while setting up login flag', error);
        return error;
    }

}

export const getLoggedIn = async () => {
    try {
      return await EncryptedStorage.getItem(SAVE_USER_SESSION);
    } catch (error) {
        console.error('error while fetching data getLoggedIn--', error);
        return error;
    }
}
import EncryptedStorage from 'react-native-encrypted-storage';
import { USER_DETAILS } from '../util/constant';

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
        console.error('error while fetching data', error);
        return error;
    }
}
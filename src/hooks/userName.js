import { useEffect, useState } from "react";
import { getData } from '../storage/asyncStore';
export const useUserData = () => {
    const [email, setEmail] = useState('');
    useEffect(() => {
        getData().then(data => {
            data = JSON.parse(data);
            setEmail(data.email);
        })
    }, []);
    return { email };
}
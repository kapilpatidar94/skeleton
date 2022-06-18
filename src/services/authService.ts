import {base64} from './helperService';

const authService = {
    setUser() {
        const _tempData = {};
        localStorage.setItem('_ico_temp', base64.encode(JSON.stringify(_tempData)));
        return _tempData;
    },
    removeUser() {
        localStorage.removeItem('_ico_temp');
        return null;
    },
    user() {
        const _tempData: string | null = localStorage.getItem('_ico_temp');

        if (!_tempData) return null;

        const user = JSON.parse(base64.decode(_tempData));
        return {
            emailAddress: user?.emailAddress,
            accessToken: user?.accessToken,
            name: user?.name,
            lastLogin: user?.lastLogin,
            uniqueId: user?.uniqueId
        };
    }
}

export {authService};
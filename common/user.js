// 管理账号信息
const USERS_KEY = 'USERS_KEY';

const getUsers = function (USERS_KEY) {
    let ret = '';
    ret = uni.getStorageSync(USERS_KEY);
    if (!ret) {
        ret = '[]';
    }
    return JSON.parse(ret);
}

const addUser = function (USERS_KEY,res) {

    let users = getUsers();
    users.push({
        userInfo: res
    });
    uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const clearUser = function(){
	uni.clearStorageSync();
}

export default {
	USERS_KEY,
    getUsers,
    addUser
}

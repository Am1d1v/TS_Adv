"use strict";
// Null
function logId(id) {
    if (isString(id)) {
        console.log(id); // String
    }
    else {
        console.log(id); // Number
    }
}
function isString(par) {
    return typeof par === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function setRole(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('User is not Admin');
    }
}

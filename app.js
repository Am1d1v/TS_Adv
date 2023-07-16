"use strict";
// Null
// "strictNullChecks": false
/*

const n0: null = null;
const n1: any = null;
const n2: string = null;
const n3: number = null;
const n4: boolean = null;
const n5: undefined = null;

interface User {
    name: string
}

function getUser(){
    if(Math.random() > 0.5){
        return null;
    } else {
        return {
            name: 'Dima'
        } as User
    }
}

const user = getUser();
if(user) {
    const n = user.name;
}

*/
// Type Conversion
let a = 5;
let b = a.toString();
let c = 'someString';
let d = parseInt(c);
let e = new String(a).valueOf();
const user = {
    name: 'Dima',
    email: 'someMail@mail.com',
    login: 'someLogin'
};
const admin = Object.assign(Object.assign({}, user), { role: 1 });
console.log(admin);

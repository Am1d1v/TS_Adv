

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

/*

let a = 5;
let b: string = a.toString();

let c = 'someString';
let d: number = parseInt(c);

let e: string = new String(a).valueOf();



interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: 'Dima',
    email: 'someMail@mail.com',
    login: 'someLogin'
}

interface Admin {
    name: string;
    role: number;
}

const admin: Admin = {
    ...user,
    role: 1
}

//console.log(admin);

function userToAdmin(user: User): Admin{
    return {
        name: user.name,
        role: 1
    }
}

*/

// Type Guard

/*

interface User {
    name: string;
    email: string;
    login: string
}

interface Admin {
    role: number
}

function logId(id: string | number){
    if(isString(id)){
        console.log(id);   // String
    } else {
        console.log(id);   // Number
    }
}


function isString(par: string | number): par is string{
    return typeof par === 'string';
}   




function isAdmin(user: User | Admin): user is Admin{
    return 'role' in user;
}

function setRole(user: User | Admin){
    if(isAdmin(user)){
        user.role = 0;
    } else {
        throw new Error('User is not Admin');
    }
}

*/

// Asserts

interface User {
    name: string;
}

const a = {};
assertUser(a);
a.name = 'Dima';



function assertUser(obj: unknown): asserts obj is User{
    if (typeof obj === 'object' && !!obj && 'name' in obj){
        return;
    }

    throw new Error('No user');
}
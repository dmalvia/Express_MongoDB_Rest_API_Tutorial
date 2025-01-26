import { LocalStorage } from "node-localstorage";
import { registerUserTest } from "./registerUserTest";
import { loginUserTest } from "./loginUserTest";
import { currentUserTest } from "./currentUserTest";
import { createContactTest } from "./createContactTest";
import { getContactTest } from "./getContactTest";
import { getAllContactsTest } from "./getAllContactsTest";
import { deleteAllContactsTest } from "./deleteAllContactsTest";
import { deleteContactTest } from "./deleteContactTest";
import { logoutUserTest } from "./logoutUserTest";
import { forgotUserTest } from "./forgotUserTest";
import { resetUserTest } from "./resetUserTest";
import { updatedContactTest } from "./updateContactTest";
import {deactivateUserTest } from "./deactivateUserTest";

describe('testing user and contact api requests', () => {

    global.localStorage = new LocalStorage('./tests/storage');
    registerUserTest();
    loginUserTest();
    currentUserTest()
    createContactTest()
    getContactTest();
    getAllContactsTest()
    updatedContactTest()
    deleteContactTest()
    deleteAllContactsTest()
    forgotUserTest()
    resetUserTest()
    logoutUserTest()
    deactivateUserTest()



    

  
});



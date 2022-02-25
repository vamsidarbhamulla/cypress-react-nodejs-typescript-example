import { expect } from "chai";
import axios, {AxiosRequestConfig} from "axios";
import {User} from "../libs/shared/models";
import { newUserData } from "../libs/shared/core";

describe('Verify Get All Users api', async () => {
    it('should fetch all the available users from api', async function () {
        const allUsersList: Array<User> = await getAllUsersApiRequest()
        console.log('allUsersList', allUsersList)
        expect(allUsersList).to.be.not.undefined;
        expect(allUsersList.length).to.be.above(0);
    })
})

describe('Verify post new user api', async () => {
    it('should post a new user from api', async function () {
        const newUser: User = newUserData()
        const createUser: User = await postUsersApiRequest(newUser)
        expect(createUser).to.be.not.undefined;
    })
})

describe('Verify Adding a new user should increase the current user count', async () => {
    it('should fetch all the available users from api', async function () {
        const allUsersListBefore: Array<User> = await getAllUsersApiRequest()
        const newUser: User = newUserData()
        const createUser: User = await postUsersApiRequest(newUser)
        const allUsersListAfter: Array<User> = await getAllUsersApiRequest()
        expect(allUsersListBefore.length).to.be.eq(allUsersListAfter.length + 1);
    })
})

async function getAllUsersApiRequest() {
    const axiosRequestConfig: AxiosRequestConfig = {
        method: 'GET',
        url: '/api/users'
    }
    return executeAxios(axiosRequestConfig)
}

async function postUsersApiRequest(userData: User) {
    const axiosRequestConfig: AxiosRequestConfig = {
        method: 'POST',
        url: '/api/user'
    }
   return executeAxios(axiosRequestConfig)
}

async function executeAxios(axiosRequestConfig: AxiosRequestConfig) {
    try {
        const { data: responseData } = await axios(axiosRequestConfig)
        return responseData
    } catch (error) {
        // const errors = !(error && error instanceof Error && error?.response?.data?.errors) ? error : error?.response?.data?.errors
        console.log('errors:', error)
        throw error
    }
}

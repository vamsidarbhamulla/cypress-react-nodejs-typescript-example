import { getAllUsersApiRequest, postUsersApiRequest } from '../../api/user.api';
import { User } from '@tests/shared/models';
import { newUserData } from '@tests/shared/core';

export function freshUserTask() {
  return {
    freshUser() {
      return newUserData();
    }
  };
}

export function apiCreateUserTask() {
  return {
    apiCreateUser(newUser: User = newUserData()) {
      return new Promise(async (resolve: any, reject: any) => {
        try {
          console.log('newUserData:', newUser);
          const createUser: User = await postUsersApiRequest(newUser);
          resolve(createUser);
        } catch (error) {
          reject(error);
        }
      });
    }
  };
}

export function apiListUsersTask() {
  return {
    apiListUsers() {
      return new Promise(async (resolve: any, reject: any) => {
        try {
          const usersList: Array<User> = await getAllUsersApiRequest();
          resolve(usersList);
        } catch (error) {
          reject(error);
        }
      });
    }
  };
}

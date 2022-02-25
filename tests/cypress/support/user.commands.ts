import { User } from '@tests/shared/models';
import { newUserData } from '@tests/shared/core';

export function newUserDataObj() {
  const user: User = newUserData();
  return cy.wrap('newUserData').then(() => user);
}

export function getAllUsers() {
  return cy
    .request<Array<User>>({
      method: 'GET',
      url: '/api/users'
    })
    .then((response) => {
      const body: Array<User> = response.body;
      console.log('AllUsersBody:', body);
      const removeNullsFromUser = body.filter((user) => user !== null);
      console.log('removeNullsFromUser:', removeNullsFromUser);
      return removeNullsFromUser;
    });
}

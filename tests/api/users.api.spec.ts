import { expect } from 'chai';
import { User } from "@tests/shared/models";
import { getAllUsersApiRequest, postUsersApiRequest } from './user.api';
import { newUserData } from "@tests/shared/core";

describe('Verify post new user api', async () => {
  it('should post a new user from api', async function () {
    const newUser: User = newUserData();
    console.log('newUserData:', newUser);
    const createUser: User = await postUsersApiRequest(newUser);
    console.log('createUser:', createUser);
    expect(createUser).to.be.not.undefined;
  });
});

describe('Verify Adding a new user should increase the current user count', async () => {
  it('should fetch all the available users from api', async function () {
    const allUsersListBefore: Array<User> = await getAllUsersApiRequest();
    const newUser: User = newUserData();
    await postUsersApiRequest(newUser);
    const allUsersListAfter: Array<User> = await getAllUsersApiRequest();
    expect(allUsersListAfter.length).to.be.eq(allUsersListBefore.length + 1);
  });
});

describe('Verify Get All Users api', async () => {
  it('should fetch all the available users from api', async function () {
    const allUsersList: Array<User> = await getAllUsersApiRequest();
    console.log('allUsersList', allUsersList);
    expect(allUsersList).to.be.not.undefined;
    expect(allUsersList.length).to.be.above(0);
  });
});

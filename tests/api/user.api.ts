import axios, { AxiosRequestConfig } from 'axios';
import { User } from '@tests/shared/models';

export async function getAllUsersApiRequest() {
  const envConfig = getEnvironmentConfig();
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'GET',
    url: `${envConfig.baseUrl}/api/users`
  };
  return executeAxios(axiosRequestConfig);
}

export async function postUsersApiRequest(userData: User) {
  const envConfig = getEnvironmentConfig();
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `${envConfig.baseUrl}/api/user`,
    data: {
      user: userData
    }
  };
  return executeAxios(axiosRequestConfig);
}

export async function executeAxios(axiosRequestConfig: AxiosRequestConfig) {
  try {
    const response = await axios(axiosRequestConfig);
    // console.log('response:', response)
    const { data: responseData } = response;
    return responseData;
  } catch (error) {
    // const errors = !(error && error instanceof Error && error?.response?.data?.errors) ? error : error?.response?.data?.errors
    console.log('errors:', error);
    throw error;
  }
}

function getEnvironmentConfig() {
  const testEnv = process.env.TEST_ENV || 'local';
  const { environmentConfig } = require(`../config/${testEnv}`);
  return environmentConfig;
}

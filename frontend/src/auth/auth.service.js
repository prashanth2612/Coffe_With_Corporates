import axios from 'axios';
import errorHandler from '@/request/errorHandler';
import successHandler from '@/request/successHandler';

// auth.service uses absolute paths — axios baseURL (/api/) is set in request.js
// so we use /api/ directly here to avoid double-prefix
const AUTH_BASE = '/api/';

axios.defaults.withCredentials = true;

export const login = async ({ loginData }) => {
  try {
    const response = await axios.post(
      `${AUTH_BASE}login?timestamp=${new Date().getTime()}`,
      loginData
    );
    const { status, data } = response;
    successHandler({ data, status }, { notifyOnSuccess: false, notifyOnFailed: true });
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const register = async ({ registerData }) => {
  try {
    const response = await axios.post(`${AUTH_BASE}register`, registerData);
    const { status, data } = response;
    successHandler({ data, status }, { notifyOnSuccess: true, notifyOnFailed: true });
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const verify = async ({ userId, emailToken }) => {
  try {
    const response = await axios.get(`${AUTH_BASE}verify/${userId}/${emailToken}`);
    const { status, data } = response;
    successHandler({ data, status }, { notifyOnSuccess: true, notifyOnFailed: true });
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const resetPassword = async ({ resetPasswordData }) => {
  try {
    const response = await axios.post(`${AUTH_BASE}resetpassword`, resetPasswordData);
    const { status, data } = response;
    successHandler({ data, status }, { notifyOnSuccess: true, notifyOnFailed: true });
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      `${AUTH_BASE}logout?timestamp=${new Date().getTime()}`
    );
    const { status, data } = response;
    successHandler({ data, status }, { notifyOnSuccess: false, notifyOnFailed: true });
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};
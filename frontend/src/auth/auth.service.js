import { API_BASE_URL } from '@/config/serverApiConfig';
import axios from 'axios';
import errorHandler from '@/request/errorHandler';
import successHandler from '@/request/successHandler';

// Set default axios configurations
axios.defaults.withCredentials = true;

// Login function
export const login = async ({ loginData }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}login?timestamp=${new Date().getTime()}`,
      loginData
    );

    const { status, data } = response;

    successHandler(
      { data, status },
      { notifyOnSuccess: false, notifyOnFailed: true }
    );
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

// Register function
export const register = async ({ registerData }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}register`, registerData);

    const { status, data } = response;

    successHandler(
      { data, status },
      { notifyOnSuccess: true, notifyOnFailed: true }
    );
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

// Verify function
export const verify = async ({ userId, emailToken }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}verify/${userId}/${emailToken}`);

    const { status, data } = response;

    successHandler(
      { data, status },
      { notifyOnSuccess: true, notifyOnFailed: true }
    );
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

// Reset Password function
export const resetPassword = async ({ resetPasswordData }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}resetpassword`, resetPasswordData);

    const { status, data } = response;

    successHandler(
      { data, status },
      { notifyOnSuccess: true, notifyOnFailed: true }
    );
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

// Logout function
export const logout = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}logout?timestamp=${new Date().getTime()}`
    );
    const { status, data } = response;

    successHandler(
      { data, status },
      { notifyOnSuccess: false, notifyOnFailed: true }
    );
    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

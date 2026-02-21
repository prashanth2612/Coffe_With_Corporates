import { notification } from 'antd';
import codeMessage from './codeMessage';

const errorHandler = (error) => {
  if (!navigator.onLine) {
    notification.config({ duration: 15, maxCount: 1 });
    notification.error({
      message: 'No Internet Connection',
      description: 'Please check your network and try again.',
    });
    return { success: false, result: null, message: 'No internet connection.' };
  }

  const { response } = error;

  if (!response) {
    notification.config({ duration: 20, maxCount: 1 });
    notification.error({
      message: 'Cannot Reach Server',
      description:
        'The backend server is not responding. Make sure it is running on port 8888 and try again.',
    });
    return { success: false, result: null, message: 'Server is unreachable.' };
  }

  if (response?.data?.jwtExpired) {
    window.localStorage.removeItem('auth');
    window.localStorage.removeItem('isLogout');
    window.location.href = '/logout';
    return;
  }

  if (response?.status) {
    const { status, data } = response;
    const message = data?.message;
    const errorText =
      message || codeMessage[status] || `An error occurred (HTTP ${status})`;

    let title = `Request Error (${status})`;
    if (status === 502 || status === 503) {
      title = 'Server Unavailable';
    } else if (status === 401) {
      title = 'Authentication Required';
    } else if (status === 403) {
      title = 'Access Denied';
    } else if (status === 404) {
      title = 'Not Found';
    } else if (status === 500) {
      title = 'Server Error';
    }

    notification.config({ duration: 6, maxCount: 2 });
    notification.error({ message: title, description: errorText });
    return data || { success: false, result: null, message: errorText };
  }

  notification.config({ duration: 15, maxCount: 1 });
  notification.error({
    message: 'Connection Problem',
    description: 'Cannot connect to the server. Please try again.',
  });
  return { success: false, result: null, message: 'Connection problem.' };
};

export default errorHandler;

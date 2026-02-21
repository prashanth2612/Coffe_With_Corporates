import { notification } from 'antd';

import codeMessage from './codeMessage';

const successHandler = (response, options = { notifyOnSuccess: false, notifyOnFailed: true }) => {
  const { data } = response;
  if (data && data.success === true) {
    const message = data.message;
    const successText = message || codeMessage[response.status] || 'Operation successful';

    if (options.notifyOnSuccess) {
      notification.config({
        duration: 2,
        maxCount: 2,
      });
      notification.success({
        message: 'Success',
        description: successText,
      });
    }
  } else if (data && data.success === false) {
    const message = data.message;
    const errorText = message || codeMessage[response.status] || 'Request failed';
    const { status } = response;
    if (options.notifyOnFailed) {
      notification.config({
        duration: 4,
        maxCount: 2,
      });
      notification.error({
        message: `Error ${status}`,
        description: errorText,
      });
    }
  }
};

export default successHandler;

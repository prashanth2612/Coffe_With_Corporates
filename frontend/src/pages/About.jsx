import { Button, Result } from 'antd';
import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title="Coffe With Corporats"
      subTitle={translate('Looking for help or interested in collaboration?')}
      extra={
        <>
          <p>
            GitHub Profile: <a href="https://github.com/prashanth2612!" target="_blank" rel="noopener noreferrer">https://github.com/prashanth2612!</a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://github.com/prashanth2612!`);
            }}
          >
            {translate('Visit GitHub Profile')}
          </Button>
        </>
      }
    />
  );
};

export default About;

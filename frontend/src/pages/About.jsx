import { Button, Result } from 'antd';
import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Coffee With Corporates'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Developer : <strong>Katepally Prashanth Goud</strong>
          </p>
          <p>
            Email :{' '}
            <a href="mailto:prashanthit8074@gmail.com">prashanthit8074@gmail.com</a>
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/prashanth2612" target="_blank" rel="noreferrer">
              github.com/prashanth2612
            </a>
          </p>
          <p>
            LinkedIn :{' '}
            <a href="https://linkedin.com/in/prashanth-goud" target="_blank" rel="noreferrer">
              linkedin.com/in/prashanth-goud
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open('mailto:prashanthit8074@gmail.com');
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;

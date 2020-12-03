import { Typography } from 'antd';
import './styles.css';

const { Title } = Typography;

const Header = () => {
  return (
    <div className='container-header'>
      <div className='header'>
        <Title level={1} style={{ color: '#ffffff', textAlign: 'center' }}>Freios Supremos</Title>
      </div>
    </div>
  )
}

export default Header;

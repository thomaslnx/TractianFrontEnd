import { Layout } from 'antd';
import Container from './components/Container';
import AppHeader from './components/Header';

import './styles.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="main-layout">
      <Header>
        <AppHeader/>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Container />
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: '#031529', color: '#ffffff'}}>Marcos Moura ©2020 Using Ant Design</Footer>
    </Layout>
  );
}

export default App;

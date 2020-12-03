import { useState, useEffect } from 'react';
import { Row, Col, Typography, Select } from 'antd';

import api from '../../services/api';
import './container.css';

const { Title } = Typography;
const { Option } = Select;

const Container = () => {
  const [assets, setAssets] = useState([]);
  const [units, setUnits] = useState([]);
  const [unitSelected, setUnitSelected] = useState();
  const [selectedAssets, setSelectedAssets] = useState([]);

  useEffect(async() => {
    const assets = await api.get('https://challenge-tractian.herokuapp.com/branchassets');
    const units = await api.get('https://challenge-tractian.herokuapp.com/subsidiaries')
    setAssets(assets.data);
    setUnits(units.data);
  }, []);

  function handleSelectChange(value) {
    let unitId;

    units.find(unit => {
      if (unit.name === value) {
        unitId = unit._id;
      } else {
        return;
      }
    });

    setUnitSelected(unitId);
  }

  return(
    <div className='main-container'>
      <p style={{ textAlign: 'center' }}>Escolha a unidade:</p>
      <div className='select'>
        <Row justify='center' align='top'>
          <Col>
            <Select showArrow='true' style={{ width: 250 }} onSelect={handleSelectChange}>
              {
                units.map(unit => (
                  <Option key={unit.id} value={unit.name}>{unit.name}</Option>
                  ))
              }
            </Select>
          </Col>
        </Row>
      </div>

      <div className='assets-content'>
        <Row gutter={[16,32]}>
          <Col xl={16} xxl={16}>
            <Title level={3} style={{ textAlign: 'center', color: '#ffffff', background: '#213d59', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>
              Assets
            </Title>

            <div className='content'>
              <div className='assetsContent'>
                {
                  assets.map(item => (
                    item.branchOwner === unitSelected ? <div>{item.name}</div> : <div> </div>
                    ))
                }
              </div>
            </div>
          </Col>

          <Col xl={4} xxl={4}>
            <Title level={3} style={{ textAlign: 'center', color: '#ffffff', background: '#213d59', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>
              Health Assets
            </Title>

            <div className='content'>
              <div className='healthAssetsContent'>
              {
                assets.map(item => (
                  item.branchOwner === unitSelected ? <div>{item.healthscore}</div> : <div> </div>
                  ))
              }
              </div>
            </div>
          </Col>

          <Col xl={4} xxl={4}>
            <Title level={3} style={{ textAlign: 'center', color: '#ffffff', background: '#213d59', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>
              Assets Status
            </Title>

            <div className='content'>
              <div className='statusAssetsContent'>
              {
                assets.map(item => (
                  item.branchOwner === unitSelected ? <div>{item.status}</div> : <div> </div>
                  ))
              }
              </div>
            </div>
          </Col>
        </Row>
      </div>


      <Row justify='center'>
        <Col span={24}>
          <Title level={3} style={{ textAlign:'center', color: '#ffffff', background: '#213d59' }} >
            Graph
          </Title>
          <p>GRAPH Content</p>
        </Col>
      </Row>
    </div>
  )
};

export default Container;

import React from 'react';
import "./DispatchingList.css"
import { Transfer, Switch,Card } from 'antd';

const DisptachingList = () => {
    const [oneWay, setOneWay] = React.useState(false);
  const [mockData, setMockData] = React.useState([]);
  const [targetKeys, setTargetKeys] = React.useState([]);
  React.useEffect(() => {
    const newTargetKeys = [];
    const newMockData = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `fiche${i + 1}`,
        description: `description listes${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        newTargetKeys.push(data.key);
      }
      newMockData.push(data);
    }

    setTargetKeys(newTargetKeys);
    setMockData(newMockData);
  }, []);

  const onChange = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Dispatching Fiches" bordered={false} style={{ width: 500 }}>
        <Transfer
          dataSource={mockData}
          targetKeys={targetKeys}
          onChange={onChange}
          render={item => item.title}
          oneWay={oneWay}
          pagination
        />
        <br />
        <Switch
          unCheckedChildren="Retour"
          checkedChildren="Retour"
          checked={oneWay}
          onChange={setOneWay}
        />
        </Card>
      </div>
    )
}

export default DisptachingList;

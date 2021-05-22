import "./Main.css";
import hello from "../../admin.png";
import Chart from "../charts/Charts";
import ChartNabeul from "../charts/ChartsN";
import { Tabs,Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import React,{useState,useEffect} from 'react';
import UserList from "../datacharts/UserList";

const Main = () => {
const { TabPane } = Tabs;
const [count, setCount] = useState(0);
const [countInTimeout, setCountInTimeout] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(new Date().toLocaleTimeString()); // heure local en temps réels 
    }, 1000);
 
  }, []);

  return (
    <main>
    
      <div className="main__container">
        {/* <!-- TITRE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Admin  <i className="fa fa-clock-o" aria-hidden="true"></i> {count}</h1>
            <p>Welcome to your admin dashboard</p>
                    </div>
        </div>

        {/* <!-- TITRE END --> */}
        
        {/* <!-- PAVES  --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Nbr Téléopérateurs</p>
              <span className="font-bold text-title">57</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Présence TA/H</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-phone fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">L/surtaxés </p>
                         <Statistic
                      value={118}
            precision={1}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Réception CB</p>
              <Statistic
                      value={9.3}
            precision={1}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
            </div>
          </div>
        </div>
        {/* <!-- PAVES END --> */}
        <div className="card-container">
        <Tabs type="card">
      <TabPane tab="Centre Tunis" key="1">
        {/* <!-- GRAPH1 DEBUT--> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Rapports Journalier Appels surtaxés</h1>
                <p>Centre Tunis</p>
              </div>
              <i className="fa fa-eur" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Details</h1>
                <p>Revenu Centre Tunis</p>
              </div>
              <i className="fa fa-eur" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>TOTAL</h1>
                <p>75,300€</p>
              </div>

              <div className="card2">
                <h1>Appels/EM</h1>
                <p>1244</p>
              </div>

              <div className="card3">
                <h1>RDV</h1>
                <p>39</p>
              </div>

              <div className="card4">
                <h1>CB</h1>
                <p>1881€</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- GRAPH1 END  --> */}
      </TabPane>
      <TabPane tab="Centre Nabeul" key="2">
        {/* <!-- GRAPH2 DEBUT --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Rapports Journalier Appels surtaxés</h1>
                <p>Centre Nabeul</p>
              </div>
              <i className="fa fa-eur" aria-hidden="true"></i>
            </div>
            <ChartNabeul/>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Details</h1>
                <p>Revenu Centre Nabeul</p>
              </div>
              <i className="fa fa-eur" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>TOTAL</h1>
                <p>7500€</p>
              </div>

              <div className="card2">
                <h1>Appels/EM</h1>
                <p>744</p>
              </div>

              <div className="card3">
                <h1>RDV</h1>
                <p>39</p>
              </div>

              <div className="card4">
                <h1>CB</h1>
                <p>1881€</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- GRAPH2 END --> */}
      </TabPane>
      </Tabs>
        </div>












       
       
      </div>
    </main>
  );
};

export default Main;

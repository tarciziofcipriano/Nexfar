import Header from "./Header";
import { Outlet } from "react-router-dom";
import Nav from '../render/Nav';
import place from '../assets/place.png'

export default function Layout(props) {
  const { client, cartItems, nav } = props;

  return (
    <div>
      <Header
        cartItems={cartItems}
      />
      <div
        style={{
          display: 'flex',
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <div
          style={{
            flex: '15%'
          }}
        >
          <div
            style={{
              display: 'flex',
              marginTop: '30px'
            }}
          >
            <img
              src={place}
              alt="place"
            />
            <div
              style={{
                fontWeight: 'bold'
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  margin: 0,
                  paddingBottom: '10px'
                }}
              >
                {client.name}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  margin: 0
                }}
              >
                {client.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")}
              </p>
            </div>
          </div>
          {nav.map(index => (
            <Nav
              key={index.option}
              subTitle={index.moreOption}
              title={index.option}
            />
          ))}
        </div>
        <div
          style={{
            backgroundColor: '#ebebff',
            flex: '85%',
            paddingTop: '20px'
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
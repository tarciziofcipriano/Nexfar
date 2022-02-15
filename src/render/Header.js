import cart from '../assets/cart.png';
import logo from './../assets/Nexfar.png';
import { Link } from "react-router-dom";
import notification from '../assets/notification.png';
import React from 'react'

export default function Header(props) {
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price.price, 0);

  let countCart = 0;
  cartItems.map((item) => (
    (item.qty > 0) && (
      countCart = countCart + 1
    )
  ))

  return (
    <header
      style={{
        borderBottom: '3px solid #3cba92',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Link
        to="/"
      >
        <img
          src={logo}
          alt="logo"
          style={{
            margin: '3% 15%',
            width: '20%'
          }}
        />
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '23%'
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              margin: '5px 0px auto',
              textAlign: 'center'
            }}
          >
            NEXFAR
          </p>
          <Link
            to="/cart"
            style={{
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                display: 'flex',
                marginLeft: '15px'
              }}
            >
              <img
                src={cart}
                alt="car-shop"
                style={{
                  height: '25px'
                }}
              />
              <p
                style={{
                  color: '#3cba92',
                  fontWeight: 'bold',
                  margin: 'auto 0px',
                  textAlign: 'center',
                }}
              >
                R$ {itemsPrice.toFixed(2)}
              </p>
            </div>
          </Link>
          <p
            style={{
              fontSize: '11px',
              margin: 0,
            }}
          >
            Pedido mínimo: R$150,00
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            marginRight: '20px',
            width: '100px'
          }}
        >
          <div
            style={{
              marginTop: '22px'
            }}
          >
            <img
              src={notification}
              alt="notification"
              style={{
                height: '25px'
              }}
            />
            {countCart ? (
              <div
                style={{
                  backgroundColor: 'red',
                  border: '1px solid',
                  borderRadius: '60%',
                  bottom: '33px',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  height: '15px',
                  left: '8px',
                  position: 'relative',
                  textAlign: 'center',
                  width: '15px'
                }}
              >
                {countCart}
              </div>
            ) : ('')}
          </div>
          <div
            style={{
              backgroundColor: '#3cba92',
              border: '1px solid',
              borderRadius: '50%',
              color: '#FFFFFF',
              height: '40px',
              margin: 'auto',
              textAlign: '50%',
              width: '40px'
            }}
          >
            <p
              style={{
                fontSize: '20px',
                margin: '10px auto',
                textAlign: 'center'
              }}
            >
              T
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
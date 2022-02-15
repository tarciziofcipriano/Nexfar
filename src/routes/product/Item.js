import React from 'react';
import trash from '../../assets/trash.png'
import { useState } from 'react';

export default function Item(props) {
  const { BorderId, ButtonItem, onAdd, onRemove, onClean, price, products } = props;
  const [priceTotal, setPriceTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const add = () => {
    onAdd(products);
    setTotal(total + 1);
    setPriceTotal(priceTotal + products.price.price)
  };

  const reduce = () => {
    if (total > 0) {
      onRemove(products)
      setTotal(total - 1);
      setPriceTotal(priceTotal - products.price.price)
    };
  };

  const remove = () => {
    setTotal(0);
    setPriceTotal(0);
    setTotal(0)
    onClean(products)
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        borderWidth: '1px',
        margin: '10px 20px',
        padding: '0px 20px',
        textAlign: 'left'
      }}
    >
      <div
        style={{
          borderBottom: '1px solid #ebebff',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 0px'
        }}
      >
        <div
          style={{
            display: 'flex'
          }}
        >
          <BorderId>
            {products.id}
          </BorderId>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              margin: 0,
              paddingLeft: '20px'
            }}
          >
            {products.name}
          </p>
        </div>
        <div
          style={{
            display: 'flex'
          }}
        >
          <div
            style={{
              alignSelf: 'center',
              backgroundColor: '#ebebff',
              border: '1px solid',
              borderRadius: '1px',
              fontSize: '10px',
              margin: '0px 20px'
            }}
          >
            lllll
          </div>
          <div
            onClick={() => alert('O item está disponível.')}
            style={{
              alignSelf: 'center',
              border: '1px solid',
              borderRadius: '50%',
              boxSizing: 'border-box',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold',
              height: '18px',
              textAlign: 'center',
              width: '18px'
            }}
          >
            i
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: '13px',
          justifyContent: 'space-between',
          padding: '10px 0px'
        }}
      >
        <img
          src={products.imageURL}
          alt="products"
          style={{
            height: '78px',
            margin: '0px 40px'
          }}
        />
        <div
          style={{
            flex: '25%',
            margin: 0
          }}
        >
          <p
            style={{
              color: 'gray',
              flex: '25%',
              margin: 0,
              paddingBottom: '20px'
            }}
          >
            Base
          </p>
          <p
            style={{
              margin: 0,
              paddingBottom: '5px'
            }}
          >
            {products.base}
          </p>
          <p
            style={{
              fontWeight: 'bold',
              margin: 0
            }}
          >
            R$ {price?.price}
          </p>
        </div>
        <div
          style={{
            flex: '25%',
            margin: 0,
            paddingBottom: '20px'
          }}
        >
          <p
            style={{
              color: 'gray',
              margin: 0,
              paddingBottom: '20px'
            }}
          >
            Estoque
          </p>
          <p
            style={{
              flex: '25%',
              margin: 0
            }}
          >
            {products.quantityAvailable} un
          </p>
        </div>
        <div
          style={{
            flex: '25%',
            margin: 0
          }}
        >
          <p
            style={{
              color: 'gray',
              flex: '25%',
              margin: 0,
              paddingBottom: '20px'
            }}
          >
            Quantidade(un)
          </p>
          <div
            style={{
              display: 'flex'
            }}
          >
            <ButtonItem
              onClick={reduce}
              style={{
                color: (total > 0) ? '#f62854' : 'gray'
              }}
            >
              -
            </ButtonItem>
            <div
              style={{
                borderBottom: '1px solid',
                display: 'flex',
                justifyContent: 'center',
                margin: '0px 7px',
                width: '38px'
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  margin: 0
                }}
              >
                {total}
              </p>
              {(total > 0) && (
                <p
                  style={{
                    margin: 0,
                    marginLeft: '3px'
                  }}
                >
                  un
                </p>
              )}
            </div>
            <ButtonItem
              onClick={add}
              style={{
                color: '#3cba92'
              }}
            >
              +
            </ButtonItem>
          </div>
        </div>
        <div
          style={{
            flex: '25%',
            margin: 0
          }}
        >
          <p
            style={{
              color: 'gray',
              margin: 0,
              paddingBottom: '20px'
            }}
          >
            Valor
          </p>
          <p
            style={{
              flex: '25%',
              fontWeight: 'bold',
              margin: 0
            }}
          >
            R$ {priceTotal.toFixed(2)}
          </p>
        </div>
        {(total !== 0) && (
          <img
            src={trash}
            alt="trash"
            onClick={remove}
            style={{
              cursor: 'pointer',
              height: '16px',
              marginTop: '30px'
            }}
          />
        )}
      </div>
      <div
        style={{
          padding: '0px 0px 10px 177px'
        }}
      >
        <button
          onClick={() => alert('Tem produtos similares a venda.')}
          style={{
            backgroundColor: '#ebebff',
            border: '0px solid',
            borderRadius: '14px',
            cursor: 'pointer',
            fontSize: '10px',
            fontWeight: 'bold',
            marginRight: '5px',
            padding: '5px 15px'
          }}
        >
          SIMILARES
        </button>
      </div>
    </div>
  );
}
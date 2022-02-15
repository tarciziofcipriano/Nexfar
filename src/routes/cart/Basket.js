import { Link } from 'react-router-dom';
import React from 'react';
import returnImage from './../../assets/returnImage.png';
import trash from './../../assets/trash.png';

export default function Basket(props) {
  const { BorderId, ButtonCart, ButtonItem, cartItems, client, onAdd, onClean, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price.price, 0);
  const itemsDiscount = cartItems.reduce((a, c) => a + c.qty * (c.price.price - c.price.taxes), 0);
  const tax = cartItems.reduce((a, c) => c.price.taxes, 0);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 50px',
          textDecoration: 'none'
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              display: 'flex',
              marginBottom: '20px'
            }}
          >
            <img
              src={returnImage}
              alt="logo"
              style={{
                height: '50px',
                width: '40px'
              }}
            />
            <p
              style={{
                color: 'black',
                fontSize: '20px',
                fontWeight: 'bold',
                margin: '13px 0px 0px 10px'
              }}
            >
              VOLTAR
            </p>
          </div>
        </Link>
        {(cartItems.length === 0) || (itemsDiscount === 0) ?
          ('') : (
            <Link
              to="payments"
            >
              <ButtonCart>
                IR PARA PAGAMENTOS
              </ButtonCart>
            </Link>
          )}
      </div>
      <div
        style={{
          backgroundColor: '#ebebff',
          padding: '0px 30px 20px'
        }}
      >
        {(cartItems.length === 0) || (itemsDiscount === 0) ? (
          <p
            style={{
              margin: 0,
              paddingTop: '100px',
              textAlign: 'center'
            }}
          >
            Carrinho vazio.
          </p>
        ) : (cartItems.length !== 0) && (
          <div
            style={{
              display: 'flex'
            }}
          >
            <div
              style={{
                flex: '70%'
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '10px',
                  borderRadius: '10px',
                  borderWidth: '1px',
                  boxShadow: '2px 2px 2px #ebebff',
                  padding: '0px 20px',
                  textAlign: 'left'
                }}
              >
                <p
                  style={{
                    borderBottom: '1px solid #ebebff',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    margin: 0,
                    padding: '20px 0px 10px'
                  }}
                >
                  PRODUTOS
                </p>
                <div
                  style={{
                    paddingTop: '20px'
                  }}
                >
                  {(cartItems.length === 0) && (
                    <p
                      style={{
                        margin: 0
                      }}
                    >
                      Vazio.
                    </p>
                  )}
                  {cartItems.map((item) => (
                    (item.qty > 0) && (
                      <div
                        key={item.id}
                        style={{
                          paddingBottom: '10px'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            fontSize: '13px',
                            justifyContent: 'space-between'
                          }}
                        >
                          <p
                            style={{
                              margin: 0
                            }}
                          >
                            {item.name}
                          </p>
                          <div>
                            <p
                              style={{
                                fontWeight: 'bold',
                                margin: 0,
                                textAlign: 'right'
                              }}
                            >
                              {item.qty} un - R$ {item.price.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '5px'
                          }}
                        >
                          <div>
                            <ButtonItem
                              onClick={() => onRemove(item)}
                              style={{
                                color: '#f62854'
                              }}
                            >
                              -
                            </ButtonItem>
                            <ButtonItem
                              onClick={() => onAdd(item)}
                              style={{
                                color: '#3cba92'
                              }}
                            >
                              +
                            </ButtonItem>
                          </div>
                          <img
                            onClick={() => onClean(item)}
                            src={trash}
                            alt="trash"
                            style={{
                              cursor: 'pointer',
                              height: '16px',
                              margin: '0px 0px 0px 10px'
                            }}
                          />
                        </div>
                      </div>
                    )
                  ))}
                  {cartItems.length !== 0 && (
                    <div
                      style={{
                        color: 'gray',
                        display: 'flex',
                        justifyContent: 'right',
                        padding: '10px 0px'
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          margin: 0,
                          paddingRight: '10px'
                        }}
                      >
                        Impostos: R$ {tax}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          margin: 0
                        }}
                      >
                        Total: R$ {itemsPrice.toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '10px',
                  borderRadius: '10px',
                  borderWidth: '1px',
                  boxShadow: '2px 2px 2px #ebebff',
                  marginTop: '20px',
                  padding: '0px 20px 20px',
                  textAlign: 'left'
                }}
              >
                <div
                  style={{
                    borderBottom: '1px solid #ebebff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px 0px 10px'
                  }}
                >
                  <p
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      margin: 0
                    }}
                  >
                    CLIENTE
                  </p>
                  <p
                    style={{
                      color: '#3cba92',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      margin: 0
                    }}
                  >
                    VER DETALHES
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: 'gray',
                      margin: 0,
                      paddingTop: '20px'
                    }}
                  >
                    ID
                  </p>
                  <BorderId
                    style={{
                      width: '42px'
                    }}
                  >
                    {client.id}
                  </BorderId>
                  <div
                    style={{
                      display: 'flex'
                    }}
                  >
                    <div
                      style={{
                        marginRight: '150px'
                      }}
                    >
                      <p
                        style={{
                          color: 'gray',
                          margin: 0,
                          marginTop: '20px',
                        }}
                      >
                        Razão Social
                      </p>
                      <p
                        style={{
                          fontWeight: 'bold',
                          margin: 0
                        }}
                      >
                        {client.name}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          color: 'gray',
                          margin: 0,
                          marginTop: '20px'
                        }}
                      >
                        CNPJ
                      </p>
                      <p
                        style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          margin: 0
                        }}
                      >
                        {client.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '10px',
                borderRadius: '10px',
                borderWidth: '1px',
                boxShadow: '2px 2px 2px #ebebff',
                flex: '30%',
                height: '200px',
                marginLeft: '20px',
                padding: '0px 20px',
                textAlign: 'left'
              }}
            >
              <p
                style={{
                  borderBottom: '1px solid #ebebff',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: 0,
                  padding: '20px 0px 10px'
                }}
              >
                VALORES
              </p>
              {cartItems.length !== 0 && (
                <>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: 'gray',
                          margin: 0,
                          paddingTop: '10px',
                          textAlign: 'center'
                        }}
                      >
                        Total
                      </p>
                      <p
                        style={{
                          color: 'gray',
                          margin: 0,
                          paddingBottom: '5px',
                          textAlign: 'center'
                        }}
                      >
                        (sem impostos)
                      </p>
                      <p
                        style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          margin: 0,
                          textAlign: 'center'
                        }}
                      >
                        R$ {itemsDiscount.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          color: 'gray',
                          margin: 0,
                          paddingTop: '10px',
                          paddingBottom: '5px',
                          textAlign: 'center'
                        }}
                      >
                        Impostos
                      </p>
                      <p
                        style={{
                          fontWeight: 'bold',
                          fontSize: '13px',
                          margin: 0,
                          textAlign: 'center'
                        }}
                      >
                        R$: {tax}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        color: 'gray',
                        fontSize: '14px',
                        margin: 0,
                        paddingBottom: '5px',
                        textAlign: 'center'
                      }}
                    >
                      Total:
                    </p>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        margin: 0,
                        textAlign: 'center'
                      }}
                    >
                      R$ {itemsDiscount.toFixed(2)}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
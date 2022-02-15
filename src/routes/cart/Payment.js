import { Link } from 'react-router-dom';
import returnImage from './../../assets/returnImage.png';
import { useState } from 'react';

export default function Payment(props) {
  const { ButtonCart, cartItems, client } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price.price, 0);
  const itemsDiscount = cartItems.reduce((a, c) => a + c.qty * (c.price.price - c.price.taxes), 0);
  const tax = cartItems.reduce((a, c) => c.price.taxes, 0);
  const [payment, setPayment] = useState();

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
          to="/cart"
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
        <ButtonCart
          onClick={() => alert('Pedido enviado!')}
        >
          ENVIAR PEDIDO
        </ButtonCart>
      </div>
      <div
        style={{
          padding: '0px 30px 20px',
          backgroundColor: '#ebebff',
        }}
      >
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
                padding: '0px 20px 30px',
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
                OPÇÃO DE PAGAMENTO
              </p>
              <p
                style={{
                  margin: 0,
                  padding: '20px 0px 10px'
                }}
              >
                O valor total dos produtos é de R$ {itemsPrice.toFixed(2)} (com impostos)
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '20px 0px 10px'
                }}
              >
                <p
                  style={{
                    fontWeight: 'bold',
                    margin: 0
                  }}
                >
                  Selecione a forma de pagamento desejada:
                </p>
                <select
                  onChange={e => setPayment && setPayment(e.target.value)}
                  style={{
                    alignSelf: 'center',
                    border: 'none',
                    height: '28px',
                    padding: '0px 10px'
                  }}
                >
                  <option>Boleto</option>
                  <option>Cartão de Crédito</option>
                  <option>Cartão de Débito</option>
                </select>
              </div>
              <ButtonCart
                style={{
                  cursor: 'auto'
                }}
              >
                {(payment !== undefined) ? payment : 'Boleto'}
              </ButtonCart>
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '10px',
                borderBottom: '1px solid #ebebff',
                borderRadius: '10px',
                borderWidth: '1px',
                boxShadow: '2px 2px 2px #ebebff',
                marginTop: '20px',
                padding: '0px 20px 20px',
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
                ENDEREÇO DE ENTREGA
              </p>
              <p
                style={{
                  fontSize: '18px',
                  margin: 0,
                  paddingTop: '30px'
                }}
              >
                {client.address.address}
              </p>
              <p
                style={{
                  fontSize: '18px',
                  margin: 0
                }}
              >
                {client.address.city} / {client.address.cep.replace(/^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/, "$1.$2-$3")}
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '10px',
                borderBottom: '1px solid #ebebff',
                borderRadius: '10px',
                borderWidth: '1px',
                boxShadow: '2px 2px 2px #ebebff',
                marginTop: '20px',
                padding: '0px 20px 20px',
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
                INFORMAÇÕES ADICIONAIS
              </p>
              <p
                style={{
                  fontSize: '18px',
                  margin: 0,
                  paddingTop: '30px'
                }}
              >
                Favor entregar o pedido no período matutino.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '10px',
                borderBottom: '1px solid #ebebff',
                borderRadius: '10px',
                borderWidth: '1px',
                boxShadow: '2px 2px 2px #ebebff',
                marginTop: '20px',
                padding: '0px 20px 20px',
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
              {cartItems.map((item) => (
                (item.qty > 0) && (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      fontSize: '13px',
                      justifyContent: 'space-between',
                      paddingTop: '10px'
                    }}
                  >
                    <p
                      style={{
                        margin: 0
                      }}
                    >
                      {item.name}
                    </p>
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
                        fontWeight: 'bold',
                        fontSize: '13px',
                        textAlign: 'center',
                        margin: 0
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
                        fontSize: '13px',
                        fontWeight: 'bold',
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
      </div>
    </div>
  )
};
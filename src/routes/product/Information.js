import Item from "./Item";
import { useSearchParams } from "react-router-dom";
import ProductOptions from "./Options";

export default function Information(props) {
  const { BorderId, ButtonItem, onAdd, onClean, onRemove, product, productOptions } = props;
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          flex: '85%'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '50px'
          }}
        >
          <div
            style={{
              display: 'flex',
              margin: '0px 20px 20px'
            }}
          >
            <div
              className='searchBox'
            >
              <input
                className="searchInput"
                placeholder="Pesquisar"
                value={searchParams.get("filter") || ""}
                onChange={event => {
                  let filter = event.target.value;
                  if (filter) {
                    setSearchParams({ filter });
                  } else {
                    setSearchParams({});
                  }
                }}
              />
              <i className="gg-search" />
            </div>
          </div>
          <div
            style={{
              display: 'flex'
            }}
          >
            <div
              style={{
                display: 'flex'
              }}
            >
              <p
                style={{
                  alignSelf: 'center',
                  margin: 0,
                  paddingRight: '10px'
                }}
              >
                Ordenado por:
              </p>
              <select
                style={{
                  alignSelf: 'center',
                  border: 'none',
                  borderRadius: '20px',
                  height: '28px',
                  padding: '0px 10px'
                }}
              >
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                paddingLeft: '20px'
              }}
            >
              <p
                style={{
                  alignSelf: 'center',
                  margin: 0,
                  paddingRight: '10px'
                }}
              >
                Exibição
              </p>
              <select
                style={{
                  alignSelf: 'center',
                  border: 'none',
                  borderRadius: '20px',
                  height: '28px',
                  padding: '0px 10px'
                }}
              >
                <option>10</option>
                <option>9</option>
                <option>8</option>
                <option>7</option>
                <option>6</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          {product.filter(product => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = product.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }).map(product => (
            <Item
              key={product.id}
              BorderId={BorderId}
              ButtonItem={ButtonItem}
              onAdd={onAdd}
              onRemove={onRemove}
              onClean={onClean}
              products={product}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#ebebff',
          borderLeft: '1px solid #b2b2b2',
          flex: '15%',
          paddingLeft: '25px'
        }}
      >
        {productOptions.map(index => (
          <ProductOptions
            key={index.option}
            subTitle={index.moreOption}
            title={index.option}
          />
        ))}
      </div>
    </div>
  )
};
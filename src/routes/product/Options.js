export default function Options(props) {
  const { subTitle, title } = props;

  return (
    <div>
      <p
        style={{
          color: 'rgb(91, 18, 125)',
          fontSize: '15px',
          fontWeight: 'bold'
        }}
      >
        {title}
      </p>
      {subTitle.map(index => (
        <div
          key={index.subOption}
          style={{
            display: 'flex'
          }}
        >
          <input
            type="checkbox"
            style={{
              alignSelf: 'center',
              margin: '.4rem'
            }}
          />
          <p
            style={{
              fontSize: '13px'
            }}
          >
            {index.subOption}
          </p>
        </div>
      ))}
    </div>
  )
};
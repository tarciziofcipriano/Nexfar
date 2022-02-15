export default function Nav(props) {
  const { subTitle, title } = props;

  return (
    <div>
      <p
        style={{
          fontSize: '15px',
          fontWeight: 'bold',
          padding: '10px 0px 0px 10px'
        }}
      >
        {title}
      </p>
      {subTitle.map(index => (
        <p
          key={index.subOption}
          className="hover"
          style={{
            cursor: 'pointer',
            fontSize: '13px',
            paddingLeft: '30px'
          }}
        >
          {index.subOption}
        </p>
      ))}
    </div>
  )
};
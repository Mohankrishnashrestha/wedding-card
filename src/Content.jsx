/* eslint-disable react/prop-types */

function Content(props) {
  const [topic, invite, name1, and, name2, day, date, time, palace] =
    props.heading;
  return (
    <>
      <h1>{topic}</h1>
      <p>{invite}</p>
      <h2>{name1}</h2>
      <div>{and}</div>
      <h2>{name2}</h2>
      <div>
        {day}
        {date}
        {time}
      </div>
      <div>{palace}</div>
    </>
  );
}

export default Content;

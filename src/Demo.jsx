/* eslint-disable react/prop-types */
import "./demo.css"

function Demo(props) {
    const {topic, invite, name1, and, name2, day, date, time, palace}= props.heading;
    

  return (
    
 <div className="main">
    <div className="main_header">
    <h1>{topic}</h1>
    </div>
    <div className="invite">{invite}</div>
    <h2>{name1}</h2>
    <div>{and}</div>
    <h2>{name2}</h2>
    <div className="time">
      <div>{day}</div>
      <div>{date}</div>
      <div>{time}</div>
    </div><br/>
    <div>{palace}</div>
  </div>

  )
}

export default Demo
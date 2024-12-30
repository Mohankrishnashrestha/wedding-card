/* eslint-disable react/prop-types */
import "./demo.css"

function Demo(props) {
    const {topic, invite, name1, and, name2, day, date, time, palace, greeting}= props.heading;
    

  return (
    
 <div className="main">
    <div className="main_header">
    <h1>{topic}</h1>
    </div>
    <div className="invite">{invite}</div>
    <div className="name">
    <h2>{name1}</h2>
    <div>{and}</div>
    <h2>{name2}</h2>
    </div>
    <div className="time">
      <div>{day}</div>
      <div>{date}</div>
      <div>{time}</div>
    </div><br/>
    <div className="palace">{palace}</div><br/>
    <div className="greeting">{greeting}</div>
  </div>

  )
}

export default Demo
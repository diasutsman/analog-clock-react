import React from "react";

const centerStyle = `translate(-50%, -50%)`

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondDeg: 0,
      minuteDeg: 0,
      hourDeg: 0
    };
  }

  componentDidMount() {
    this.setClockWiseEveryMilis()
  }

  setClockWiseEveryMilis() {
    setInterval(() => {
      this.setState(() => {
        const time = new Date();
        return {
          secondDeg: time.getSeconds() * 6 + (time.getMilliseconds() * 0.006),
          minuteDeg: time.getMinutes() * 6 + time.getSeconds() * 0.1,
          hourDeg: time.getHours() * 30 + (time.getMinutes() * 60 + time.getSeconds()) * 1 / 120
        }
      })
    }, 1)
  }

  render() {
    return (
      <div className="clock">

        {
          Array.from({ length: 61 }, (_, i) => {
            const isDivisibleBy5 = i % 5 === 0 && i !== 0;
            return (
              <div className="second" key={i} style={{ transform: `${centerStyle} rotate(${i * 6}deg)` }}>
                <div className="bar" style={{ height: isDivisibleBy5 ? 20 : 5 }}></div>
                <span className="number" style={{ transform: `translateX(-50%) rotate(${360 - i * 6}deg)` }} >{isDivisibleBy5 ? i / 5 : ''}</span>
              </div>
            )
          })
        }

        <div id="second" style={{ transform: `${centerStyle} rotate(${this.state.secondDeg}deg` }}>
          <div></div>
        </div>

        <div id="minute" style={{ transform: `${centerStyle} rotate(${this.state.minuteDeg}deg` }}>
          <div></div>
        </div>

        <div id="hour" style={{ transform: `${centerStyle} rotate(${this.state.hourDeg}deg` }}>
          <div></div>
        </div>

        <div className="center-dot">

        </div>
      </div>
    )
  }
}
import React from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

function Calendar(user) {
  const groups = [
    { id: 1, title: "Periods of Activity" },
    { id: 2, title: "Periods of Activity" },
    { id: 3, title: "Periods of Activity" }
  ];
  function convertTime(date) {
    console.log(date);
    var time = date.split(" ")[3];
    var startTime = Date.parse(date.substr(0, 11));
    var parts = time.match(/(\d+):(\d+) (AM|PM)/);
    if (parts) {
      var hours = parseInt(parts[1]),
        minutes = parseInt(parts[2]),
        tt = parts[3];
      if (tt === "PM" && hours < 12) hours += 12;
      startTime.setHours(hours, minutes, 0, 0);
    }
    return startTime;
  }

  const items = [
    {
      id: 1,
      group: 1,
      title: "item 1",
      start_time: convertTime(user.user.prop.activity_periods[0].start_time),
      end_time: convertTime(user.user.prop.activity_periods[0].end_time)
    },
    {
      id: 2,
      group: 2,
      title: "item 2",
      start_time: convertTime(user.user.prop.activity_periods[1].start_time),
      end_time: convertTime(user.user.prop.activity_periods[1].end_time)
    },
    {
      id: 3,
      group: 3,
      title: "item 3",
      start_time: convertTime(user.user.prop.activity_periods[2].start_time),
      end_time: convertTime(user.user.prop.activity_periods[2].end_time)
    }
  ];
  return (
    <div>
      <div>
        <h3>
          Employee name : <b>{user.user.prop.real_name}</b>
        </h3>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
        />
      </div>
    </div>
  );
}

export default Calendar;

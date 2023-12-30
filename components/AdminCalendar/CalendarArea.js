import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import trLocale from "date-fns/locale/tr";

const locales = {
  "tr-TR": trLocale,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Büyük Toplantı",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Tatil",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Konferans",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function CalendarArea() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      if (
        (d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)
      ) {
        alert("ÇAKIŞMA");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="calendar">
      <div className="new-events">
        <input
          type="text"
          placeholder="Etkinlik Adı"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Başlangıç Tarihi"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          dateFormat="dd/MM/yyyy" // Tarih formatını burada ayarlıyoruz
        />
        <DatePicker
          placeholderText="Bitiş Tarihi"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
          dateFormat="dd/MM/yyyy" // Tarih formatını burada ayarlıyoruz
        />
        <button
          onClick={handleAddEvent}
          className="add-event-btn"
          style={{ padding: "7px 10px", borderRadius: "5px" }}
        >
          Ekle
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default CalendarArea;
import React,{useState, useEffect} from "react";

import "components/Application.scss";

import axios from "axios";

import Appointment from "components/Appointment"
import DayList from "components/DayList";

import getAppointmentsForDay from "helpers/selectors"


export default function Application(props) {
  const[state, setState] = useState({
    day:'Monday',
    days:[],
    appointments:{}
  });

  const setDay = day => setState(state => ({...state, day}));
  

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments")
    ]).then(all => {
      setState(state => ({...state, days: all[0].data, appointments: all[1].data}));
    })
  }, []);
  
  
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map(appointment => (
          <Appointment
          key={appointment.id}
          {...appointment}
          />
        ))}
        <Appointment id="last" time="5pm" />
      </section>
    </main>
  );
}


export const getAppointmentsForDay = (state, day) => {
  const dayObj = state.days.find(element => element.name === day);

  if (!dayObj) {
    return [];
  }

  const interviewerIds = dayObj.interviewers;

  const interviewersForDay = [];

  for(const id in state.interviewers) {
    if (interviewerIds.includes(Number(id))) {
      interviewersForDay.push(state.appointments[id])
    }
  }

  return interviewersForDay;
} 

export const getInterviewersForDay = (state, day) => {
  const dayObj = state.days.find(elem => elem.name === day);

  if (!dayObj) {
    return [];
  }

  const appointmentIds = dayObj.appointments;

  const appointmentsForDay = [];

  for (const id in state.appointments) {
    if (appointmentIds.includes(Number(id))) {
      appointmentsForDay.push(state.appointments[id])
    }
  }

  return appointmentsForDay;
}

export const getInterview = (state,interview) => {
  if (!interview) {
    return null;
  }

  const interviewId = interview.interviewer;

  for(const id in state.interviews) {
    if(Number(id) === interviewId) {
      return (
        {
          student: interview.student,
          interviewer: state.interviewers[id]
        }
      )
    }
  }
}
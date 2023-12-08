import React, { Children, useState } from "react";
import CalendarArea from "../components/AdminCalendar/CalendarArea";
import ExitButton from "../components/AdminCalendar/ExitButton";

const CalendarAdmin = () => {
    return(
        <>
        <AdminCalendarArea>
        <ExitButton />
        <CalendarArea />
        </AdminCalendarArea>
        </>
    )
}

export default CalendarAdmin;

function AdminCalendarArea({children}){
    return(
        <div className="admin-area">
            {children}
        </div>
    )
}
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calender.module.css';



export default function Calender() {


  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      
      <div className={styles.container}>
        <Calendar className={styles.calender}
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={({ date, view }) =>
            view === 'month' && selectedDate?.getTime() === date.getTime() ? styles.highlight : null
          }
        />
      </div>
    
    </>
  );
}
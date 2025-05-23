import { DateTime } from 'luxon';


const timezoneMap = {
  'PST': 'America/Los_Angeles', 
  'PDT': 'America/Los_Angeles', 
  'EST': 'America/New_York',    
  'EDT': 'America/New_York',    
  'CST': 'America/Chicago',     
  'CDT': 'America/Chicago',     
  'MST': 'America/Denver',      
  'MDT': 'America/Denver',      
  'GMT': 'Europe/London',       
  'BST': 'Europe/London',       
  'IST': 'Asia/Kolkata',        
  'CET': 'Europe/Paris',        
  'CEST': 'Europe/Paris',       
  'JST': 'Asia/Tokyo',          
  'AEST': 'Australia/Sydney',   
  'AEDT': 'Australia/Sydney',   
};

const convertToLocalTime = (dateStr, timeStr) => {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)\s*(\w+)?$/i);
  if (!match) return { date: dateStr, time: timeStr };

  let [, hourStr, minuteStr, period, timeZone] = match;
  let hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);

  if (period.toUpperCase() === 'PM' && hours < 12) hours += 12;
  if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;

  const sourceTimeZone = timeZone && timezoneMap[timeZone.toUpperCase()] ? timezoneMap[timeZone.toUpperCase()] : 'UTC';

  const dt = DateTime.fromObject(
    {
      year: +dateStr.split('-')[0],
      month: +dateStr.split('-')[1],
      day: +dateStr.split('-')[2],
      hour: hours,
      minute: minutes,
    },
    { zone: sourceTimeZone }
  ).setZone(DateTime.local().zoneName);

  return {
    date: dt.toLocaleString(DateTime.DATE_HUGE),
    time: dt.toLocaleString(DateTime.TIME_SIMPLE),
  };
};

export default convertToLocalTime;
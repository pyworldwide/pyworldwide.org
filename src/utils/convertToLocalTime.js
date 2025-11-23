// Timezone abbreviation to UTC offset mapping (in hours)
// Note: This is a simplified approach and doesn't handle DST transitions perfectly
const timezoneOffsets = {
  // North America
  'HST': -10, // Hawaii Standard Time
  'AKST': -9, // Alaska Standard Time
  'AKDT': -8, // Alaska Daylight Time
  'PST': -8,  // Pacific Standard Time
  'PDT': -7,  // Pacific Daylight Time
  'MST': -7,  // Mountain Standard Time
  'MDT': -6,  // Mountain Daylight Time
  'CST': -6,  // Central Standard Time
  'CDT': -5,  // Central Daylight Time
  'EST': -5,  // Eastern Standard Time
  'EDT': -4,  // Eastern Daylight Time
  'AST': -4,  // Atlantic Standard Time
  'ADT': -3,  // Atlantic Daylight Time
  'NST': -3.5, // Newfoundland Standard Time
  'NDT': -2.5, // Newfoundland Daylight Time

  // Europe
  'WET': 0,   // Western European Time
  'WEST': 1,  // Western European Summer Time
  'GMT': 0,   // Greenwich Mean Time
  'BST': 1,   // British Summer Time
  'CET': 1,   // Central European Time
  'CEST': 2,  // Central European Summer Time
  'EET': 2,   // Eastern European Time
  'EEST': 3,  // Eastern European Summer Time
  'MSK': 3,   // Moscow Standard Time

  // Asia
  'GST': 4,   // Gulf Standard Time
  'IRST': 3.5, // Iran Standard Time
  'PKT': 5,   // Pakistan Standard Time
  'IST': 5.5, // India Standard Time
  'NPT': 5.75, // Nepal Time
  'BST_BD': 6, // Bangladesh Standard Time
  'ICT': 7,   // Indochina Time
  'THA': 7,   // Thailand Standard Time
  'SGT': 8,   // Singapore Time
  'MYT': 8,   // Malaysia Time
  'PHT': 8,   // Philippines Time
  'HKT': 8,   // Hong Kong Time
  'CST_CHINA': 8, // China Standard Time
  'WIB': 7,   // Western Indonesian Time
  'WITA': 8,  // Central Indonesian Time
  'WIT': 9,   // Eastern Indonesian Time
  'JST': 9,   // Japan Standard Time
  'KST': 9,   // Korea Standard Time

  // Australia & Oceania
  'AWST': 8,  // Australian Western Standard Time
  'AWDT': 9,  // Australian Western Daylight Time
  'ACST': 9.5, // Australian Central Standard Time
  'ACDT': 10.5, // Australian Central Daylight Time
  'AEST': 10, // Australian Eastern Standard Time
  'AEDT': 11, // Australian Eastern Daylight Time
  'NZST': 12, // New Zealand Standard Time
  'NZDT': 13, // New Zealand Daylight Time

  // Africa
  'WAT': 1,   // West Africa Time
  'CAT': 2,   // Central Africa Time
  'EAT': 3,   // East Africa Time
  'SAST': 2,  // South Africa Standard Time

  // South America
  'BRT': -3,  // Brazil Time
  'ART': -3,  // Argentina Time
  'CLT': -4,  // Chile Standard Time
  'CLST': -3, // Chile Summer Time
  'COT': -5,  // Colombia Time
  'PET': -5,  // Peru Time
  'ECT': -5,  // Ecuador Time
  'BOT': -4,  // Bolivia Time
  'VET': -4,  // Venezuela Time
  'GYT': -4,  // Guyana Time
  'SRT': -3,  // Suriname Time
  'UYT': -3,  // Uruguay Time
  'PYT': -3,  // Paraguay Time

  // Additional Common Zones
  'UTC': 0,   // Coordinated Universal Time
  'Z': 0,     // Zulu Time (same as UTC)
  'AZOT': -1, // Azores Time
  'CVT': -1,  // Cape Verde Time
  'FNT': -2,  // Fernando de Noronha Time
};

// Helper function to get GMT offset string
const getGMTOffset = (date) => {
  const offset = -date.getTimezoneOffset(); // getTimezoneOffset returns negative for positive offsets
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const sign = offset >= 0 ? '+' : '-';
  
  return `GMT${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
};

const convertToLocalTime = (dateStr, timeStr) => {
  // Ensure this only runs in the browser
  if (typeof window === 'undefined') {
    return { date: dateStr, time: timeStr };
  }

  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)\s*(\w+)?$/i);
  if (!match) return { date: dateStr, time: timeStr };

  let [, hourStr, minuteStr, period, timeZone] = match;
  let hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);

  // Convert to 24-hour format
  if (period.toUpperCase() === 'PM' && hours < 12) hours += 12;
  if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;

  // Parse the date
  const [year, month, day] = dateStr.split('-').map(Number);
  
  // Create the correct UTC timestamp
  let utcTimestamp;
  if (timeZone && timezoneOffsets.hasOwnProperty(timeZone.toUpperCase())) {
    const offsetHours = timezoneOffsets[timeZone.toUpperCase()];
    // Convert source timezone to UTC
    utcTimestamp = Date.UTC(year, month - 1, day, hours, minutes) - (offsetHours * 60 * 60 * 1000);
  } else {
    // If no timezone specified, treat as UTC
    utcTimestamp = Date.UTC(year, month - 1, day, hours, minutes);
  }

  // Create a Date object from the UTC timestamp
  const localDate = new Date(utcTimestamp);

  // Get user's timezone info
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const gmtOffset = getGMTOffset(localDate);

  // Format the results
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: userTimeZone
  });

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: userTimeZone
  });

  const formattedTime = timeFormatter.format(localDate);
  const timeWithOffset = `${formattedTime} ( ${gmtOffset} )`;

  return {
    date: dateFormatter.format(localDate),
    time: timeWithOffset,
  };
};

// For React components, you might want to use this in useEffect or ensure client-side rendering
export const convertToLocalTimeClient = (dateStr, timeStr) => {
  // This ensures it only runs after component mounts (client-side)
  if (typeof window === 'undefined') {
    return null; // Return null on server-side, handle in component
  }
  return convertToLocalTime(dateStr, timeStr);
};

export default convertToLocalTime;
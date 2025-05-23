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

const convertToLocalTime = (dateStr, timeStr) => {
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
  
  // Create date in the source timezone
  let sourceDate;
  if (timeZone && timezoneOffsets.hasOwnProperty(timeZone.toUpperCase())) {
    // Create UTC date first, then adjust for timezone offset
    const utcDate = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    const offsetHours = timezoneOffsets[timeZone.toUpperCase()];
    sourceDate = new Date(utcDate.getTime() - (offsetHours * 60 * 60 * 1000));
  } else {
    // If no timezone specified or not recognized, treat as UTC
    sourceDate = new Date(Date.UTC(year, month - 1, day, hours, minutes));
  }

  // Convert to local time (this happens automatically when creating a local date)
  const localDate = new Date(sourceDate.getTime());

  // Format the results using Intl APIs for better browser compatibility
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return {
    date: dateFormatter.format(localDate),
    time: timeFormatter.format(localDate),
  };
};

export default convertToLocalTime;
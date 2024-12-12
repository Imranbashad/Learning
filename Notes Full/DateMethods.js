// Static Methods

// 1. Date.now()
// Description: Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now()); // Output: A large number representing the current timestamp in milliseconds

// 2. Date.parse(dateString)
// Description: Parses a date string and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log(Date.parse('2024-11-18T18:06:00')); // Output: Timestamp in milliseconds

// 3. Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
// Description: Accepts the same parameters as the longest form of the Date constructor, but treats them as UTC.
console.log(Date.UTC(2024, 10, 18, 18, 6, 0)); // Output: Timestamp in milliseconds

// Instance Methods

// 1. date.getFullYear()
// Description: Returns the year of the specified date according to local time.
const date1 = new Date();
console.log(date1.getFullYear()); // Output: Current year

// 2. date.getMonth()
// Description: Returns the month (0-11) in the specified date according to local time.
const date2 = new Date();
console.log(date2.getMonth()); // Output: Current month (0-11)

// 3. date.getDate()
// Description: Returns the day of the month (1-31) for the specified date according to local time.
const date3 = new Date();
console.log(date3.getDate()); // Output: Current day of the month

// 4. date.getDay()
// Description: Returns the day of the week (0-6) for the specified date according to local time.
const date4 = new Date();
console.log(date4.getDay()); // Output: Current day of the week (0-6)

// 5. date.getHours()
// Description: Returns the hour (0-23) for the specified date according to local time.
const date5 = new Date();
console.log(date5.getHours()); // Output: Current hour (0-23)

// 6. date.getMinutes()
// Description: Returns the minutes (0-59) in the specified date according to local time.
const date6 = new Date();
console.log(date6.getMinutes()); // Output: Current minutes (0-59)

// 7. date.getSeconds()
// Description: Returns the seconds (0-59) in the specified date according to local time.
const date7 = new Date();
console.log(date7.getSeconds()); // Output: Current seconds (0-59)

// 8. date.getMilliseconds()
// Description: Returns the milliseconds (0-999) in the specified date according to local time.
const date8 = new Date();
console.log(date8.getMilliseconds()); // Output: Current milliseconds (0-999)

// 9. date.getTime()
// Description: Returns the numeric value corresponding to the time for the specified date according to universal time (UTC).
const date9 = new Date();
console.log(date9.getTime()); // Output: Timestamp in milliseconds

// 10. date.setFullYear(year[, month[, date]])
// Description: Sets the full year for a specified date according to local time.
const date10 = new Date();
date10.setFullYear(2025);
console.log(date10.getFullYear()); // Output: 2025

// 11. date.setMonth(month[, date])
// Description: Sets the month for a specified date according to local time.
const date11 = new Date();
date11.setMonth(11); // December (0-11)
console.log(date11.getMonth()); // Output: 11

// 12. date.setDate(day)
// Description: Sets the day of the month for a specified date according to local time.
const date12 = new Date();
date12.setDate(25);
console.log(date12.getDate()); // Output: 25

// 13. date.setHours(hour[, min[, sec[, ms]]])
// Description: Sets the hours for a specified date according to local time.
const date13 = new Date();
date13.setHours(20);
console.log(date13.getHours()); // Output: 20

// 14. date.setMinutes(min[, sec[, ms]])
// Description: Sets the minutes for a specified date according to local time.
const date14 = new Date();
date14.setMinutes(45);
console.log(date14.getMinutes()); // Output: 45

// 15. date.setSeconds(sec[, ms])
// Description: Sets the seconds for a specified date according to local time.
const date15 = new Date();
date15.setSeconds(30);
console.log(date15.getSeconds()); // Output: 30

// 16. date.setMilliseconds(ms)
// Description: Sets the milliseconds for a specified date according to local time.
const date16 = new Date();
date16.setMilliseconds(500);
console.log(date16.getMilliseconds()); // Output: 500

// 17. date.toISOString()
// Description: Converts a date to a string following the ISO 8601 format.
const date17 = new Date();
console.log(date17.toISOString()); // Output: A string in ISO 8601 format

// 18. date.toDateString()
// Description: Returns the date portion of a Date object as a human-readable string.
const date18 = new Date();
console.log(date18.toDateString()); // Output: A human-readable date string

// 19. date.toTimeString()
// Description: Returns the time portion of a Date object as a human-readable string.
const date19 = new Date();
console.log(date19.toTimeString()); // Output: A human-readable time string

// 20. date.toLocaleDateString()
// Description: Returns the date portion of a Date object as a string, using locale conventions.
const date20 = new Date();
console.log(date20.toLocaleDateString()); // Output: A locale-sensitive date string

// 21. date.toLocaleTimeString()
// Description: Returns the time portion of a Date object as a string, using locale conventions.
const date21 = new Date();
console.log(date21.toLocaleTimeString()); // Output: A locale-sensitive time string

// 22. date.toLocaleString()
// Description: Returns a string with a locality sensitive representation of this date.
const date22 = new Date();
console.log(date22.toLocaleString()); // Output: A locale-sensitive date and time string

// 23. date.toUTCString()
// Description: Converts a date to a string, using the UTC time zone.
const date23 = new Date();
console.log(date23.toUTCString()); // Output: A string in UTC time format

// 24. date.valueOf()
// Description: Returns the primitive value of a Date object.
const date24 = new Date();
console.log(date24.valueOf()); // Output: Timestamp in milliseconds

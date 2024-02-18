export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInTurkey(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Turkey's time
  const offsetTurkey = 3; // Turkey is in Turkey Time (UTC+3)
  now.setHours(now.getUTCHours() + offsetTurkey);

  return now;
}

export function formatTimeForTurkey(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Istanbul", // Use Istanbul time zone for Turkey
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "EET", but do remember that Turkey switches between EET and EEST.
  formattedTime += " EET";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

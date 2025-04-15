export function FormatDate(dateString) {
  // Make sure the timestamp ends with "Z" for UTC conversion
  const utcDateString = dateString.endsWith("Z")
    ? dateString
    : dateString + "Z";
  const date = new Date(utcDateString); 
  const options = { year: "numeric", month: "long", day: "numeric" };
  // Convert date to user's local timezone
  return date.toLocaleDateString("en-US", options); 
}

export function FormatTime(utcTimestamp) {
  // Make sure the timestamp ends with "Z" for UTC conversion
  const utcString = utcTimestamp.endsWith("Z")
    ? utcTimestamp
    : utcTimestamp + "Z";
  const utcDate = new Date(utcString);
  // Convert time to user's local timezone
  const localTime = utcDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return localTime;
}

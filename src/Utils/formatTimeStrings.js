export const formatTimeStrings = (strings) => {
  if (!strings) return null;

  if (strings.length > 1) {
    return `${strings[0]} - ${strings[strings.length - 1]}`;
  }

  if (strings.length) {
    return `${strings[0]} - till tomorrow`;
  }

  return "";
};
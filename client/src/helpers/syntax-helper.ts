export const camelToSentenceCase = (camelCase: string) => {
  return capitalizeFirstLetter(camelCase.split(/(?=[A-Z])/).join(' '))
}

export const capitalizeFirstLetter = (inputString: string) => {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

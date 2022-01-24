export const camelToSentenceCase = (camelCase: string) => {
  return capitalizeFirstLetter(camelCase.split(/(?=[A-Z])/).join(' '))
}

export const capitalizeFirstLetter = (inputString: string) => {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export const getRandomId = (length = 4) => (Math.random()+1).toString(36).substring(2,2+length).toUpperCase()

export const snakeToSentenceCase = (snakeCase: string) => {
  return snakeCase.split('-').map(word => capitalizeFirstLetter(word)).join(' ')
}
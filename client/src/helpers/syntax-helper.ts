export const camelToSentenceCase = (camelCase: string): string => {
  return capitalizeFirstLetter(camelCase.split(/(?=[A-Z])/).join(' '))
}

export const capitalizeFirstLetter = (inputString: string): string => {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export const getRandomId = (length = 4): string => (Math.random()+1).toString(36).substring(2,2+length).toUpperCase()

export const snakeToSentenceCase = (snakeCase: string): string => {
  return snakeCase.split('-').map(word => capitalizeFirstLetter(word)).join(' ')
}

export const handlePlurals = (singularWord: string, quantity: number): string => {
  const needsPlural = new RegExp('(s|z|x|(ch)|(sh))$', 'i').test(singularWord);
  return `${quantity} ${singularWord}${quantity === 1 ? '' : needsPlural ? 'es' : 's' }`
}

export const writeModalSass = (subtext: string, points: number): string => {
  return subtext + 
  ` You ${ points < 0 ? 'lose' : 'earn'} ${points === 0 ? 'nothing' : handlePlurals('point', Math.abs(points))}`
}

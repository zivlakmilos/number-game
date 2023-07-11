export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * max + min);
}

export const numberToDigits = (num: number, minDigits: number = 0): number[] => {
  const res: number[] = [];

  while (num > 0) {
    const digit: number = num % 10;
    res.unshift(digit);
    num = Math.floor(num / 10);
  }

  while (res.length < minDigits) {
    res.unshift(0);
  }

  return res;
}

export const isValidKey = (key: string) => {
  if (!key.length || key.length > 1) {
    return false;
  }

  const char = key.at(0);

  const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')'];

  return validChars.includes(char);
}

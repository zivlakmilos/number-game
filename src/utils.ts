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

export function randomCase(input: string): string {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const convertToUppercase = Math.random() > 0.5;
    const modifiedChar = convertToUppercase
      ? input[i].toUpperCase()
      : input[i].toLowerCase();
    result += modifiedChar;
  }
  return result;
}

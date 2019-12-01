export function swapCase(input: string) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const lower = input[i].toLowerCase();
    result += input[i] === lower ? input[i].toUpperCase() : lower;
  }
  return result;
}

export function spongeCase(input: string): string {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result +=
      Math.random() > 0.5 ? input[i].toUpperCase() : input[i].toLowerCase();
  }
  return result;
}

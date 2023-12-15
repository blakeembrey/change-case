const TOKENS = /(\S+)|(.)/g;
const IS_SPECIAL_CASE = /[\.#]\p{L}/u; // #tag, example.com, etc.
const IS_MANUAL_CASE = /\p{Ll}(?=[\p{Lu}])/u; // iPhone, iOS, etc.
const ALPHANUMERIC_PATTERN = /[\p{L}\d]+/gu;
const IS_ACRONYM = /(?:\p{Lu}\.){2,}$/u;

export const WORD_SEPARATORS = new Set(["—", "–", "-", "―", "/"]);

export const SENTENCE_TERMINATORS = new Set([".", "!", "?"]);

export const TITLE_TERMINATORS = new Set([
  ...SENTENCE_TERMINATORS,
  ":",
  '"',
  "'",
  "”",
]);

export const SMALL_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "because",
  "but",
  "by",
  "en",
  "for",
  "if",
  "in",
  "neither",
  "nor",
  "of",
  "on",
  "only",
  "or",
  "over",
  "per",
  "so",
  "some",
  "than",
  "that",
  "the",
  "to",
  "up",
  "upon",
  "v",
  "versus",
  "via",
  "vs",
  "when",
  "with",
  "without",
  "yet",
]);

export interface Options {
  locale?: string | string[];
  sentenceCase?: boolean;
  sentenceTerminators?: Set<string>;
  smallWords?: Set<string>;
  titleTerminators?: Set<string>;
  wordSeparators?: Set<string>;
}

export function titleCase(
  input: string,
  options: Options | string[] | string = {},
) {
  const {
    locale = undefined,
    sentenceCase = false,
    sentenceTerminators = SENTENCE_TERMINATORS,
    titleTerminators = TITLE_TERMINATORS,
    smallWords = SMALL_WORDS,
    wordSeparators = WORD_SEPARATORS,
  } = typeof options === "string" || Array.isArray(options)
    ? { locale: options }
    : options;

  const terminators = sentenceCase ? sentenceTerminators : titleTerminators;
  let result = "";
  let isNewSentence = true;

  // tslint:disable-next-line
  for (const m of input.matchAll(TOKENS)) {
    const { 1: token, 2: whiteSpace, index = 0 } = m;

    if (whiteSpace) {
      result += whiteSpace;
      continue;
    }

    // Ignore URLs, email addresses, acronyms, etc.
    if (IS_SPECIAL_CASE.test(token)) {
      result += token;

      // The period at the end of an acronym is not a new sentence.
      if (IS_ACRONYM.test(token)) {
        isNewSentence = false;
        continue;
      }
    } else {
      const matches = Array.from(token.matchAll(ALPHANUMERIC_PATTERN));
      let value = token;

      for (let i = 0; i < matches.length; i++) {
        const { 0: word, index: wordIndex = 0 } = matches[i];

        // Reset "new sentence" when we find a word.
        if (isNewSentence) {
          isNewSentence = false;
        } else {
          // Skip capitalizing all words if sentence case is enabled.
          if (sentenceCase) {
            continue;
          }

          // Ignore small words except at beginning or end,
          // or previous token is a new sentence.
          if (
            smallWords.has(word) &&
            // Not the final token and word.
            !(index + token.length === input.length && i === matches.length - 1)
          ) {
            continue;
          }
        }

        if (IS_MANUAL_CASE.test(word)) {
          continue;
        }

        // Only capitalize words after a valid word separator.
        if (i > 0 && !wordSeparators.has(token.charAt(wordIndex - 1))) {
          continue;
        }

        value =
          value.slice(0, wordIndex) +
          value.charAt(wordIndex).toLocaleUpperCase(locale) +
          value.slice(wordIndex + 1);
      }

      result += value;
    }

    const lastChar = token.charAt(token.length - 1);
    isNewSentence = terminators.has(lastChar);
  }

  return result;
}

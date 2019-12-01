/**
 * Locale character mapping rules.
 */
interface Locale {
  regexp: RegExp;
  map: Record<string, string>;
}

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
const SUPPORTED_LOCALE: Record<string, Locale> = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      i: "\u0130"
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      i: "\u0130"
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      i̇: "\u0049",
      j̇: "\u004A",
      į̇: "\u012E",
      i̇̀: "\u00CC",
      i̇́: "\u00CD",
      i̇̃: "\u0128"
    }
  }
};

/**
 * Localized upper case.
 */
export function localeUpperCase(str: string, locale: string) {
  const lang = SUPPORTED_LOCALE[locale.toLowerCase()];
  if (lang) return upperCase(str.replace(lang.regexp, m => lang.map[m]));
  return upperCase(str);
}

/**
 * Upper case as a function.
 */
export function upperCase(str: string) {
  return str.toUpperCase();
}

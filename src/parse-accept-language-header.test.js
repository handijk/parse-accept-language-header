import { describe, test, expect } from '@jest/globals';
import { parseAcceptLanguageHeader } from './parse-accept-language-header.js';

describe('parseAcceptLanguageHeader', () => {
  test('a normally formatted accept language header', () => {
    expect(
      parseAcceptLanguageHeader('fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5')
    ).toEqual(['fr-CH', 'fr', 'en', 'de']);
  });

  test('sorts languages by q', () => {
    expect(
      parseAcceptLanguageHeader('fr-CH, fr;q=0.5, en;q=0.7, de;q=0.8, *;q=0.9')
    ).toEqual(['fr-CH', 'de', 'en', 'fr']);
  });

  test('a wildcard accept language header', () => {
    expect(parseAcceptLanguageHeader('*')).toEqual([]);
  });

  test('a falsy accept language header', () => {
    expect(parseAcceptLanguageHeader(null)).toEqual([]);
  });
});

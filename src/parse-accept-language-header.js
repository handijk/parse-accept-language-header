export const parseAcceptLanguageHeader = (acceptLanguage) =>
  acceptLanguage && acceptLanguage !== '*'
    ? acceptLanguage
        .split(',')
        .map((acceptLanguagePart) => {
          const [acceptLanguageCode, qFactor = 1] =
            acceptLanguagePart.split(';q=');
          return [acceptLanguageCode.trim(), qFactor];
        })
        .sort(
          ([_aLocale, aPriority], [_bLocale, bPriority]) =>
            bPriority - aPriority
        )
        .map(([locale, _priority]) => locale)
        .filter((locale) => locale !== '*')
    : [];

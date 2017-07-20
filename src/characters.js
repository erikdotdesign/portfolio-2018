const commonCharacterStyles = {
  fill: '#000',
  fontFamily: 'Helvetica Neue',
  fontWeight: 'bold',
  opacity: 0
}

const characterStyles = {
  lg: {
    ...commonCharacterStyles,
    fontFamily: commonCharacterStyles.fontFamily.concat(',', ' HelveticaNeue-Bold'),
    fontSize: 48,
    y: 46
  },
  sm: {
    ...commonCharacterStyles,
    fontFamily: commonCharacterStyles.fontFamily.concat(',', ' HelveticaNeue-CondensedBold'),
    fontSize: 16,
    y: 16,
    x: 6
  }
}

const characters = {
  e: {
    ...characterStyles.lg,
    character: 'E',
    x: 13
  },
  r: {
    ...characterStyles.lg,
    character: 'R',
    x: 11.5
  },
  i: {
    ...characterStyles.lg,
    character: 'I',
    x: 21.5
  },
  k: {
    ...characterStyles.lg,
    character: 'K',
    x: 11.5
  },
  m: {
    ...characterStyles.lg,
    character: 'M',
    x: 7
  },
  y: {
    ...characterStyles.lg,
    character: 'Y',
    x: 12.5
  },
  s: {
    ...characterStyles.lg,
    character: 'S',
    x: 13
  },
  d: {
    ...characterStyles.lg,
    character: 'D',
    x: 11
  },
  g: {
    ...characterStyles.lg,
    character: 'G',
    x: 10.5
  },
  emdash: {
    ...characterStyles.lg,
    character: '—',
    x: 5
  },
  n: {
    ...characterStyles.lg,
    character: 'N',
    x: 11
  },
  two: {
    ...characterStyles.sm,
    character: '2'
  },
  zero: {
    ...characterStyles.sm,
    character: '0'
  },
  one: {
    ...characterStyles.sm,
    character: '1'
  },
  seven: {
    ...characterStyles.sm,
    character: '7'
  }
}

export default characters;

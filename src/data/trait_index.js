
export const traitIdMapping = {
    0: {name: 'trait 1'},
    1: {name: 'trait 2'},
    2: {name: 'trait 3'},
    3: {name: 'trait 4'},
    4: {name: 'trait 5'},
    5: {name: 'trait 6'},
  };

export const traitIdMappingRev = Object.fromEntries(
    Object.entries(traitIdMapping).map(([key, value]) => [value, key])
    );
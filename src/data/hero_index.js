
export const heroIdMapping = {
    0: 'Option 1',
    1: 'Option 2',
    2: 'Option 3',
    3: 'Option 4',
    4: 'Option 5',
    5: 'Option 6',
  };

export const heroIdMappingRev = Object.fromEntries(
    Object.entries(heroIdMapping).map(([key, value]) => [value, key])
    );
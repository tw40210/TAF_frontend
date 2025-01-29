
export const itemIdMapping = {
    0: {name: 'item 1'},
    1: {name: 'item 2'},
    2: {name: 'item 3'},
    3: {name: 'item 4'},
    4: {name: 'item 5'},
    5: {name: 'item 6'},
  };

export const itemIdMappingRev = Object.fromEntries(
    Object.entries(itemIdMapping).map(([key, value]) => [value, key])
    );
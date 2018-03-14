const data = {
  nodes: [
  // column 1
    { node: 0, name: 'line1a' },
    { node: 1, name: 'line2a' },
    // column 2
    { node: 2, name: 'line1b' },
    { node: 3, name: 'line2b' },
    // column 3
    { node: 4, name: 'line1c' },
    { node: 5, name: 'line2c' },
  ],
  links: [
  // column 1
    { source: 0, target: 2, value: 7090 },
    { source: 0, target: 3, value: 3270 },

    { source: 1, target: 2, value: 5920 },
    { source: 1, target: 3, value: 760 },

    // column 2
    { source: 2, target: 4, value: 6370 },
    { source: 2, target: 5, value: 720 },

    { source: 3, target: 4, value: 1545 },
    { source: 3, target: 5, value: 1725 },
    { source: 3, target: 4, value: 760 },

  ],
};

export default data;

const { TestScheduler } = require('jest');

describe('Tests on href value', () => {
  test('returns value without hash', () => {
    const hrefExample = '#thisis_atest';
    expect(hrefExample.substring(1)).toBe('thisis_atest');
  });
});

import thankjs from '.';

/** @test {thankjs} */
describe('thankjs', () => {
  it('exists', () => {
    expect(thankjs).toBeDefined();
  });

  it('returns true', () => {
    expect(thankjs()).toBe(true);
  });
});

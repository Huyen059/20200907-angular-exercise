import { SanitizePhonePipe } from './sanitize-phone.pipe';

describe('SanitizePhonePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizePhonePipe();
    expect(pipe).toBeTruthy();
  });
});

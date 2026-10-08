import { validateEmail } from '../index';
import { isDisposable } from '../utils/isDisposable';

// Deterministic: checks the MX exchange's parent domain against our own list,
// instead of relying on a third party keeping disposable MX records live.
test('isDisposable detects a listed domain from its MX exchange', async () => {
  expect(await isDisposable([{ priority: 10, exchange: 'mx.hulkteam.cyou' }])).toBe(true);
  expect(await isDisposable([{ priority: 10, exchange: 'mx.gmail.com' }])).toBe(false);
});

test('Email Lookup complete 2', async () => {
  expect(await validateEmail('bhuvi@gmail.com')).toEqual(
    expect.objectContaining({ email: 'bhuvi@gmail.com', isDisposable: false }),
  );
});

test('Not a valid Email', async () => {
  expect(await validateEmail('bhuvi')).toEqual(expect.objectContaining({ isEmail: false }));
});

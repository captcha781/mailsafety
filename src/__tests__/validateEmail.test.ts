import { validateEmail } from '../index';

test('Email Lookup complete', async () => {
  expect(await validateEmail('bhuvi@icidroit.info')).toEqual(
    expect.objectContaining({ email: 'bhuvi@icidroit.info', isDisposable: true }),
  );
});

test('Email Lookup complete 2', async () => {
  expect(await validateEmail('bhuvi@gmail.com')).toEqual(
    expect.objectContaining({ email: 'bhuvi@gmail.com', isDisposable: false }),
  );
});

test('Not a valid Email', async () => {
  expect(await validateEmail('bhuvi')).toEqual(expect.objectContaining({ isEmail: false }));
});

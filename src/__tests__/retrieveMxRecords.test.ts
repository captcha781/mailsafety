import { retrieveMxRecords } from '../index';

test('Retrieve Mx Records', async () => {
  let records = await retrieveMxRecords('yopmail.com');
  expect(records).toBeDefined();
});

test('Retrieve Mx Records - Error', async () => {
  await expect(retrieveMxRecords('yopmail')).rejects.toThrow(TypeError);
});

import { callAPI } from '../src/client/js/formHandler';


test('should fetch data from API', async () => {
  const data = await callAPI('https://jestjs.io/en/')
  expect(data.polarity).toBeDefined();
})

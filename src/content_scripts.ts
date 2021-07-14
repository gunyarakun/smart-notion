import { browser } from 'webextension-polyfill-ts';

const main = async () => {
  const value = await browser.storage.local.get('dummy');
  console.log(value.dummy || 'first launch');

  await browser.storage.local.set({ dummy: 'test' });
}

main();

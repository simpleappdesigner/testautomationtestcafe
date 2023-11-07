import percySnapshot from '@percy/testcafe';
import { Selector } from 'testcafe';

let url="https://simpleappdesigner.pythonanywhere.com/palindrome_r/"

fixture('MyFixture')
  .page(url);
test('Test1', async t => {
  await t.typeText(Selector("input[name='letter']"), 'a');
  await t.click(Selector("button[type='button']"))
  await percySnapshot(t, 'TestCafe Demo');
})
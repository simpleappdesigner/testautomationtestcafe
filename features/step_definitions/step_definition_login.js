const { ClientFunction, Selector } = require('testcafe');
//import Colors from 'colors'
const Colors = require('colors')

let Given;
let When;
let Then;

try {
    Given = require('@cucumber/cucumber').Given;
    When = require('@cucumber/cucumber').When;
    Then = require('@cucumber/cucumber').Then;
} catch (error) {
    console.log('Using older version of cucumber (< 7)');
    Given = require('cucumber').Given;
    When = require('cucumber').When;
    Then = require('cucumber').Then;
}

let searchinput='';

Given('user browse the site {string}', async function (t,[url]) {
    // Write code here that turns the phrase above into concrete actions
    await t.navigateTo(url);
  });

When('types the letter {string}', async function (t,[search_letter]) {
    // Write code here that turns the phrase above into concrete actions
    await t.typeText("[name='letter']",search_letter)
    await t.click("[type='button']")
    searchinput=search_letter
    //await t.wait(1000)

  });

  
Then('gets words for letter', async function (t) {
    // Write code here that turns the phrase above into concrete actions
    console.log("pass-->".green,searchinput.grey)
    const all_words_td=Selector('td.border-slate-300')
    const total= await all_words_td.count

    for (let i=0;i< total;i=i+2)
    {
        const el_se=all_words_td.nth(i);
        const word= await el_se.textContent;
        console.log(word.blue) 

        await t.expect(word[0]).eql(word[word.length - 1])
        await t.expect(word[0]).eql(searchinput)
    }
  });


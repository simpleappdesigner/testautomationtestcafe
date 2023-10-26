Feature: Running Cucumber with TestCafe - test feature example
  As a user able to search the words which starts and ends with same letter

  Scenario: search words which starts and ends with same letter
    Given user browse the site "https://simpleappdesigner.pythonanywhere.com/palindrome_r/"
    When types the letter "<searchLetter>"
    Then gets words for letter
  Examples:
        | searchLetter | 
        | v  | 
        | w  |
        | a  |
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from percy import percy_snapshot
import time

url="https://simpleappdesigner.pythonanywhere.com/palindrome_r/"
driver = webdriver.Firefox()
driver.get(url)
assert "Palindrome" in driver.title
elem = driver.find_element(By.CSS_SELECTOR, "input[name='letter']")
elem.clear()
elem.send_keys("a")
btn=driver.find_element(By.CSS_SELECTOR,"button[type='button']")
btn.click()
assert "No results found." not in driver.page_source
time.sleep(5)
percy_snapshot(driver, 'simpleapp pythonanywhere page')
driver.close()
import re
import pytest
from playwright.sync_api import Page, expect

@pytest.fixture(scope="function", autouse=True)
def before_each_test(page:Page):
    page.goto("https://www.saucedemo.com/")
    yield
    print("after the test runs")
def test_has_title(page: Page):
    expect(page).to_have_url("https://www.saucedemo.com/")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile("Swag Labs"))

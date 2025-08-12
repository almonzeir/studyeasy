from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:9002/universities")

        # Wait for the main heading to be visible to ensure the page is loaded
        expect(page.get_by_role("heading", name="تصفح الجامعات")).to_be_visible(timeout=15000)

        # Give the page a moment to settle animations
        page.wait_for_timeout(1000)

        page.screenshot(path="jules-scratch/verification/universities_page.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    run()

import {Page} from `./page.js`;
import {browser} from `@wdio/globals`;
class HomePage extends Page {
    async open() {
        await browser
    }
}

export default new HomePage();
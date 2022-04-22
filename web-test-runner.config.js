import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    files: ['src/**/*.test.ts'],
    plugins: [esbuildPlugin({ ts: true })],
    /*browsers: [
        playwrightLauncher({
            product: 'chromium',
            launchOptions: {
                headless: false,
                devtools: false
            }
        })
    ],*/
    // browsers: [
        /*playwrightLauncher({
            product: 'chromium',
            createBrowserContext({ browser }) {
                return browser.newContext({
                    ...devices['Pixel 5']
                });
            },
            launchOptions: {
                headless: true,
                devtools: true,
                args: ['--some-flag']
            }
        })*//* ,
        playwrightLauncher({
            product: 'firefox',
            launchOptions: {
                headless: true,
                devtools: true,
                args: ['--some-flag']
            }
        }),
        playwrightLauncher({
            product: 'webkit',
            createBrowserContext({ browser }) {
                return browser.newContext({
                    ...devices['iPad (gen 7)']
                });
            },
            launchOptions: {
                headless: true
            }
        }),*/
    // ],
    coverageConfig: {
        report: true,
        reportDir: 'coverage',
        threshold: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        }
    }
};

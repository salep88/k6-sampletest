# K6 Sample Load & Scenario Testing

This project contains example [k6](https://k6.io/) scripts for load and scenario-based performance testing of web applications.

## Project Structure

- `loadTest.js` - Standard load test with fixed number of virtual users.
- `scenarioTest.js` - Scenario-based test using ramping VUs.
- `.gitignore` - Ignores generated HTML reports.

## Requirements

- [k6](https://k6.io/docs/getting-started/installation/)
- Internet connection (for external summary/report modules)

## Usage

### 1. Run the Load Test

```sh
k6 run loadTest.js
```

- Generates `reportloadtest.html` and a text summary in the console.

### 2. Run the Scenario Test

```sh
k6 run scenarioTest.js
```

- Generates `reportscenariotest.html` and a text summary in the console.

### 3. Run the Simple Script

```sh
k6 run script.js
```

- Runs a basic test with 10 VUs for 30 seconds.

## Reports

After running the tests, open the generated HTML reports (`reportloadtest.html` or `reportscenariotest.html`) in your browser for a detailed summary.

## Customization

- Edit the test scripts to change target URLs, thresholds, or scenarios as needed.
- Reports are generated using [k6-reporter](https://github.com/benc-uk/k6-reporter).

## References

- [k6 Documentation](https://k6.io/docs/)
- [k6 Reporter](https://github.com/benc-uk/k6-reporter)

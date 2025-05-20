import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export let options = {
    scenarios: {
        ramping_vus: { 
            executor: 'ramping-vus', 
            startVUs: 1,
            stages: [
                { duration: '15s', target: 40 },
                { duration: '20s', target: 150 },
                { duration: '30s', target: 500 },
                { duration: '15s', target: 0 },
            ]
        }
    }
};

export default function () {
    const response = http.get('http://test.k6.io');
    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response time is less than 400ms': (r) => r.timings.duration < 400
    });
    sleep(1); 
};

export function handleSummary(data) {
    return {
        'reportscenariotest.html': htmlReport(data),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
};
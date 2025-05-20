import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export let options = {
    vus: 150,
    duration: '2m30s'
};

export default function () {
    let res = http.get('http://test.k6.io');
      check(res, { 
        "status is 200": (res) => res.status === 200,
        'Response time is less than 400ms': (r) => r.timings.duration < 400 
    });
    sleep(1);
};

export function handleSummary(data) {
    return {
        'reportloadtest.html': htmlReport(data),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
};
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "JobSearchTest",
  "description": "\r\nAs user I want Search jobs",
  "id": "jobsearchtest",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verify jobSearch result using different dataset",
  "description": "",
  "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter SalaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter SalaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"\u003cjonType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jonType",
        "result"
      ],
      "line": 19,
      "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;;2"
    },
    {
      "cells": [
        "development manager",
        "Wembley, Greater London",
        "up to 7 miles",
        "400000",
        "600000",
        "Per annum",
        "Permanent",
        "Permanent Development Manager jobs in Wembley"
      ],
      "line": 21,
      "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;;3"
    },
    {
      "cells": [
        "Retail Sales",
        "Canary Wharf, Greater London",
        "up to 2 miles",
        "50000",
        "200000",
        "Per month",
        "Contract",
        "Contract Retail Sales jobs in Canary Wharf"
      ],
      "line": 22,
      "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "verify jobSearch result using different dataset",
  "description": "",
  "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter SalaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter SalaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "verify jobSearch result using different dataset",
  "description": "",
  "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"development manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Wembley, Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter SalaryMin \"400000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter SalaryMax \"600000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Permanent Development Manager jobs in Wembley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "verify jobSearch result using different dataset",
  "description": "",
  "id": "jobsearchtest;verify-jobsearch-result-using-different-dataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Retail Sales\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Canary Wharf, Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 2 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter SalaryMin \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter SalaryMax \"200000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Contract Retail Sales jobs in Canary Wharf\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
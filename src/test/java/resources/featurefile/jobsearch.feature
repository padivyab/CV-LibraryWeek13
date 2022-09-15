Feature: JobSearchTest

  As user I want Search jobs

  Scenario Outline: verify jobSearch result using different dataset

    Given I am on Home Page
    When  I enter job title "<jobTitle>"
    And   I enter location "<location>"
    And   I select distance "<distance>"
    And   I click on more Search Options Link
    And   I enter SalaryMin "<salaryMin>"
    And   I enter SalaryMax "<salaryMax>"
    And   I select salary type "<salaryType>"
    And   I select Job Type "<jonType>"
    And   I click on find jobs button
    Then  I verify the result "<result>"
    Examples:
      | jobTitle                   | location                     | distance       | salaryMin | salaryMax | salaryType | jonType   | result                                              |
      | Tester                     | Harrow                       | up to 5 miles  | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill         |
      | development manager        | Wembley, Greater London      | up to 7 miles  | 400000    | 600000    | Per annum  | Permanent | Permanent Development Manager jobs in Wembley       |
      | Retail Sales               | Canary Wharf, Greater London | up to 2 miles  | 50000     | 200000    | Per month  | Contract  | Contract Retail Sales jobs in Canary Wharf          |
      | Account Manager            | London                       | up to 10 miles | 20000     | 400000    | Per month  | Permanent | Permanent Account Manager jobs in Wembley           |
      | Automation Engineer        | London                       | up to 35 miles | 70000     | 90000     | Per hour   | Permanent | Permanent Automation Engineer jobs in London        |
      | Electrical Design Engineer | Wembury, Devon               | up to 15 miles | 60000     | 90000     | Per annum  | Contract  | Contract Electrical Design Engineer jobs in Wembury |


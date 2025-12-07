Feature: Get Place API

Background:
Given I create a new place and store the place id

Scenario: Get place details of an existing place id

When I call the get place API
Then I should receive the correct place details

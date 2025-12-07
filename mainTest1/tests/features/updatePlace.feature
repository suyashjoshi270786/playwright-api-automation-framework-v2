Feature: Update place API

Background:
Given I create a new place and store the place id

Scenario: Update an existing place using place id
When I call the Update Place API
Then I should update the place details correctly

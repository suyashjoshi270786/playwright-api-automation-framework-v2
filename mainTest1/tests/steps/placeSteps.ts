import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../../support/world";

const ADD_PLACE_PATH = "maps/api/place/add/json";
const GET_PLACE_PATH = "maps/api/place/get/json";
const UPDATE_PLACE_PATH = "maps/api/place/update/json";
const DELETE_PLACE_PATH = "maps/api/place/delete/json";

//Common: Add Place

Given(
  "I create a new place and store the place id",
  async function (this: CustomWorld) {
    const payload = {
      location: {
        lat: -38.383494,
        lng: 33.427362,
      },
      accuracy: 50,
      name: "Frontline house",
      phone_number: "(+91) 983 893 3937",
      address: "29, side layout, cohen 09",
      types: ["shoe park", "shop"],
      website: "http://google.com",
      language: "French-IN",
    };

    const queryParams = {
      key: "qaclick123",
    };

    const res = await this.apiClient.post(ADD_PLACE_PATH, payload, queryParams);
    const status = res.status();
    const bodyText = await res.json();
    console.log("ADD Status", status);
    console.log("ADD Body", bodyText);

    expect(status).toBe(200);

    //const body = JSON.parse(await bodyText);
    this.placeId = bodyText.place_id;

    console.log("Stored place id in world", this.placeId);
    expect(this.placeId).toBeTruthy();
  }
);

Then("I should have a valid place id", async function (this: CustomWorld) {
  console.log("Validating placeID", this.placeId);
  expect(this.placeId).toBeTruthy();
});

//Get Place API

When("I call the get place API", async function (this: CustomWorld) {
  const queryParams = {
    key: "qaclick123",
    place_id: this.placeId,
  };
  const res = await this.apiClient.get(GET_PLACE_PATH, queryParams);

  this.response = res;

  const status = res.status();
  const body = await res.json();
  console.log("Get Response body is:", body);
  console.log("Get Status", status);
  expect(status).toBe(200);
});

Then("I should receive the correct place details", async function (this: CustomWorld) {
    const status = this.response.status();
    const body = await this.response.json();

    console.log("FINAL GET status:", status);
    //console.log("FINAL GET response body:", bodyText);

    expect(status).toBe(200);
    expect(body.name).toBe("Frontline house");
    expect(body.accuracy).toBe("50");
    expect(body.location.latitude).toBe("-38.383494");
    expect(body.phone_number).toBe("(+91) 983 893 3937");
    expect(body.types).toBe("shoe park,shop");
  }
);

//Update place API

When("I call the Update Place API", async function (this: CustomWorld) {
  const queryParams = {
    place_id: this.placeId,
    key: "qaclick123",
  };

  const payload = {
    place_id: this.placeId,
    address: "81 winter walk, USA",
    key: "qaclick123",
  };

  const res = await this.apiClient.put(UPDATE_PLACE_PATH, payload, queryParams);

  this.response = res;
  const body = await res.json();

  console.log("Update Place API Response Body: ", body);
});

Then("I should update the place details correctly", async function (this: CustomWorld) {
    const status = this.response.status();
    const body = await this.response.json();
    expect(status).toBe(200);
    expect(body.msg).toBe("Address successfully updated");
    console.log("Update Place API Schema validation completed");
  }
);

//Delete place API

When("I call Delete place API", async function (this: CustomWorld) {
  const queryParams = {
    key: "qaclick123",
  };

  const payload = {
    place_id: this.placeId,
  };

  const res = await this.apiClient.post(
    DELETE_PLACE_PATH,
    payload,
    queryParams
  );
  const body = await res.json();
  console.log("Delete place API Response body: ", body);
  this.response = res;
});

Then("I can delete existing generated place id", async function (this: CustomWorld) {
    const Status = this.response.status();
    const body = await this.response.json();
    expect(body.status).toBe("OK");
    expect(Status).toBe(200);
    console.log("Delete API Response Validated successfully");
  }
);

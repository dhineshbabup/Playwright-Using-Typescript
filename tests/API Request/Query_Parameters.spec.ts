import { test, expect } from "@playwright/test";
import { getPOSTAPIRequestBody } from "../../src/utils/APIHelper";
import {faker} from "@faker-js/faker"

test.use({
  baseURL: process.env.BASE_API_URL,
});

test("query parameter - getting booking id", async ({ request }) => {

    // create booking
  const firstname = faker.person.firstName()
  const lastName = faker.person.lastName()
  const price = faker.number.int({min:1000, max: 10000})

  const APIBody = await getPOSTAPIRequestBody(firstname, lastName, price, true, "breakfast", "2025-06-15", "2025-06-18")

  const response = await request.post(`/booking`, {
    data: APIBody,
  });

  const resJSON = await response.json();
  console.log(JSON.stringify(resJSON, null, 2));

  await expect(response.status()).toBe(200);
  await expect(response.statusText()).toBe("OK");
  await expect(response.headers()["content-type"]).toContain(
    "application/json"
  );

  await expect(resJSON.booking).toHaveProperty("firstname");

  await expect(resJSON.bookingid).toBeGreaterThan(0);
  await expect(resJSON.booking.firstname).toBe(firstname);

  // get api request
  const bookingid = resJSON.bookingid
  const getAPIResponse = await request.get("/booking/", {
    params: {
        firstname: firstname, 
        lastname:lastName
    }
  })

  await expect(getAPIResponse.status()).toBe(200)
  await expect(getAPIResponse.statusText()).toBe('OK')

  const getAPIJSON = await getAPIResponse.json();
  console.log(JSON.stringify(getAPIJSON, null, 2))
});

import { test, expect } from "@playwright/test";
import postAPIStatic from "../../test-data/api_request/post_api_request.json";
import postAPIDynamic from "../../test-data/api_request/Dynamic_Post_api_request.json";
import { formatAPIRequest } from "../../src/utils/APIHelper";
import path from "path";
import fs from "fs";

test.use({
  baseURL: process.env.BASE_API_URL,
});

test("Post request using static files", async ({ request }) => {
  const response = await request.post(`/booking`, { data: postAPIStatic });

  const resJSON = await response.json();
  console.log(JSON.stringify(resJSON, null, 2));

  await expect(response.status()).toBe(200);
  await expect(response.statusText()).toBe("OK");
  await expect(response.headers()["content-type"]).toContain(
    "application/json"
  );

  await expect(resJSON.booking).toHaveProperty("firstname");

  await expect(resJSON.bookingid).toBeGreaterThan(0);
  await expect(resJSON.booking.firstname).toBe("Dhinesh");
});

test("Post request using dynamic files", async ({ request }) => {
  const filePath = path.join(
    __dirname,
    "../../test-data/api_request/Dynamic_Post_api_request.json"
  );
  const jsonTemplate = fs.readFileSync(filePath, "utf-8");
  const values = ["Dhinesh", "P", 2000];
  const APIBody = await formatAPIRequest(jsonTemplate, values);
  const response = await request.post(`/booking`, {
    data: JSON.parse(APIBody),
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
  await expect(resJSON.booking.firstname).toBe(values[0]);
});

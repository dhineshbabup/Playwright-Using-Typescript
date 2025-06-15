import { test, expect } from "@playwright/test";
import postAPIStatic from "../../test-data/api_request/post_api_request.json";


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

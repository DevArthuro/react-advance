import { server } from "@/test/mocks/server";
import "@testing-library/jest-dom";
/** Avoid problem with fetch not found */
import "whatwg-fetch";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

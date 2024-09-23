import { server } from "@/test/mocks/server";
import "@testing-library/jest-dom";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

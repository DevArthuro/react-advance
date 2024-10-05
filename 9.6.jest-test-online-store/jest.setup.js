// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "@/mocks/server";
/** Avoid problem with fetch not found */
import "whatwg-fetch";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

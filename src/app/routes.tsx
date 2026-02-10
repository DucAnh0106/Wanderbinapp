import { createBrowserRouter } from "react-router";
import { Home } from "./screens/Home";
import { EnRoute } from "./screens/EnRoute";
import { ScanItem } from "./screens/ScanItem";
import { ResultRecyclable } from "./screens/ResultRecyclable";
import { ResultNotRecyclable } from "./screens/ResultNotRecyclable";
import { Departure } from "./screens/Departure";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/en-route",
    Component: EnRoute,
  },
  {
    path: "/scan",
    Component: ScanItem,
  },
  {
    path: "/result/recyclable",
    Component: ResultRecyclable,
  },
  {
    path: "/result/not-recyclable",
    Component: ResultNotRecyclable,
  },
  {
    path: "/departure",
    Component: Departure,
  },
]);

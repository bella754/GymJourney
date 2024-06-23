/**
 * Frontend entrypoint:
 * This module provides a default export that defines the UI that is created on the frontend
 * when a page is visited
 */

import { UIX } from "uix";

UIX.Theme.registerTheme({
  name: "blank",
  mode: undefined,
  stylesheets: [],
});

UIX.Theme.useThemes("blank");

export default {
  // show frontend-rendered page on /frontend
  "/frontend": import("../common/routes/index.tsx"),
};

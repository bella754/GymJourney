/**
 * Frontend entrypoint:
 * This module provides a default export that defines the UI that is created on the frontend
 * when a page is visited
 */

import { UIX } from "uix";
import { LoginPage } from "../common/routes/login/Index.tsx";
import { IndexPage } from "../common/routes/index/Index.tsx";
import { WorkoutsPage } from "../common/routes/workout/Index.tsx";
import { HistoryPage } from "../common/routes/history/Index.tsx";
import { SettingsPage } from "../common/routes/settings/Index.tsx";

UIX.Theme.registerTheme({
  name: "blank",
  mode: undefined,
  values: {
    bg: "white",
    text: "black",
  },
  stylesheets: [],
});

UIX.Theme.useThemes("blank");

export default {
  // show backend (hybrid) rendered page on /backend
  "/": () => <IndexPage />,
  "/login": () => <LoginPage />,
  "/history": () => <HistoryPage />,
  "/workouts": () => <WorkoutsPage />,
  "/settings": () => <SettingsPage />,
};

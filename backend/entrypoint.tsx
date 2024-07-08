/**
 * Backend entrypoint:
 * This module provides a default export that defines the UI that is returned from the backend
 * when a page is visited
 */

import { UIX } from 'uix'

UIX.Theme.registerTheme({
  name: 'blank',
  mode: undefined,
  stylesheets: [],
})

UIX.Theme.useThemes('blank')

export default {}

/**
 * type
 */
export type FormData = {
  name: string
  email: string
}

declare global {
  function doGet(): GoogleAppsScript.HTML.HtmlOutput
  function getUserIdApi(): JSON
  /** globalとかglobalthisとかわけわからん */
}
export default global

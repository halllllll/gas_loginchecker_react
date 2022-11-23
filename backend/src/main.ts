import customFunc from './utility'
import global, { FormData } from './global'


/**
 * ユーザーIDを返すだけ
 * @returns {string}
 */
 const getUserId = () => {
  return Session.getActiveUser().getEmail()
}

globalThis.getUserIdApi = () => {
  console.log(`get user id!`)
  const userId = getUserId()
  return JSON.parse(
    JSON.stringify({
      userId: userId
    })
  )
}

global.doGet = () => {
  const title = `こんにちわ`
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle(`${title}`)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setFaviconUrl('https://img.icons8.com/color/452/pill.png')

}

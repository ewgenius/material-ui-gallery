export const UI_SHOW_ALERT = 'UI_SHOW_ALERT'
export const UI_HIDE_ALERT = 'UI_HIDE_ALERT'

export const showAlert = (message: string, action: string, handler: (any) => any) => ({
  type: UI_SHOW_ALERT,
  message,
  action,
  handler
})

export const hideAlert = () => ({
  type: UI_HIDE_ALERT
})
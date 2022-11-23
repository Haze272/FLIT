export interface IToast {
  type: 'success' | 'error' | 'warning' | 'notification'
  message: string
}

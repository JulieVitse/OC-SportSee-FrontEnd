import { userData, userActivity, userAverageSessions, userPerformance } from './store'

export async function getUserData(id: string): Promise<any> {
    return userData
}

export async function getUserActivity(id: string): Promise<any> {
  return userActivity
}

export async function getUserAverageSessions(id: string): Promise<any> {
  return userAverageSessions
}

export async function getUserPerformance(id: string): Promise<any> {
  return userPerformance
}

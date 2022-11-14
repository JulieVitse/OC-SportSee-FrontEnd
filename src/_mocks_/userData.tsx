import { userData } from './store'

export async function getUserData(id: string): Promise<any> {
    return userData
}

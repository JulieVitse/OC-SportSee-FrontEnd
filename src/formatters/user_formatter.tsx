import { TUserData, TUserInfos, TKeyData } from 'types/dataUser.types'

export class User {
  id: number
  userInfos: TUserInfos
  firstName: string
  lastName: string
  age: number
  todayScore: number
  keyData: TKeyData
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
  score: number
  constructor(data: TUserData) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.firstName = data.userInfos.firstName
    this.lastName = data.userInfos.lastName
    this.age = data.userInfos.age
    this.todayScore = data.todayScore
    this.score = data.score
    this.keyData = data.keyData
    this.calorieCount = data.keyData.calorieCount
    this.proteinCount = data.keyData.proteinCount
    this.carbohydrateCount = data.keyData.carbohydrateCount
    this.lipidCount = data.keyData.lipidCount
  }
  /* static getNewUser(userData: TUserData) {
        const { id, userInfos, todayScore, keyData } = userData.data
        const user = new User()
        user.id = id
        user.firstName = userInfos.firstName
        user.lastName = userInfos.lastName
        user.age = userInfos.age
        user.todayScore = todayScore
        user.calorieCount = keyData.calorieCount
        user.proteinCount = keyData.proteinCount
        user.carbohydrateCount = keyData.carbohydrateCount
        user.lipidCount = keyData.lipidCount
        return user
    } */
}

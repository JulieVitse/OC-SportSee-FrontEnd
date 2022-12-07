export const userData =
  {
    id: 15,
    userInfos: {
      firstName: 'Julie',
      lastName: 'Vitse',
      age: 31,
    },
    score: 0.9,
    keyData: {
      calorieCount: 2300,
      proteinCount: 80,
      carbohydrateCount: 140,
      lipidCount: 100,
    }
  }

export const userActivity =
  {
    userId: 15,
    sessions: [
      { day: '2020-07-01', kilogram: 56, calories: 240 },
      { day: '2020-07-02', kilogram: 59, calories: 220 },
      { day: '2020-07-03', kilogram: 60, calories: 280 },
      { day: '2020-07-04', kilogram: 60, calories: 500 },
      { day: '2020-07-05', kilogram: 56, calories: 160 },
      { day: '2020-07-06', kilogram: 55, calories: 162 },
      { day: '2020-07-07', kilogram: 57, calories: 390 },
    ]
  }


export const userAverageSessions = 
  {
    userId: 15,
    sessions: [
      { day: 1, sessionLength: 40 },
      { day: 2, sessionLength: 30 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 30 },
      { day: 7, sessionLength: 50 },
    ]
  }


export const userPerformance =
  {
    userId: 15,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 230, kind: 1 },
      { value: 200, kind: 2 },
      { value: 90, kind: 3 },
      { value: 80, kind: 4 },
      { value: 210, kind: 5 },
      { value: 150, kind: 6 },
    ]
  }


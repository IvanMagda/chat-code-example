import Chance from 'chance'
const faker = require('faker')

const chance = new Chance()

export const username = chance.first()
export const avatar = faker.image.avatar()
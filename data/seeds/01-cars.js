// STRETCH
const cars = [
  {
    vin: '1234567890123',
    make: "Toyota",
    model: "Supra",
    milage: 99000,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: '1234567890123',
    make: "Toyota",
    model: "Prius",
    milage: 990000,
    title: 'salvage',
  },
  {
    vin: '1234567890123',
    make: "Saleen",
    model: "S7",
    milage: 9000,
  }
]


exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}
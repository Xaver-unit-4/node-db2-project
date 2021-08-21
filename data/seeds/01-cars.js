// STRETCH
const cars = [
  {
    vin: '12345678901234569',
    make: "Toyota",
    model: "Supra",
    milage: 99000,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: '12345678901234568',
    make: "Toyota",
    model: "Prius",
    milage: 990000,
    title: 'salvage',
  },
  {
    vin: '12345678901234567',
    make: "Saleen",
    model: "S7",
    milage: 9000,
  }
]


exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}
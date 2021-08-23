// STRETCH
const cars = [
  {
    vin: 'JF1GF4350XH802545',
    make: "Toyota",
    model: "Supra",
    mileage: 99000,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: '4T1BF1FK4CU609641',
    make: "Toyota",
    model: "Prius",
    mileage: 990000,
    title: 'salvage',
  },
  {
    vin: '1FVACXCSX7HY67259',
    make: "Saleen",
    model: "S7",
    mileage: 9000,
  }
]


exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}
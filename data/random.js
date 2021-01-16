import faker from 'faker';

const randomUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: '11111111111',
    shippingAddress: faker.address.city(),
    shippingPostalCode: faker.address.zipCode()
}

module.exports = randomUser;
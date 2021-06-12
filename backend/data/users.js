import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Mark Doe',
        email: 'mark@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Johnny Doe',
        email: 'johnny@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

]

export default users
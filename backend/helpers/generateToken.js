import jwt from 'jsonwebtoken'

export const GenToken = userId =>
jwt.sign(
    {
        userId,
    },
    process.env.ACCESS_TOKEN,
    {
        expiresIn: '10d'
    }
)
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

// A `main` function so that you can use async/await
async function main() {
    // Create user, posts, and categories
    const user = await prisma.user1.create({
        data: {
            first_name: "Nandini",
            last_name: "murthy",
            emailid: "nandinimurthy@gmail.com"
        }
    })

    // Return user, and posts, and categories
    const returnUser = await prisma.user1.findUnique({
        where: {
            id: user.id,
        },
    })

    console.log(returnUser)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
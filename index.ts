import {PrismaClient} from "@prisma/client";
//remove type module in package.json
//npx ts-node index.ts


//init client
const prisma = new PrismaClient()

//func to run queries
async function main() {

    //create
    // const user = await prisma.user.create({
    //     data: {
    //         name: "test",
    //         email: "test@pris55ma.com"
    //     }
    // })

    //get all / relationships are not selected by default
    const users = await prisma.user.findMany({
        include: {
            articeles: true
        }
    })

    //update
    const userUpdate = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "updated test"
        }
    })

    //remove
    const removeArcticel = await prisma.article.delete({
        where: {
            id: 2
        }
    })


    //relations create
    // const article = await prisma.article.create({
    //     data: {
    //         title: "Test Article",
    //         content: "This is a test article",
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    //create user + related article
    // const userArticel = await prisma.user.create({
    //     data: {
    //         name: "segfsf",
    //         email: "sec@vdsv.com",
    //         articeles: {
    //             create: {
    //                 title: "Related Article",
    //                 content: "This is a related article",
    //
    //             }
    //         }
    //     }
    // })

    console.log(users)
}

main().then(
    async () => {
        //
        await prisma.$disconnect()
    }
).catch(async (err) => {
    await prisma.$disconnect()
    console.error("Error connecting to database", err)
    process.exit(1)  // Exit with error status code 1
})
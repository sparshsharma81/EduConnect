import { currentUser } from "@clerk/nextjs/server";
//the current user is comming from here
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  //using this ..we get the current user...

  if (!user) {
    return null;
    //agar hame user log in nahi mil raha..to return kar jao...
  }

  try {
    // aur agar hame user log in mil raha hai..to ise show kro
    const loggedInUser = await db.user.findUnique({
        //it will find a unique key from the database..
        //mtlb user can not be duplicate..ek hi hoga vo..
      where: {
        clerkUserId: user.id,
      },
      include: {
        transactions: {
          where: {
            type: "CREDIT_PURCHASE",
            // Only get transactions from current month
            createdAt: {
              gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
//agar use hamare database me exist nahi karta..to use create kr do...
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        transactions: {
            //aur jab user create ho jata hai..to hame 2 credit add karne hoge...
          create: {
            type: "CREDIT_PURCHASE",
            packageId: "free_user",
            amount: 0,
          },
        },
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};
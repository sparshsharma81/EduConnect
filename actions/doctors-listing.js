"use server";

import { db } from "@/lib/prisma";
//now from here we are importing the database 


/**
 * Get doctors by specialty
 */
export async function getDoctorsBySpecialty(specialty) {
  try {
    const doctors = await db.user.findMany({
        //now from here..fetch a doctor where
        //role is a doctor and he is verified
      where: {
        role: "DOCTOR",
        verificationStatus: "VERIFIED",
        specialty: specialty.split("%20").join(" "),
      },
      orderBy: {
        name: "asc",
      },
    });

    return { doctors };
  } catch (error) {
    console.error("Failed to fetch doctors by specialty:", error);
    return { error: "Failed to fetch doctors" };
  }
}
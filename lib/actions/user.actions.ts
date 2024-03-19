"use server";

import connectToDatabase from "@/lib/mongodb";
import { CreateUserParams, UpdateUserParams } from "@/types";
import { revalidatePath } from "next/cache";

export async function createUser(user: CreateUserParams) {
  try {
    const { database } = await connectToDatabase();
    const users = database.collection("users");
    const newUser = await users.insertOne({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    const { database } = await connectToDatabase();
    const users = database.collection("users");
    const updatedUser = await users.updateOne(
      { clerkId },
      { $set: { ...user, updatedAt: new Date() } },
    );
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    const { database } = await connectToDatabase();
    const users = database.collection("users");
    const deletedUser = await users.deleteOne({ clerkId });
    revalidatePath("/");
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

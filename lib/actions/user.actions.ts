"use server";

import { CreateUserParams, GetUserParams, UpdateUserParams } from "@/types";
import { revalidatePath } from "next/cache";
import clientPromise from "@/lib/mongodb";

export async function createUser(user: CreateUserParams) {
  try {
    const client = await clientPromise;
    const users = client.db().collection("users");
    return await users.insertOne({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function getUser(key: GetUserParams) {
  try {
    const client = await clientPromise;
    const users = client.db().collection("users");
    return await users.findOne(key);
  } catch (error) {
    console.error("Error getting user:", error);
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    const client = await clientPromise;
    const users = client.db().collection("users");
    return await users.updateOne(
      { clerkId },
      { $set: { ...user, updatedAt: new Date() } },
    );
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    const client = await clientPromise;
    const users = client.db().collection("users");
    const deletedUser = await users.deleteOne({ clerkId });
    revalidatePath("/");
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

export async function getUsers() {
  try {
    const client = await clientPromise;
    const users = client.db().collection("users");
    return await users.find().toArray();
  } catch (error) {
    console.error("Error getting users:", error);
  }
}

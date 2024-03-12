"use server"

import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import { revalidatePath } from "next/cache";

export async function createUser(user: { clerkId: string; email: string; username: string }) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findById(userId);
    if (!user)
      throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error("Error getting user by id:", error);
  }
}

export async function updateUser(clerkId: string, user: { email: string; username: string }) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true });
    if (!updatedUser)
      throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error("Error updating user by id:", error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();
    const deletedUser = await User.findOneAndDelete({ clerkId });
    if (!deletedUser)
      throw new Error("User delete failed");
    revalidatePath("/");
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

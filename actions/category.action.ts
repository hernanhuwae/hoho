import { connect } from "@/db";
import Category from "@/modals/category.modals";

export async function createUser(user: any) {
    try {
      await connect();
      const newUser = await Category.create(user);
      return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
      console.log(error);
    }
  }
  
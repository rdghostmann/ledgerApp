import CardPage from "./CardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import User from "@/models/User";
import { connectToDB } from "@/lib/connectDB";

export default async function Page() {
  await connectToDB();
  const session = await getServerSession(authOptions);

  let firstName = "";
  let lastName = "";

  if (session?.user?.email) {
    const user = await User.findOne({ email: session.user.email });
    if (user) {
      firstName = user.firstName || "";
      lastName = user.lastName || "";
    }
  }

  return <CardPage firstName={firstName} lastName={lastName} />;
}
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connectToDB } from "@/lib/connectDB";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, phone, email, password } = await req.json();

    if (!username || !phone || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Email already registered" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      phone,
      email,
      password: hashedPassword,
      userID: Date.now().toString(), // or use uuid
    });

    return NextResponse.json({ message: "Registration successful" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Registration failed" }, { status: 500 });
  }
}
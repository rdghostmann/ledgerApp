import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import UserAsset from "@/models/UserAsset";
import { connectToDB } from "@/lib/connectDB";

export async function POST(req) {
  try {
    await connectToDB();

    const {
      username,
      firstName,
      lastName,
      phone,
      email,
      password,
      country,
      state,
      zipCode,
      accountType,
    } = await req.json();

    // Validate required fields
    if (!username || !phone || !email || !password || !accountType) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      userID: Date.now().toString(),
      username,
      firstName: firstName || null,
      lastName: lastName || null,
      phone,
      email,
      password: hashedPassword,
      country: country || null,
      state: state || null,
      zipCode: zipCode || null,
      accountType,
      joinDate: new Date(),
    });

    // Create default user assets (BTC, ETH, USDT)
    const defaultAssets = ["BTC", "ETH", "USDT"];
    const userAssets = defaultAssets.map((coin) => ({
      userId: newUser._id,
      coin,
      amount: 0,
    }));
    await UserAsset.insertMany(userAssets);

    return NextResponse.json(
      { message: "Registration successful", user: newUser._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ message: "Registration failed" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(request) {
  await connect();

  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validpassword = await bcrypt.compare(password, user.password);

    if (!validpassword) {
      return NextResponse.json({ error: "Invakid Password" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Login Scccesful",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

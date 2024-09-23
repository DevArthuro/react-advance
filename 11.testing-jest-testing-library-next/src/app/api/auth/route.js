import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();

  const validata = ({ email, password }) => {
    return email === "carlosorrego@gmail.com" && password === "12345";
  };

  const isLogged = validata({ ...data });
  console.log(isLogged);

  return NextResponse.json(
    {
      isLogged,
    },
    { status: isLogged ? 201 : 401 }
  );
}

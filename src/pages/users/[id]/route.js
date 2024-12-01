import { user } from '@/employee/db';
import { NextResponse } from 'next/server';

export function GET(req, content) {
  const data = user;
  console.log(content.params.id);

  const userData = data.filter((item) => item.id == content.params.id)


  return NextResponse.json(userData.length == 0 ? { result: "No Data found", success: false } : { result: userData, success: true }, { status: 200 })
}

export async function PUT(request, content) {
  let payload = await request.json();

  payload.id = content.params.id;
  console.log(payload);
  if (!payload.id || !payload.name || !payload.email || !payload.age) {
    return NextResponse.json({ request: "request data not found", success: false }, { status: 400 })
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 })
}

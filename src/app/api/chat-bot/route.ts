import { NextResponse } from "next/server";

export async function GET() {
	try {
		return NextResponse.json({
			success: true,
			code: 200,
		});
	} catch (error) {
		return NextResponse.json({
			success: false,
			code: 404,
			error,
		});
	}
}

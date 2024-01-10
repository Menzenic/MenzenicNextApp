import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // await mongodbInit()
        console.log("req:", req);

        return NextResponse.json({
            success: true,
            code: 200
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            code: 404
        })      
    }
}
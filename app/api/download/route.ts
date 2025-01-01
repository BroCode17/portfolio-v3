import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const fileName = searchParams.get("file");
   
    if(!fileName) 
        return new NextResponse("File name is required",{status: 400}) // Bad request
    const filePath = path.join(process.cwd(), 'public', fileName);
  
    try{
        const fileBuffer = await fs.promises.readFile(filePath);
        const response = new NextResponse(fileBuffer);
        response.headers.set('Content-Disposition', `attachment; filename=${fileName}`)
        response.headers.set('Content-Type', 'application/octet-stream')
        return response;
    }catch(error){
        // Log error
        console.error('Error reading file:', error);
        return new NextResponse('File Not Found', {status: 404});
    }

}
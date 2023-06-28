import { NextResponse } from 'next/server'
import { Project, getAllProjects } from './projectModel';

export async function GET(request: Request) {
    const projects: Project[] = await getAllProjects();
    return NextResponse.json(projects)
}

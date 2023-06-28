import Link from "next/link";
import { Project } from "./api/project/projectModel";
import Clock from "./clock";

export const metadata = {
    title: "Home Next App",
    description: "Generated by create next app",
};

async function getData() {
    const res = await fetch('http://localhost:3000/api/project')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Home() {
    const projects = await getData()
    return (
        <div>
            <h1 className="text-2xl mb-6">Home page</h1>

            <h2 className="text-xl mb-3">Projets</h2>
            {projects.map((project: Project) => {
                return <div key={project.id}>
                    <p>{project.client}</p>
                </div>
            })}
            <Clock />
        </div>
    );
}

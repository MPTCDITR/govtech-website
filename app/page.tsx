<<<<<<< HEAD
import GoalSection from'../components/goal-section/index'
export default function Home() {
 
  return <GoalSection />;
=======
import Image from "next/image";

import { CourseSelection } from "../components/goal-section/index.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Wellcome to GovTech Website 2024</h1>
      </div>
      <CourseSelection />
    </main>
  );
>>>>>>> main
}

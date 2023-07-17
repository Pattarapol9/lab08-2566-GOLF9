import { TaskInput } from "../../component/Taskinput";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
import { Task } from "../../component/task";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      {<Header></Header>}

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        {<TaskInput></TaskInput>}
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer
        fullname="Pattarapol Na Nakorn"
        year="2023"
        studentId="650610796"
      />
    </div>
  );
}

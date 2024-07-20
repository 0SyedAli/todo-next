import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <div className="my-5">
        <AddTask />
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}

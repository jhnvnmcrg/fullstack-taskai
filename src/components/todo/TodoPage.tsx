import { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoStats from "./TodoStats";
import TodoForm from "./TodoForm";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";

export default function TodoPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <TodoHeader />

      <TodoStats />

      <TodoForm />

      <TodoSearch value={search} onChange={setSearch} />

      <TodoList search={search} />
    </>
  );
}

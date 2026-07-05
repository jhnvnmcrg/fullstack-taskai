import TodoItem from "./TodoItem";

import { useTodos } from "@/hooks/useTodos";

interface TodoListProps {
  search: string;
}

export default function TodoList({ search }: TodoListProps) {
  const { data = [], isLoading } = useTodos();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filtered = data.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (!filtered.length) {
    return <p>No tasks found.</p>;
  }

  return (
    <div className="space-y-3">
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

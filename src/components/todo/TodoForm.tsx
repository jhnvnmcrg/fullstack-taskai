import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useCreateTodo } from "@/hooks/useTodos";

export default function TodoForm() {
  const createTodo = useCreateTodo();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) return;

    await createTodo.mutateAsync({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form
      onSubmit={submit}
      className="mb-6 space-y-3 rounded-xl border bg-white p-6"
    >
      <Input
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Textarea
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button className="w-full" disabled={createTodo.isPending}>
        {createTodo.isPending ? "Adding..." : "Add Task"}
      </Button>
    </form>
  );
}

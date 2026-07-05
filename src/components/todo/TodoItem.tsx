import { useState } from "react";
import TodoEditDialog from "./TodoEditDialog";
import type { Todo } from "@/types/todo";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteTodo, useToggleTodo } from "@/hooks/useTodos";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const toggle = useToggleTodo();
  const remove = useDeleteTodo();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start justify-between rounded-lg border bg-white p-4">
      <div className="flex gap-3">
        <Checkbox
          checked={todo.is_completed}
          onCheckedChange={(checked) =>
            toggle.mutate({
              id: todo.id,
              completed: !!checked,
            })
          }
        />

        <div>
          <h3
            className={
              todo.is_completed
                ? "line-through text-muted-foreground"
                : "font-semibold"
            }
          >
            {todo.title}
          </h3>

          <p className="text-sm text-muted-foreground">{todo.description}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button size="icon" variant="outline" onClick={() => setOpen(true)}>
          <Pencil className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="destructive"
          onClick={() => remove.mutate(todo.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <TodoEditDialog todo={todo} open={open} onOpenChange={setOpen} />
    </div>
  );
}

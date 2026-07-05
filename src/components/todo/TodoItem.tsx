import type { Todo } from "@/types/todo";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { useDeleteTodo, useToggleTodo } from "@/hooks/useTodos";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const toggle = useToggleTodo();
  const remove = useDeleteTodo();

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

      <Button
        variant="destructive"
        size="sm"
        onClick={() => remove.mutate(todo.id)}
      >
        Delete
      </Button>
    </div>
  );
}

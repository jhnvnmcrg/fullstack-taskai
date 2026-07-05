import { useEffect, useState } from "react";
import type { Todo } from "@/types/todo";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useUpdateTodo } from "@/hooks/useTodos";

interface Props {
  todo: Todo;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TodoEditDialog({ todo, open, onOpenChange }: Props) {
  const updateTodo = useUpdateTodo();

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description ?? "");

  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description ?? "");
  }, [todo]);

  async function save() {
    await updateTodo.mutateAsync({
      id: todo.id,
      updates: {
        title,
        description,
      },
    });

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>

          <Button onClick={save} disabled={updateTodo.isPending}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

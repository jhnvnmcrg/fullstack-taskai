import { useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import * as service from "@/services/todo.service";

export function useTodos() {
  const { user } = useUser();

  return useQuery({
    queryKey: ["todos", user?.id],
    enabled: !!user,
    queryFn: () => service.getTodos(user!.id),
  });
}

export function useCreateTodo() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo: any) => service.createTodo(user!.id, todo),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      service.updateTodo(id, updates),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: service.deleteTodo,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}

export function useToggleTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      service.toggleTodo(id, completed),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}

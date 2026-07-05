import { supabase } from "@/lib/supabase";
import type { CreateTodo, UpdateTodo } from "@/types/todo";

export async function getTodos(userId: string) {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("clerk_user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function createTodo(userId: string, todo: CreateTodo) {
  const { data, error } = await supabase
    .from("todos")
    .insert({
      ...todo,
      clerk_user_id: userId,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function updateTodo(id: string, updates: UpdateTodo) {
  const { data, error } = await supabase
    .from("todos")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteTodo(id: string) {
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) throw error;
}

export async function toggleTodo(id: string, completed: boolean) {
  const { data, error } = await supabase
    .from("todos")
    .update({
      is_completed: completed,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

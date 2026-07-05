import { useTodos } from "@/hooks/useTodos";

import { Card, CardContent } from "@/components/ui/card";

export default function TodoStats() {
  const { data = [] } = useTodos();

  const total = data.length;
  const completed = data.filter((t) => t.is_completed).length;
  const pending = total - completed;

  return (
    <div className="mb-6 grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">Total Tasks</p>

          <h2 className="mt-2 text-3xl font-bold">{total}</h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">Completed</p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {completed}
          </h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">Pending</p>

          <h2 className="mt-2 text-3xl font-bold text-orange-600">{pending}</h2>
        </CardContent>
      </Card>
    </div>
  );
}

import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function TodoSearch({ value, onChange }: Props) {
  return (
    <Input
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

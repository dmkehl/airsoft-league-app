import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>
        <p className="text-sm text-muted-foreground">Admin Dashboard</p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline">View Schedule</Button>
        <Button>Create Match</Button>
      </div>
    </header>
  );
}

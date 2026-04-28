import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { label: "Active Teams", value: "12" },
  { label: "Upcoming Matches", value: "8" },
  { label: "Completed Matches", value: "24" },
  { label: "Active Season", value: "Spring 2026" },
];

const upcomingMatches = [
  {
    match: "Reapers vs Ghost Squad",
    division: "5-Man",
    date: "May 4, 2026",
    status: "Scheduled",
  },
  {
    match: "Wolverines vs Blackout",
    division: "3-Man",
    date: "May 4, 2026",
    status: "Scheduled",
  },
  {
    match: "Iron Wolves vs Havoc",
    division: "Solo",
    date: "May 5, 2026",
    status: "Pending",
  },
];

const recentResults = [
  {
    match: "Ghost Squad vs Havoc",
    score: "3 - 1",
    winner: "Ghost Squad",
  },
  {
    match: "Reapers vs Iron Wolves",
    score: "2 - 0",
    winner: "Reapers",
  },
  {
    match: "Blackout vs Wolverines",
    score: "1 - 2",
    winner: "Wolverines",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Admin Dashboard</p>
            <h1 className="text-3xl font-bold tracking-tight">
              Airsoft League Command Center
            </h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Manage teams, schedule matches, track results, and monitor league
              activity from one central dashboard.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">View Schedule</Button>
            <Button>Create Match</Button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Division</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingMatches.map((match) => (
                    <TableRow key={match.match}>
                      <TableCell className="font-medium">
                        {match.match}
                      </TableCell>
                      <TableCell>{match.division}</TableCell>
                      <TableCell>{match.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            match.status === "Scheduled"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {match.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button className="w-full justify-start">Add Team</Button>
              <Button className="w-full justify-start" variant="outline">
                Create Season
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Enter Match Result
              </Button>
              <Button className="w-full justify-start" variant="outline">
                View Standings
              </Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Recent Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Winner</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentResults.map((result) => (
                    <TableRow key={result.match}>
                      <TableCell className="font-medium">
                        {result.match}
                      </TableCell>
                      <TableCell>{result.score}</TableCell>
                      <TableCell>{result.winner}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

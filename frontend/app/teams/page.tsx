import {
  IconTrophy,
  IconUsers,
  IconUserPlus,
  IconAlertCircle,
} from "@tabler/icons-react";

import { DataTable } from "@/components/layout/data-table";
import { SectionCards } from "@/components/layout/section-cards";

import teams from "./data.json";

const teamCards = [
  {
    title: "Total Teams",
    value: `${teams.length}`,
    description: "Registered across all divisions",
    footer: "Solo, 3-Man, and 5-Man divisions",
    icon: <IconUsers className="size-4" />,
  },
  {
    title: "Active Teams",
    value: `${teams.filter((team) => team.status === "Active").length}`,
    description: "Ready for current season play",
    footer: "Teams marked active",
    icon: <IconTrophy className="size-4" />,
  },
  {
    title: "Needs Players",
    value: `${teams.filter((team) => team.status === "Needs Players").length}`,
    description: "Teams with incomplete rosters",
    footer: "Follow up before scheduling",
    icon: <IconAlertCircle className="size-4" />,
  },
  {
    title: "Total Players",
    value: `${teams.reduce((total, team) => total + team.players, 0)}`,
    description: "Players currently assigned to teams",
    footer: "Based on registered rosters",
    icon: <IconUserPlus className="size-4" />,
  },
];

export default function TeamsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 py-4 md:py-6">
      <div className="px-4 lg:px-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teams</h1>
          <p className="mt-2 text-muted-foreground">
            Manage team registration, divisions, captains, rosters, and season
            status.
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 pt-0 pb-4 md:gap-6 md:pb-6">
            <SectionCards cards={teamCards} />
            <DataTable data={teams} />
          </div>
        </div>
      </div>
    </div>
  );
}

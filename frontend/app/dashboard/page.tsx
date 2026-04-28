import { ChartAreaInteractive } from "@/components/layout/chart-area-interactive";
import { DataTable } from "@/components/layout/data-table";
import { IconTrendingUp } from "@tabler/icons-react";
import { SectionCards } from "@/components/layout/section-cards";

const dashboardCards = [
  {
    title: "Registered Players",
    value: "86",
    badge: "+14",
    icon: <IconTrendingUp className="size-4" />,
    description: "Player interest is trending up",
    footer: "Compared to last month",
  },
  {
    title: "Active Teams",
    value: "18",
    description: "Solo, 3-Man, and 5-Man divisions",
    footer: "Current season registration",
  },
  {
    title: "Upcoming Matches",
    value: "12",
    badge: "Next 14 days",
    description: "Matches awaiting field assignment",
  },
  {
    title: "Projected Revenue",
    value: "$4,850",
    description: "Based on current registrations",
    footer: "Excludes spectator admission",
  },
];

import data from "./data.json";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards cards={dashboardCards} />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}

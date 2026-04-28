import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Teams", href: "/teams" },
  { label: "Matches", href: "/matches" },
  { label: "Standings", href: "/standings" },
  { label: "Seasons", href: "/seasons" },
  { label: "Settings", href: "/settings" },
];

export function AppSidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r bg-muted/30 p-6 md:block">
      <div className="mb-8">
        <h2 className="text-lg font-bold">Airsoft League</h2>
        <p className="text-sm text-muted-foreground">Admin Panel</p>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

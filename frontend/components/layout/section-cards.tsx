import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SectionCard = {
  title: string;
  value: string;
  description?: string;
  footer?: string;
  badge?: string;
  icon?: ReactNode;
};

type SectionCardsProps = {
  cards: SectionCard[];
};

export function SectionCards({ cards }: SectionCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title} className="@container/card">
          <CardHeader>
            <CardDescription>{card.title}</CardDescription>

            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {card.value}
            </CardTitle>

            {(card.badge || card.icon) && (
              <CardAction>
                {card.badge ? (
                  <Badge variant="outline">
                    {card.icon}
                    {card.badge}
                  </Badge>
                ) : (
                  card.icon
                )}
              </CardAction>
            )}
          </CardHeader>

          {(card.description || card.footer) && (
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              {card.description && (
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {card.description}
                </div>
              )}

              {card.footer && (
                <div className="text-muted-foreground">{card.footer}</div>
              )}
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}

import { HighlightItem } from "@/constants";

interface HighlightCardProps {
  item: HighlightItem;
  index: number;
}

export const HighlightCard = ({ item, index }: HighlightCardProps) => {
  const IconComponent = item.icon;

  return (
    <div
      className="glass animate-fade-in rounded-2xl p-6"
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      <div className="bg-primary/10 hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
        <IconComponent className="text-primary h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
      <p className="text-muted-foreground text-sm">{item.description}</p>
    </div>
  );
};

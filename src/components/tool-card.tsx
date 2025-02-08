import { ExternalLink } from "lucide-react";
import type { AITool } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="relative h-full rounded-lg border bg-card p-2 transition-all hover:border-primary hover:shadow-lg">
        <div className="flex gap-4">
          <img
            src={tool.image}
            alt={tool.name}
            className="h-16 w-16 rounded-md object-cover"
          />
          <div className="flex flex-1 flex-col">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold">{tool.name}</h3>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {tool.description}
            </p>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge
            variant="secondary"
            className={cn(
              "bg-primary/5 hover:bg-primary/5",
              tool.pricing === "Free" && "border-green-500/20 bg-green-500/10 text-green-700 hover:bg-green-500/10",
              tool.pricing === "Paid" && "border-orange-500/20 bg-orange-500/10 text-orange-700 hover:bg-orange-500/10"
            )}
          >
            {tool.pricing}
          </Badge>
          <Badge variant="outline" className="bg-card hover:bg-card">
            {tool.category}
          </Badge>
          {tool.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/50 hover:bg-secondary/50"
            >
              {tag}
            </Badge>
          ))}
          {tool.tags.length > 2 && (
            <Badge variant="secondary" className="bg-secondary/50 hover:bg-secondary/50">
              +{tool.tags.length - 2}
            </Badge>
          )}
        </div>
      </div>
    </a>
  );
}
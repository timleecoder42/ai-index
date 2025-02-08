import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
      <Button
        variant={selectedCategory === null ? 'default' : 'outline'}
        onClick={() => onSelect(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onSelect(category)}
          className={cn(
            'transition-colors whitespace-nowrap',
            selectedCategory === category &&
              'bg-primary text-primary-foreground'
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

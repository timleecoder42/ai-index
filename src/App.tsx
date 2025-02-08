import { useState } from 'react';
import { Bot } from 'lucide-react';
import { SearchBar } from '@/components/search-bar';
import { CategoryFilter } from '@/components/category-filter';
import { ToolCard } from '@/components/tool-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { aiTools, categories } from '@/lib/data';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = aiTools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = selectedCategory
      ? tool.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-background dark:via-background/50 dark:to-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center gap-4 px-4">
          <Bot className="h-8 w-8 shrink-0" />
          <h1 className="text-2xl font-bold hidden sm:block">AI Index</h1>
          <div className="flex-1 max-w-2xl ml-4">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1 flex-col">
        <div className="sticky top-16 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>

        <main className="container mx-auto flex-1 px-4 py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
            {filteredTools.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground">
                No AI tools found matching your criteria.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

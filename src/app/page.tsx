import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import recipesData from "./../../_data/updatedDb.json";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan?: boolean;
  id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  return [...recipesData.recipes];
}

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center truncate">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt="recipe image" />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between truncate">
              <Link href={`/${recipe.id}/recipe`}>
                <Button>View Recipe</Button>
              </Link>
              {recipe.vegan && <Badge>Vegan</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

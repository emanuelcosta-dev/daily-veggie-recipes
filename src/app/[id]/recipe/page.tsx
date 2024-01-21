import { redirect } from "next/navigation";
import Image from "next/image";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
  ingredients: string;
  instructions: string;
}

async function GetRecipeById(recipeId: string): Promise<Recipe> {
  const result = await fetch("https://www.aylins.xyz/updatedDb.json");
  const responseJson = await result.json();
  const recipeList: Recipe[] = await responseJson.recipes;
  const foundRecipe = recipeList.find((recipe) => recipe.id === recipeId);

  if (foundRecipe == null) {
    // Redirect to the main page if the recipe is not found
    redirect(`/`);
  }

  return foundRecipe;
}

export default async function Home({ params }: { params: { id: string } }) {
  const recipe = await GetRecipeById(params.id);
  return (
    <main>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Image
        src={`/img/${recipe.image}`}
        width={500}
        height={500}
        alt="recipe image"
        loading="lazy"
      />
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </main>
  );
}

import { redirect } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import recipesData from "./../../../../_data/updatedDb.json";
interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan?: boolean;
  id: string;
  ingredients: string;
  instructions: string;
}

async function GetRecipeById(recipeId: string): Promise<Recipe> {
  const recipeList: Recipe[] = recipesData.recipes;
  const foundRecipe = recipeList.find((recipe) => recipe.id === recipeId);

  if (foundRecipe == null) {
    // Redirect to the main page if the recipe is not found
    redirect(`/`);
    return {} as Recipe;
  }

  return foundRecipe;
}

export default async function Home({ params }: { params: { id: string } }) {
  const recipe = await GetRecipeById(params.id);
  return (
    <main>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src={`/img/${recipe.image}`}
            fill
            alt="recipe image"
            style={{ objectFit: "cover" }}
            loading="lazy"
            quality={80}
          />
        </div>
      </div>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </main>
  );
}

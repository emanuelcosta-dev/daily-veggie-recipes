import { redirect } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import { getPlaiceholder } from "plaiceholder";
import recipesData from "./../../../../_data/updatedDb.json";
import fs from "fs";
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
  }

  return foundRecipe;
}

export default async function Home({ params }: { params: { id: string } }) {
  const recipe = await GetRecipeById(params.id);
  const src = `/img/${recipe.image}`;
  const buffer = await fs.promises.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);
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
            blurDataURL={base64}
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

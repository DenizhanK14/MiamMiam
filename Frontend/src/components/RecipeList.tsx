    import RecipeCard from "./RecipeCard";

    const RecipeList = ()  => {
        return(
            <>
    <RecipeCard
        title="Pancakes moelleux"
        imageUrl="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800"
        description="Des pancakes épais et aérés pour un brunch réussi."
        duration={30}
        difficulty={1}
    />

    <RecipeCard
        title="Soupe de potiron"
        imageUrl="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800"
        description="Un velouté d'automne tout doux, parfait avec des croûtons."
        duration={45}
        difficulty={2}
    />

    <RecipeCard
        title="Boeuf bourguignon"
        imageUrl="https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800"
        description="Le classique du dimanche, qui mijote longtemps."
        duration={60}
        difficulty={4}
    />
            
            </>

        );
    };

    export default RecipeList;




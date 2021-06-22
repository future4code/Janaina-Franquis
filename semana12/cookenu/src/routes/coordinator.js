export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToSignInPage = (history) => {
  history.push("/cadastro");
};

export const goToRecipesListPage = (history) => {
  history.push("/");
};

export const goToAddRecipesPage = (history) => {
    history.push("/adicionar-receita")
};

export const goToRecipeDetailPage = (history, id) => {
    history.push(`/detalhe/${id}`)
}

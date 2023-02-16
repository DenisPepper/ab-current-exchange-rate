export const selectRandomQuote = (quotesList) => {
const randomIndex = Math.floor(Math.random() * quotesList.length);
return quotesList[randomIndex];
}

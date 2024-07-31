import db from './_db.js';

export const resolvers = {
  Query: {
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    reviews() {
      return db.reviews;
    },

    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    games() {
      return db.games;
    },
    
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    authors() {
      return db.authors;
    },
  }
}

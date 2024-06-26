const { User, Movie } = await import('./model.js');

// const user = await User.findByPk(1);
// console.log(user);

// await user.getRatings({ include: Movie });

// await user.getRatings({
//     include: {
//         model: Movie,
//         attributes: ['title'],
//     },
// })

const user = await User.findByPk(1);
const ratings = await user.getRatings({
  include: {
    model: Movie,
    attributes: ['title'],
  },
});
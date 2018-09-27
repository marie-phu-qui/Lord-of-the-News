exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('googleNews').del()
    .then(function () {
      // Inserts seed entries
      return knex('googleNews').insert([
        {
          news: "some news 1"
        },
        {
          news: "some news 2"
        },
        {
          news: "some news 3"
        },
        {
          news: "some news 4"
        },
        {
          news: "some news 5"
        },
        {
          news: "some news 6"
        },
        {
          news: "some news 7"
        },
        {
          news: "some news 8"
        },
        {
          news: "some news 9"
        },
        {
          news: "some news 10"
        },
      ]
      );
    });
};
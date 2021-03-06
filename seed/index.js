const mongoose = require('mongoose');
const Show = require('../models/Show');

const shows = [
  {
     title: 'Friends',
     year: 1994,
     description: 'With an ensemble cast consisting of Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City.',
     genre: 'comedy',
     image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_280x437/public/media/image/2016/07/poster-friends.jpg',
     cast: 'Jennifer Aniston, Matt LeBlanc, Courtney Cox, Mathew Perry',
     director: 'Marta Kauffman'
  },
  {
     title: 'Game of thrones',
     year: 2011,
     description: 'Set on the fictional continents of Westeros and Essos, Game of Thrones has a large ensemble cast and follows several story arcs throughout the course of the show. The first major arc concerns the Iron Throne of the Seven Kingdoms of Westeros through a web of political conflicts among the noble families either vying to claim the throne or fighting for independence from whoever sits on it.',
     genre: 'Fantasy',
     image: 'https://m.media-amazon.com/images/I/91DjGXn7jXL._SY445_.jpg',
     cast: 'Emilia Clarke, Kit Harington, Sophie Turner, Gwendoline Christie',
     director: 'David Benioff'
  },
  {
     title: 'Twin peaks',
     year: 1990,
     description: "The series follows an investigation, headed by FBI Special Agent Dale Cooper (Kyle MacLachlan) and local Sheriff Harry S. Truman (Michael Ontkean), into the murder of homecoming queen Laura Palmer (Sheryl Lee) in the fictional town of Twin Peaks, Washington. The show's narrative draws on elements of detective fiction, but its uncanny tone, supernatural elements, and campy, melodramatic portrayal of eccentric characters also draws from American soap opera and horror tropes.",
     genre: 'Drama',
     image: 'https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_FMjpg_UX1000_.jpg',
     cast: 'Kyle MacLachlan, Sherilyn Fenn, M??dchen Amick, Lara Flynn Boyle',
     director: 'David Lynch'
  },
    {
     title: 'The Big Bang Theory',
     year: 2007,
     description: "The show originally centered on five characters living in Pasadena, California: Leonard Hofstadter (Johnny Galecki) and Sheldon Cooper (Jim Parsons), both physicists at Caltech, who share an apartment; Penny (Kaley Cuoco), a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's similarly geeky and socially awkward friends and co-workers, aerospace engineer Howard Wolowitz (Simon Helberg) and astrophysicist Raj Koothrappali (Kunal Nayyar).",
     genre: 'Comedy',
     image: 'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_FMjpg_UX1000_.jpg',
     cast: 'Johnny Galecki, Jim Parsons, Kaley Cuoco, Simon Helberg, Kunal Nayyar, Mayim Bialik, Melissa Rauch',
     director: 'Mark Cendrowski'
  },
]

mongoose.connect('mongodb://localhost/showDB')
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Show.create(shows)
  })
  .catch(e => console.log(e))
  .finally(() => {
    mongoose.connection.close()
  })
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction",
      description:
        "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
      rating: 4.8,
      isPopular: true,
    },
    {
      id: "2",
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      description:
        "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
      rating: 4.9,
      isPopular: true,
    },
    {
      id: "3",
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      description:
        "An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results.",
      rating: 4.7,
      isPopular: true,
    },
    {
      id: "4",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Mystery",
      description:
        "A woman's act of violence against her husband and her refusal to speak sends shockwaves through London.",
      rating: 4.5,
      isPopular: true,
    },
    {
      id: "5",
      title: "Educated",
      author: "Tara Westover",
      genre: "Biography",
      description:
        "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
      rating: 4.6,
      isPopular: false,
    },
    {
      id: "6",
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      description:
        "A brief history of humankind, exploring how our species conquered the world.",
      rating: 4.4,
      isPopular: false,
    },
    {
      id: "7",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Romance",
      description:
        "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.",
      rating: 4.7,
      isPopular: true,
    },
    {
      id: "8",
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      genre: "Non-Fiction",
      description:
        "The story of how cells from a young black mother became one of the most important tools in medicine.",
      rating: 4.3,
      isPopular: false,
    },
    {
      id: "9",
      title: "Project Hail Mary",
      author: "Andy Weir",
      genre: "Sci-Fi",
      description:
        "A lone astronaut must save the earth when he wakes up on a space station with no memory of how he got there.",
      rating: 4.8,
      isPopular: true,
    },
    {
      id: "10",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      genre: "Fiction",
      description:
        "The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community, they live in two very different worlds.",
      rating: 4.2,
      isPopular: false,
    },
    {
      id: "11",
      title: "Becoming",
      author: "Michelle Obama",
      genre: "Biography",
      description:
        "An intimate, powerful, and inspiring memoir by the former First Lady of the United States.",
      rating: 4.6,
      isPopular: false,
    },
    {
      id: "12",
      title: "The Code Breaker",
      author: "Walter Isaacson",
      genre: "Biography",
      description:
        "The story of Jennifer Doudna, the Nobel Prize winner who pioneered CRISPR, and the heroes and villains who drove the gene-editing revolution.",
      rating: 4.4,
      isPopular: false,
    },
  ],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: nanoid(), // auto-generate a unique ID
        ...action.payload,
      };
      state.push(newBook);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

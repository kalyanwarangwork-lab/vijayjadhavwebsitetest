const base = import.meta.env.BASE_URL;

export const paintings = [

  // --- Animals ---
  { id: "p17", title: "Untitled XVII", meta: "Oil on canvas · 2024", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: `${base}paintings/p17.png`, span: "normal" },
  { id: "p18", title: "Untitled XVIII", meta: "Oil on canvas · 2024", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur.", img: `${base}paintings/p18.png`, span: "normal" },
  { id: "p19", title: "Untitled XIX", meta: "Oil on canvas · 2024", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.", img: `${base}paintings/p19.png`, span: "normal" },
  { id: "p22", title: "Untitled XXII", meta: "Oil on canvas · 2024", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: `${base}paintings/p22.png`, span: "wide" },
  { id: "p24", title: "Untitled XXIV", meta: "Oil on canvas · 2024", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.", img: `${base}paintings/p24.png`, span: "normal" },
  { id: "p25", title: "Untitled XXV", meta: "Oil on canvas · 2024", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur.", img: `${base}paintings/p25.png`, span: "normal" },
  { id: "p26", title: "Untitled XXVI", meta: "Oil on canvas · 2024", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.", img: `${base}paintings/p26.png`, span: "wide" },

  // --- Devotional ---
  { id: "p14", title: "Untitled XIV", meta: "Oil on canvas · 2024", desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam.", img: `${base}paintings/p14.png`, span: "normal" },
  { id: "p15", title: "Untitled XV", meta: "Oil on canvas · 2024", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: `${base}paintings/p15.png`, span: "normal" },
  { id: "p23", title: "Untitled XXIII", meta: "Oil on canvas · 2024", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.", img: `${base}paintings/p23.png`, span: "normal" },
  { id: "p1",  title: "Low Tide, Marsh Light", meta: "Oil on linen · 130 × 95 cm · 2025", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: `${base}paintings/p1.JPG`, span: "wide" },

  // --- Landscape / Nature ---
  { id: "p11", title: "Untitled XI", meta: "Oil on canvas · 2024", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur.", img: `${base}paintings/p11.png`, span: "normal" },
  { id: "p12", title: "Untitled XII", meta: "Oil on canvas · 2024", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.", img: `${base}paintings/p12.png`, span: "normal" },
  { id: "p16", title: "Untitled XVI", meta: "Oil on canvas · 2024", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.", img: `${base}paintings/p16.png`, span: "normal" },
  { id: "p13", title: "Untitled XIII", meta: "Oil on canvas · 2024", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.", img: `${base}paintings/p13.png`, span: "wide" },
  { id: "p21", title: "Untitled XXI", meta: "Oil on canvas · 2024", desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam.", img: `${base}paintings/p21.png`, span: "wide" },

  // --- Urban / Mural ---
  { id: "p8",  title: "Untitled VIII", meta: "Oil on canvas · 2024", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: `${base}paintings/p8.png`, span: "normal" },
  { id: "p20", title: "Untitled XX", meta: "Oil on canvas · 2024", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.", img: `${base}paintings/p20.png`, span: "normal" },
  { id: "p27", title: "Untitled XXVII", meta: "Oil on canvas · 2024", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.", img: `${base}paintings/p27.png`, span: "extra-wide" },

  // --- Abstract ---
  { id: "p2",  title: "Interior, Late Afternoon", meta: "Oil on canvas · 60 × 80 cm · 2024", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.", img: `${base}paintings/p2.JPG`, span: "normal" },
  { id: "p3",  title: "Ochre Field", meta: "Oil on board · 50 × 60 cm · 2024", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.", img: `${base}paintings/p3.jpeg`, span: "normal" },
  { id: "p4",  title: "Standing Figure, Blue Ground", meta: "Oil on canvas · 100 × 70 cm · 2025", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur.", img: `${base}paintings/p4.jpg`, span: "normal" },
  { id: "p6",  title: "Night Water", meta: "Oil on linen · 90 × 90 cm · 2023", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.", img: `${base}paintings/p6.jpeg`, span: "extra-wide" },
  { id: "p7",  title: "Night Water", meta: "Oil on linen · 90 × 90 cm · 2023", desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam.", img: `${base}paintings/p7.jpeg`, span: "extra-wide" },
  { id: "p9",  title: "Untitled IX", meta: "Oil on canvas · 2024", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.", img: `${base}paintings/p9.png`, span: "normal" },
  { id: "p10", title: "Untitled X", meta: "Oil on canvas · 2024", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.", img: `${base}paintings/p10.png`, span: "normal" },
  { id: "p5",  title: "Night Water", meta: "Oil on linen · 90 × 90 cm · 2023", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.", img: `${base}paintings/p5.jpg`, span: "normal" },
];

export const getPosts = () => {
  return [
    {
      title: "Hakkımda",
      slug: "hakkimda",
      img: "burakguney1.jpg",
      details: require("./posts/yeniyazi.md").default,
      date: "3 Mart 2020"
    },
    {
      title: "Burak Güney",
      slug: "burakguney2",
      img: " ",
      details: require("./posts/2.md").default,
      date: "3 Mart 2020"
    },
    {
      title: "Burak Güney",
      slug: "burakguney3",
      img: " ",
      details: require("./posts/3.md").default,
      date: "3 Mart 2020"
    }
  ];
};

export const getPosts = () => {
  return [
    {
      title: "Hakkımda",
      slug: "hakkimda",
      img: "burakguney1.jpg",
      entrance:
        "Edirne'nin Uzunköprü ilçesinde 23 Ağustos 1995'te doğdum. Bilgisayarla tanışmam 2000-2001 senelerine denk geliyor...",
      details: require("./posts/yeniyazi.md").default,
      date: "3 Mart 2020"
    },
    {
      title: "Burak Güney",
      slug: "burakguney2",
      img: " ",
      entrance: "",
      details: require("./posts/2.md").default,
      date: "3 Mart 2020"
    },
    {
      title: "Burak Güney",
      slug: "burakguney3",
      img: " ",
      entrance: "",
      details: require("./posts/3.md").default,
      date: "3 Mart 2020"
    }
  ];
};

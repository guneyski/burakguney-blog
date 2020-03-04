export const getPosts = () => {
  return [
    {
      title: "İşletim Sistemleri-1",
      slug: "isletimSistemleri",
      img: "isletimSistemleri.png",
      entrance:
        "Bu yazıda işlenen konular: işletim sistemi ne iş yapar, bilgisayar sistemi ve organizasyonu, bilgisayar sistemi mimarisi, işletim sistemi yapısı, işletim sistemi işlemleri.",
      details: require("./posts/isletimSistemleri.md").default,
      date: "4 Mart 2020"
    },
    {
      title: "Hakkımda",
      slug: "hakkimda",
      img: "burakguney1.jpg",
      entrance:
        "Edirne'nin Uzunköprü ilçesinde 23 Ağustos 1995'te doğdum. Bilgisayarla tanışmam 2000-2001 senelerine denk geliyor...",
      details: require("./posts/hakkimda.md").default,
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

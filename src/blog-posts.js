export const getPosts = () => {
  return [
    {
      title: "İşletim Sistemleri-3",
      slug: "isletimSistemleri3",
      img: "isletimSistemleri.png",
      entrance:
        "Bu yazıda işlenen konular: işletim sistemi ne iş yapar, bilgisayar sistemi ve organizasyonu, bilgisayar sistemi mimarisi, işletim sistemi yapısı, işletim sistemi işlemleri.",
      details: require("./posts/isletimSistemleri3.md").default,
      date: "4 Mart 2020"
    },
    {
      title: "İşletim Sistemleri-2",
      slug: "isletimSistemleri2",
      img: "isletimSistemleri.png",
      entrance:
        "Bu yazıda işlenen konular: işletim sistemi ne iş yapar, bilgisayar sistemi ve organizasyonu, bilgisayar sistemi mimarisi, işletim sistemi yapısı, işletim sistemi işlemleri.",
      details: require("./posts/isletimSistemleri2.md").default,
      date: "4 Mart 2020"
    },
    {
      title: "İşletim Sistemleri-1",
      slug: "isletimSistemleri1",
      img: "isletimSistemleri.png",
      entrance:
        "Bu yazıda işlenen konular: işletim sistemi ne iş yapar, bilgisayar sistemi ve organizasyonu, bilgisayar sistemi mimarisi, işletim sistemi yapısı, işletim sistemi işlemleri.",
      details: require("./posts/isletimSistemleri1.md").default,
      date: "4 Mart 2020"
    },
    {
      title: "Hakkımda",
      slug: "hakkimda",
      img: "burakguney.jpg",
      entrance: "Kendim ve blog hakkında kısa bir yazı...",
      details: require("./posts/hakkimda.md").default,
      date: "3 Mart 2020"
    }
  ];
};

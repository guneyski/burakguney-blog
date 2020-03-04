export const getPosts = () => {
  return [
    {
      title: "İşletim Sistemlerine Giriş-2",
      slug: "isletimSistemleriGiris2",
      img: "isletimSistemleri.png",
      entrance:
        "Bu yazının içeriği: Bilgisayar sistemi ve organizasyonu, bligisayar sisteminin çalışması, depolama yapısı, I/O yapısı.",
      details: require("./posts/isletimSistemleriGiris2.md").default,
      date: "4 Mart 2020"
    },
    {
      title: "İşletim Sistemlerine Giriş-1",
      slug: "isletimSistemleriGiris1",
      img: "isletimSistemleri.png",
      entrance:
        "Bu yazının içeriği: İşletim sisteminin tanımı ve işletim sisteminin görevleri nelerdir. İşletim sistemine kullanıcı ve bilgisayar tarafından bakış açıları.",
      details: require("./posts/isletimSistemleriGiris1.md").default,
      date: "4 Mart 2020"
    },
    {
      title: "İşletim Sistemlerine Giriş-3",
      slug: "isletimSistemleriGiris3",
      img: "isletimSistemleri.png",
      entrance:
        "Bu yazıda işlenen konular: işletim sistemi ne iş yapar, bilgisayar sistemi ve organizasyonu, bilgisayar sistemi mimarisi, işletim sistemi yapısı, işletim sistemi işlemleri.",
      details: require("./posts/isletimSistemleriGiris3.md").default,
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

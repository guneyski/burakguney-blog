#### Bilgisayar Sistemi ve Organizasyonu

**_Bilgisayar sisteminin çalışması_**

Günümüz genel amaçlı bilgisayarları bir veya birden fazla CPU'ya, ortak bus üzerinden kontrol edilen cihazlara ve paylaşılmış hafızaya sahiptir.

CPU ile cihaz denetleyicileri eş zamanlı çalışırlar ve paylaşılmış hafızaya aynı anda erişmek isteyebilirler. Hafıza denetleyicisi cihazların hafızaya erişimini yönetir.

Bilgisayar çalışmaya başladığında, başlangıç programı olarak bootstrap(o bootstrap bu bootstrap değil:) programını kullanır.

Bootstrap programı oldukça basittir ve ROM veya EEPROM içerisinde saklanır.

Bootstrap programlarına **firmware** adı verilir.

**Firmware** programı bilgisayarın tüm bileşenlerini (CPU, register, cihaz denetleyicileri, hafıza içeriği) başlatır.

Bootstrap programı, işletim sistemi kernelinin bulunduğu konumu bilmek ve hafızaya yüklemek zorundadır.

Kernal hafızaya yüklendikten sonra sisteme ve kullanıcılara servis sağlamaya başlar.

İşletim sistemi boot edildikten sonra bir olay (event) gerçekleşmesi için beklemeye başlar.

Bilgisayar sistemlerinde bir olayın oluştuğu yazılım veya donanım tarafından **interrupt** kullanılarak bildirilir.

**Interrupt** türkçeye **Kesme** olarak çevrilebilir. CPU bir interrupt aldığında çalışmasını bulunduğu yerde keser ve belirtilen diğer noktaya geçiş yapar. Geçiş yaptığı yer, gelen kesmeyle ilişkilendirilmiş service routine başlangıç adresidir. Bu işlem bittikten sonra önceki yere geçiş yaparak çalışmasına devam eder.

**Interrupt routine adresleri pointer ile gösterilir.**

**_Depolama yapısı_**

CPU, programlara ait komutları hafızadan yükler. Bu yüzden, çalışacak programların önce hafızaya alınması gereklidir.

Genel amaçlı bilgisayarlar programları çalıştırmak için ana hafızayı(main memory) kullanır.
Ana hafıza, **RAM** olarak da adlandırılır.

Tüm programların RAM'da saklanması istenir ancak iki nedenden dolayı mümkün değildir:

- RAM sınırlı kapasiteye sahiptir.
- Enerji kesildiğinde hafızadaki veri kaybolur.

Bu sebeple tüm bilgisayar sistemleri, programları ve verileri kalıcı saklamak için ikincil depolama birimlerine sahiptir. Bu depolama birimlerinden en yaygın kullanılanları manyetik disklerdir.

**RAM, Ön bellek ve register** verinin geçici olarak saklandığı birimlerdir.

**SSD, manyetik disk, optik disk** verinin kalıcı olarak saklandığı birimlerdir.

**_I/O yapısı_**

İşletim sistemlerinin yazıldığı kodun büyük bir bölümü I/O yönetimini sağlar.

I/O cihazlarında güvenilirlik ve performans çok önemlidir.

Genel amaçlı bilgisayarlarda CPU ile çok sayıda I/O cihazı bus üzerinden bağlantıya sahiptir.

İşletim sistemi her aygıt denetleyicisi için aygıt sürücüsüne **(device driver)** sahiptir.

I/O işlemini başlatmak için aygıt sürücüsü uygun register içeriğini aygıt kontrolcüsüne aktarır.

İşlemin tamamlandığı bu kontrolcü tarafından aygıt yöneticisine interrupt ile bildirilir. Bu şekilde veri aktarımında overhead fazladır ve aktarım yavaştır.

Bu sebeple **DMA(direct memory access)** ile blok veri cihaz ile hafıza arasında doğrudan aktarılır.

DMA kullanıldığında I/O cihazı için buffer, pointer ve sayıcılar oluşturulur, aygıt kontrolcüsü tüm aktarımı gerçekleştirilir. İşlemin bittiği aygıt yöneticisine interrupt ile bildirilir. Bu işlem süresince CPU diğer işleri gerçekleştirir.

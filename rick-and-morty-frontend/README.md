# Rick and Morty API React Frontend

Bu proje, Rick and Morty API kullanarak bir React uygulaması geliştirmektedir. Uygulama, API'den bölüm ve karakter verilerini çeker, sayfalama ve arama işlevselliği sağlar ve kullanıcının favori karakterlerini yönetmesine olanak tanır.

## Gereksinimler

- Node.js
- npm veya yarn

## Kurulum

1. **Projeyi Klonlama:** 

    ```
    git clone https://github.com/kullanici_adi/react-rick-morty-frontend.git
    ```

2. **Proje Dizinine Gitme:**

    ```
    cd react-rick-morty-frontend
    ```

3. **Bağımlılıkları Yükleme:**

    ```
    npm install
    # veya
    yarn install
    ```

4. **Uygulamayı Başlatma:**

    ```
    npm start
    # veya
    yarn start
    ```

5. **Tarayıcıda Görüntüleme:**

    Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## Kullanım

- Ana sayfa, bölümleri pagination (sayfalama) şeklinde listeler.
- Her bölüm kartı üzerine tıklanarak bölüm detaylarına gidilir.
- Bölüm detay sayfasında bölümdeki karakterler listelenir ve karakterlere tıklanarak karakter detaylarına gidilir.
- Arama çubuğu, bölümler ve karakterler arasında arama yapmayı sağlar.
- Favori karakter seçimi yapılabilmektedir. Maksimum 10 karakter favori olarak eklenebilir. Favori karakterler Redux/Toolkit ve localStorage kullanılarak yönetilir.
- Favori karakterlerin listelendiği Favori Karakterler sayfasında karakterler silinebilir.

## Katkıda Bulunma

Bu proje açık kaynaklıdır ve katkıda bulunmaktan mutluluk duyarız. Lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun ve katkıda bulunmak için adımları takip edin.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasını inceleyin.

## Önemli Not

`npm run eject` komutunu kullanmadan önce dikkatlice düşünün. Bu işlem geri alınamaz ve projenizdeki yapılandırma dosyalarını değiştirir. Bu dosyaları daha sonra özelleştirmek istiyorsanız, bu komutu kullanabilirsiniz. Ancak, projenin önceden belirlenmiş özellik seti küçük ve orta ölçekli dağıtımlar için yeterlidir ve bu özelliği kullanmaya zorunlu değilsiniz.

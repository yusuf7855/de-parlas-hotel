import standardroom from "../assets/images/rooms/oda.jpg"
import deluxeroom from "../assets/images/rooms/oda.jpg"
import suiteroom from "../assets/images/rooms/oda.jpg"
import familyroom from "../assets/images/rooms/oda.jpg"
import businessroom from "../assets/images/rooms/oda.jpg"
import presidentroom from "../assets/images/rooms/oda.jpg"

export const rooms = [
    {
        "id": 0,
        "title": "Tüm Odalar",
        "route": "/odalar"
    },
    {
        "id": 1,
        "title": "Standart Oda",
        "images": [
            standardroom
        ],
        "description": "Konforlu ve modern tasarımıyla standart odalarımız, her türlü ihtiyacınızı karşılayacak şekilde düzenlenmiştir. Rahat yatak, çalışma masası ve özel banyo ile huzurlu bir konaklama deneyimi yaşayın.",
        "descriptionLong": "25 m² büyüklüğündeki standart odalarımız, çift kişilik yatak, klima, minibar, LCD TV, ücretsiz Wi-Fi ve özel banyo ile donatılmıştır. Şehir manzaralı bu odalar, iş ve tatil seyahatleriniz için ideal konfor sunar.",
        "route": "standart-oda"
    },
    {
        "id": 2,
        "title": "Deluxe Oda",
        "images": [deluxeroom],
        "description": "Daha geniş alana sahip deluxe odalarımız, üstün konfor ve şıklık arayan misafirlerimiz için tasarlanmıştır. Oturma alanı ve panoramik pencerelerle unutulmaz bir konaklama deneyimi sunar.",
        "descriptionLong": "35 m² büyüklüğündeki deluxe odalarımız, king size yatak, oturma köşesi, geniş çalışma alanı, klima, minibar, LCD TV, kahve makinesi ve lüks banyo amenities ile donatılmıştır. Deniz manzaralı bu odalar premium konfor sunar.",
        "route": "deluxe-oda"
    },
    {
        "id": 3,
        "title": "Suite Oda",
        "images": [suiteroom],
        "description": "Lüks ve konforun mükemmel birleşimi olan suite odalarımız, ayrı yaşam alanları ve özel hizmetlerle size sarayında hissettirecek bir deneyim sunar.",
        "descriptionLong": "50 m² büyüklüğündeki suite odalarımız, ayrı yatak odası ve salon, jacuzzi, klima, minibar, 55'' Smart TV, espresso makinesi ve premium banyo amenities ile donatılmıştır. VIP hizmetler ve özel concierge desteği ile lüks bir konaklama deneyimi yaşayın.",
        "route": "suite-oda"
    },
    {
        "id": 4,
        "title": "Aile Odası",
        "images": [familyroom],
        "description": "Ailecek konaklamak için özel olarak tasarlanan geniş odalarımız, çocuklarınızın güvenliği ve konforunu düşünerek hazırlanmıştır.",
        "descriptionLong": "40 m² büyüklüğündeki aile odalarımız, çift kişilik yatak + ranza, çocuk oyun alanı, güvenlik önlemleri, klima, minibar, çocuk dostu amenities ve geniş banyo ile donatılmıştır. 4 kişiye kadar konaklamaya uygun bu odalar, aile tatilleriniz için idealdir.",
        "route": "aile-odasi"
    },
    {
        "id": 5,
        "title": "Business Oda",
        "images": [businessroom],
        "description": "İş seyahatleriniz için özel olarak tasarlanan business odalarımız, çalışma ihtiyaçlarınızı karşılayacak tüm donanıma sahiptir.",
        "descriptionLong": "30 m² büyüklüğündeki business odalarımız, ergonomik çalışma masası, yüksek hızlı Wi-Fi, yazıcı/faks erişimi, toplantı masası, klima, minibar, iş odaklı amenities ile donatılmıştır. İş toplantılarınız için küçük meeting alanı da mevcuttur.",
        "route": "business-oda"
    },
    {
        "id": 6,
        "title": "Başkan Dairesi",
        "images": [presidentroom],
        "description": "En üst düzey lüks ve konfor arayan misafirlerimiz için tasarlanan başkan dairemiz, eşsiz bir konaklama deneyimi sunar.",
        "descriptionLong": "80 m² büyüklüğündeki başkan dairemiz, master yatak odası, ayrı salon, yemek alanı, jacuzzi, sauna, özel balkon, klima, minibar, 65'' Smart TV, premium amenities ve 24 saat kişisel butler hizmeti ile donatılmıştır. Özel check-in/out hizmetleri ile VIP deneyim yaşayın.",
        "route": "baskan-dairesi"
    }
]
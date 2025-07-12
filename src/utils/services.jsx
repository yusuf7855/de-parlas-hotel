import standardroom from "../assets/images/rooms/oda.jpg"
import deluxeroom from "../assets/images/rooms/oda.jpg"
import suiteroom from "../assets/images/rooms/oda.jpg"
import familyroom from "../assets/images/rooms/oda.jpg"
import businessroom from "../assets/images/rooms/oda.jpg"
import presidentroom from "../assets/images/rooms/oda.jpg"

export const services = [
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
        "route": "standart-oda",
        "price": {
            "daily": 850,
            "weekly": 5250,
            "monthly": 19500
        },
        "capacity": "2 Kişi",
        "size": "25 m²",
        "amenities": [
            "Çift Kişilik Yatak",
            "Klima",
            "Minibar",
            "32'' LCD TV",
            "Ücretsiz Wi-Fi",
            "Özel Banyo",
            "Çalışma Masası",
            "Şehir Manzarası"
        ],
        "availability": true
    },
    {
        "id": 2,
        "title": "Deluxe Oda",
        "images": [deluxeroom],
        "description": "Daha geniş alana sahip deluxe odalarımız, üstün konfor ve şıklık arayan misafirlerimiz için tasarlanmıştır. Oturma alanı ve panoramik pencerelerle unutulmaz bir konaklama deneyimi sunar.",
        "descriptionLong": "35 m² büyüklüğündeki deluxe odalarımız, king size yatak, oturma köşesi, geniş çalışma alanı, klima, minibar, LCD TV, kahve makinesi ve lüks banyo amenities ile donatılmıştır. Deniz manzaralı bu odalar premium konfor sunar.",
        "route": "deluxe-oda",
        "price": {
            "daily": 1250,
            "weekly": 7750,
            "monthly": 28500
        },
        "capacity": "2-3 Kişi",
        "size": "35 m²",
        "amenities": [
            "King Size Yatak",
            "Oturma Köşesi",
            "Klima",
            "Minibar",
            "42'' LCD TV",
            "Kahve Makinesi",
            "Ücretsiz Wi-Fi",
            "Lüks Banyo Amenities",
            "Geniş Çalışma Alanı",
            "Deniz Manzarası"
        ],
        "availability": true
    },
    {
        "id": 3,
        "title": "Suite Oda",
        "images": [suiteroom],
        "description": "Lüks ve konforun mükemmel birleşimi olan suite odalarımız, ayrı yaşam alanları ve özel hizmetlerle size sarayında hissettirecek bir deneyim sunar.",
        "descriptionLong": "50 m² büyüklüğündeki suite odalarımız, ayrı yatak odası ve salon, jacuzzi, klima, minibar, 55'' Smart TV, espresso makinesi ve premium banyo amenities ile donatılmıştır. VIP hizmetler ve özel concierge desteği ile lüks bir konaklama deneyimi yaşayın.",
        "route": "suite-oda",
        "price": {
            "daily": 2150,
            "weekly": 13250,
            "monthly": 48500
        },
        "capacity": "2-4 Kişi",
        "size": "50 m²",
        "amenities": [
            "Ayrı Yatak Odası",
            "Ayrı Salon",
            "Jacuzzi",
            "Klima",
            "Minibar",
            "55'' Smart TV",
            "Espresso Makinesi",
            "Premium Banyo Amenities",
            "VIP Hizmetler",
            "Concierge Desteği",
            "Özel Balkon"
        ],
        "availability": true
    },
    {
        "id": 4,
        "title": "Aile Odası",
        "images": [familyroom],
        "description": "Ailecek konaklamak için özel olarak tasarlanan geniş odalarımız, çocuklarınızın güvenliği ve konforunu düşünerek hazırlanmıştır.",
        "descriptionLong": "40 m² büyüklüğündeki aile odalarımız, çift kişilik yatak + ranza, çocuk oyun alanı, güvenlik önlemleri, klima, minibar, çocuk dostu amenities ve geniş banyo ile donatılmıştır. 4 kişiye kadar konaklamaya uygun bu odalar, aile tatilleriniz için idealdir.",
        "route": "aile-odasi",
        "price": {
            "daily": 1650,
            "weekly": 10250,
            "monthly": 37500
        },
        "capacity": "4 Kişi (2 Yetişkin + 2 Çocuk)",
        "size": "40 m²",
        "amenities": [
            "Çift Kişilik Yatak",
            "Ranza",
            "Çocuk Oyun Alanı",
            "Güvenlik Önlemleri",
            "Klima",
            "Minibar",
            "40'' LCD TV",
            "Çocuk Dostu Amenities",
            "Geniş Banyo",
            "Bebek Karyolası (Talep Üzerine)",
            "Ücretsiz Wi-Fi"
        ],
        "availability": true
    },
    {
        "id": 5,
        "title": "Business Oda",
        "images": [businessroom],
        "description": "İş seyahatleriniz için özel olarak tasarlanan business odalarımız, çalışma ihtiyaçlarınızı karşılayacak tüm donanıma sahiptir.",
        "descriptionLong": "30 m² büyüklüğündeki business odalarımız, ergonomik çalışma masası, yüksek hızlı Wi-Fi, yazıcı/faks erişimi, toplantı masası, klima, minibar, iş odaklı amenities ile donatılmıştır. İş toplantılarınız için küçük meeting alanı da mevcuttur.",
        "route": "business-oda",
        "price": {
            "daily": 1450,
            "weekly": 8950,
            "monthly": 32500
        },
        "capacity": "2 Kişi",
        "size": "30 m²",
        "amenities": [
            "Ergonomik Çalışma Masası",
            "Yüksek Hızlı Wi-Fi",
            "Yazıcı/Faks Erişimi",
            "Küçük Toplantı Masası",
            "Klima",
            "Minibar",
            "42'' Smart TV",
            "İş Odaklı Amenities",
            "24 Saat Room Service",
            "Uluslararası Telefon Hattı",
            "Şehir Manzarası"
        ],
        "availability": true
    },
    {
        "id": 6,
        "title": "Başkan Dairesi",
        "images": [presidentroom],
        "description": "En üst düzey lüks ve konfor arayan misafirlerimiz için tasarlanan başkan dairemiz, eşsiz bir konaklama deneyimi sunar.",
        "descriptionLong": "80 m² büyüklüğündeki başkan dairemiz, master yatak odası, ayrı salon, yemek alanı, jacuzzi, sauna, özel balkon, klima, minibar, 65'' Smart TV, premium amenities ve 24 saat kişisel butler hizmeti ile donatılmıştır. Özel check-in/out hizmetleri ile VIP deneyim yaşayın.",
        "route": "baskan-dairesi",
        "price": {
            "daily": 3500,
            "weekly": 21500,
            "monthly": 78000
        },
        "capacity": "4 Kişi",
        "size": "80 m²",
        "amenities": [
            "Master Yatak Odası",
            "Ayrı Salon",
            "Yemek Alanı",
            "Jacuzzi",
            "Sauna",
            "Özel Balkon",
            "Klima",
            "Premium Minibar",
            "65'' Smart TV",
            "Premium Amenities",
            "24 Saat Kişisel Butler",
            "Özel Check-in/out",
            "VIP Concierge",
            "Deniz Manzarası",
            "24 Saat Room Service"
        ],
        "availability": true
    }
]
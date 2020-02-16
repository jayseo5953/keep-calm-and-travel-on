
INSERT INTO users (first_name, last_name, email, password) VALUES
('Tausif', 'Khan', 'tausif@gmail.com', '123'),
('Porson', 'Lee', 'porson@gmail.com', '123'),
('Jay', 'Seo', 'jay@gmail.com', '123');

INSERT INTO destinations(id, city, country, image_url) VALUES
(1,'San Francisco', 'USA', 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg'),
(2,'Florence', 'Italy', 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1539722614/duomo-church-architecture-sunset-florence-italy-FLORENCEITALY1018.jpg?itok=p9ytJcSJ'),

(3, 'Bali', 'Indonesia', 'https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale'),
(4, 'Cebu', 'Philippines', 'https://i.ytimg.com/vi/4jzph6P38l8/maxresdefault.jpg'),
(5, 'Halong Bay', 'Vietnam', 'https://d10vk5dg0puvhi.cloudfront.net/images/destinations/origin/559c8135b9cc5.jpg'),
(6, 'Dubai', 'Dubai', 'https://www.wingbuddy.com//images/package/28/magical-dubai.jpg'),

(7, 'Jeju', 'South Korea', 'https://i.ytimg.com/vi/m6QeLoX3pT4/maxresdefault.jpg'),
(8, 'Okinawa', 'Japan', 'https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/037/919/original/pixta_23484329_s_S.jpg?2019&d=750x400'),
(9, 'Taipei', 'Taiwan', 'https://lp-cms-production.imgix.net/2019-06/f15f7b57ab31c217f471c6712a2654e0-taipei-101.jpg'),
(10,'Barcelona', 'Spain', 'https://s27363.pcdn.co/wp-content/uploads/2019/03/Tibidabo-and-Sagrat-Cor.jpg.optimal.jpg');


INSERT INTO activities(name, price_cents, time_operation, latitude, longtitude, image_url, destination_id) VALUES
-- korea
('Fishing', 6000, '5AM-5PM', 33.2323525,126.5407906, 'https://c.badatime.com/data/editor/1708/thumb-20170807125058_ulwcwqqk_600x450.jpg', 7),
('Snorkeling', 4000, '10AM-6PM', 33.2383688,126.5459496, 'https://lh3.googleusercontent.com/proxy/-BcB0oMqAdNWwYF-HFoHFhTtapvwoGxv6_ZonP2nu4yDdEcAZ8vHNYsdDKpuGPCfd0pSHbHBJfR__aSI3SRc1nFqUDceZKpA8TXKmo6TRVUx02t9aLNsphhN-S5aiBhU7AOum3Zn36RVvNK_zO05GA', 7),
('Parasailing', 10000, '10AM-6PM', 33.2390202,126.55439, 'https://thumb-wishbeen.akamaized.net/8Z_Ok8ER1LoMYPY23ebMj6gnEZA=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880176342_%ED%8C%A8%EB%9F%AC%EC%84%B8%EC%9D%BC%EB%A7%81.jpg', 7),
('Whale Seeing', 12000, '11AM-4PM', 33.2387977,126.5985461, 'https://thumb-wishbeen.akamaized.net/-d94EHHM10G9IWeKQHhYPDe546k=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880250226_%EC%9B%A8%EC%9D%BC%EC%99%80%EC%B9%AD.jpg', 7),
('Kayaking', 8000, '9AM-3PM', 33.2403173,126.6087719, 'https://thumb-wishbeen.akamaized.net/6gMM2w1V6atNn5o8cel9XdSfQvQ=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880304166_2943614679_598a8cb0fb_z.jpg', 7),

-- japan
('Street Kart', 15000, '9AM-10PM', 26.2743169,127.7033545, 'https://cms.qz.com/wp-content/uploads/2018/09/AP_16303197042534-e1538065352790.jpg?quality=75&strip=all&w=1600&h=900&crop=1', 8),
('Okinawa Aquarium', 9000, '8AM-9PM', 26.2223741,127.6999212, 'https://www.japan-guide.com/g17/7109_top.jpg', 8),
('Okinawa Amusement Park', 6000, '10AM-10PM', 26.2388269,127.6768617, 'https://www.japan-guide.com/thumb/XYZeXYZe6918_375.jpg', 8),
('Surfing', 5000, '10AM-10PM', 26.3119412,127.7077607, 'https://www.japan-guide.com/thumb/XYZeXYZe6918_375.jpg', 8),

-- taiwan
('Tea making', 5000, '10AM-10PM', 24.9387282,121.4310806, 'https://www.nickkembel.com/wp-content/uploads/2019/01/taiwan-tea-cups.jpg', 9),
('Hiking', 8000, '7AM-6PM', 25.0148966,121.5890459, 'https://taiwaneverything.cc/wp-content/uploads/2016/10/P4052689-770x430.jpg', 9),
('Buddha Museum', 2500, '9AM-8PM', 22.75562,120.3051735, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fo_Guang_Shan_Buddha_Museum_%E4%BD%9B%E5%85%89%E5%B1%B1%E4%BD%9B%E9%99%80%E7%B4%80%E5%BF%B5%E9%A4%A8_.jpg/1599px-Fo_Guang_Shan_Buddha_Museum_%E4%BD%9B%E5%85%89%E5%B1%B1%E4%BD%9B%E9%99%80%E7%B4%80%E5%BF%B5%E9%A4%A8_.jpg', 9),
('Hiking', 8000, '7AM-6PM', 25.0148966,121.5890459, 'https://taiwaneverything.cc/wp-content/uploads/2016/10/P4052689-770x430.jpg', 9),
('National Aquarium', 5000, '7AM-6PM', 22.756033,120.0253376, 'https://i.ytimg.com/vi/uQTHDwP6d2k/maxresdefault.jpg', 9);


INSERT INTO activities(name, price_cents, time_operation, latitude, longtitude, destination_id, image_url) VALUES
--bali
('Snorkeling', 3000, '7AM-5PM', -8.6311346, 115.1904754, 3, 'https://p0.piqsels.com/preview/464/699/802/brown-and-grey-turtle-in-underwater-photography.jpg'),
('Scuba Diving', 15000, '7AM-5PM',8.6502089, 115.2246838, 3, 'https://s.iha.com/228100013484/Short-term-rentals-Nusa-lembongan-Scooby-Doo-Beach-Bungalow_13.jpeg'),
('Paragliding', 5000, '7AM-5PM',-8.7330639, 115.1681143, 3, 'https://df8r7aly9nid3.cloudfront.net/app/uploads/production/photo/photo/22298/large_73d9135398f21b27f00f5ac1e3398385.jpg'),
('Sunset Tour', 10000, '10AM-7PM', -8.7554566,115.1276638, 3, 'https://storage.needpix.com/rsynced_images/bali-992566_1280.jpg'),
('Island Hopping', 8000, '7AM-5PM', -8.7396129,115.1316263, 3, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_beautiful_turquoise_water_surrounding_the_Gili_Islands_%2816975598051%29.jpg/800px-The_beautiful_turquoise_water_surrounding_the_Gili_Islands_%2816975598051%29.jpg'),
('Mount Batur Sunrise Trek', 10000, '2AM-7AM', -8.6814856,115.2359566, 3, 'https://p0.piqsels.com/preview/1002/129/230/mountain-covered-by-clouds-during-sunset.jpg'),
('Dolphin Watching', 10000, '2AM-7PM', -8.4287109,114.8687939, 3, 'https://i0.pickpik.com/photos/851/294/363/dolphins-aquarium-jumping-fish-thumb.jpg'),

-- cebu
('Snorkeling', 4000, '7AM', 10.3024454,123.8901975, 4, 'https://p1.pxfuel.com/preview/510/537/300/fish-school-snorkeling-nature.jpg'),
('Scuba Diving', 20000, '7AM',8.6502089, 115.2246838, 4, 'https://storage.needpix.com/rsynced_images/sea-684352_1280.jpg'),
('Island Hopping', 7000, '7AM', -8.7396129,115.1316263, 4, 'https://p0.piqsels.com/preview/210/826/517/andavaree-boat-island-hopping.jpg'),
('City Tour', 5000, '7AM', -8.6311346, 115.1904754, 4, 'https://upload.wikimedia.org/wikipedia/commons/1/17/Year_of_The_Dragon.jpg'),
('Badian Canyon Trek', 10000, '7AM', 9.8094689,123.3607373, 4, 'https://live.staticflickr.com/938/43938354401_fbe7f5ac84_b.jpg'),

-- hl
('City Tour', 2000, '10AM',20.9416728,106.9925775, 5, 'https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/ha-long-bay/pagePropertiesImage/ha-long-bay.jpg.jpg'),
('Imperidal Classic Cruise', 8000, '10AM', 20.9418313,106.9771603, 5, 'https://pix10.agoda.net/hotelImages/302/302687/302687_16040710090041367196.jpg?s=1024x768'),
('Night Cruise', 10000, '10AM', 20.9276962,106.9719274, 5, 'https://d10vk5dg0puvhi.cloudfront.net/images/guides/origin/5d66419771ba2.jpg'),

-- dub
('City Tour', 8000, '9AM-5PM', 25.1947853,55.2568795, 6, 'https://www.ubltravels.com/admin/assets/images/packages/large/Dubai_sights.jpg'),
('Desert Safari', 15000, '12PM-7PM', 25.1948747,55.2567774, 6, 'https://www.dubaielitetours.com/images/gallery/1540376881_Dubai_Evening_Desert_Safari.jpeg.jpg'),
('River Cruise', 13000, '9Am-5PM', 25.1950218,55.2566057, 6, 'https://www.alwasldhow.com/upload/gallery/dhow-marina-01.jpg'),
('Burj Al Khalifa', 15000, '10AM-8PM', 25.1972018,55.2721823, 6, 'https://cdn.getyourguide.com/img/location_img-2703-1061214306-148.jpg'),
('Atlantis', 20000, '10AM-7PM', 25.1326458,55.1111997, 6, 'https://foundtheworld.com/wp-content/uploads/2016/03/Atlantis-Palm-Hotel-7.jpg'),

--san
('The Escape Game', 8000, '8AM-9PM', 37.7902349, -122.4191579, 1, 'https://lh5.googleusercontent.com/p/AF1QipOje5cjJkY6YoLJIwRdPXfIS6Cnm9miobnwSMqr=w408-h272-k-no'), ('Aquarium of the Bay', 12000, '10AM-9PM', 37.7988043, -122.4144813, 1, 'https://lh5.googleusercontent.com/p/AF1QipNKMYC4XBDUdTGeNGGy2tpPchRTz4gYanHl820c=w432-h240-k-no'), ('San Francisco Museum', 10000, '10AM-8PM', 37.7905071, -122.4140478, 1, 'https://lh5.googleusercontent.com/p/AF1QipNmsJYSIkJjo1RZRIdcY6q8Hh85ROJzv0bjhzkx=w408-h306-k-no'), ('Exploratorium', 30000, '10AM-7PM', 37.7992793, -122.4032841, 1, 'https://lh5.googleusercontent.com/p/AF1QipPV4cHGKkrKN4_0uCEqpt3S3FLdSh6VHRxRco1E=w408-h306-k-no'), ('California Academy of Sciences', 32000, '9:30AM-9PM', 37.7813094, -122.4603346, 1, 'https://lh5.googleusercontent.com/p/AF1QipMM56l8VgD7GAg2TDppckaDT2rOCO_ROIgVAhcb=w408-h301-k-no'),

-- flor
 ('Grape Tours SIGNATURE tour', 17500, '9:30AM-8PM', 43.7691584, 11.2515191, 2, 'https://lh5.googleusercontent.com/p/AF1QipNwpHnBdgSsMwOdWh03MkeAGlFBW82raoKJ3KiF=w426-h240-k-no'), ('Galleria dell Accademia', 5000, '8:15AM-7PM', 43.7761899, 11.2530771, 2, 'https://lh5.googleusercontent.com/p/AF1QipPsg0cgyIiaQEkSMISZ54K9-ZabJySOowQJr8Au=w408-h306-k-no'), ('Bargello National Museum', 1500 , '8:15AM-2PM', 43.7692821, 11.2509416, 2, 'https://lh5.googleusercontent.com/p/AF1QipPWkloB5_sypgPwM7HtqwOeUxjLmU-dQ1sKT21G=w408-h306-k-no'), ('Museo Galileo', 1500, '9:30AM-6PM', 43.7677337, 11.2537145, 2, 'https://lh5.googleusercontent.com/p/AF1QipNonfCRZReiPVpfOg5OJU-OI_QnQLeP0GIBdZrh=w921-h240-k-no'), ('Leonardo Interactive Museum', 1000, '10AM-6PM', 43.766711, 11.2492942, 2, 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/f8/11.jpg'),


--  bar
 ('Basilica di San Lorenzo', 8000, '10AM-5PM', 43.7660269, 11.2486197, 10, 'https://lh5.googleusercontent.com/p/AF1QipMhlcWLnNP2fr6Wuf7d90kjcAdh9BWU2xv_xFkh=w426-h240-k-no'), ('La Pedera - Casa Milà', 4000, '9AM-9PM', 41.38354, 2.1607643, 10, 'https://www.lapedrera.com/sites/default/files/2019-11/home-la-pedrera-terrat-azotea-rooftop.jpg'),
 ('Barcelona Museum of Contemporary Art', 10000, '11AM-7:30PM', 41.38354, 2.1607643, 10, 'https://www.richardmeier.com/wp-content/uploads/2014/07/P10.95SF40.016-660x525.jpg'), ('La Sagrada Familia', 10000, '9AM-6PM', 41.4036299, 2.1721671, 10, 'https://lonelyplanetimages.imgix.net/a/g/hi/t/8ae1c56041e64517e29372a889f1beb7-la-sagrada-familia.jpg'),
 ('Aquarium Barcelona', 8000, '10AM-8PM', 41.3768344, 2.1823064, 10, 'https://lh3.googleusercontent.com/proxy/FGKHVnE9qKajMZGZlHtJkEAtV5qfzkCngHEZ_16l0N9dUDIi6PAzO-b9uKT8GDkIs4GP9hyBgCYLowhkrwVyqrFxcQQFSVMPIoflLndZQpLsVQww9lGpXDovgU09qSbxe3hr3h_Y8znqsvM'),
 ('Güell Palace', 15000, '10AM-8PM', 41.3691841, 2.1543595, 10, 'https://lh3.googleusercontent.com/proxy/jK6ql029i5K-7nxJkd7syhsRZw6PqIDXi40FQJoUrOnNIKkCyO1oRhim7JLUO-5LFXJuJGEw6dWza_3H2ZEna5yWM1F_x7GT6EZ56XrFM8v8cpt0P9fBdu3oHC-bUOJYPzpFcYM');

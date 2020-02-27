DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS schedules CASCADE;
DROP TABLE IF EXISTS itineraries CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(55) NOT NULL,
  last_name VARCHAR(55) NOT NULL,
  email VARCHAR(55) NOT NULL,
  password VARCHAR(55) NOT NULL
);

CREATE TABLE friends(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  friend_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE trips (
  id uuid PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

  trip_name VARCHAR(255) NOT NULL,
  trip_budget INTEGER,
  total_cost INTEGER NOT NULL
);

CREATE TABLE schedules (
  id uuid PRIMARY KEY NOT NULL,
  trip_id uuid REFERENCES trips(id) ON DELETE CASCADE,

  schedule_name VARCHAR(255) NOT NULL
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY NOT NULL,
  city VARCHAR(55) NOT NULL,
  country VARCHAR(55) NOT NULL,
  image_url TEXT
);

CREATE TABLE activities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(55) NOT NULL,
  price_cents INTEGER NOT NULL,
  time_operation VARCHAR(55) NOT NULL,
  lat DECIMAL(10,8) NOT NULL,
  long DECIMAL(11,8) NOT NULL,
  image_url TEXT,
  destination_id INTEGER REFERENCES destinations(id) ON DELETE CASCADE
);

CREATE TABLE itineraries (
  id uuid PRIMARY KEY NOT NULL,
  schedule_id uuid REFERENCES schedules(id) ON DELETE CASCADE,
  activity_id INTEGER REFERENCES activities(id) ON DELETE CASCADE
);


INSERT INTO users (first_name, last_name, email, password) VALUES
('Tausif', 'Khan', 'tausif@gmail.com', '123'),
('Porson', 'Lee', 'porson@gmail.com', '123'),
('Jay', 'Seo', 'jay@gmail.com', '123');

INSERT INTO friends (user_id, friend_id) VALUES (1,2), (2,1), (1,3), (3,1),(2,3),(3,2);

INSERT INTO destinations(id, city, country, image_url) VALUES
(1,'San Francisco', 'USA', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/SanFran.jpg?raw=true'),
(2,'Florence', 'Italy', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Florence.jpg?raw=true'),
(3, 'Bali', 'Indonesia', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Bali.jpg?raw=true'),
(4, 'Cebu', 'Philippines', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Cebu.jpg?raw=true'),
(5, 'Ha Long Bay', 'Vietnam', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Ha%20Long%20Bay.jpg?raw=true'),
(6, 'Dubai', 'Dubai', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Dubai.jpg?raw=true'),
(7, 'Jeju', 'South Korea', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Jeju.jpg?raw=true'),
(8, 'Okinawa', 'Japan', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Okinawa.jpg?raw=true'),
(9, 'Taipei', 'Taiwan', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Taipai.jpg?raw=true'),
(10,'Barcelona', 'Spain', 'https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/frontend/src/assets/img/dest_img/Barcelona.jpg?raw=true');


INSERT INTO activities(name, price_cents, time_operation, lat, long, image_url, destination_id) VALUES
-- korea
('Fishing', 6000, '5AM-5PM', 33.2323525,126.5407906, 'https://c.badatime.com/data/editor/1708/thumb-20170807125058_ulwcwqqk_600x450.jpg', 7),
('Snorkeling', 4000, '10AM-6PM', 33.2383688,126.5459496, 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/cover-for-snorkeling-in-new-zealand.jpg', 7),
('Parasailing', 10000, '10AM-6PM', 33.2390202,126.55439, 'https://thumb-wishbeen.akamaized.net/8Z_Ok8ER1LoMYPY23ebMj6gnEZA=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880176342_%ED%8C%A8%EB%9F%AC%EC%84%B8%EC%9D%BC%EB%A7%81.jpg', 7),
('Whale Seeing', 9000, '11AM-4PM', 33.2387977,126.5985461, 'https://thumb-wishbeen.akamaized.net/-d94EHHM10G9IWeKQHhYPDe546k=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880250226_%EC%9B%A8%EC%9D%BC%EC%99%80%EC%B9%AD.jpg', 7),
('Kayaking', 8000, '9AM-3PM', 33.2403173,126.6087719, 'https://thumb-wishbeen.akamaized.net/6gMM2w1V6atNn5o8cel9XdSfQvQ=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880304166_2943614679_598a8cb0fb_z.jpg', 7),

-- japan
('Street Kart', 8000, '9AM-10PM', 26.2131461,127.6722775, 'https://cms.qz.com/wp-content/uploads/2018/09/AP_16303197042534-e1538065352790.jpg?quality=75&strip=all&w=1600&h=900&crop=1', 8),
('Okinawa Aquarium', 9000, '8AM-9PM', 26.2223741,127.6999212, 'https://www.japan-guide.com/g17/7109_top.jpg', 8),
('Amusement Park', 6000, '10AM-10PM', 26.2061423,127.6416787, 'https://www.japan-guide.com/thumb/XYZeXYZe6918_375.jpg', 8),
('Surfing', 5000, '10AM-10PM', 26.3119412,127.7077607, 'https://miro.medium.com/max/1502/1*xJPxjUl2QtHSlP0mGpSWhQ.jpeg', 8),

-- taiwan
('Tea making', 3500, '10AM-10PM', 24.9387282,121.4310806, 'https://www.nickkembel.com/wp-content/uploads/2019/01/taiwan-tea-cups.jpg', 9),
('Hiking', 5500, '7AM-6PM', 25.0148966,121.5890459, 'https://taiwaneverything.cc/wp-content/uploads/2016/10/P4052689-770x430.jpg', 9),
('Buddha Museum', 4000, '9AM-8PM', 22.75562,120.3051735, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fo_Guang_Shan_Buddha_Museum_%E4%BD%9B%E5%85%89%E5%B1%B1%E4%BD%9B%E9%99%80%E7%B4%80%E5%BF%B5%E9%A4%A8_.jpg/1599px-Fo_Guang_Shan_Buddha_Museum_%E4%BD%9B%E5%85%89%E5%B1%B1%E4%BD%9B%E9%99%80%E7%B4%80%E5%BF%B5%E9%A4%A8_.jpg', 9),
('City Tour', 5500, '7AM-6PM', 25.01498,121.5540264, 'https://lp-cms-production.imgix.net/2019-06/f15f7b57ab31c217f471c6712a2654e0-taipei-101.jpg', 9),
('Bicycling', 3000, '7AM-10PM', 25.01498,121.5540264, 'https://taiwaneverything.cc/wp-content/uploads/2016/10/P4052689-770x430.jpg', 9),
('National Aquarium', 4000, '7AM-6PM', 22.756033,120.0253376, 'https://i.ytimg.com/vi/uQTHDwP6d2k/maxresdefault.jpg', 9);


INSERT INTO activities(name, price_cents, time_operation, lat, long, destination_id, image_url) VALUES
--bali
('Snorkeling', 6500, '10AM-5PM', -8.6311346, 115.1904754, 3, 'https://www.gannett-cdn.com/presto/2019/01/11/USAT/5ae184a1-75d3-454e-9201-0f4624ea530a-Curacao_snorkeling_is_popular_with_guests_staying_at_the_Santa_Barbara_Beach_and_Golf_Resort_SBRCuracao.jpg?crop=2047,1151,x0,y224&width=660&height=372&format=pjpg&auto=webp'),
('Scuba Diving', 8500, '9AM-6PM',-8.669589, 115.256625, 3, 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg'),
('Paragliding', 7500, '11AM-5PM',-8.7330639, 115.1681143, 3, 'https://breakawayexperiences.com/content/images/thumbs/0008873_drayton-valley-tandem-paragliding-flight.jpeg'),
('Sunset Tour', 5000, '10AM-7PM', -8.6633737,115.2115082, 3, 'https://storage.needpix.com/rsynced_images/bali-992566_1280.jpg'),
('Island Hopping', 15000, '7AM-5PM', -8.7394861,115.1827169, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-8gX8KH0tTeDMR3YUTEbT6m8USkWfXRDyIALbcs4iBpuXfm85'),
('Mount Batur', 9500, '2AM-7AM', -8.6814856,115.2359566, 3, 'https://p0.piqsels.com/preview/1002/129/230/mountain-covered-by-clouds-during-sunset.jpg'),
('Dolphin Watching', 5500, '11AM-4PM', -8.1668301,115.0609733, 3, 'https://i0.pickpik.com/photos/851/294/363/dolphins-aquarium-jumping-fish-thumb.jpg'),

-- cebu
('Snorkeling', 7500, '7AM-5PM', 10.2937683,123.8996013, 4, 'https://www.gannett-cdn.com/presto/2019/01/11/USAT/5ae184a1-75d3-454e-9201-0f4624ea530a-Curacao_snorkeling_is_popular_with_guests_staying_at_the_Santa_Barbara_Beach_and_Golf_Resort_SBRCuracao.jpg?crop=2047,1151,x0,y224&width=660&height=372&format=pjpg&auto=webp'),
('Scuba Diving', 9900, '7AM-5PM',10.300977, 123.898556, 4, 'https://www.deeperblue.com/wp-content/uploads/2017/04/AdobeStock_62687098.jpeg'),
('Island Hopping', 7500, '7AM-5PM', 10.294135, 123.904126, 4, 'https://p0.piqsels.com/preview/210/826/517/andavaree-boat-island-hopping.jpg'),
('City Tour', 6500, '7AM-10PM', 10.295613, 123.897126, 4, 'https://upload.wikimedia.org/wikipedia/commons/1/17/Year_of_The_Dragon.jpg'),
('Badian Canyon', 8500, '7AM-5PM', 9.8024994,123.3664732, 4, 'https://live.staticflickr.com/938/43938354401_fbe7f5ac84_b.jpg'),

-- hl
('City Tour', 4500, '10AM',20.9538501,107.0040515, 5, 'https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/ha-long-bay/pagePropertiesImage/ha-long-bay.jpg.jpg'),
('Imperidal Classic Cruise', 7000, '10AM-6PM', 20.9598812,107.0252152, 5, 'https://pix10.agoda.net/hotelImages/302/302687/302687_16040710090041367196.jpg?s=1024x768'),
('Night Cruise', 11000, '10AM-10AM', 20.9276962,106.9719274, 5, 'https://d10vk5dg0puvhi.cloudfront.net/images/guides/origin/5d66419771ba2.jpg'),
('Bike Tour', 6500, '10AM-10PM', 20.9577249,107.0108494, 5, 'https://d3hne3c382ip58.cloudfront.net/resized/750x420/cycle-northern-vietnam-tour-2-449267_1553148005.JPG'),
('Bay Cruise', 9500, '10AM-5PM', 20.9225186,106.9834352, 5, 'https://d3h30waly5w5yx.cloudfront.net/images/tour/pictures/halong-bay-cruise-2d1n-3d2n-1.jpg'),

-- dub
('City Tour', 8000, '9AM-5PM', 25.1947853,55.2568795, 6, 'https://www.ubltravels.com/admin/assets/images/packages/large/Dubai_sights.jpg'),
('Desert Safari', 12000, '12PM-7PM', 25.1948747,55.2567774, 6, 'https://www.dubaielitetours.com/images/gallery/1540376881_Dubai_Evening_Desert_Safari.jpeg.jpg'),
('River Cruise', 9000, '9Am-5PM', 25.1950218,55.2566057, 6, 'https://www.alwasldhow.com/upload/gallery/dhow-marina-01.jpg'),
('Burj Al Khalifa', 12000, '10AM-8PM', 25.1972018,55.2721823, 6, 'https://cdn.getyourguide.com/img/location_img-2703-1061214306-148.jpg'),
('Atlantis', 15000, '10AM-7PM', 25.130494, 55.116855, 6, 'https://images.memphistours.com/large/3affc1f9aaddfcef6ae6619bf0cfce28.jpg'),
('Aqaventure Waterpark',8000, '10AM-7PM', 25.130229, 55.118366, 6, 'https://i.ytimg.com/vi/xcXhYWnc2IY/maxresdefault.jpg'),
('Sky Tour', 20000, '10AM-6PM', 25.2397743,55.2661226, 6, 'https://i.ytimg.com/vi/0BXGh0EYJtE/maxresdefault.jpg'),

--san
('The Escape Game', 8000, '8AM-9PM', 37.7902349, -122.4191579, 1, 'https://theescapegamecom-images.s3.amazonaws.com/wp-content/uploads/2018/10/TEG-Houston-84-700x467.jpg'),
('Aquarium of the Bay', 8500, '10AM-9PM', 37.8086121,-122.4095662, 1, 'https://www.visitmarin.org/site/assets/files/14377/kid_image.jpg'),
('San Francisco Museum', 8500, '10AM-8PM', 37.7905071, -122.4140478, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2017_SFMOMA_from_Yerba_Buena_Gardens.jpg/600px-2017_SFMOMA_from_Yerba_Buena_Gardens.jpg'),
('Exploratorium', 12000, '10AM-7PM', 37.7992793, -122.4032841, 1, 'https://www.exploratorium.edu/sites/default/files/events/programs/Glow_DSC_3219_Square.jpg'),
('Academy of Sciences', 9000, '9:30AM-9PM', 37.7698688,-122.4682834, 1, 'http://tdr.aaa.com/tdr-images/variation/101340?ratio=9:6&rwidth=500'),
('Twin Peaks Hike',6500, '8AM-9PM', 37.754336, -122.446953, 1, 'https://c1.sfdcstatic.com/content/dam/blogs/us/thumbnails/top-running-and-hiking-routes-during-dreamforce-and-win-a-free-fitbit-to-track/TwinPeaks.jpg'),
('Golden Gate', 7000, '8AM-9PM', 37.803942, -122.476590, 1, 'https://live.staticflickr.com/4636/38734794314_04e5d5028d_b.jpg'),

-- flor
 ('Grape Tours ', 9000, '9:30AM-8PM', 43.7691584, 11.2515191, 2, 'https://cdn3.gttwl.net/attachments/global/1395076798_original.jpeg?w=original&h=&fit=crop&crop=entropy&auto=format,enhance&q=60'),
 ('Galleria dell', 6000, '8:15AM-7PM', 43.7761899, 11.2530771, 2, 'https://flashmomentcontinued.files.wordpress.com/2015/03/florence-2014-1054.jpg?w=1280&h=1706'),
 ('Bargello Museum', 4500 , '8:15AM-2PM', 43.7692821, 11.2509416, 2, 'http://cdn4.discovertuscany.com/img/florence/museums/bargello/bargello-exterior-view.jpg?w=750&q=65'),
 ('Museo Galileo', 1500, '9:30AM-6PM', 43.7677337, 11.2537145, 2, 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/66/ce.jpg'),
 ('Leonardo Museum', 10000, '10AM-6PM', 43.766711, 11.2492942, 2, 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/f8/11.jpg'),
 ('Basilica di San Lorenzo', 8000, '10AM-5PM', 43.7660269, 11.2486197, 2, 'https://cdn.hswstatic.com/gif/michelangelo-buildings-3.jpg'),
 ('La Pedera Casa Milà', 5000, '9AM-9PM', 41.38354, 2.1607643, 10, 'https://www.lapedrera.com/sites/default/files/2019-11/home-la-pedrera-terrat-azotea-rooftop.jpg'),

--  bar
 ('Barcelona Museum', 7000, '11AM-7:30PM', 41.38354, 2.1607643, 10, 'https://www.richardmeier.com/wp-content/uploads/2014/07/P10.95SF40.016-660x525.jpg'),
 ('La Sagrada Familia', 7500, '9AM-6PM', 41.4036299, 2.1721671, 10, 'https://lonelyplanetimages.imgix.net/a/g/hi/t/8ae1c56041e64517e29372a889f1beb7-la-sagrada-familia.jpg'),
 ('Aquarium Barcelona', 5000, '10AM-8PM', 41.3768344, 2.1823064, 10, 'https://cdn-imgix-open.headout.com/blog/Barcelona/Barcelona+Aquarium/barcelona+aquarium+5.jpg?auto=compress&fm=pjpg&w=750&h=400&fit=min&q=60'),
 ('Güell Palace', 10000, '10AM-8PM', 41.3691841, 2.1543595, 10, 'https://cdn.casabatllo.es/wp-content/uploads/1886/01/xfachada-palau-guell-gaudi.jpg.pagespeed.ic.-H42Y4WUpD.jpg'),
 ('Excursions Barcelona', 6500, '11AM-7:30PM', 41.3792951,2.1213199, 10, 'https://static.outdoorvisit.com/photos/retina/d/0/d0373bec-6f72-408b-88f9-ef81f719b7af.jpg'),
 ('Picasso Museum', 5000, '11AM-8:30PM', 41.385248, 2.180833, 10, 'https://www.discoverwalks.com/blog/wp-content/uploads/2014/12/the-picasso-museum-big.jpg');

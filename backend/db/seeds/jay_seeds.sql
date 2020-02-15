INSERT INTO destinations(id, city, country, image_url) VALUES
(7, 'Jeju', 'South Korea', "https://i.ytimg.com/vi/m6QeLoX3pT4/maxresdefault.jpg"),
(8, 'Okinawa', 'Japan', "https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/037/919/original/pixta_23484329_s_S.jpg?2019&d=750x400"),
(9, 'Taipei', 'Taiwan', "https://lp-cms-production.imgix.net/2019-06/f15f7b57ab31c217f471c6712a2654e0-taipei-101.jpg");



INSERT INTO activities(name, price_cents, time_operation, latitude, longtitude, image_url, destination_id) VALUES
-- korea
("Fishing", 6000, "5AM-5PM", 33.2323525,126.5407906, "https://c.badatime.com/data/editor/1708/thumb-20170807125058_ulwcwqqk_600x450.jpg", 7),
("Snerkling", 4000, "10AM-6PM", 33.2383688,126.5459496, "https://lh3.googleusercontent.com/proxy/-BcB0oMqAdNWwYF-HFoHFhTtapvwoGxv6_ZonP2nu4yDdEcAZ8vHNYsdDKpuGPCfd0pSHbHBJfR__aSI3SRc1nFqUDceZKpA8TXKmo6TRVUx02t9aLNsphhN-S5aiBhU7AOum3Zn36RVvNK_zO05GA", 7),
("Parasailing", 10000, "10AM-6PM", 33.2390202,126.55439, "https://thumb-wishbeen.akamaized.net/8Z_Ok8ER1LoMYPY23ebMj6gnEZA=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880176342_%ED%8C%A8%EB%9F%AC%EC%84%B8%EC%9D%BC%EB%A7%81.jpg", 7),
("Whale Seeing", 12000, "11AM-4PM", 33.2387977,126.5985461, "https://thumb-wishbeen.akamaized.net/-d94EHHM10G9IWeKQHhYPDe546k=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880250226_%EC%9B%A8%EC%9D%BC%EC%99%80%EC%B9%AD.jpg", 7),
("Kayaking", 8000, "9AM-3PM", 33.2403173,126.6087719, "https://thumb-wishbeen.akamaized.net/6gMM2w1V6atNn5o8cel9XdSfQvQ=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1467880304166_2943614679_598a8cb0fb_z.jpg", 7),

-- japan
("Street Kart", 15000, "9AM-10PM", 26.2743169,127.7033545, "https://cms.qz.com/wp-content/uploads/2018/09/AP_16303197042534-e1538065352790.jpg?quality=75&strip=all&w=1600&h=900&crop=1", 8),
("Okinawa Aquarium", 9000, "8AM-9PM", 26.2223741,127.6999212, "https://www.japan-guide.com/g17/7109_top.jpg", 8),
("Okinawa Amusement Park", 6000, "10AM-10PM", 26.2388269,127.6768617, "https://www.japan-guide.com/thumb/XYZeXYZe6918_375.jpg", 8),
("Surfing", 5000, "10AM-10PM", 26.3119412,127.7077607, "https://www.japan-guide.com/thumb/XYZeXYZe6918_375.jpg", 8)

-- taiwan
("Tea making", 5000, "10AM-10PM", 24.9387282,121.4310806, "https://www.nickkembel.com/wp-content/uploads/2019/01/taiwan-tea-cups.jpg", 9),
("Hiking", 8000, "7AM-6PM", 25.0148966,121.5890459, "https://taiwaneverything.cc/wp-content/uploads/2016/10/P4052689-770x430.jpg", 9),
("Buddha Museum", 2500, "9AM-8PM", 22.75562,120.3051735, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fo_Guang_Shan_Buddha_Museum_%E4%BD%9B%E5%85%89%E5%B1%B1%E4%BD%9B%E9%99%80%E7%B4%80%E5%BF%B5%E9%A4%A8_.jpg/1599px-Fo_Guang_Shan_Buddha_Museum_%E4%BD%9B%E5%85%89%E5%B1%B1%E4%BD%9B%E9%99%80%E7%B4%80%E5%BF%B5%E9%A4%A8_.jpg", 9),
("Hiking", 8000, "7AM-6PM", 25.0148966,121.5890459, "https://taiwaneverything.cc/wp-content/uploads/2016/10/P4052689-770x430.jpg", 9),
("National Aquarium", 5000, "7AM-6PM", 22.756033,120.0253376, "https://i.ytimg.com/vi/uQTHDwP6d2k/maxresdefault.jpg", 9);




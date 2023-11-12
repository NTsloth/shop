const initialProducts = [
  {
    id: 1,
    image: "/img/products/f1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "This T-shirt with rolled up sleeves is crafted from a fluid fabric that is a pleasure to wear, for a fully-assumed casual style. It is adorned with a woven jacquard LGP monogram that subtly echoes the Longchamp identity. For Spring/Summer 2022, our Parisian shows us her curiosity, her enthusiasm for encounters, her openness to cultures and her passion for art and crafts. She collects, she hunts, she twists and accessorizes her looks according to her discoveries. ",
    stars: 5,
    price: 78,
  },
  {
    id: 2,
    image: "/img/products/f2.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "This T-shirt combine quirky space-themed illustrations with a stylish and relaxed look. These shirts feature playful cartoon astronauts engaging in amusing activities, all while offering the option to roll up the sleeves for a casual and trendy appearance. With a blend of humor and a touch of fashion-forward design, these T-shirts provide a fun and comfortable way to express your love for space exploration while embracing a laid-back style. Perfect for those who enjoy a mix of whimsy and fashion in their wardrobe choices.",
    stars: 5,
    price: 199,
  },
  {
    id: 3,
    image: "/img/products/f3.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Elevate your style to intergalactic heights with This T-shirt featuring rolled-up sleeves. Bursting with playful charm, these shirts showcase imaginative cartoon astronauts in whimsical scenarios, capturing the essence of space exploration with a dash of humor. The rolled-up sleeves add a touch of laid-back sophistication, making these T-shirts a perfect blend of casual comfort and interstellar fun. Whether you're a space aficionado or simply love standout fashion, these tees invite you to express your personality with a cosmic flair. Step into a world where fashion meets the cosmos, and let your wardrobe lift off with these uniquely designed astronaut-themed shirts.",
    stars: 5,
    price: 59,
  },
  {
    id: 4,
    image: "/img/products/f4.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Cartoon Astronaut T-Shirt, where interstellar charm meets casual sophistication, now with the added flair of rolled-up sleeves. These tees feature imaginative cartoon astronauts in lively and comical scenes, injecting a dose of cosmic whimsy into your wardrobe. The rolled-up sleeves not only exude relaxed style but also provide a fashion-forward edge, effortlessly blending comfort with a touch of trendiness. Perfect for space enthusiasts and those with an eye for playful fashion, these T-shirts invite you to embrace the extraordinary with a wink of humor. Elevate your everyday wear and let your style soar to new heights with these captivating astronaut-themed shirts.",
    stars: 4,
    price: 110,
  },
  {
    id: 5,
    image: "/img/products/f5.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "This T-shirt boast vibrant and whimsical illustrations of cartoon astronauts engaged in playful antics, adding a touch of levity to your wardrobe. The rolled-up sleeves not only enhance comfort but also infuse a laid-back vibe, making these shirts a perfect blend of charm and casual chic. Ideal for space enthusiasts and those seeking a quirky fashion statement, these T-shirts redefine comfort with a cosmic twist. Elevate your look and showcase your love for the cosmos with these dynamic and playful astronaut-themed shirts.",
    stars: 2,
    price: 65,
  },
  {
    id: 6,
    image: "/img/products/f6.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Explore the cosmos in comfort and style with our Cartoon Astronaut Long-Sleeved T-Shirt. These shirt feature whimsical illustrations of cartoon astronauts engaged in playful adventures, bringing a touch of interstellar charm to your wardrobe. The long sleeves add versatility, providing a perfect option for cooler days while maintaining the quirky aesthetic. Ideal for space enthusiasts and those who appreciate a fusion of coziness and creativity, these T-shirts redefine casual wear with a cosmic flair. Elevate your fashion orbit with these unique and delightful long-sleeved astronaut-themed shirts, where comfort meets imaginative design.",
    stars: 5,
    price: 87,
  },
  {
    id: 7,
    image: "/img/products/f7.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Flower-Decorated Trousers, where botanical beauty meets trendy sophistication. These trousers feature delicate and stylish floral patterns adorning the right bottom leg, adding a touch of nature-inspired elegance to your wardrobe. The carefully crafted floral decoration not only enhances the visual appeal but also brings a refreshing and feminine charm to your outfit. Perfect for those who seek a blend of fashion-forward design and a connection to nature, these trousers offer a unique twist to your everyday style. The floral embellishment on the right bottom leg adds a playful yet sophisticated element, allowing you to make a statement while staying effortlessly chic. Embrace the beauty of blooms and elevate your fashion game with these floral-decorated trousers that seamlessly balance grace with contemporary flair.",
    stars: 4,
    price: 88,
  },
  {
    id: 8,
    image: "/img/products/f8.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Long-Sleeved Cat Outline Shirt, where feline elegance meets casual comfort. This shirt features a subtle yet charming outline decoration of cats, adding a playful and stylish touch to your wardrobe. The intricate cat design, adorning the fabric with finesse, brings a sense of whimsy and personality to your outfit. Ideal for cat enthusiasts or those who appreciate unique details in their clothing, this long-sleeved shirt effortlessly combines a love for feline charm with a comfortable and versatile style. The cat outline decoration, placed thoughtfully on the shirt, creates a delightful focal point without being overpowering. Step into a world of casual sophistication and express your love for cats with this distinctive long-sleeved shirt. Perfect for any occasion, this shirt allows you to showcase your passion for feline flair while enjoying the comfort and style of a well-crafted garment.",
    stars: 5,
    price: 100,
  },
  {
    id: 9,
    image: "/img/products/n1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Classic Long-Sleeved Men's Shirt in a serene light blue hue—a timeless wardrobe staple for the modern gentleman. This shirt embodies simplicity and sophistication, offering a versatile and polished look for various occasions. Crafted with attention to detail, the shirt features a clean and minimalist design, allowing the light blue color to take center stage. The long sleeves provide a touch of formality while maintaining comfort, making it suitable for both professional and casual settings. The simplicity of this shirt makes it an ideal canvas for accessorizing or pairing with different bottoms, allowing you to customize your look effortlessly. Elevate your style with this understated yet refined long-sleeved shirt. Whether you're heading to the office or a social event, the light blue hue adds a subtle dash of sophistication to your ensemble, making it a wardrobe essential for the modern man who values both comfort and timeless elegance.",
    stars: 5,
    price: 115,
  },
  {
    id: 10,
    image: "/img/products/n2.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Men's Long-Sleeved Shirt in a sleek gray hue, adorned with a classic white checked pattern. This shirt seamlessly blends contemporary style with timeless sophistication, offering a versatile piece for your wardrobe. The subtle white checks on the gray background add a touch of refinement and interest to the shirt, making it suitable for both casual and semi-formal occasions. The long sleeves provide a polished look, while the gray color ensures versatility in pairing with various bottoms and accessories. Elevate your fashion game with this stylish yet understated shirt. Whether you're heading to the office or a social gathering, the gray and white checked pattern brings a touch of modern flair to your ensemble. Embrace the classic charm of this long-sleeved shirt and showcase your impeccable style with ease.",
    stars: 5,
    price: 120,
  },
  {
    id: 11,
    image: "/img/products/n3.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Men's Classic Long-Sleeved Shirt in timeless and crisp plain white—an essential piece for every wardrobe. This shirt embodies simplicity and sophistication, offering a clean and versatile canvas for a range of styles and occasions. The plain white design exudes a sense of understated elegance, making it a go-to choice for both formal and casual settings. The long sleeves add a touch of refinement, ensuring a polished look whether you're dressing up for the office or a special event. This versatile shirt provides endless styling possibilities, allowing you to pair it with different ties, jackets, or accessories for a personalized touch. Embrace the enduring appeal of a plain white long-sleeved shirt, a wardrobe staple that effortlessly combines comfort, versatility, and timeless style for the modern man. ",
    stars: 5,
    price: 130,
  },
  {
    id: 12,
    image: "/img/products/n4.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Men's Short-Sleeved Shirt—a versatile and comfortable addition to your wardrobe. Crafted for casual elegance, this shirt combines style and ease for a laid-back yet polished look. With its short sleeves, this shirt is perfect for warmer days or relaxed settings. Whether you're heading to a casual outing or enjoying a weekend brunch, the shirt provides a cool and breathable option without compromising on style. Available in a range of colors to suit your preferences, this short-sleeved shirt offers a modern and relaxed silhouette. Pair it with your favorite jeans or chinos for a smart-casual ensemble that effortlessly transitions from day to night. Upgrade your warm-weather wardrobe with this effortlessly stylish and comfortable short-sleeved shirt—an essential piece for the modern man who values both fashion and comfort.",
    stars: 5,
    price: 145,
  },
  {
    id: 13,
    image: "/img/products/n5.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Men's Shirt crafted from authentic denim fabric—a versatile and rugged addition to your wardrobe. This shirt, with its denim construction in a classic blue hue, seamlessly combines durability with a timeless sense of style. The denim fabric not only adds a touch of rugged charm but also provides a comfortable and casual feel. The shirt is designed to effortlessly pair with your favorite jeans, creating a cohesive and laid-back look that exudes confidence. Ideal for various occasions, from weekend outings to casual gatherings, this denim shirt in blue offers a relaxed yet put-together aesthetic. The versatility of denim allows you to transition seamlessly from day to night, making it a wardrobe essential for the modern man who values both fashion and practicality. Elevate your casual style with this denim-inspired shirt, embodying the classic coolness of blue jeans in a versatile and comfortable shirt form.",
    stars: 5,
    price: 95,
  },
  {
    id: 14,
    image: "/img/products/n6.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Classic Men's Shorts with a timeless touch of sophistication through a subtle striped pattern. These shorts are designed for both comfort and style, making them an essential addition to your warm-weather wardrobe. Crafted in a classic style, these shorts feature a refined striped pattern that adds a touch of visual interest without being overpowering. The stripes provide a timeless and versatile element, allowing you to pair them effortlessly with various shirts and footwear options.Perfect for casual outings, weekend strolls, or even a laid-back day at the beach, these shorts offer a comfortable fit and a polished look. The classic design ensures that they remain a wardrobe staple for seasons to come. Elevate your summer style with these Classic Men's Shorts, marrying comfort and sophistication with a subtle striped pattern that adds a dash of character to your casual ensemble.",
    stars: 5,
    price: 125,
  },
  {
    id: 15,
    image: "/img/products/n7.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Classic Long-Sleeved Men's Shirt in a rich brown hue—a versatile and timeless addition to your wardrobe. This shirt combines a classic style with a warm and sophisticated color, offering a refined look for various occasions. The deep brown color adds a touch of elegance, making this long-sleeved shirt suitable for both casual and semi-formal settings. The classic design ensures a polished appearance, while the long sleeves provide versatility for cooler days or more formal occasions. Crafted for comfort and style, this brown long-sleeved shirt pairs effortlessly with a range of bottoms, from jeans to dress trousers, allowing you to create a variety of looks with ease. Upgrade your wardrobe with this Classic Long-Sleeved Men's Shirt in brown—a timeless piece that seamlessly blends classic style with modern sophistication.",
    stars: 5,
    price: 67,
  },
  {
    id: 16,
    image: "/img/products/n8.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    description:
      "Introducing our Dark Charcoal Black Men's Short-Sleeved Shirt—a sleek and versatile addition to your wardrobe. This shirt boasts a deep, charcoal black hue that adds a touch of sophistication and modernity to your casual ensemble. The short sleeves offer a laid-back and breathable feel, making this shirt perfect for warm days or casual outings. The dark charcoal black color provides a sleek and refined look, ensuring that you stand out with understated style. Crafted for comfort and versatility, this short-sleeved shirt pairs effortlessly with jeans or chinos, offering a stylish and relaxed option for various occasions. Elevate your casual wardrobe with this dark charcoal black shirt, embodying the perfect balance of comfort and contemporary flair. ",
    stars: 5,
    price: 145,
  },
];
export default initialProducts;

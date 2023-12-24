import { json } from '@sveltejs/kit';
import MyImagePortrait from '$lib/assets/images/image-portrait.jpg?enhanced';
import MyImage1 from '$lib/assets/images/image1.jpg?enhanced';

const newsposts = [
	{
		id: 1,
		title: 'Floral Lösieg: Weaving Tradition and Innovation in Home Textiles',
		subtitle: 'From Vienna to Weitra: A Journey of Fabric Excellence',
		image: 'https://picsum.photos/id/10/800/500',
		categories: ['Business', 'Design', 'Lifestyle'],
		readTime: 7,
		author: 'Sophia Müller',
		published: 'December 17, 2023',
		content:
			"In the quaint town of Weitra, nestled in the picturesque Waldviertel region, a revolution in home textiles has been quietly unfolding since 2017. Floral Lösieg, a name synonymous with quality and innovation in the fabric industry, has been redefining the standards of home decor textiles since its inception in 1986.<br><br>Founded in Vienna, Floral Lösieg's journey began with a simple vision - to craft high-quality textiles that blend traditional craftsmanship with modern design. The company, entirely family-owned by the Döller and Löffler families, has stayed true to its roots while continually adapting to changing market trends.<br><br>As we step into their Weitra facility, the air is filled with a sense of creativity and precision. Rows of colorful fabrics, ranging from intricate decorative materials to sturdy upholstery fabrics, line the walls. Amidst the hum of weaving machines, designers and artisans work in harmony, bringing to life patterns that are both timeless and contemporary.<br><br>But what sets Floral Lösieg apart in the competitive world of home textiles? \"It's our commitment to quality and our passion for design,\" explains Maria Löffler, co-owner of the company. \"Each piece we create is a labor of love, from the initial sketch to the final stitch.\"<br><br>Their product range is diverse. Elegant curtains that whisper tales of luxury, vibrant upholstery fabrics that add character to any furniture, and exquisitely designed tablecloths that become the centerpiece of family gatherings - each product is a testament to the company's expertise and artistic vision.<br><br>Sustainability is also at the core of Floral Lösieg's philosophy. \"We are not just creating fabrics; we are creating a legacy for future generations,\" says Johann Döller, the co-owner. The company uses eco-friendly materials and processes, ensuring that their products are as kind to the environment as they are to the homes they grace.<br><br>The shift from Vienna to Weitra in 2017 was more than just a change in location. It marked a new chapter in Floral Lösieg's story, one where tradition meets innovation. The rural setting of Weitra, with its serene environment and rich cultural heritage, has infused new inspiration into their designs.<br><br>Floral Lösieg's impact extends beyond the realms of business and design. It's a symbol of family values, a beacon of regional pride, and a testament to the enduring appeal of quality craftsmanship. As they continue to weave their story, one thread at a time, Floral Lösieg remains not just a brand, but a legacy woven into the very fabric of home textile excellence.<br><br>In a world where trends come and go, Floral Lösieg stands as a reminder that some things - like quality, craftsmanship, and a touch of family tradition - never go out of style."
	},
	{
		id: 2,
		title: "Eco-Friendly Fabrics: Floral Lösieg's Green Revolution",
		subtitle: 'Sustainability Meets Style in Textile Innovation',
		image: 'https://picsum.photos/id/20/800/500',
		categories: ['Environment', 'Innovation', 'Lifestyle'],
		readTime: 6,
		author: 'Lukas Schneider',
		published: 'December 20, 2023',
		content:
			"In a world increasingly conscious of environmental impact, Floral Lösieg stands out as a pioneer in the sustainable textile industry. Located in the serene Weitra, amidst the verdant Waldviertel region, this family-owned company has been blending eco-conscious practices with innovative design since 2017.<br><br>Originally established in Vienna in 1986, Floral Lösieg has evolved from a traditional textile company into a beacon of environmental responsibility. The Döller and Löffler families, who have maintained ownership since its inception, have steered the company towards sustainable practices in all aspects of their operations.<br><br>The essence of Floral Lösieg's commitment to sustainability is evident in their use of eco-friendly materials. \"Our goal is to minimize our ecological footprint while maximizing aesthetic appeal,\" states Anna Döller, head of design at Floral Lösieg. From organic cotton to recycled fabrics, every material is carefully selected to ensure environmental integrity.<br><br>Innovation is at the forefront of Floral Lösieg's production process. Utilizing cutting-edge technology, the company has reduced water usage and minimized chemical dyes, setting new industry standards for eco-friendly textile production. Their facility in Weitra is not just a manufacturing hub but a testament to their dedication to green practices.<br><br>Floral Lösieg's product line is as diverse as it is sustainable. Elegant and durable, their fabrics – from plush upholstery to delicate curtains – are designed to be long-lasting, reducing the need for frequent replacements and thus lessening environmental impact.<br><br>Beyond just manufacturing, Floral Lösieg takes an active role in promoting environmental awareness. Educational initiatives and community involvement are part of their mission, as they aim to inspire a broader change towards sustainable living.<br><br>The transition from Vienna to Weitra was more than a geographic move; it represented a deeper shift towards integrating sustainability into their core philosophy. The idyllic setting of Weitra has not only provided inspiration for their designs but also reinforced their commitment to environmental stewardship.<br><br>Floral Lösieg is more than a textile company; it is a symbol of how businesses can thrive while respecting the planet. As they continue to weave sustainability into every fabric, they stand as a reminder of the beautiful synergy between nature, art, and industry.<br><br>In an era where environmental concerns are paramount, Floral Lösieg's dedication to sustainable practices and quality craftsmanship ensures that their legacy will be as enduring as the textiles they create."
	},
	{
		id: 3,
		title: 'Floral Lösieg: Pioneering Future Trends in Textile Industry',
		subtitle: 'Innovation and Tradition in Harmony',
		image: 'https://picsum.photos/id/40/800/500',
		categories: ['Future Trends', 'Business', 'Innovation'],
		readTime: 5,
		author: 'Felix Baumgartner',
		published: 'December 22, 2023',
		content:
			"Floral Lösieg, a family-owned textile company based in Weitra since 2017, is setting new trends in the textile industry. Originally established in Vienna in 1986, the company has continually evolved, blending its rich heritage with futuristic designs and technologies.<br><br>Under the ownership of the Döller and Löffler families, Floral Lösieg has been at the forefront of textile innovation. Their transition from Vienna to the scenic Weitra in the Waldviertel region marked a significant shift towards embracing cutting-edge technologies and sustainable practices in textile production.<br><br>One of the key innovations at Floral Lösieg is the integration of smart textile technologies. These fabrics are not just about aesthetics; they incorporate functionalities such as temperature regulation, energy harvesting, and even health monitoring. \"Our goal is to bring the textiles of the future into today's homes,\" says Stefan Löffler, the head of research and development at Floral Lösieg.<br><br>Another area where Floral Lösieg excels is in their sustainable manufacturing processes. They employ environmentally friendly practices, such as using organic materials and reducing water consumption, making them a leader in eco-friendly textile production. \"We're committed to reducing our environmental footprint every step of the way,\" emphasizes Martina Döller, head of sustainability.<br><br>The company's product range, including decorative fabrics, curtains, upholstery fabrics, and tablecloths, reflects a fusion of traditional craftsmanship and modern design. Each collection showcases a commitment to quality and a foresight into the future of home decor.<br><br>Floral Lösieg is not just about creating fabrics; it's about crafting experiences and emotions. Their designs often incorporate elements of biophilic design, connecting people with nature through patterns and textures that evoke the natural world.<br><br>The company's ethos extends beyond just textile manufacturing. It is deeply involved in community projects and educational programs, aiming to foster a greater appreciation for the textile arts and sustainable practices among the public.<br><br>As they look to the future, Floral Lösieg continues to redefine the boundaries of textile design and production. With a keen eye on emerging trends and a steadfast commitment to sustainability and innovation, they are weaving a future where tradition and technology coexist in beautiful harmony.<br><br>Floral Lösieg's journey from its roots in Vienna to its current home in Weitra symbolizes a journey of growth and innovation. As they continue to chart new paths in the textile industry, they remain a beacon of inspiration and a testament to the enduring legacy of quality and creativity in the world of textiles."
	},
	{
		id: 4,
		title: "Celebrating Craftsmanship: Floral Lösieg's Dedication to Artisanal Excellence",
		subtitle: 'A Legacy of Quality in Every Thread',
		image: 'https://picsum.photos/id/50/800/500',
		categories: ['Craftsmanship', 'Business', 'Lifestyle'],
		readTime: 6,
		author: 'Nina Weber',
		published: 'December 23, 2023',
		content:
			"In the heart of the Waldviertel region, the town of Weitra is home to a remarkable story of craftsmanship and tradition. Floral Lösieg, a family-owned textile company since 1986, has been an epitome of artisanal excellence, with its roots stretching back to its founding days in Vienna.<br><br>The company, under the stewardship of the Döller and Löffler families, has always placed a high value on the art of textile making. The move from Vienna to Weitra in 2017 was not just a change in geography but a reaffirmation of their commitment to traditional craftsmanship in a modern context.<br><br>At Floral Lösieg, every fabric tells a story of meticulous attention to detail and a deep respect for the craft. From luxurious curtains to robust upholstery fabrics, each product is a result of generations of knowledge combined with contemporary design sensibilities. 'Our textiles are more than just materials; they are a legacy of our family's passion for quality,' says Franz Löffler, co-owner of Floral Lösieg.<br><br>The company's commitment to craftsmanship is evident in its choice of materials, design processes, and production techniques. They use only the finest threads and dyes, ensuring that each product is not only beautiful but durable and sustainable.<br><br>Floral Lösieg is renowned for its unique patterns and textures, which are developed in-house by a team of dedicated designers and artisans. The designs are a blend of classical motifs and modern trends, catering to a diverse clientele who appreciate the value of handcrafted textiles.<br><br>The company's dedication to craftsmanship extends beyond its products. Floral Lösieg actively participates in community initiatives, promoting the importance of artisanal skills and supporting local craftspeople. 'We believe in nurturing a community that values and preserves the art of textile making,' explains Maria Döller, head of community relations.<br><br>The journey from Vienna to Weitra has been transformative for Floral Lösieg. The serene environment of the Waldviertel region has provided fresh inspiration, allowing the company to delve deeper into the realm of artisanal textile creation while staying true to its roots.<br><br>As Floral Lösieg continues to thrive, it stands as a testament to the enduring appeal of craftsmanship in the modern world. Their products are not just textiles; they are a celebration of the human touch, a tribute to the artisans who create them, and a symbol of enduring quality in an ever-changing world."
	},
	{
		id: 5,
		title: 'Floral Lösieg: A Story of Resilience and Growth in the Textile Industry',
		subtitle: 'Adapting to Change, Preserving Tradition',
		image: 'https://picsum.photos/id/60/800/500',
		categories: ['Business Growth', 'History', 'Entrepreneurship'],
		readTime: 5,
		author: 'Maximilian Schmidt',
		published: 'December 24, 2023',
		content:
			"In the picturesque landscape of the Waldviertel region, lies the town of Weitra, where Floral Lösieg, a family-owned textile company, has been writing a success story since its relocation in 2017. Originally established in 1986 in Vienna, the company, owned by the Döller and Löffler families, has demonstrated remarkable resilience and growth in the dynamic textile industry.<br><br>Floral Lösieg's journey is a compelling tale of adapting to change while preserving tradition. The move from the bustling city of Vienna to the serene Weitra was a strategic step, reflecting the company's commitment to growth and innovation. 'The relocation allowed us to expand our facilities and explore new markets,' says Josef Löffler, a co-owner of Floral Lösieg.<br><br>Despite the challenges of the ever-evolving market, Floral Lösieg has maintained its reputation for high-quality home textiles. Their products, ranging from decorative fabrics to upholstery fabrics and tablecloths, are known for their durability, aesthetic appeal, and craftsmanship. 'Our success lies in our ability to balance traditional techniques with modern designs,' remarks Helga Döller, head of product development.<br><br>The company's growth strategy has been multifaceted, focusing on expanding their product range, investing in sustainable production methods, and exploring international markets. 'We believe in sustainable growth, which respects our heritage and the environment,' explains Thomas Löffler, head of business development.<br><br>One of Floral Lösieg's key strengths has been its ability to foster strong relationships with its clients and suppliers. Their customer-centric approach has not only earned them loyalty but has also opened doors to collaborative opportunities.<br><br>The entrepreneurial spirit of the Döller and Löffler families has been a guiding force for Floral Lösieg. Their vision and leadership have steered the company through various phases of growth and challenges, positioning it as a leader in the textile industry.<br><br>As Floral Lösieg continues to evolve, it remains anchored in its core values of quality, innovation, and sustainability. The company's story is not just about textiles; it's about the power of resilience, the importance of adapting to change, and the enduring legacy of family entrepreneurship in a modern world.<br><br>Looking towards the future, Floral Lösieg is poised for continued success, building on its rich history and the strong foundation laid in both Vienna and Weitra. The company stands as a beacon of resilience, growth, and innovation in the textile industry, inspiring others with its journey."
	},
	{
		id: 6,
		title: "Embracing the Future: Floral Lösieg's Vision for Sustainable Textiles",
		subtitle: 'Innovating for a Greener Tomorrow',
		image: 'https://picsum.photos/id/70/800/500',
		categories: ['Sustainability', 'Innovation', 'Design'],
		readTime: 6,
		author: 'Klara Hoffmann',
		published: 'December 25, 2023',
		content:
			"In the verdant heart of the Waldviertel region, the picturesque town of Weitra is home to Floral Lösieg, a family-owned textile company with a vision for the future. Since its relocation from Vienna in 2017, the company, managed by the Döller and Löffler families, has been a trailblazer in sustainable textile production.<br><br>Founded in 1986, Floral Lösieg has a rich history of combining traditional craftsmanship with innovative design. Their commitment to sustainability is not just a trend but a fundamental aspect of their business model. 'Sustainability is at the core of everything we do,' says Lena Döller, head of environmental initiatives at Floral Lösieg.<br><br>The company's approach to sustainable textile production is multifaceted. They use eco-friendly materials, employ energy-efficient processes, and focus on reducing waste. Their product range, including decorative fabrics, curtains, and upholstery fabrics, is not only aesthetically pleasing but also environmentally responsible.<br><br>Innovation is key to Floral Lösieg's sustainability efforts. They are constantly exploring new materials and techniques that minimize environmental impact. 'Our goal is to lead the industry towards a more sustainable future,' explains Martin Löffler, co-owner and head of R&D.<br><br>Floral Lösieg's dedication to sustainability extends beyond their products. They actively participate in community outreach programs, educating the public about the importance of eco-friendly practices and how they can be incorporated into daily life.<br><br>The move to Weitra has provided an ideal setting for Floral Lösieg's sustainability mission. Surrounded by nature, the company is continually inspired to find harmony between their designs and the environment. 'Our surroundings remind us daily of the importance of preserving our planet,' says Johanna Löffler, head of design.<br><br>As Floral Lösieg looks to the future, they are not just creating textiles; they are weaving a legacy of environmental stewardship and innovative design. Their commitment to sustainability is a shining example for the industry and a hopeful message for a greener tomorrow.<br><br>Floral Lösieg's story is a testament to the power of vision and the importance of embracing change. As they continue to innovate and lead in sustainable textile production, they remain a symbol of hope and inspiration, showing the world that it is possible to create beautiful, high-quality textiles without compromising the health of our planet."
	},
	{
		id: 7,
		title: 'Floral Lösieg: Bridging Cultures Through Textile Design',
		subtitle: 'A Tapestry of Global Inspirations',
		image: 'https://picsum.photos/id/80/800/500',
		categories: ['Culture', 'Design', 'Global Trends'],
		readTime: 7,
		author: 'Emma Bauer',
		published: 'December 26, 2023',
		content:
			"In the scenic town of Weitra, situated in the lush Waldviertel region, Floral Lösieg, a family-owned textile company since 1986, is weaving a unique story. After moving from Vienna in 2017, the company, under the leadership of the Döller and Löffler families, has become a cultural bridge through its textile designs.<br><br>Floral Lösieg's collections are a celebration of global cultures. Their fabrics are more than just materials; they are a canvas where different cultural narratives come to life. 'We draw inspiration from various cultures to create designs that speak a universal language of beauty,' says Franziska Löffler, head of design at Floral Lösieg.<br><br>The company's approach to design is deeply rooted in a respect for global traditions and art forms. From intricate patterns inspired by Asian artistry to bold motifs reflecting African heritage, each collection is a testament to the company's commitment to cultural diversity and inclusion.<br><br>Floral Lösieg's products – ranging from curtains to upholstery fabrics – are not only known for their aesthetic appeal but also for their ability to tell stories. 'Each fabric has its own story, a reflection of the rich tapestry of cultures that inspire us,' explains Michael Döller, co-owner of Floral Lösieg.<br><br>The company's commitment to cultural exchange extends beyond their products. They actively collaborate with international designers and artisans, fostering a global network of creativity and innovation. 'Our collaborations are an opportunity to learn, share, and grow together,' says Johanna Löffler, head of international relations.<br><br>The move from Vienna to Weitra has provided Floral Lösieg with a tranquil environment that fuels creativity. Surrounded by nature and the rich heritage of the Waldviertel region, the company finds constant inspiration for designs that resonate with people across the globe.<br><br>Floral Lösieg is more than a textile company; it is a platform for cultural dialogue. Their designs do not just adorn homes; they bring together diverse cultural expressions under one roof. As they continue to explore and celebrate the richness of different cultures, Floral Lösieg remains a beacon of artistic and cultural fusion in the textile industry.<br><br>In a world where diversity and inclusion are more important than ever, Floral Lösieg stands as an example of how businesses can embrace and celebrate cultural diversity through their craft. Their journey from Vienna to Weitra is not just a story of geographical change but a narrative of how embracing different cultures can lead to unparalleled creativity and innovation in design."
	}
];

export const GETNewsPosts = async () => {
	return json(newsposts);
};

export const GETNewsPostById = async (id: number) => {
	const newspost = newsposts.find((n) => n.id === id);
	return json(newspost);
};

export const GETLatestNewsPosts = async () => {
	return json([newsposts[0], newsposts[1], newsposts[2]]);
};

export const NewsGallery = [
	{ url: MyImagePortrait, alt: 'Some description' },
	{ url: MyImage1, alt: 'Some description' },
	{ url: MyImagePortrait, alt: 'Some description' },
	{ url: MyImage1, alt: 'Some description' },
	{ url: MyImagePortrait, alt: 'Some description' }
];

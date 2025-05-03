export class AboutUs {
    constructor (construct) {
        this.construct = construct;
    }

    load () {
        // Title
        this.construct.innerHTML = `
            <h1>About us</h1>
            <div class="img">
                <img src="https://placehold.co/1280" alt="">
            </div>
        `;

        // Beginning
        this.section(
            ['Not just a restaurant — an experience.', 'quote'],
            [
                `We at Cousine firmly believe that dining is far more than the mere sustenance
                of the body. Dining is a thoughtfully constructed experience meant to stimulate
                each and every sense. We strive to craft an experience that delights and inspires
                from the first look at your plate to the final drink of wine. We consider
                everything that goes into a great meal—surprising flavors, relaxing warmth, and the
                energy of our staff that fuels each detail. Every dish that emerges from our kitchen
                is a testament to our dedicated passion for the art of cooking. It's not about
                making food; it's about creating an experience that honors the heart and soul of
                food.`,
                'p'
            ]
        )

        // Our ingredients
        this.article(
            'Our ingredients',
            `To do this, we use only the best ingredients we can find. We choose these
            ingredients with utmost care, considering their freshness, seasonality, and
            sustainability. For instance, at the height of summer, we use tomatoes, herbs, and vegetables
            picked at their peak. This way, each bite is full of flavor and representative of the
            season. We have chosen our ingredients carefully to be as green and local as possible
            and are the most responsible for producing many of our excellent dishes. To us, a
            good ingredient makes all the difference in creating memorable meals. Everything we
            do begins with quality.`,
            'https://placehold.co/600x400'
        );

        // Our staff
        this.article(
            'Our staff',
            `Our chefs are highly skilled with a passion for innovation. Years of expertise
            worldwide, along with creativity and accuracy, bring magic to every plate. Whatever the
            dish may be, a seafood tartare with delicate subtlety or a roasted meat plate with
            rich satisfaction, every one of them is thoroughly put together. They play with
            texture, with taste, with aroma, and with presentation to ensure each bite is engaging.
            They want every dish to be memorable not only in flavor but also visually. The hand
            and heart of our chefs take simple ingredients and renovate them into
            masterpieces.`,
            'https://placehold.co/600x400'
        )

        // All for you
        this.article(
            'All for you',
            `Cousine is open to all kinds of visitors. Whether you have come for a
            peaceful, quiet dinner, a special occasion, or simply to feel something different, we
            personalize your visit. We hear your likes and dietary requirements, and then recommend
            dishes and wines to match your palate. Our staff goes the extra mile to ensure each
            aspect lives up to your expectations. We want you to feel welcomed, listened to, and
            fulfilled after during your visit with us.
            `,
            'https://placehold.co/600x400'
        );

        // End
        this.section(
            [
                `Since we view our guests as people and not merely customers, we strive to make
                a personal connection. You become part of the story behind every meal. Your
                tastes, your celebration times, and your wanting something different all go into what
                we do. We are committed to making every visit remarkable, so you not only leave
                satisfied but inspired. Eating at Cousine is an experience. It is an skillfully mixed
                combination of flavor, atmosphere, and pure ardor, prepared especially for you and
                specifically made to your specifications.`,
                'p'
            ],
            ['We humbly welcome you here at Cousine, and we’ll strive to make your dish an experience.', 'quote']
        );
    }

    // [content, type]
    // type: quote or p
    section (...items) {
        items.forEach(item => {
            let tag = item[1] == 'quote'
                ? document.createElement('blockquote')
                : document.createElement('p')
            tag.textContent = item[0];

            this.construct.appendChild(tag);
        });
    }

    // alt is optional
    article (title, p, imgSrc, alt) {
        let code = `
            <article>
                <div class="left">
                    <h2>${title}</h2>
                    <p>${p}</p>
                </div>
                <figure><img src="${imgSrc}" alt="${alt ?? ''}"></figure>
            </article>
        `;

        this.construct.innerHTML += code;
    }
}

{/* <h1>About us</h1>

<section>
    <blockquote>Not just a restaurant — an experience.</blockquote>
    <p>We at Cousine firmly believe that dining is far more than the mere sustenance of the body. Dining is a thoughtfully constructed experience meant to stimulate each and every sense. We strive to craft an experience that delights and inspires from the first look at your plate to the final drink of wine. We consider everything that goes into a great meal—surprising flavors, relaxing warmth, and the energy of our staff that fuels each detail. Every dish that emerges from our kitchen is a testament to our dedicated passion for the art of cooking. It's not about making food; it's about creating an experience that honors the heart and soul of food.</p>
</section>

<article>
    <div class="left">
        <h2>Our ingredients</h2>
        <p>To do this, we use only the best ingredients we can find. We choose these ingredients with utmost care, considering their freshness, seasonality, and sustainability. For instance, at the height of summer, we use tomatoes, herbs, and vegetables picked at their peak. This way, each bite is full of flavor and representative of the season. We have chosen our ingredients carefully to be as green and local as possible and are the most responsible for producing many of our excellent dishes. To us, a good ingredient makes all the difference in creating memorable meals. Everything we do begins with quality.</p>
    </div>
    <figure><img src="https://placehold.co/600x400" alt=""></figure>
</article>

<article>
    <div class="left">
        <h2>Our staff</h2>
        <p>Our chefs are highly skilled with a passion for innovation. Years of expertise worldwide, along with creativity and accuracy, bring magic to every plate. Whatever the dish may be, a seafood tartare with delicate subtlety or a roasted meat plate with rich satisfaction, every one of them is thoroughly put together. They play with texture, with taste, with aroma, and with presentation to ensure each bite is engaging. They want every dish to be memorable not only in flavor but also visually. The hand and heart of our chefs take simple ingredients and renovate them into masterpieces.</p>
    </div>
    <figure><img src="https://placehold.co/600x400" alt=""></figure>
</article>

<article>
    <div class="left">
        <h2>All for you</h2>
        <p>Cousine is open to all kinds of visitors. Whether you have come for a peaceful, quiet dinner, a special occasion, or simply to feel something different, we personalize your visit. We hear your likes and dietary requirements, and then recommend dishes and wines to match your palate. Our staff goes the extra mile to ensure each aspect lives up to your expectations. We want you to feel welcomed, listened to, and fulfilled after during your visit with us.</p>
    </div>
    <figure><img src="https://placehold.co/600x400" alt=""></figure>
</article>

<section>
    <p>Since we view our guests as people and not merely customers, we strive to make a personal connection. You become part of the story behind every meal. Your tastes, your celebration times, and your wanting something different all go into what we do. We are committed to making every visit remarkable, so you not only leave satisfied but inspired. Eating at Cousine is an experience. It is an skillfully mixed combination of flavor, atmosphere, and pure ardor, prepared especially for you and specifically made to your specifications.</p>
    <blockquote>We humbly welcome you here at Cousine, and we’ll strive to make your dish an experience.</blockquote>
</section> */}
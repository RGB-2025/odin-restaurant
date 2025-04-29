export class Home {
    constructor(construct) {
        this.construct = construct;
        this.moduleName = 'home';
    }

    // Main function
    load() {
        this.hero(
            'This restaurant is fancy',
            `For this restaurant is more than just a place to eat.
            In fact, it's <em>even more</em> than that.`
        );

        this.section(
            'highlights',
            'Why should you choose us?',
            [
                {
                    src: 'https://placehold.co/600x400',
                    alt: '',
                    title: 'Our food is handcrafted',
                    description: 'To provide you the ultimate experience.'
                },
                {
                    src: 'https://placehold.co/600x400',
                    alt: '',
                    title: 'We select only high-class ingredients',
                    description: 'As we treat you as the highest in our restaurant.'
                },
                {
                    src: 'https://placehold.co/600x400',
                    alt: '',
                    title: 'You can personalize your food',
                    description: 'Created by top chefs around the world.'
                }
            ]
        );

        this.section(
            'testimonials',
            "Don't hear it from us, hear it from them.",
            [
                {
                    src: 'https://placehold.co/500x500',
                    alt: '',
                    title: 'Maria Gonzales',
                    description: 'This was one of the best dishes that I have ever tasted.'
                },
                {
                    src: 'https://placehold.co/500x500',
                    alt: '',
                    title: 'John Doe',
                    description: 'This place is the best for people who want something truly special. Highly recommend!'
                },
                {
                    src: 'https://placehold.co/500x500',
                    alt: '',
                    title: 'Alice Petel',
                    description: 'The chefs truly did their best to create something thats truly for me. Thank you so much!'
                }
            ]
        );
    }


    // Page loading
    hero(title, description) {
        let code = `
            <section id="hero">
                <h1>${title}</h1>
                <p>${description}</p>
                <button>Book a table now</button>
            </section>
        `;
        this.construct.innerHTML += code;
    }

    section(id, title, items) {
        let section = document.createElement('section');
        section.id = id;
        section.innerHTML = `<h2>${title}</h2>`;

        let ul = document.createElement('ul');
        ul.role = 'list';

        items.forEach(item => {
            let code = `
                <li>
                    <figure>
                        <img src="${item.src}" alt="${item.alt}">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                    </figure>
                </li>
            `;
            ul.innerHTML += code;
        });

        section.appendChild(ul);
        this.construct.appendChild(section);
    }
}
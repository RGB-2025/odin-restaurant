/*
        <h1>Our menu</h1>

        <section id="appetizers" style="--bg-img: url('https://picsum.photos/600/400');">
            <h1>Appetizers</h1>
            <ul role="list">
                <li>
                    <h2>Truffle Arancini</h2>
                    <p>Crispy risotto balls with black truffle and parmesan</p>
                </li>
                <li>
                    <h2>Burrata Caprese</h2>
                    <p>Creamy burrata with heirloom tomatoes and basil oil</p>
                </li>
                <li>
                    <h2>Seared Scallops</h2>
                    <p>Served with cauliflower purée and lemon foam</p>
                </li>
            </ul>
        </section>

        <section id="mains" style="--bg-img: url('https://picsum.photos/600/400');">
            <h1>Mains</h1>
            <ul role="list">
                <li>
                    <h2>Sous-Vide Duck Breast</h2>
                    <p>With cherry gastrique and potato fondant</p>
                </li>
                <li>
                    <h2>Miso-Glazed Black Cod</h2>
                    <p>Over a bed of soba noodles and bok choy</p>
                </li>
                <li>
                    <h2>Wild Mushroom Risotto</h2>
                    <p>Arborio rice, porcini, and white truffle oil</p>
                </li>
            </ul>
        </section>

        <section id="custom" style="--bg-img: url('https://picsum.photos/600/400');">
            <h1>Customization Option</h1>
            <ul role="list">
                <li>
                    <h2>Build Your Own Dish</h2>
                    <p>Select a base (pasta, rice, greens) and pair it with a protein and sauce, crafted by our chefs for you.</p>
                </li>
            </ul>
        </section>

        <section id="desserts" style="--bg-img: url('https://picsum.photos/600/400');">
            <h1>Desserts</h1>
            <ul role="list">
                <li>
                    <h2>Molten Chocolate Cake</h2>
                    <p>With vanilla bean gelato</p>
                </li>
                <li>
                    <h2>Lavender Crème Brûlée</h2>
                    <p>Delicate and floral twist on a classic</p>
                </li>
                <li>
                    <h2>Assorted Macaron Plate</h2>
                    <p>Flavors change weekly</p>
                </li>
            </ul>
        </section>

        <section id="drinks" style="--bg-img: url('https://picsum.photos/600/400');">
            <h1>Drinks</h1>
            <ul role="list">
                <li>
                    <h2>Sommelier-Selected Wine Pairings</h2>
                    <p>Expertly chosen to complement each dish</p>
                </li>
                <li>
                    <h2>Handcrafted Cocktails</h2>
                    <p>Signature blends inspired by global flavors</p>
                </li>
                <li>
                    <h2>Imported Teas & Espresso</h2>
                    <p>Finest brews from around the world</p>
                </li>
            </ul>
        </section>
*/

export class Menu {
    constructor (construct) {
        this.construct = construct;
    }

    load() {
        let heading = '<h1>Our Menu</h1>';
        this.construct.innerHTML = heading;

        this.section('https://picsum.photos/600/400', 'Appetizers', [
            { title: 'Truffle Arancini', desc: 'Crispy risotto balls with black truffle and parmesan' },
            { title: 'Burrata Caprese', desc: 'Creamy burrata with heirloom tomatoes and basil oil' },
            { title: 'Seared Scallops', desc: 'Served with cauliflower purée and lemon foam' }
        ]);

        this.section('https://picsum.photos/600/400', 'Mains', [
            { title: 'Sous-Vide Duck Breast', desc: 'With cherry gastrique and potato fondant' },
            { title: 'Miso-Glazed Black Cod', desc: 'Over a bed of soba noodles and bok choy' },
            { title: 'Wild Mushroom Risotto', desc: 'Arborio rice, porcini, and white truffle oil' }
        ]);

        this.section('https://picsum.photos/600/400', 'Customization Option', [
            { title: 'Build Your Own Dish', desc: 'Select a base (pasta, rice, greens) and pair it with a protein and sauce, crafted by our chefs for you.' }
        ]);

        this.section('https://picsum.photos/600/400', 'Desserts', [
            { title: 'Molten Chocolate Cake', desc: 'With vanilla bean gelato' },
            { title: 'Lavender Crème Brûlée', desc: 'Delicate and floral twist on a classic' },
            { title: 'Assorted Macaron Plate', desc: 'Flavors change weekly' }
        ]);

        this.section('https://picsum.photos/600/400', 'Drinks', [
            { title: 'Sommelier-Selected Wine Pairings', desc: 'Expertly chosen to complement each dish' },
            { title: 'Handcrafted Cocktails', desc: 'Signature blends inspired by global flavors' },
            { title: 'Imported Teas & Espresso', desc: 'Finest brews from around the world' }
        ]);
    }
    
    // items:
    /*
        {
            title: "",
            desc: ""
        }
    */
    section (image, title, items) {
        let sectionTag = document.createElement('section');
        sectionTag.style = `--bg-img: url(${image})`;
        sectionTag.innerHTML = `<h1>${title}</h1>`;

        let ul = document.createElement('ul');
        ul.setAttribute('role', 'list');
        
        items.forEach(item => {
            let code = `
                <li>
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                </li>
            `;

            ul.innerHTML += code;
        });

        sectionTag.appendChild(ul);
        this.construct.appendChild(sectionTag);
    }
}
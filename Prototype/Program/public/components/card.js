class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const card =
            `
      <!DOCTYPE html>
<html lang="en">
<body>
<div class="col-md-4">
<div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
        <div class="col-md-4">
            <img src="./img/icons/starwars.bmp" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Star Wars The Old Republic</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural
                    lead-in to
                    additional content. This content is a little bit longer.</p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                <a href="https://www.swtor.com/game/download" class="stretched-link"></a>
            </div>
        </div>
    </div>
</div>

</div>
</body>
</html>
    `;
        this.innerHTML = card;
    }
}

customElements.define('card-component', Card);

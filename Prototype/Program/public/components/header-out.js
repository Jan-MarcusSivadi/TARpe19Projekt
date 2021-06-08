class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const header =
            `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Ubuntu:wght@400;700&display=swap"
        rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bs/bootstrap.min.css">
    <link rel="stylesheet" href="css/bs/bootstrap-grid.min.css">
    <!-- Style CSS -->
    <link rel="stylesheet" href="css/style.css">
    <title>Home</title>
</head>
<body>
    <div class="container-fluid">
    <section id="title">
        <!--NAVIGATION-->
        <nav class="nav navbar navbar-expand-lg navbar-dark">
            <a href="/home" class="navbar-brand">Uncommon Applications</a>
            <button class="button navbar-toggler" type="button" data-toggle="collapse" data-target="#navContent"
                aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="/home" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/m-apps" class="nav-link">Mobile applications</a>
                    </li>
                    <li class="nav-item">
                        <a href="/c-apps" class="nav-link">Computer applications</a>
                    </li>
                    <li class="nav-item">
                        <a href="/rating" class="nav-link">Leave a Rating</a>
                    </li>
                    <li class="nav-item">
                        <a href="/contact" class="nav-link">Contact us</a>
                    </li>
                    <li class="nav-item">
                        <a id="signin-btn" type="submit" class="nav-link btn btn-outline-success" onclick="post('/signin')">Sign In</a>
                    </li>
                    <li class="nav-item">
                        <a id="signup-btn" type="submit" class="nav-link btn btn-primary" onclick="post('/signup')">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="row">
            <div class="col-md-7">
                <h4 id="title-description">Lists of uncommon Apps and Programs</h4>
            </div>
        </div>

    </section>
    </div>

    
</body>
</html>
    `;
        this.innerHTML = header;
    }
}

customElements.define('header-component', Header);

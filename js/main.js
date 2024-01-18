const getBodyContent = () => {
	const content = `
        <div id="wrapper">
            <header>
                <h1 class="sr-only">Stats preview card component</h1>
            </header>

            <main>
                <div class="container">
                    <article class="card">
                        <div class="card__image">
                            <div class="card__image-inner">
                                <img src="./images/meeting.jpg" alt="" />
                            </div>
                        </div>
                        <div class="card__content">
                            <h2 class="card__title">
                                Get <mark>insights</mark> that help your business
                                grow.
                            </h2>
                            <p class="card__desc">
                                Discover the benefits of data analytics and make
                                better decisions regarding revenue, customer
                                experience, and overall efficiency.
                            </p>
                            <ul class="card__stats-list">
                                <li class="card__stats-list-item">
                                    <span class="num">10K+</span>
                                    <span class="label">Companies</span>
                                </li>
                                <li class="card__stats-list-item">
                                    <span class="num">314</span>
                                    <span class="label">Templates</span>
                                </li>
                                <li class="card__stats-list-item">
                                    <span class="num">12M+</span>
                                    <span class="label">Queries</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </main>

            <footer>
                <div class="container">
                    <p>
                        Challenge by
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >Frontend Mentor</a
                        >. Coded by
                        <a
                            href="https://github.com/al3xback"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >al3xback</a
                        >.
                    </p>
                </div>
            </footer>
        </div>
    `;

	return content;
};

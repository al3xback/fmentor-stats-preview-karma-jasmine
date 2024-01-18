describe('DOM', () => {
	beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	afterEach(function () {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	it('should have a string type of heading one content element', () => {
		const headingOneEl = document.querySelector('h1');
		const headingOneContent = headingOneEl.textContent;

		expect(headingOneContent).toBeInstanceOf(String);
	});

	it("should have a mark element that contains 'insights' word", () => {
		const cardTitleEl = document.querySelector('.card__title');
		const cardMark = cardTitleEl.querySelector('mark').textContent;

		expect(cardMark).toContain('insights');
	});

	it('should have two children inside of the article element', () => {
		const articleEl = document.querySelector('article');
		const articleChildrenEls = articleEl.children;

		expect(articleChildrenEls).toHaveSize(2);
	});

	it('should have an empty alt attribute value of card image element', () => {
		const cardImgEl = document.querySelector('.card__image img');
		const cardImgAlt = cardImgEl.getAttribute('alt');

		expect(cardImgAlt).toBe('');
	});
});

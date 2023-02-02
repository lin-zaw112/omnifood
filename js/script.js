// Html Selector
const header = document.querySelector('header');
// Mobile Navigation

document.querySelector('.btn-mobile-nav').addEventListener('click', () => {
    header.classList.toggle('nav-open');
});
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        if (href !== '#' && href.startsWith('#')) {
            const selectEl = document.querySelector(href);
            selectEl.scrollIntoView({
                behavior: 'smooth',
            });
            header.classList.remove('nav-open');
        }
    });
});
// Sticky Navigation
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
    (entries) => {
        const ent = entries.at(0);
        ent.isIntersecting
            ? header.classList.remove('sticky')
            : header.classList.add('sticky');
        // if (ent.isIntersecting === false) {
        //     header.classList.add('sticky');
        // } else if (ent.isIntersecting === true) {
        //     header.classList.remove('sticky');
        // }
    },
    {
        // In the View Point
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    }
);
obs.observe(sectionHeroEl);
// Flex Gap Checker
function checkFlexGap() {
    var flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    return !isSupported
        ? document.body.classList.add('no-flexbox-gap')
        : isSupported;
}
checkFlexGap();

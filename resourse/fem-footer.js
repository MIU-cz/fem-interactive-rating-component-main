/* <link rel="stylesheet" href="fem-footer-style.css"></link> */

let footer =
    `
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by MIU :: <a href="https://sites.google.com/view/zivotopis-miu/kdo-jsem" target="_blank">Zivotopis</a>
    :: <a href="https://mehal.my.canva.site" target="_blank">business card</a>
`;

function addFooter() {
    let footerBlock = document.getElementsByTagName('footer')[0];

    footerBlock.classList.add('attribution');
    footerBlock.innerHTML = footer;
}

addFooter();
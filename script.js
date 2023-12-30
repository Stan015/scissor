//burger menu toggle 
function burgerToggle() {
    const burger = document.querySelector('.burger');
    const burgerDash = document.querySelectorAll('.burger_dash');
    const nav = document.querySelector('.mobile_nav');

    burger.addEventListener('click', (e) => {
        e.stopPropagation();

        burgerDash[0].classList.toggle('burger_first_dash');
        burgerDash[1].classList.toggle('burger_second_dash');
        burgerDash[2].classList.toggle('burger_third_dash');

        nav.classList.toggle('show_mobile_nav');
    });

    document.documentElement.addEventListener('click', () => {
        if (nav.classList.contains('show_mobile_nav')) {
            nav.classList.remove('show_mobile_nav');
        };

        if (burgerDash[0].classList.contains('burger_first_dash')) {
            burgerDash[0].classList.remove('burger_first_dash');
        };

        if (burgerDash[1].classList.contains('burger_second_dash')) {
            burgerDash[1].classList.remove('burger_second_dash');
        };

        if (burgerDash[2].classList.contains('burger_third_dash')) {
            burgerDash[2].classList.remove('burger_third_dash');
        };
    });
};

burgerToggle();
//

//toggle faqs 
function toggleFaqDetails() {
    const faqs = document.querySelectorAll('.faq_list_item');

    faqs.forEach(faqItem => {
        const faqAnswer = faqItem.querySelector('.faq_list_item p');
        const verticalLine = faqItem.querySelector('.vertical_line');

        faqItem.addEventListener('click', (e) => {
            // Stop event propagation to prevent the document click event from triggering
            e.stopPropagation();

            // Close all other FAQ details and reset rotation
            faqs.forEach(otherFaqItem => {
                if (otherFaqItem !== faqItem) {
                    const otherFaqAnswer = otherFaqItem.querySelector('.faq_list_item p');
                    const otherVerticalLine = otherFaqItem.querySelector('.vertical_line');

                    otherFaqAnswer.classList.remove('faq_details');
                    otherVerticalLine.style.transform = 'rotate(0deg)';
                    otherVerticalLine.style.animation = 'rotateHorizontal 400ms ease';
                }
            });

            // Toggle details and rotation for the clicked FAQ
            faqAnswer.classList.toggle('faq_details');
            faqAnswer.style.animation = 'faqDetailsAnimation 400ms ease'
            verticalLine.style.transform = (verticalLine.style.transform === 'rotate(90deg)') ? 'rotate(0deg)' : 'rotate(90deg)';
            verticalLine.style.animation = 'none';
            void verticalLine.offsetWidth; //trigger a reflow
            verticalLine.style.animation = 'rotateVertical 400ms ease';
        });
    });

    document.documentElement.addEventListener('click', (e) => {
        // Close all FAQ details and reset rotation on document click
        const clickedElement = e.target;

        if (!clickedElement.classList.contains('faq_list_item')) {
            faqs.forEach(faqItem => {
                const faqAnswer = faqItem.querySelector('.faq_list_item p');
                const verticalLine = faqItem.querySelector('.vertical_line');

                faqAnswer.classList.remove('faq_details');
                verticalLine.style.transform = 'rotate(0deg)';
                verticalLine.style.animation = 'rotateHorizontal 400ms ease';
            });
        }
    });
};

toggleFaqDetails();
//

//animations on page scroll
function animationOnScroll() {
    //from bottom to top
    const observer = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('bottom_to_top');
            } else {
                entry.target.classList.remove('bottom_to_top');
            }
        })
    });

    observer.observe(document.querySelector('.first_section h2'));
    observer.observe(document.querySelector('.first_section div'));
    observer.observe(document.querySelector('.choose_scissor'));
    observer.observe(document.querySelectorAll('.list_item')[2]);
    observer.observe(document.querySelectorAll('.list_item')[3]);
    observer.observe(document.querySelector('.professional_price'));
    observer.observe(document.querySelector('.socials_div'));
    observer.observe(document.querySelectorAll('.ftr_list_div div')[5]);
    observer.observe(document.querySelectorAll('.ftr_list_div div')[6]);


    //from left to right
    const observerTwo = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('left_to_right');
            } else {
                entry.target.classList.remove('left_to_right');
            }
        })
    });

    observerTwo.observe(document.querySelectorAll('.list_item')[0]);
    observerTwo.observe(document.querySelector('.child_1'));
    observerTwo.observe(document.querySelector('.team_price'));
    observerTwo.observe(document.querySelectorAll('.buttons_div button')[0]);
    observerTwo.observe(document.querySelector('.faq_section h2'));
    observerTwo.observe(document.querySelectorAll('.ftr_list_div div')[0]);
    observerTwo.observe(document.querySelectorAll('.ftr_list_div div')[4]);

    //from right to left
    const observerThree = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('right_to_left');
            } else {
                entry.target.classList.remove('right_to_left');
            }
        })
    });

    observerThree.observe(document.querySelectorAll('.list_item')[1]);
    observerThree.observe(document.querySelector('.basic_price'));
    observerThree.observe(document.querySelectorAll('.buttons_div button')[1]);
    observerThree.observe(document.querySelectorAll('.ftr_list_div div')[3]);
    observerThree.observe(document.querySelector('.ftr_second_child'));

    //from opacity 0 to 1
    const observerFour = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        })
    });

    observerFour.observe(document.querySelector('#url_shortener_form'));
    observerFour.observe(document.querySelectorAll('.ftr_list_div div')[1]);
    observerFour.observe(document.querySelectorAll('.ftr_list_div div')[2]);
};

animationOnScroll();
//

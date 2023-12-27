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
}

toggleFaqDetails();
//

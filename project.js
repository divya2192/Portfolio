document.addEventListener('DOMContentLoaded', function () {
    const next_btn = document.getElementById('next_btn');
    const prev_btn = document.getElementById('prev_btn');
    const cards = document.querySelector('.project-cards');
    const cardWidth = document.querySelector('.card').offsetWidth+250;
    let currentIndex = 0;
    console.log("Card width:", cardWidth); // Add this line

    next_btn.addEventListener('click', () => {
        const maxScroll = cards.scrollWidth - cards.clientWidth;
        currentIndex += cardWidth; // Increment by card width
        currentIndex = Math.min(maxScroll, currentIndex); // Ensure currentIndex doesn't exceed maxScroll
        console.log('Current Position:', currentIndex);
        cards.scrollTo({
            left: currentIndex,
            behavior: 'smooth'
        });
    });

    prev_btn.addEventListener('click', () => {
        currentIndex -= cardWidth; // Decrement by card width
        currentIndex = Math.max(0, currentIndex); // Ensure currentIndex doesn't go below 0
        console.log('Current Position:', currentIndex);
        cards.scrollTo({
            left: currentIndex,
            behavior: 'smooth'
        });
    });


});
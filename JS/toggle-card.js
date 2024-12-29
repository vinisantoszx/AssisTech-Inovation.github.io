function toggleCard(headerElement) {
    const card = headerElement.parentElement;
    const cardBody = card.querySelector('.card-body');

    if (cardBody.style.maxHeight) {
        cardBody.style.maxHeight = null;
        cardBody.classList.remove('expanded');
    } else {
        cardBody.style.maxHeight = cardBody.scrollHeight + "px";
        cardBody.classList.add('expanded');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const achievementItems = document.querySelectorAll('#achievements li');

    achievementItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hover-effect');
            triggerConfettiAnimation(item);
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hover-effect');
        });
    });

    function triggerConfettiAnimation(element) {
        const animationContainer = document.createElement('div');
        animationContainer.classList.add('celebration-animation');
        document.body.appendChild(animationContainer);

        const rect = element.getBoundingClientRect();

        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${rect.top + window.scrollY - 100}px`;
            confetti.style.backgroundColor = getRandomColor();
            animationContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }

        setTimeout(() => {
            animationContainer.remove();
        }, 3000);
    }

    function getRandomColor() {
        const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});

document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.opacity = '1';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.opacity = '0';
});

console.log("%cHello! %cLooking for a GenAI expert?", "color: #3b82f6; font-size: 20px; font-weight: bold;", "color: #94a3b8; font-size: 16px;");

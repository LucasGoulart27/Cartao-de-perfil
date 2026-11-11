const cartao = document.getElementById("Cartao");

cartao.addEventListener("mousemove", (event) => {
    const rect = cartao.getBoundingClientRect();

    // Posição do mouse em relação ao centro do cartão
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centroX = rect.width / 2;
    const centroY = rect.height / 2;

    // Calcula a rotação
    const rotateX = ((y - centroY) / centroY) * -10;
    const rotateY = ((x - centroX) / centroX) * -10;

    cartao.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.03, 1.03, 1.03)
    `;
});

// Quando o mause sair, volta ao normal
cartao.addEventListener("mouseleave", () => {
    cartao.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
    `;
});
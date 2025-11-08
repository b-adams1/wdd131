const traits = {
    name: "Snorkleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    lowerHealth: function(health) {
        if (this.health > 0) {
            this.health--;
            renderCard(traits);
        } else {
            renderCard(traits)
            alert(`${this.name} has died!`)
        }
    },
    raiseLevel: function(level) {
        this.level++;
        renderCard(traits);
    },
};

function renderCard(traits) {
    const nameEl = document.querySelector(".name");
    const classEl = document.querySelector("#class");
    const levelEl = document.querySelector("#level");
    const healthEl = document.querySelector("#health");
    nameEl.textContent = `${traits.name}`;
    classEl.textContent = `Class: ${traits.class}`;
    levelEl.textContent = `Level: ${traits.level}`;
    healthEl.textContent = `Health: ${traits.health}`;
};

renderCard(traits);

document.querySelector("#attackedButton").addEventListener("click", () => {
    const healthAmount = document.querySelector("#health")
    traits.lowerHealth(healthAmount.value)
});

document.querySelector("#levelButton").addEventListener("click", () => {
    const levelAmount = document.querySelector("#level")
    traits.raiseLevel(levelAmount.value)
});
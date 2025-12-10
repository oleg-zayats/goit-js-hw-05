const profile = {
    username: "Jacob",
    playTime: 300,

    /**
     * Змінює ім'я користувача на нове.
     * @param {string} newName - Нове ім'я профілю.
     */
    changeUsername(newName) {
        this.username = newName;
    },

    /**
     * Збільшує кількість активних годин.
     * @param {number} hours - Кількість годин, на яку потрібно збільшити playTime.
     */
    updatePlayTime(hours) {
        this.playTime += hours;
    },

    /**
     * Повертає інформаційний рядок про профіль.
     * @returns {string} - Рядок формату "<Username> has <amount> active hours!".
     */
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};


console.log(profile.getInfo()); 

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo()); 
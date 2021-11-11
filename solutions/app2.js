const HU = {
    date(date = new Date()) {
        return date.toLocaleDateString('hu');
    },

    curreny(amount = 0) {
        return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(amount);
    },

    list(items = []) {
        return items.reduce((str, item, index) => `${str}${index === items.length - 1 ? ' és ' : ', '}${item}`, '' ).substring(2);
    }

};

export default HU;
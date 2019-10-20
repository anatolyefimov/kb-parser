kb = {
    main: 'https://krasnoeibeloe.ru',
    catalog: '/catalog',
    catalogs: {
        russian: '/rossiyskoe',
        imported: '/importnoe_pivo',
    },

    get russian() {
        return this.main + this.catalog + this.catalogs.russian;
    },

    get imported() {
        return this.main + this.catalog + this.catalogs.imported
    }
};





module.exports = kb;
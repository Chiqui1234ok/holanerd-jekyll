var sidebar = new Vue({
    el: '#sidebar',
    delimiters: ['_', '_'],
    data: 
    {
        visible: false,
        home: 
        {
            name: 'Inicio',
            url: '/'
        },
        blog: 
        {
            name: 'Blog',
            url: '/blog.html'
        },
        contact:
        {
            name: 'Contacto',
            url: '/contacto.html'
        }
    },
    methods: {
        openSidebar: function()
        {
            this.visible = true;
        },
        closeSidebar: function()
        {
            this.visible = false;
        }
    }
})
export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        title: 'Pages',
        icon: 'user',
        children: [
            {
                path: 'profile',
                title: 'Contact',
            }
        ]
    },
    {
        path: 'nucleus',
        title: 'Nucleus',
        icon: 'dashboard'
    },
    {
        path: 'ui',
        title: 'UI Elements',
        icon: 'paint-brush',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'charts',
                title: 'Charts',
                icon: 'bar-chart',
                children: [
                    {
                        path: 'echarts',
                        title: 'Echarts'
                    }
                ]
            },
            {
                path: 'table',
                title: 'Tables',
                icon: 'table',
                children: [
                    {
                        path: 'basic-tables',
                        title: 'Basic Tables'
                    },
                    {
                        path: 'data-table',
                        title: 'Data Table'
                    }
                ]
            }
        ]
    }
];

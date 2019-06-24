const route = {
    path: '/home',
    component: ()=>import('../pages/home/root'),
    children: [
        {
            path: 'cate/:id',
            component: ()=>import('../pages/home/category-list'),
            props: true
        }
    ]
}

export default route;

const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Dashboard = {
    text: 'DASHBOARD',
    link: '/darshboard',
    icon: 'fa fa-tachometer-alt'
};

const Diagnostico = {
    text: 'DIAGNOSTICO',
    link: '/diagnostico',
    icon: 'icon-cloud-upload'
};

const Programas = {
    text: 'PROGRAMAS',
    link: '/programas',
    icon: 'icon-rocket'
};

const Acciones = {
    text: 'ACCIONES',
    link: '/acciones',
    icon: 'fa fa-list-alt'
};



const Material = {
    text: 'Material',
    link: '/material',
    icon: 'fa fa-shield-alt',
    submenu: [
        {
            text: 'Cards',
            link: '/material/cards'
        },
        {
            text: 'Forms',
            link: '/material/forms'
        },
        {
            text: 'Inputs',
            link: '/material/inputs'
        },
        {
            text: 'Lists',
            link: '/material/lists'
        },
        {
            text: 'Whiteframe',
            link: '/material/whiteframe'
        },
        {
            text: 'Colors',
            link: '/material/colors'
        },
        {
            text: 'ng2Material',
            link: '/material/ngmaterial'
        }
    ],
    'alert': 'new',
    'label': 'badge badge-primary'
};

const Cliente = {
    text: 'Cliente',
    link: '/cliente',
    icon: 'icon-home'
};


const headingMain = {
    text: 'Main Navigation',
    heading: true
};

export const menu = [
    Dashboard,
    Diagnostico,
    Programas,
    Acciones
];

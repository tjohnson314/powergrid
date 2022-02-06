import { GameMap } from './../maps';

export enum Regions {
    Green = 'green',
    Pink = 'pink',
    Red = 'red',
    Yellow = 'yellow',
    Purple = 'purple',
    Brown = 'brown',
}

export enum Cities {
    Murmansk = 'Murmansk',
    Arkhangelsk = 'Arkhangelsk',
    Syktyvkar = 'Syktyvkar',
    Kirov = 'Kirov',
    Kazan = 'Kazan',
    Cheboksary = 'Cheboksary',
    Ulyanovsk = 'Ulyanovsk',
    Tula = 'Tula',
    Kaliningrad = 'Kaliningrad',
    Ryazan = 'Ryazan',
    Nizhnynovgorod = 'Nizhny Novgorod',
    Moscow = 'Moscow',
    Stpetersburg = 'St Petersburg',
    Yaroslavl = 'Yaroslavl',
    Chita = 'Chita',
    Bratsk = 'Bratsk',
    Krasnoyarsk = 'Krasnoyarsk',
    Kemerovd = 'Kemerovd',
    Novokuznetsk = 'Novokuznetsk',
    Irkutsk = 'Irkutsk',
    Ulanude = 'Ulan Ude',
    Norilsk = 'Norilsk',
    Surgut = 'Surgut',
    Tyumen = 'Tyumen',
    Tomsk = 'Tomsk',
    Novosibirsk = 'Novosibirsk',
    Barnaul = 'Barnaul',
    Omsk = 'Omsk',
    Chelyabinsk = 'Chelyabinsk',
    Ufa = 'Ufa',
    Perm = 'Perm',
    Yekaterinburg = 'Yekaterinburg',
    Orenburg = 'Orenburg',
    Naberezhnyechelny = 'Naberezhnye Chelny',
    Samara = 'Samara',
    Astrakhan = 'Astrakhan',
    Makhachkala = 'Makhachkala',
    Saratov = 'Saratov',
    Volgograd = 'Volgograd',
    Krasnodar = 'Krasnodar',
    Rostov = 'Rostov',
    Voronezh = 'Voronezh',
}

export const map: GameMap = {
    name: 'Russia',
    cities: [
        { name: Cities.Murmansk, region: Regions.Green, x: 1574, y: 301 },
        { name: Cities.Arkhangelsk, region: Regions.Green, x: 1456, y: 695 },
        { name: Cities.Syktyvkar, region: Regions.Green, x: 1669, y: 1055 },
        { name: Cities.Kirov, region: Regions.Green, x: 1457, y: 1222 },
        { name: Cities.Kazan, region: Regions.Green, x: 1378, y: 1478 },
        { name: Cities.Cheboksary, region: Regions.Green, x: 1211, y: 1358 },
        { name: Cities.Ulyanovsk, region: Regions.Green, x: 884, y: 1448 },
        { name: Cities.Tula, region: Regions.Pink, x: 535, y: 1177 },
        { name: Cities.Kaliningrad, region: Regions.Pink, x: 394, y: 656 },
        { name: Cities.Ryazan, region: Regions.Pink, x: 793, y: 1243 },
        { name: Cities.Nizhnynovgorod, region: Regions.Pink, x: 1129, y: 1216 },
        { name: Cities.Moscow, region: Regions.Pink, x: 763, y: 1061 },
        { name: Cities.Stpetersburg, region: Regions.Pink, x: 883, y: 647 },
        { name: Cities.Yaroslavl, region: Regions.Pink, x: 1018, y: 1015 },
        { name: Cities.Chita, region: Regions.Red, x: 4168, y: 2048 },
        { name: Cities.Bratsk, region: Regions.Red, x: 3599, y: 1808 },
        { name: Cities.Krasnoyarsk, region: Regions.Red, x: 3230, y: 1930 },
        { name: Cities.Kemerovd, region: Regions.Red, x: 2953, y: 1987 },
        { name: Cities.Novokuznetsk, region: Regions.Red, x: 3041, y: 2159 },
        { name: Cities.Irkutsk, region: Regions.Red, x: 3721, y: 2162 },
        { name: Cities.Ulanude, region: Regions.Red, x: 4030, y: 2228 },
        { name: Cities.Norilsk, region: Regions.Yellow, x: 3001, y: 856 },
        { name: Cities.Surgut, region: Regions.Yellow, x: 2348, y: 1411 },
        { name: Cities.Tyumen, region: Regions.Yellow, x: 2060, y: 1627 },
        { name: Cities.Tomsk, region: Regions.Yellow, x: 2773, y: 1835 },
        { name: Cities.Novosibirsk, region: Regions.Yellow, x: 2647, y: 2005 },
        { name: Cities.Barnaul, region: Regions.Yellow, x: 2662, y: 2191 },
        { name: Cities.Omsk, region: Regions.Yellow, x: 2195, y: 1957 },
        { name: Cities.Chelyabinsk, region: Regions.Purple, x: 1768, y: 1765 },
        { name: Cities.Ufa, region: Regions.Purple, x: 1472, y: 1757 },
        { name: Cities.Perm, region: Regions.Purple, x: 1688, y: 1388 },
        { name: Cities.Yekaterinburg, region: Regions.Purple, x: 1757, y: 1520 },
        { name: Cities.Orenburg, region: Regions.Purple, x: 1250, y: 1897 },
        { name: Cities.Naberezhnyechelny, region: Regions.Purple, x: 1427, y: 1609 },
        { name: Cities.Samara, region: Regions.Purple, x: 1132, y: 1651 },
        { name: Cities.Astrakhan, region: Regions.Brown, x: 619, y: 2092 },
        { name: Cities.Makhachkala, region: Regions.Brown, x: 317, y: 2312 },
        { name: Cities.Saratov, region: Regions.Brown, x: 808, y: 1661 },
        { name: Cities.Volgograd, region: Regions.Brown, x: 589, y: 1795 },
        { name: Cities.Krasnodar, region: Regions.Brown, x: 260, y: 1865 },
        { name: Cities.Rostov, region: Regions.Brown, x: 311, y: 1658 },
        { name: Cities.Voronezh, region: Regions.Brown, x: 485, y: 1409 },
    ],
    connections: [
        { nodes: [Cities.Kaliningrad, Cities.Stpetersburg], cost: 15 },
        { nodes: [Cities.Stpetersburg, Cities.Murmansk], cost: 19 },
        { nodes: [Cities.Murmansk, Cities.Arkhangelsk], cost: 15 },
        { nodes: [Cities.Arkhangelsk, Cities.Stpetersburg], cost: 14 },
        { nodes: [Cities.Tula, Cities.Kaliningrad], cost: 20 },
        { nodes: [Cities.Tula, Cities.Moscow], cost: 3 },
        { nodes: [Cities.Moscow, Cities.Ryazan], cost: 3 },
        { nodes: [Cities.Ryazan, Cities.Voronezh], cost: 5 },
        { nodes: [Cities.Voronezh, Cities.Tula], cost: 5 },
        { nodes: [Cities.Tula, Cities.Stpetersburg], cost: 13 },
        { nodes: [Cities.Stpetersburg, Cities.Moscow], cost: 10 },
        { nodes: [Cities.Moscow, Cities.Yaroslavl], cost: 0 },
        { nodes: [Cities.Yaroslavl, Cities.Nizhnynovgorod], cost: 4 },
        { nodes: [Cities.Nizhnynovgorod, Cities.Moscow], cost: 7 },
        { nodes: [Cities.Yaroslavl, Cities.Stpetersburg], cost: 9 },
        { nodes: [Cities.Yaroslavl, Cities.Arkhangelsk], cost: 12 },
        { nodes: [Cities.Arkhangelsk, Cities.Syktyvkar], cost: 10 },
        { nodes: [Cities.Syktyvkar, Cities.Surgut], cost: 21 },
        { nodes: [Cities.Perm, Cities.Syktyvkar], cost: 8 },
        { nodes: [Cities.Syktyvkar, Cities.Kirov], cost: 6 },
        { nodes: [Cities.Syktyvkar, Cities.Nizhnynovgorod], cost: 11 },
        { nodes: [Cities.Nizhnynovgorod, Cities.Arkhangelsk], cost: 15 },
        { nodes: [Cities.Nizhnynovgorod, Cities.Cheboksary], cost: 3 },
        { nodes: [Cities.Cheboksary, Cities.Ulyanovsk], cost: 4 },
        { nodes: [Cities.Ulyanovsk, Cities.Voronezh], cost: 11 },
        { nodes: [Cities.Voronezh, Cities.Volgograd], cost: 8 },
        { nodes: [Cities.Volgograd, Cities.Saratov], cost: 6 },
        { nodes: [Cities.Saratov, Cities.Samara], cost: 5 },
        { nodes: [Cities.Samara, Cities.Ulyanovsk], cost: 3 },
        { nodes: [Cities.Ulyanovsk, Cities.Kazan], cost: 3 },
        { nodes: [Cities.Kazan, Cities.Samara], cost: 4 },
        { nodes: [Cities.Samara, Cities.Naberezhnyechelny], cost: 5 },
        { nodes: [Cities.Cheboksary, Cities.Kazan], cost: 2 },
        { nodes: [Cities.Cheboksary, Cities.Kirov], cost: 5 },
        { nodes: [Cities.Kirov, Cities.Kazan], cost: 5 },
        { nodes: [Cities.Kazan, Cities.Perm], cost: 8 },
        { nodes: [Cities.Kazan, Cities.Naberezhnyechelny], cost: 3 },
        { nodes: [Cities.Naberezhnyechelny, Cities.Ufa], cost: 4 },
        { nodes: [Cities.Ufa, Cities.Orenburg], cost: 6 },
        { nodes: [Cities.Orenburg, Cities.Samara], cost: 6 },
        { nodes: [Cities.Orenburg, Cities.Naberezhnyechelny], cost: 7 },
        { nodes: [Cities.Ufa, Cities.Chelyabinsk], cost: 8 },
        { nodes: [Cities.Chelyabinsk, Cities.Yekaterinburg], cost: 3 },
        { nodes: [Cities.Yekaterinburg, Cities.Perm], cost: 5 },
        { nodes: [Cities.Perm, Cities.Kirov], cost: 6 },
        { nodes: [Cities.Chelyabinsk, Cities.Tyumen], cost: 5 },
        { nodes: [Cities.Tyumen, Cities.Surgut], cost: 10 },
        { nodes: [Cities.Syktyvkar, Cities.Tyumen], cost: 17 },
        { nodes: [Cities.Tyumen, Cities.Yekaterinburg], cost: 5 },
        { nodes: [Cities.Chelyabinsk, Cities.Omsk], cost: 13 },
        { nodes: [Cities.Omsk, Cities.Tyumen], cost: 9 },
        { nodes: [Cities.Tyumen, Cities.Tomsk], cost: 19 },
        { nodes: [Cities.Tomsk, Cities.Surgut], cost: 15 },
        { nodes: [Cities.Tomsk, Cities.Novosibirsk], cost: 4 },
        { nodes: [Cities.Novosibirsk, Cities.Barnaul], cost: 4 },
        { nodes: [Cities.Barnaul, Cities.Omsk], cost: 11 },
        { nodes: [Cities.Omsk, Cities.Novosibirsk], cost: 10 },
        { nodes: [Cities.Omsk, Cities.Tomsk], cost: 12 },
        { nodes: [Cities.Rostov, Cities.Krasnodar], cost: 4 },
        { nodes: [Cities.Krasnodar, Cities.Volgograd], cost: 9 },
        { nodes: [Cities.Volgograd, Cities.Astrakhan], cost: 6 },
        { nodes: [Cities.Krasnodar, Cities.Makhachkala], cost: 14 },
        { nodes: [Cities.Makhachkala, Cities.Astrakhan], cost: 8 },
        { nodes: [Cities.Makhachkala, Cities.Volgograd], cost: 11 },
        { nodes: [Cities.Rostov, Cities.Volgograd], cost: 7 },
        { nodes: [Cities.Ryazan, Cities.Ulyanovsk], cost: 9 },
        { nodes: [Cities.Ulyanovsk, Cities.Saratov], cost: 6 },
        { nodes: [Cities.Saratov, Cities.Voronezh], cost: 8 },
        { nodes: [Cities.Rostov, Cities.Voronezh], cost: 9 },
        { nodes: [Cities.Naberezhnyechelny, Cities.Perm], cost: 6 },
        { nodes: [Cities.Naberezhnyechelny, Cities.Yekaterinburg], cost: 8 },
        { nodes: [Cities.Ufa, Cities.Yekaterinburg], cost: 6 },
        { nodes: [Cities.Chita, Cities.Ulanude], cost: 6 },
        { nodes: [Cities.Ulanude, Cities.Irkutsk], cost: 6 },
        { nodes: [Cities.Irkutsk, Cities.Novokuznetsk], cost: 21 },
        { nodes: [Cities.Novokuznetsk, Cities.Kemerovd], cost: 3 },
        { nodes: [Cities.Kemerovd, Cities.Tomsk], cost: 3 },
        { nodes: [Cities.Novosibirsk, Cities.Novokuznetsk], cost: 5 },
        { nodes: [Cities.Novokuznetsk, Cities.Barnaul], cost: 6 },
        { nodes: [Cities.Kemerovd, Cities.Krasnoyarsk], cost: 7 },
        { nodes: [Cities.Krasnoyarsk, Cities.Novokuznetsk], cost: 7 },
        { nodes: [Cities.Krasnoyarsk, Cities.Irkutsk], cost: 17 },
        { nodes: [Cities.Krasnoyarsk, Cities.Bratsk], cost: 10 },
        { nodes: [Cities.Bratsk, Cities.Tomsk], cost: 17 },
        { nodes: [Cities.Bratsk, Cities.Irkutsk], cost: 10 },
        { nodes: [Cities.Bratsk, Cities.Ulanude], cost: 14 },
        { nodes: [Cities.Tomsk, Cities.Norilsk], cost: 24 },
        { nodes: [Cities.Norilsk, Cities.Bratsk], cost: 29 },
        { nodes: [Cities.Norilsk, Cities.Surgut], cost: 19 },
    ],
};
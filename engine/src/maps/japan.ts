import { GameMap } from './../maps';

export enum Regions {
    Brown = 'brown',
    Green = 'green',
    Purple = 'purple',
    Yellow = 'yellow',
    Red = 'red',
}

export enum Cities {
    Asahikawa = 'Asahikawa',
    Sapporo = 'Sapporo',
    Hakodate = 'Hakodate',
    Admori = 'Admori',
    Morioka = 'Morioka',
    Akita = 'Akita',
    Sendai = 'Sendai',
    Niigata = 'Niigata',
    Koriyama = 'Koriyama',
    Nagano = 'Nagano',
    Saitama = 'Saitama',
    Tokyo = 'Tokyo',
    Chiba = 'Chiba',
    Yokohama = 'Yokohama',
    Kanazawa = 'Kanazawa',
    Toyama = 'Toyama',
    Kyoto = 'Kyoto',
    Osaka = 'Osaka',
    Nagoya = 'Nagoya',
    Kofu = 'Kofu',
    Hamamatsu = 'Hamamatsu',
    Kobe = 'Kobe',
    Matsue = 'Matsue',
    Okayama = 'Okayama',
    Takamatsu = 'Takamatsu',
    Kochi = 'Kochi',
    Matsuyama = 'Matsuyama',
    Hiroshima = 'Hiroshima',
    Shimonoseki = 'Shimonoseki',
    Oita = 'Oita',
    Miyazaki = 'Miyazaki',
    Kagoshima = 'Kagoshima',
    Kumamoto = 'Kumamoto',
    Fukuoka = 'Fukuoka',
    Nagasaki = 'Nagasaki',
}

export const map: GameMap = {
    name: 'Japan',
    cities: [
        { name: Cities.Asahikawa, region: Regions.Brown, x: 3384, y: 414 },
        { name: Cities.Sapporo, region: Regions.Brown, x: 3028, y: 382 },
        { name: Cities.Hakodate, region: Regions.Brown, x: 2622, y: 512 },
        { name: Cities.Admori, region: Regions.Brown, x: 3818, y: 1336 },
        { name: Cities.Morioka, region: Regions.Brown, x: 3636, y: 1646 },
        { name: Cities.Akita, region: Regions.Brown, x: 3472, y: 1480 },
        { name: Cities.Sendai, region: Regions.Brown, x: 3408, y: 1886 },
        { name: Cities.Niigata, region: Regions.Green, x: 2874, y: 1628 },
        { name: Cities.Koriyama, region: Regions.Green, x: 3086, y: 1932 },
        { name: Cities.Nagano, region: Regions.Green, x: 2486, y: 1722 },
        { name: Cities.Saitama, region: Regions.Green, x: 2450, y: 1986 },
        { name: Cities.Tokyo, region: Regions.Green, x: 2524, y: 2122 },
        { name: Cities.Chiba, region: Regions.Green, x: 2650, y: 2316 },
        { name: Cities.Yokohama, region: Regions.Green, x: 2306, y: 2244 },
        { name: Cities.Kanazawa, region: Regions.Purple, x: 2207, y: 1385 },
        { name: Cities.Toyama, region: Regions.Purple, x: 2257, y: 1595 },
        { name: Cities.Kyoto, region: Regions.Purple, x: 1765, y: 1595 },
        { name: Cities.Osaka, region: Regions.Purple, x: 1517, y: 1631 },
        { name: Cities.Nagoya, region: Regions.Purple, x: 1942, y: 1751 },
        { name: Cities.Kofu, region: Regions.Purple, x: 2179, y: 1897 },
        { name: Cities.Hamamatsu, region: Regions.Purple, x: 1958, y: 2024 },
        { name: Cities.Kobe, region: Regions.Yellow, x: 1555, y: 1451 },
        { name: Cities.Matsue, region: Regions.Yellow, x: 1457, y: 1006 },
        { name: Cities.Okayama, region: Regions.Yellow, x: 1390, y: 1286 },
        { name: Cities.Takamatsu, region: Regions.Yellow, x: 1268, y: 1507 },
        { name: Cities.Kochi, region: Regions.Yellow, x: 974, y: 1472 },
        { name: Cities.Matsuyama, region: Regions.Yellow, x: 1036, y: 1268 },
        { name: Cities.Hiroshima, region: Regions.Yellow, x: 1103, y: 1078 },
        { name: Cities.Shimonoseki, region: Regions.Red, x: 856, y: 962 },
        { name: Cities.Oita, region: Regions.Red, x: 731, y: 1166 },
        { name: Cities.Miyazaki, region: Regions.Red, x: 469, y: 1318 },
        { name: Cities.Kagoshima, region: Regions.Red, x: 157, y: 1255 },
        { name: Cities.Kumamoto, region: Regions.Red, x: 457, y: 1045 },
        { name: Cities.Fukuoka, region: Regions.Red, x: 644, y: 823 },
        { name: Cities.Nagasaki, region: Regions.Red, x: 313, y: 875 },
    ],
    connections: [
        { nodes: [Cities.Nagasaki, Cities.Fukuoka], cost: 10 },
        { nodes: [Cities.Fukuoka, Cities.Shimonoseki], cost: 10 },
        { nodes: [Cities.Shimonoseki, Cities.Hiroshima], cost: 12 },
        { nodes: [Cities.Hiroshima, Cities.Matsue], cost: 13 },
        { nodes: [Cities.Kumamoto, Cities.Kagoshima], cost: 13 },
        { nodes: [Cities.Kagoshima, Cities.Miyazaki], cost: 8 },
        { nodes: [Cities.Miyazaki, Cities.Kumamoto], cost: 11 },
        { nodes: [Cities.Kumamoto, Cities.Oita], cost: 12 },
        { nodes: [Cities.Oita, Cities.Miyazaki], cost: 12 },
        { nodes: [Cities.Oita, Cities.Matsuyama], cost: 14 },
        { nodes: [Cities.Matsuyama, Cities.Kochi], cost: 7 },
        { nodes: [Cities.Kochi, Cities.Takamatsu], cost: 9 },
        { nodes: [Cities.Hiroshima, Cities.Okayama], cost: 11 },
        { nodes: [Cities.Okayama, Cities.Matsue], cost: 11 },
        { nodes: [Cities.Okayama, Cities.Kobe], cost: 9 },
        { nodes: [Cities.Kobe, Cities.Matsue], cost: 16 },
        { nodes: [Cities.Matsuyama, Cities.Takamatsu], cost: 10 },
        { nodes: [Cities.Takamatsu, Cities.Okayama], cost: 9 },
        { nodes: [Cities.Osaka, Cities.Nagoya], cost: 9 },
        { nodes: [Cities.Nagoya, Cities.Kyoto], cost: 9 },
        { nodes: [Cities.Kyoto, Cities.Kobe], cost: 3 },
        { nodes: [Cities.Osaka, Cities.Kyoto], cost: 0 },
        { nodes: [Cities.Kyoto, Cities.Kanazawa], cost: 19 },
        { nodes: [Cities.Kanazawa, Cities.Toyama], cost: 3 },
        { nodes: [Cities.Kanazawa, Cities.Nagoya], cost: 16 },
        { nodes: [Cities.Nagoya, Cities.Toyama], cost: 15 },
        { nodes: [Cities.Toyama, Cities.Nagano], cost: 9 },
        { nodes: [Cities.Nagano, Cities.Niigata], cost: 12 },
        { nodes: [Cities.Niigata, Cities.Akita], cost: 16 },
        { nodes: [Cities.Hamamatsu, Cities.Kofu], cost: 12 },
        { nodes: [Cities.Kofu, Cities.Nagoya], cost: 15 },
        { nodes: [Cities.Nagoya, Cities.Hamamatsu], cost: 6 },
        { nodes: [Cities.Kofu, Cities.Saitama], cost: 8 },
        { nodes: [Cities.Saitama, Cities.Tokyo], cost: 0 },
        { nodes: [Cities.Tokyo, Cities.Yokohama], cost: 0 },
        { nodes: [Cities.Tokyo, Cities.Chiba], cost: 4 },
        { nodes: [Cities.Chiba, Cities.Sendai], cost: 21 },
        { nodes: [Cities.Tokyo, Cities.Koriyama], cost: 14 },
        { nodes: [Cities.Koriyama, Cities.Niigata], cost: 11 },
        { nodes: [Cities.Saitama, Cities.Nagano], cost: 17 },
        { nodes: [Cities.Saitama, Cities.Niigata], cost: 21 },
        { nodes: [Cities.Koriyama, Cities.Sendai], cost: 7 },
        { nodes: [Cities.Sendai, Cities.Akita], cost: 14 },
        { nodes: [Cities.Akita, Cities.Koriyama], cost: 21 },
        { nodes: [Cities.Sendai, Cities.Morioka], cost: 10 },
        { nodes: [Cities.Morioka, Cities.Akita], cost: 7 },
        { nodes: [Cities.Akita, Cities.Admori], cost: 10 },
        { nodes: [Cities.Admori, Cities.Morioka], cost: 10 },
        { nodes: [Cities.Admori, Cities.Hakodate], cost: 15 },
        { nodes: [Cities.Hakodate, Cities.Sapporo], cost: 14 },
        { nodes: [Cities.Sapporo, Cities.Asahikawa], cost: 8 },
        { nodes: [Cities.Kumamoto, Cities.Shimonoseki], cost: 16 },
        { nodes: [Cities.Kumamoto, Cities.Fukuoka], cost: 8 },
    ],
};
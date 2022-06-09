import { cloneDeep } from 'lodash';
import { PowerPlant, PowerPlantType } from '../gamestate';
import { powerPlants } from '../powerPlants';
import { shuffle } from '../utils';
import { GameMap } from './../maps';

export enum Regions {
    Pink = 'pink',
    Green = 'green',
    Red = 'red',
    Brown = 'brown',
    Purple = 'purple',
    Yellow = 'yellow',
}

export enum Cities {
    Hegang = 'Hegang',
    Qiqhaer = 'Qiqhaer',
    Haerbin = 'Haerbin',
    Jilin = 'Jilin',
    Fushun = 'Fushun',
    Anshan = 'Anshan',
    Dalian = 'Dalian',
    Shanghai = 'Shanghai',
    Hangzhou = 'Hangzhou',
    Nanjing = 'Nanjing',
    Qingoad = 'Qingoad',
    Jinan = 'Jinan',
    Zhengzhou = 'Zhengzhou',
    Shijiazhuang = 'Shijiazhuang',
    Changchun = 'Changchun',
    Shenyang = 'Shenyang',
    Tangshan = 'Tangshan',
    Tianjin = 'Tianjin',
    Beijing = 'Beijing',
    Taiyuan = 'Taiyuan',
    Badtou = 'Badtou',
    Fuzhou = 'Fuzhou',
    Nanchang = 'Nanchang',
    Chaozhou = 'Chaozhou',
    Hongkong = 'Hong Kong',
    Guangzhou = 'Guangzhou',
    Changsha = 'Changsha',
    Wuhan = 'Wuhan',
    Hami = 'Hami',
    Karamay = 'Karamay',
    Wulumuqi = 'Wulumuqi',
    Kuerle = 'Kuerle',
    Yinchjan = 'Yinchjan',
    Xining = 'Xining',
    Lanzhou = 'Lanzhou',
    Kunming = 'Kunming',
    Chengou = 'Chengou',
    Xian = 'Xian',
    Chongqing = 'Chongqing',
    Nanning = 'Nanning',
    Haikou = 'Haikou',
    Chiyang = 'Chiyang',
}

export const map: GameMap = {
    name: 'China',
    cities: [
        { name: Cities.Hegang, region: Regions.Pink, x: 3920, y: 290 },
        { name: Cities.Qiqhaer, region: Regions.Pink, x: 3422, y: 262 },
        { name: Cities.Haerbin, region: Regions.Pink, x: 3672, y: 434 },
        { name: Cities.Jilin, region: Regions.Pink, x: 3744, y: 614 },
        { name: Cities.Fushun, region: Regions.Pink, x: 3712, y: 784 },
        { name: Cities.Anshan, region: Regions.Pink, x: 3510, y: 902 },
        { name: Cities.Dalian, region: Regions.Pink, x: 3424, y: 1052 },
        { name: Cities.Shanghai, region: Regions.Green, x: 3462, y: 1672 },
        { name: Cities.Hangzhou, region: Regions.Green, x: 3280, y: 1824 },
        { name: Cities.Nanjing, region: Regions.Green, x: 3130, y: 1632 },
        { name: Cities.Qingoad, region: Regions.Green, x: 3322, y: 1316 },
        { name: Cities.Jinan, region: Regions.Green, x: 3002, y: 1292 },
        { name: Cities.Zhengzhou, region: Regions.Green, x: 2778, y: 1438 },
        { name: Cities.Shijiazhuang, region: Regions.Green, x: 2866, y: 1152 },
        { name: Cities.Changchun, region: Regions.Red, x: 3504, y: 590 },
        { name: Cities.Shenyang, region: Regions.Red, x: 3458, y: 778 },
        { name: Cities.Tangshan, region: Regions.Red, x: 3158, y: 908 },
        { name: Cities.Tianjin, region: Regions.Red, x: 3134, y: 1016 },
        { name: Cities.Beijing, region: Regions.Red, x: 2886, y: 910 },
        { name: Cities.Taiyuan, region: Regions.Red, x: 2588, y: 1130 },
        { name: Cities.Badtou, region: Regions.Red, x: 2500, y: 862 },
        { name: Cities.Fuzhou, region: Regions.Brown, x: 3290, y: 2132 },
        { name: Cities.Nanchang, region: Regions.Brown, x: 3004, y: 1974 },
        { name: Cities.Chaozhou, region: Regions.Brown, x: 3096, y: 2322 },
        { name: Cities.Hongkong, region: Regions.Brown, x: 2902, y: 2552 },
        { name: Cities.Guangzhou, region: Regions.Brown, x: 2694, y: 2352 },
        { name: Cities.Changsha, region: Regions.Brown, x: 2682, y: 1988 },
        { name: Cities.Wuhan, region: Regions.Brown, x: 2810, y: 1786 },
        { name: Cities.Hami, region: Regions.Purple, x: 1816, y: 698 },
        { name: Cities.Karamay, region: Regions.Purple, x: 1304, y: 372 },
        { name: Cities.Wulumuqi, region: Regions.Purple, x: 1520, y: 558 },
        { name: Cities.Kuerle, region: Regions.Purple, x: 1326, y: 756 },
        { name: Cities.Yinchjan, region: Regions.Purple, x: 2208, y: 1058 },
        { name: Cities.Xining, region: Regions.Purple, x: 1868, y: 1226 },
        { name: Cities.Lanzhou, region: Regions.Purple, x: 2142, y: 1328 },
        { name: Cities.Kunming, region: Regions.Yellow, x: 1840, y: 2248 },
        { name: Cities.Chengou, region: Regions.Yellow, x: 1988, y: 1736 },
        { name: Cities.Xian, region: Regions.Yellow, x: 2440, y: 1478 },
        { name: Cities.Chongqing, region: Regions.Yellow, x: 2300, y: 1880 },
        { name: Cities.Nanning, region: Regions.Yellow, x: 2318, y: 2452 },
        { name: Cities.Haikou, region: Regions.Yellow, x: 2524, y: 2680 },
        { name: Cities.Chiyang, region: Regions.Yellow, x: 2212, y: 2112 },
    ],
    connections: [
        { nodes: [Cities.Kunming, Cities.Chengou], cost: 16 },
        { nodes: [Cities.Nanning, Cities.Haikou], cost: 10 },
        { nodes: [Cities.Guangzhou, Cities.Hongkong], cost: 4 },
        { nodes: [Cities.Guangzhou, Cities.Chaozhou], cost: 7 },
        { nodes: [Cities.Chaozhou, Cities.Hongkong], cost: 7 },
        { nodes: [Cities.Guangzhou, Cities.Haikou], cost: 13 },
        { nodes: [Cities.Nanning, Cities.Guangzhou], cost: 11 },
        { nodes: [Cities.Xining, Cities.Chengou], cost: 20 },
        { nodes: [Cities.Chengou, Cities.Chongqing], cost: 6 },
        { nodes: [Cities.Chongqing, Cities.Chiyang], cost: 9 },
        { nodes: [Cities.Chiyang, Cities.Kunming], cost: 12 },
        { nodes: [Cities.Chiyang, Cities.Nanning], cost: 12 },
        { nodes: [Cities.Chiyang, Cities.Guangzhou], cost: 18 },
        { nodes: [Cities.Guangzhou, Cities.Changsha], cost: 14 },
        { nodes: [Cities.Changsha, Cities.Chongqing], cost: 16 },
        { nodes: [Cities.Changsha, Cities.Wuhan], cost: 6 },
        { nodes: [Cities.Wuhan, Cities.Nanchang], cost: 6 },
        { nodes: [Cities.Nanchang, Cities.Changsha], cost: 7 },
        { nodes: [Cities.Changsha, Cities.Chiyang], cost: 15 },
        { nodes: [Cities.Chiyang, Cities.Chengou], cost: 13 },
        { nodes: [Cities.Guangzhou, Cities.Nanchang], cost: 16 },
        { nodes: [Cities.Nanchang, Cities.Chaozhou], cost: 14 },
        { nodes: [Cities.Chaozhou, Cities.Fuzhou], cost: 9 },
        { nodes: [Cities.Fuzhou, Cities.Nanchang], cost: 13 },
        { nodes: [Cities.Wuhan, Cities.Hangzhou], cost: 13 },
        { nodes: [Cities.Hangzhou, Cities.Fuzhou], cost: 13 },
        { nodes: [Cities.Hangzhou, Cities.Shanghai], cost: 4 },
        { nodes: [Cities.Shanghai, Cities.Nanjing], cost: 6 },
        { nodes: [Cities.Nanjing, Cities.Hangzhou], cost: 5 },
        { nodes: [Cities.Hangzhou, Cities.Nanchang], cost: 10 },
        { nodes: [Cities.Chongqing, Cities.Wuhan], cost: 18 },
        { nodes: [Cities.Lanzhou, Cities.Chengou], cost: 16 },
        { nodes: [Cities.Chengou, Cities.Xian], cost: 14 },
        { nodes: [Cities.Xian, Cities.Chongqing], cost: 14 },
        { nodes: [Cities.Xian, Cities.Wuhan], cost: 15 },
        { nodes: [Cities.Wuhan, Cities.Zhengzhou], cost: 10 },
        { nodes: [Cities.Zhengzhou, Cities.Xian], cost: 10 },
        { nodes: [Cities.Xian, Cities.Lanzhou], cost: 15 },
        { nodes: [Cities.Lanzhou, Cities.Yinchjan], cost: 9 },
        { nodes: [Cities.Yinchjan, Cities.Xining], cost: 11 },
        { nodes: [Cities.Lanzhou, Cities.Taiyuan], cost: 18 },
        { nodes: [Cities.Taiyuan, Cities.Xian], cost: 12 },
        { nodes: [Cities.Taiyuan, Cities.Zhengzhou], cost: 11 },
        { nodes: [Cities.Taiyuan, Cities.Shijiazhuang], cost: 5 },
        { nodes: [Cities.Shijiazhuang, Cities.Tianjin], cost: 5 },
        { nodes: [Cities.Shijiazhuang, Cities.Jinan], cost: 6 },
        { nodes: [Cities.Shijiazhuang, Cities.Zhengzhou], cost: 9 },
        { nodes: [Cities.Zhengzhou, Cities.Jinan], cost: 7 },
        { nodes: [Cities.Zhengzhou, Cities.Nanjing], cost: 12 },
        { nodes: [Cities.Nanjing, Cities.Wuhan], cost: 10 },
        { nodes: [Cities.Jinan, Cities.Nanjing], cost: 11 },
        { nodes: [Cities.Nanjing, Cities.Qingoad], cost: 12 },
        { nodes: [Cities.Qingoad, Cities.Jinan], cost: 6 },
        { nodes: [Cities.Jinan, Cities.Tianjin], cost: 6 },
        { nodes: [Cities.Xining, Cities.Lanzhou], cost: 6 },
        { nodes: [Cities.Yinchjan, Cities.Badtou], cost: 9 },
        { nodes: [Cities.Badtou, Cities.Taiyuan], cost: 9 },
        { nodes: [Cities.Taiyuan, Cities.Yinchjan], cost: 14 },
        { nodes: [Cities.Yinchjan, Cities.Hami], cost: 25 },
        { nodes: [Cities.Hami, Cities.Xining], cost: 25 },
        { nodes: [Cities.Wulumuqi, Cities.Kuerle], cost: 9 },
        { nodes: [Cities.Kuerle, Cities.Karamay], cost: 12 },
        { nodes: [Cities.Karamay, Cities.Wulumuqi], cost: 7 },
        { nodes: [Cities.Wulumuqi, Cities.Hami], cost: 12 },
        { nodes: [Cities.Hami, Cities.Kuerle], cost: 15 },
        { nodes: [Cities.Taiyuan, Cities.Beijing], cost: 10 },
        { nodes: [Cities.Beijing, Cities.Shijiazhuang], cost: 6 },
        { nodes: [Cities.Beijing, Cities.Tangshan], cost: 3 },
        { nodes: [Cities.Tangshan, Cities.Tianjin], cost: 0 },
        { nodes: [Cities.Beijing, Cities.Badtou], cost: 14 },
        { nodes: [Cities.Tangshan, Cities.Shenyang], cost: 11 },
        { nodes: [Cities.Dalian, Cities.Anshan], cost: 6 },
        { nodes: [Cities.Qiqhaer, Cities.Hegang], cost: 11 },
        { nodes: [Cities.Hegang, Cities.Haerbin], cost: 7 },
        { nodes: [Cities.Haerbin, Cities.Qiqhaer], cost: 6 },
        { nodes: [Cities.Changchun, Cities.Jilin], cost: 5 },
        { nodes: [Cities.Jilin, Cities.Haerbin], cost: 5 },
        { nodes: [Cities.Haerbin, Cities.Changchun], cost: 5 },
        { nodes: [Cities.Changchun, Cities.Shenyang], cost: 5 },
        { nodes: [Cities.Shenyang, Cities.Anshan], cost: 2 },
        { nodes: [Cities.Jilin, Cities.Fushun], cost: 6 },
        { nodes: [Cities.Fushun, Cities.Shenyang], cost: 0 },
        { nodes: [Cities.Changchun, Cities.Qiqhaer], cost: 9 },
    ],
    layout: 'Portrait',
    mapPosition: [-400, 70],
    adjustRatio: [0.35, 0.35],
    resupply: [
        [
            [4, 4, 3],
            [5, 5, 3],
            [6, 6, 4],
            [7, 7, 5],
            [9, 9, 6],
        ],
        [
            [2, 2, 4],
            [3, 3, 4],
            [4, 4, 5],
            [5, 5, 6],
            [6, 6, 7],
        ],
        [
            [2, 2, 1],
            [2, 2, 1],
            [3, 3, 2],
            [3, 3, 3],
            [5, 5, 3],
        ],
        [
            [1, 1, 1],
            [1, 1, 1],
            [2, 2, 2],
            [3, 3, 2],
            [3, 3, 3],
        ],
    ],
    startingResources: [21, 21, 6, 2],
    setupDeck(numPlayers: number, variant: string, rng: seedrandom.prng) {
        /* Instructions for power plant setup:
        Depending on the number of players, remove the following power plants from the game and place them in the box:
            with 2 and 3 players: 3, 4, 9, 11, 16, 18, 20, 24, 30, 33, 46.
            with 4 players: 3, 4, 11, 18, 24, 33, 46.
            with 5 and 6 players: 3, 4, 33.
        Sort the remaining power plants as described below and place them as a face-down supply:
            plants 36– 50: shuffle and place face-down at the bottom of the supply
            plants 31–35: (naturally without 33) shuffle along with the step 3 card and place face-down on top of the higher numbers
                already placed on the supply
            plants 5 – 30: sort in ascending order with 30 on the bottom and 5 on the top and place face-down on the supply
        */
        let allPlants = cloneDeep(powerPlants);
        let plantsToRemove: number[] = [];
        if (numPlayers == 2 || numPlayers == 3) {
            plantsToRemove = [3, 4, 9, 11, 16, 18, 20, 24, 30, 33, 46];
        } else if (numPlayers == 4) {
            plantsToRemove = [3, 4, 11, 18, 24, 33, 46];
        } else if (numPlayers == 5 || numPlayers == 6) {
            plantsToRemove = [3, 4, 33];
        }
        let filteredPlants = allPlants.filter((p) => !plantsToRemove.includes(p.number));

        let lowPlants = filteredPlants.filter((p) => p.number <= 30);
        let middlePlants = shuffle(
            filteredPlants.filter((p) => p.number >= 31 && p.number <= 35),
            rng() + ''
        );
        let step3Card = filteredPlants.filter((p) => p.type == PowerPlantType.Step3);
        let highPlants = shuffle(
            filteredPlants.filter((p) => p.number >= 36 && p.number <= 50),
            rng() + ''
        );

        // In round 1, the number of plants available is equal to the number of players.
        let actualMarket = lowPlants.splice(0, numPlayers);
        let futureMarket: PowerPlant[] = [];
        let powerPlantsDeck = lowPlants.concat(middlePlants).concat(step3Card).concat(highPlants);
        return { actualMarket, futureMarket, powerPlantsDeck };
    },
};

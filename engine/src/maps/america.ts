import { GameMap } from './../maps';

export enum Regions {
    Purple = 'purple',
    Green = 'green',
    Red = 'red',
    Yellow = 'yellow',
    Cyan = 'cyan',
    Brown = 'brown',
}

export enum Cities {
    Seattle = 'Seattle',
    Portland = 'Portland',
    Boise = 'Boise',
    Billings = 'Billings',
    Cheyenne = 'Cheyenne',
    Denver = 'Denver',
    Omaha = 'Omaha',
    SanFrancisco = 'San Francisco',
    LosAngeles = 'Los Angeles',
    SanDiego = 'San Diego',
    LasVegas = 'Las Vegas',
    SaltlakeCity = 'Saltlake City',
    Phoenix = 'Phoenix',
    SantaFe = 'Santa Fe',
    KansasCity = 'Kansas City',
    OklahomaCity = 'Oklahoma City',
    Dallas = 'Dallas',
    Houston = 'Houston',
    Menphis = 'Menphis',
    Birmingham = 'Birmingham',
    NewOrleans = 'New Orleans',
    Fargo = 'Fargo',
    Duluth = 'Duluth',
    Minneapolis = 'Minneapolis',
    Chicago = 'Chicago',
    StLouis = 'St. Louis',
    Cincinnati = 'Cincinnati',
    Knoxvile = 'Knoxvile',
    Detroit = 'Detroit',
    Buffalo = 'Buffalo',
    Pittsburgh = 'Pittsburgh',
    Boston = 'Boston',
    NewYork = 'New York',
    Philadelphia = 'Philadelphia',
    Washington = 'Washington',
    Horecin = 'Horecin',
    Raleigh = 'Raleigh',
    Atlanta = 'Atlanta',
    Savannah = 'Savannah',
    Jacksonvile = 'Jacksonvile',
    Tampa = 'Tampa',
    Miami = 'Miami',
}

export const map: GameMap = {
    name: 'USA',
    cities: [
        { name: Cities.Seattle, region: Regions.Purple, x: 74, y: 99 },
        { name: Cities.Portland, region: Regions.Purple, x: 45, y: 167 },
        { name: Cities.Boise, region: Regions.Purple, x: 180, y: 220 },
        { name: Cities.Billings, region: Regions.Purple, x: 345, y: 180 },
        { name: Cities.Cheyenne, region: Regions.Purple, x: 410, y: 280 },
        { name: Cities.Denver, region: Regions.Purple, x: 400, y: 333 },
        { name: Cities.Omaha, region: Regions.Purple, x: 566, y: 293 },
        { name: Cities.SanFrancisco, region: Regions.Cyan, x: 48, y: 371 },
        { name: Cities.LosAngeles, region: Regions.Cyan, x: 116, y: 460 },
        { name: Cities.SanDiego, region: Regions.Cyan, x: 157, y: 507 },
        { name: Cities.LasVegas, region: Regions.Cyan, x: 200, y: 410 },
        { name: Cities.SaltlakeCity, region: Regions.Cyan, x: 266, y: 311 },
        { name: Cities.Phoenix, region: Regions.Cyan, x: 260, y: 486 },
        { name: Cities.SantaFe, region: Regions.Cyan, x: 371, y: 435 },
        { name: Cities.KansasCity, region: Regions.Red, x: 587, y: 356 },
        { name: Cities.OklahomaCity, region: Regions.Red, x: 550, y: 437 },
        { name: Cities.Dallas, region: Regions.Red, x: 560, y: 504 },
        { name: Cities.Houston, region: Regions.Red, x: 569, y: 571 },
        { name: Cities.Menphis, region: Regions.Red, x: 678, y: 449 },
        { name: Cities.Birmingham, region: Regions.Red, x: 739, y: 486 },
        { name: Cities.NewOrleans, region: Regions.Red, x: 674, y: 570 },
        { name: Cities.Fargo, region: Regions.Yellow, x: 551, y: 152 },
        { name: Cities.Duluth, region: Regions.Yellow, x: 637, y: 133 },
        { name: Cities.Minneapolis, region: Regions.Yellow, x: 621, y: 190 },
        { name: Cities.Chicago, region: Regions.Yellow, x: 716, y: 281 },
        { name: Cities.StLouis, region: Regions.Yellow, x: 678, y: 362 },
        { name: Cities.Cincinnati, region: Regions.Yellow, x: 795, y: 348 },
        { name: Cities.Knoxvile, region: Regions.Yellow, x: 796, y: 422 },
        { name: Cities.Detroit, region: Regions.Brown, x: 803, y: 262 },
        { name: Cities.Buffalo, region: Regions.Brown, x: 913, y: 251 },
        { name: Cities.Pittsburgh, region: Regions.Brown, x: 884, y: 316 },
        { name: Cities.Boston, region: Regions.Brown, x: 1052, y: 252 },
        { name: Cities.NewYork, region: Regions.Brown, x: 1010, y: 290 },
        { name: Cities.Philadelphia, region: Regions.Brown, x: 985, y: 330 },
        { name: Cities.Washington, region: Regions.Brown, x: 934, y: 357 },
        { name: Cities.Horecin, region: Regions.Green, x: 969, y: 405 },
        { name: Cities.Raleigh, region: Regions.Green, x: 915, y: 437 },
        { name: Cities.Atlanta, region: Regions.Green, x: 801, y: 487 },
        { name: Cities.Savannah, region: Regions.Green, x: 867, y: 507 },
        { name: Cities.Jacksonvile, region: Regions.Green, x: 861, y: 559 },
        { name: Cities.Tampa, region: Regions.Green, x: 819, y: 621 },
        { name: Cities.Miami, region: Regions.Green, x: 883, y: 670 },
    ],
    connections: [
        { nodes: [Cities.Seattle, Cities.Portland], cost: 3 },
        { nodes: [Cities.Seattle, Cities.Boise], cost: 12 },
        { nodes: [Cities.Seattle, Cities.Billings], cost: 9 },
        { nodes: [Cities.Portland, Cities.Boise], cost: 13 },
        { nodes: [Cities.Portland, Cities.SanFrancisco], cost: 24 },
        { nodes: [Cities.Boise, Cities.Billings], cost: 12 },
        { nodes: [Cities.Boise, Cities.Cheyenne], cost: 24 },
        { nodes: [Cities.Boise, Cities.SanFrancisco], cost: 23 },
        { nodes: [Cities.Boise, Cities.SaltlakeCity], cost: 8 },
        { nodes: [Cities.Billings, Cities.Cheyenne], cost: 9 },
        { nodes: [Cities.Billings, Cities.Fargo], cost: 17 },
        { nodes: [Cities.Billings, Cities.Minneapolis], cost: 18 },
        { nodes: [Cities.Cheyenne, Cities.Denver], cost: 0 },
        { nodes: [Cities.Cheyenne, Cities.Omaha], cost: 14 },
        { nodes: [Cities.Cheyenne, Cities.Minneapolis], cost: 18 },
        { nodes: [Cities.Denver, Cities.SaltlakeCity], cost: 21 },
        { nodes: [Cities.Denver, Cities.SantaFe], cost: 13 },
        { nodes: [Cities.Denver, Cities.KansasCity], cost: 16 },
        { nodes: [Cities.Omaha, Cities.KansasCity], cost: 5 },
        { nodes: [Cities.Omaha, Cities.Minneapolis], cost: 8 },
        { nodes: [Cities.Omaha, Cities.Chicago], cost: 13 },
        { nodes: [Cities.SanFrancisco, Cities.LosAngeles], cost: 9 },
        { nodes: [Cities.SanFrancisco, Cities.LasVegas], cost: 14 },
        { nodes: [Cities.SanFrancisco, Cities.SaltlakeCity], cost: 27 },
        { nodes: [Cities.LosAngeles, Cities.SanDiego], cost: 3 },
        { nodes: [Cities.LosAngeles, Cities.LasVegas], cost: 9 },
        { nodes: [Cities.SanDiego, Cities.LasVegas], cost: 9 },
        { nodes: [Cities.SanDiego, Cities.Phoenix], cost: 14 },
        { nodes: [Cities.LasVegas, Cities.SaltlakeCity], cost: 18 },
        { nodes: [Cities.LasVegas, Cities.Phoenix], cost: 15 },
        { nodes: [Cities.LasVegas, Cities.SantaFe], cost: 27 },
        { nodes: [Cities.SaltlakeCity, Cities.SantaFe], cost: 28 },
        { nodes: [Cities.Phoenix, Cities.SantaFe], cost: 18 },
        { nodes: [Cities.SantaFe, Cities.KansasCity], cost: 16 },
        { nodes: [Cities.SantaFe, Cities.OklahomaCity], cost: 15 },
        { nodes: [Cities.SantaFe, Cities.Dallas], cost: 16 },
        { nodes: [Cities.SantaFe, Cities.Houston], cost: 21 },
        { nodes: [Cities.KansasCity, Cities.OklahomaCity], cost: 8 },
        { nodes: [Cities.KansasCity, Cities.Menphis], cost: 12 },
        { nodes: [Cities.KansasCity, Cities.Chicago], cost: 8 },
        { nodes: [Cities.KansasCity, Cities.StLouis], cost: 6 },
        { nodes: [Cities.OklahomaCity, Cities.Dallas], cost: 3 },
        { nodes: [Cities.OklahomaCity, Cities.Menphis], cost: 14 },
        { nodes: [Cities.Dallas, Cities.Houston], cost: 5 },
        { nodes: [Cities.Dallas, Cities.Menphis], cost: 12 },
        { nodes: [Cities.Dallas, Cities.NewOrleans], cost: 12 },
        { nodes: [Cities.Houston, Cities.NewOrleans], cost: 8 },
        { nodes: [Cities.Menphis, Cities.Birmingham], cost: 6 },
        { nodes: [Cities.Menphis, Cities.NewOrleans], cost: 7 },
        { nodes: [Cities.Menphis, Cities.StLouis], cost: 7 },
        { nodes: [Cities.Birmingham, Cities.NewOrleans], cost: 11 },
        { nodes: [Cities.Birmingham, Cities.Atlanta], cost: 3 },
        { nodes: [Cities.Birmingham, Cities.Jacksonvile], cost: 9 },
        { nodes: [Cities.NewOrleans, Cities.Jacksonvile], cost: 16 },
        { nodes: [Cities.Fargo, Cities.Duluth], cost: 6 },
        { nodes: [Cities.Fargo, Cities.Minneapolis], cost: 6 },
        { nodes: [Cities.Duluth, Cities.Minneapolis], cost: 5 },
        { nodes: [Cities.Duluth, Cities.Chicago], cost: 12 },
        { nodes: [Cities.Duluth, Cities.Detroit], cost: 15 },
        { nodes: [Cities.Minneapolis, Cities.Chicago], cost: 8 },
        { nodes: [Cities.Chicago, Cities.StLouis], cost: 10 },
        { nodes: [Cities.Chicago, Cities.Cincinnati], cost: 7 },
        { nodes: [Cities.Chicago, Cities.Detroit], cost: 7 },
        { nodes: [Cities.StLouis, Cities.Cincinnati], cost: 12 },
        { nodes: [Cities.StLouis, Cities.Atlanta], cost: 12 },
        { nodes: [Cities.Cincinnati, Cities.Knoxvile], cost: 6 },
        { nodes: [Cities.Cincinnati, Cities.Detroit], cost: 4 },
        { nodes: [Cities.Cincinnati, Cities.Pittsburgh], cost: 7 },
        { nodes: [Cities.Cincinnati, Cities.Raleigh], cost: 15 },
        { nodes: [Cities.Knoxvile, Cities.Atlanta], cost: 5 },
        { nodes: [Cities.Detroit, Cities.Buffalo], cost: 7 },
        { nodes: [Cities.Detroit, Cities.Pittsburgh], cost: 6 },
        { nodes: [Cities.Buffalo, Cities.Pittsburgh], cost: 7 },
        { nodes: [Cities.Buffalo, Cities.NewYork], cost: 8 },
        { nodes: [Cities.Pittsburgh, Cities.Washington], cost: 6 },
        { nodes: [Cities.Pittsburgh, Cities.Raleigh], cost: 7 },
        { nodes: [Cities.Boston, Cities.NewYork], cost: 3 },
        { nodes: [Cities.NewYork, Cities.Philadelphia], cost: 0 },
        { nodes: [Cities.Philadelphia, Cities.Washington], cost: 3 },
        { nodes: [Cities.Washington, Cities.Horecin], cost: 5 },
        { nodes: [Cities.Horecin, Cities.Raleigh], cost: 3 },
        { nodes: [Cities.Raleigh, Cities.Atlanta], cost: 7 },
        { nodes: [Cities.Raleigh, Cities.Savannah], cost: 7 },
        { nodes: [Cities.Atlanta, Cities.Savannah], cost: 7 },
        { nodes: [Cities.Savannah, Cities.Jacksonvile], cost: 0 },
        { nodes: [Cities.Jacksonvile, Cities.Tampa], cost: 4 },
        { nodes: [Cities.Tampa, Cities.Miami], cost: 4 },
    ],
    layout: 'Landscape',
    polygons: [
        {
            region: Regions.Brown,
            points: [
                [930, 423],
                [1082, 331],
                [1075, 231],
                [716, 249],
                [758, 303],
                [897, 406],
            ],
        },
        {
            region: Regions.Green,
            points: [
                [898, 405],
                [762, 499],
                [758, 643],
                [887, 744],
                [938, 688],
                [889, 618],
                [1014, 432],
                [985, 387],
                [929, 420],
            ],
        },
        {
            region: Regions.Yellow,
            points: [
                [895, 403],
                [760, 499],
                [630, 393],
                [607, 345],
                [608, 275],
                [439, 162],
                [654, 114],
                [771, 245],
                [716, 247],
                [758, 301],
            ],
        },
        {
            region: Regions.Red,
            points: [
                [606, 344],
                [476, 371],
                [445, 597],
                [546, 664],
                [758, 641],
                [760, 497],
                [629, 391],
            ],
        },
        {
            region: Regions.Purple,
            points: [
                [606, 342],
                [476, 369],
                [347, 395],
                [313, 301],
                [18, 287],
                [18, 165],
                [76, 74],
                [438, 160],
                [607, 275],
            ],
        },
        {
            region: Regions.Cyan,
            points: [
                [18, 285],
                [20, 429],
                [142, 583],
                [445, 594],
                [476, 368],
                [346, 392],
                [312, 300],
            ],
        },
    ],
};

export const mapRecharged: GameMap = {
    name: 'USA',
    cities: [
        { name: Cities.Seattle, region: Regions.Purple, x: 74, y: 99 },
        { name: Cities.Portland, region: Regions.Purple, x: 45, y: 167 },
        { name: Cities.Boise, region: Regions.Purple, x: 180, y: 220 },
        { name: Cities.Billings, region: Regions.Purple, x: 345, y: 180 },
        { name: Cities.Cheyenne, region: Regions.Purple, x: 410, y: 280 },
        { name: Cities.Denver, region: Regions.Purple, x: 400, y: 333 },
        { name: Cities.Omaha, region: Regions.Purple, x: 566, y: 293 },
        { name: Cities.SanFrancisco, region: Regions.Cyan, x: 48, y: 371 },
        { name: Cities.LosAngeles, region: Regions.Cyan, x: 116, y: 460 },
        { name: Cities.SanDiego, region: Regions.Cyan, x: 157, y: 507 },
        { name: Cities.LasVegas, region: Regions.Cyan, x: 200, y: 410 },
        { name: Cities.SaltlakeCity, region: Regions.Cyan, x: 266, y: 311 },
        { name: Cities.Phoenix, region: Regions.Cyan, x: 260, y: 486 },
        { name: Cities.SantaFe, region: Regions.Cyan, x: 371, y: 435 },
        { name: Cities.KansasCity, region: Regions.Red, x: 587, y: 356 },
        { name: Cities.OklahomaCity, region: Regions.Red, x: 550, y: 437 },
        { name: Cities.Dallas, region: Regions.Red, x: 560, y: 504 },
        { name: Cities.Houston, region: Regions.Red, x: 569, y: 571 },
        { name: Cities.Menphis, region: Regions.Red, x: 678, y: 449 },
        { name: Cities.Birmingham, region: Regions.Red, x: 739, y: 486 },
        { name: Cities.NewOrleans, region: Regions.Red, x: 674, y: 570 },
        { name: Cities.Fargo, region: Regions.Yellow, x: 551, y: 152 },
        { name: Cities.Duluth, region: Regions.Yellow, x: 637, y: 133 },
        { name: Cities.Minneapolis, region: Regions.Yellow, x: 621, y: 190 },
        { name: Cities.Chicago, region: Regions.Yellow, x: 716, y: 281 },
        { name: Cities.StLouis, region: Regions.Yellow, x: 678, y: 362 },
        { name: Cities.Cincinnati, region: Regions.Yellow, x: 795, y: 348 },
        { name: Cities.Knoxvile, region: Regions.Yellow, x: 796, y: 422 },
        { name: Cities.Detroit, region: Regions.Brown, x: 803, y: 262 },
        { name: Cities.Buffalo, region: Regions.Brown, x: 913, y: 251 },
        { name: Cities.Pittsburgh, region: Regions.Brown, x: 884, y: 316 },
        { name: Cities.Boston, region: Regions.Brown, x: 1052, y: 252 },
        { name: Cities.NewYork, region: Regions.Brown, x: 1010, y: 290 },
        { name: Cities.Philadelphia, region: Regions.Brown, x: 985, y: 330 },
        { name: Cities.Washington, region: Regions.Brown, x: 934, y: 357 },
        { name: Cities.Horecin, region: Regions.Green, x: 969, y: 405 },
        { name: Cities.Raleigh, region: Regions.Green, x: 915, y: 437 },
        { name: Cities.Atlanta, region: Regions.Green, x: 801, y: 487 },
        { name: Cities.Savannah, region: Regions.Green, x: 867, y: 507 },
        { name: Cities.Jacksonvile, region: Regions.Green, x: 861, y: 559 },
        { name: Cities.Tampa, region: Regions.Green, x: 819, y: 621 },
        { name: Cities.Miami, region: Regions.Green, x: 883, y: 670 },
    ],
    connections: [
        { nodes: [Cities.Seattle, Cities.Portland], cost: 3 },
        { nodes: [Cities.Seattle, Cities.Boise], cost: 12 },
        { nodes: [Cities.Seattle, Cities.Billings], cost: 9 },
        { nodes: [Cities.Portland, Cities.Boise], cost: 13 },
        { nodes: [Cities.Portland, Cities.SanFrancisco], cost: 24 },
        { nodes: [Cities.Boise, Cities.Billings], cost: 12 },
        { nodes: [Cities.Boise, Cities.SanFrancisco], cost: 23 },
        { nodes: [Cities.Boise, Cities.SaltlakeCity], cost: 8 },
        { nodes: [Cities.Billings, Cities.Cheyenne], cost: 9 },
        { nodes: [Cities.Billings, Cities.Fargo], cost: 17 },
        { nodes: [Cities.Billings, Cities.Minneapolis], cost: 18 },
        { nodes: [Cities.Cheyenne, Cities.Denver], cost: 0 },
        { nodes: [Cities.Cheyenne, Cities.Omaha], cost: 14 },
        { nodes: [Cities.Cheyenne, Cities.Minneapolis], cost: 18 },
        { nodes: [Cities.Denver, Cities.SaltlakeCity], cost: 21 },
        { nodes: [Cities.Denver, Cities.SantaFe], cost: 13 },
        { nodes: [Cities.Denver, Cities.KansasCity], cost: 16 },
        { nodes: [Cities.Omaha, Cities.KansasCity], cost: 5 },
        { nodes: [Cities.Omaha, Cities.Minneapolis], cost: 8 },
        { nodes: [Cities.Omaha, Cities.Chicago], cost: 12 },
        { nodes: [Cities.SanFrancisco, Cities.LosAngeles], cost: 9 },
        { nodes: [Cities.SanFrancisco, Cities.LasVegas], cost: 14 },
        { nodes: [Cities.SanFrancisco, Cities.SaltlakeCity], cost: 27 },
        { nodes: [Cities.LosAngeles, Cities.SanDiego], cost: 3 },
        { nodes: [Cities.LosAngeles, Cities.LasVegas], cost: 9 },
        { nodes: [Cities.SanDiego, Cities.LasVegas], cost: 9 },
        { nodes: [Cities.SanDiego, Cities.Phoenix], cost: 14 },
        { nodes: [Cities.LasVegas, Cities.SaltlakeCity], cost: 18 },
        { nodes: [Cities.LasVegas, Cities.Phoenix], cost: 15 },
        { nodes: [Cities.LasVegas, Cities.SantaFe], cost: 27 },
        { nodes: [Cities.SaltlakeCity, Cities.SantaFe], cost: 28 },
        { nodes: [Cities.Phoenix, Cities.SantaFe], cost: 18 },
        { nodes: [Cities.SantaFe, Cities.KansasCity], cost: 16 },
        { nodes: [Cities.SantaFe, Cities.OklahomaCity], cost: 15 },
        { nodes: [Cities.SantaFe, Cities.Dallas], cost: 16 },
        { nodes: [Cities.SantaFe, Cities.Houston], cost: 20 },
        { nodes: [Cities.KansasCity, Cities.OklahomaCity], cost: 8 },
        { nodes: [Cities.KansasCity, Cities.Menphis], cost: 12 },
        { nodes: [Cities.KansasCity, Cities.Chicago], cost: 8 },
        { nodes: [Cities.KansasCity, Cities.StLouis], cost: 6 },
        { nodes: [Cities.OklahomaCity, Cities.Dallas], cost: 3 },
        { nodes: [Cities.OklahomaCity, Cities.Menphis], cost: 14 },
        { nodes: [Cities.Dallas, Cities.Houston], cost: 5 },
        { nodes: [Cities.Dallas, Cities.Menphis], cost: 12 },
        { nodes: [Cities.Dallas, Cities.NewOrleans], cost: 12 },
        { nodes: [Cities.Houston, Cities.NewOrleans], cost: 8 },
        { nodes: [Cities.Menphis, Cities.Birmingham], cost: 6 },
        { nodes: [Cities.Menphis, Cities.NewOrleans], cost: 7 },
        { nodes: [Cities.Menphis, Cities.StLouis], cost: 7 },
        { nodes: [Cities.Birmingham, Cities.NewOrleans], cost: 11 },
        { nodes: [Cities.Birmingham, Cities.Atlanta], cost: 3 },
        { nodes: [Cities.Birmingham, Cities.Jacksonvile], cost: 9 },
        { nodes: [Cities.NewOrleans, Cities.Jacksonvile], cost: 16 },
        { nodes: [Cities.Fargo, Cities.Duluth], cost: 6 },
        { nodes: [Cities.Fargo, Cities.Minneapolis], cost: 6 },
        { nodes: [Cities.Duluth, Cities.Minneapolis], cost: 5 },
        { nodes: [Cities.Duluth, Cities.Chicago], cost: 12 },
        { nodes: [Cities.Duluth, Cities.Detroit], cost: 15 },
        { nodes: [Cities.Minneapolis, Cities.Chicago], cost: 8 },
        { nodes: [Cities.Chicago, Cities.StLouis], cost: 10 },
        { nodes: [Cities.Chicago, Cities.Cincinnati], cost: 7 },
        { nodes: [Cities.Chicago, Cities.Detroit], cost: 7 },
        { nodes: [Cities.StLouis, Cities.Cincinnati], cost: 12 },
        { nodes: [Cities.StLouis, Cities.Atlanta], cost: 12 },
        { nodes: [Cities.Cincinnati, Cities.Knoxvile], cost: 6 },
        { nodes: [Cities.Cincinnati, Cities.Detroit], cost: 4 },
        { nodes: [Cities.Cincinnati, Cities.Pittsburgh], cost: 7 },
        { nodes: [Cities.Knoxvile, Cities.Atlanta], cost: 5 },
        { nodes: [Cities.Knoxvile, Cities.Raleigh], cost: 11 },
        { nodes: [Cities.Detroit, Cities.Buffalo], cost: 7 },
        { nodes: [Cities.Detroit, Cities.Pittsburgh], cost: 6 },
        { nodes: [Cities.Buffalo, Cities.Pittsburgh], cost: 7 },
        { nodes: [Cities.Buffalo, Cities.NewYork], cost: 8 },
        { nodes: [Cities.Pittsburgh, Cities.Washington], cost: 6 },
        { nodes: [Cities.Pittsburgh, Cities.Raleigh], cost: 7 },
        { nodes: [Cities.Boston, Cities.NewYork], cost: 3 },
        { nodes: [Cities.NewYork, Cities.Philadelphia], cost: 0 },
        { nodes: [Cities.Philadelphia, Cities.Washington], cost: 3 },
        { nodes: [Cities.Washington, Cities.Horecin], cost: 5 },
        { nodes: [Cities.Horecin, Cities.Raleigh], cost: 3 },
        { nodes: [Cities.Raleigh, Cities.Atlanta], cost: 7 },
        { nodes: [Cities.Raleigh, Cities.Savannah], cost: 7 },
        { nodes: [Cities.Atlanta, Cities.Savannah], cost: 7 },
        { nodes: [Cities.Savannah, Cities.Jacksonvile], cost: 0 },
        { nodes: [Cities.Jacksonvile, Cities.Tampa], cost: 4 },
        { nodes: [Cities.Tampa, Cities.Miami], cost: 4 },
    ],
    layout: 'Landscape',
    mapSpecificRules: 'You can buy coal from the supply for $8.',
};
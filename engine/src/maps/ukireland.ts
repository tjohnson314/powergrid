import { GameMap } from './../maps';

export enum Regions {
    Red = 'red',
    Pink = 'pink',
    Yellow = 'yellow',
    Brown = 'brown',
    Orange = 'orange',
    Green = 'green',
}

export enum Cities {
    Norwich = 'Norwich',
    London1 = 'London 1',
    London2 = 'London 2',
    Brighton = 'Brighton',
    Southampton = 'Southampton',
    Plymouth = 'Plymouth',
    Leicester = 'Leicester',
    Bristol = 'Bristol',
    Newcastleupontyne = 'Newcastle Upon Tyne',
    Leeds = 'Leeds',
    Sheffield = 'Sheffield',
    Nottingham = 'Nottingham',
    Birmingham = 'Birmingham',
    Manchester = 'Manchester',
    Liverpool = 'Liverpool',
    Newportcasnewydd = 'Newport Casnewydd',
    Bangor = 'Bangor',
    Aberystwyth = 'Aberystwyth',
    Swanseaabertawe = 'Swansea Abertawe',
    Cardiffcaerdydd = 'Cardiff Caerdydd',
    Haverfordwesthwlffordd = 'Haverfordwest Hwlffordd',
    Invernessinbhirnis = 'Inverness Inbhir Nis',
    Aberdeenobardheathain = 'Aberdeen Obar Dheathain',
    Dundeedundeach = 'Dundee Dun Deach',
    Perthpeairt = 'Perth Peairt',
    Edinburgh = 'Edinburgh',
    Dumfries = 'Dumfries',
    Glasgow = 'Glasgow',
    Coleraine = 'Coleraine',
    Derry = 'Derry',
    Belfast = 'Belfast',
    Newry = 'Newry',
    Omagh = 'Omagh',
    Sligo = 'Sligo',
    Dublin = 'Dublin',
    Waterford = 'Waterford',
    Cork = 'Cork',
    Athlone = 'Athlone',
    Galway = 'Galway',
    Limerick = 'Limerick',
}

export const map: GameMap = {
    name: 'UK & Ireland',
    cities: [
        { name: Cities.Norwich, region: Regions.Red, x: 646, y: 702 },
        { name: Cities.London1, region: Regions.Red, x: 554, y: 756 },
        { name: Cities.London2, region: Regions.Red, x: 550, y: 780 },
        { name: Cities.Brighton, region: Regions.Red, x: 537, y: 837 },
        { name: Cities.Southampton, region: Regions.Red, x: 451, y: 805 },
        { name: Cities.Plymouth, region: Regions.Red, x: 312, y: 814 },
        { name: Cities.Leicester, region: Regions.Red, x: 540, y: 680 },
        { name: Cities.Bristol, region: Regions.Red, x: 425, y: 762 },
        { name: Cities.Newcastleupontyne, region: Regions.Pink, x: 550, y: 414 },
        { name: Cities.Leeds, region: Regions.Pink, x: 559, y: 541 },
        { name: Cities.Sheffield, region: Regions.Pink, x: 530, y: 590 },
        { name: Cities.Nottingham, region: Regions.Pink, x: 531, y: 632 },
        { name: Cities.Birmingham, region: Regions.Pink, x: 465, y: 663 },
        { name: Cities.Manchester, region: Regions.Pink, x: 479, y: 543 },
        { name: Cities.Liverpool, region: Regions.Pink, x: 433, y: 576 },
        { name: Cities.Newportcasnewydd, region: Regions.Yellow, x: 425, y: 722 },
        { name: Cities.Bangor, region: Regions.Yellow, x: 348, y: 574 },
        { name: Cities.Aberystwyth, region: Regions.Yellow, x: 357, y: 639 },
        { name: Cities.Swanseaabertawe, region: Regions.Yellow, x: 346, y: 706 },
        { name: Cities.Cardiffcaerdydd, region: Regions.Yellow, x: 357, y: 741 },
        { name: Cities.Haverfordwesthwlffordd, region: Regions.Yellow, x: 303, y: 673 },
        { name: Cities.Invernessinbhirnis, region: Regions.Brown, x: 479, y: 208 },
        { name: Cities.Aberdeenobardheathain, region: Regions.Brown, x: 588, y: 245 },
        { name: Cities.Dundeedundeach, region: Regions.Brown, x: 552, y: 286 },
        { name: Cities.Perthpeairt, region: Regions.Brown, x: 489, y: 307 },
        { name: Cities.Edinburgh, region: Regions.Brown, x: 494, y: 350 },
        { name: Cities.Dumfries, region: Regions.Brown, x: 441, y: 417 },
        { name: Cities.Glasgow, region: Regions.Brown, x: 422, y: 335 },
        { name: Cities.Coleraine, region: Regions.Orange, x: 330, y: 367 },
        { name: Cities.Derry, region: Regions.Orange, x: 256, y: 362 },
        { name: Cities.Belfast, region: Regions.Orange, x: 342, y: 421 },
        { name: Cities.Newry, region: Regions.Orange, x: 298, y: 462 },
        { name: Cities.Omagh, region: Regions.Orange, x: 260, y: 403 },
        { name: Cities.Sligo, region: Regions.Green, x: 181, y: 411 },
        { name: Cities.Dublin, region: Regions.Green, x: 274, y: 530 },
        { name: Cities.Waterford, region: Regions.Green, x: 210, y: 611 },
        { name: Cities.Cork, region: Regions.Green, x: 114, y: 626 },
        { name: Cities.Athlone, region: Regions.Green, x: 200, y: 489 },
        { name: Cities.Galway, region: Regions.Green, x: 112, y: 486 },
        { name: Cities.Limerick, region: Regions.Green, x: 122, y: 546 },
    ],
    connections: [
        { nodes: [Cities.Nottingham, Cities.Leicester], cost: 4 },
        { nodes: [Cities.London1, Cities.London2], cost: 0 },
        { nodes: [Cities.London2, Cities.Brighton], cost: 6 },
        { nodes: [Cities.Brighton, Cities.Southampton], cost: 7 },
        { nodes: [Cities.Southampton, Cities.Plymouth], cost: 19 },
        { nodes: [Cities.Plymouth, Cities.Bristol], cost: 14 },
        { nodes: [Cities.Bristol, Cities.Newportcasnewydd], cost: 7 },
        { nodes: [Cities.Cardiffcaerdydd, Cities.Swanseaabertawe], cost: 7 },
        { nodes: [Cities.Swanseaabertawe, Cities.Newportcasnewydd], cost: 8 },
        { nodes: [Cities.Newportcasnewydd, Cities.Cardiffcaerdydd], cost: 3 },
        { nodes: [Cities.Bristol, Cities.Southampton], cost: 11 },
        { nodes: [Cities.Southampton, Cities.London2], cost: 9 },
        { nodes: [Cities.London2, Cities.Bristol], cost: 14 },
        { nodes: [Cities.London1, Cities.Newportcasnewydd], cost: 16 },
        { nodes: [Cities.Haverfordwesthwlffordd, Cities.Aberystwyth], cost: 9 },
        { nodes: [Cities.Haverfordwesthwlffordd, Cities.Swanseaabertawe], cost: 8 },
        { nodes: [Cities.Swanseaabertawe, Cities.Aberystwyth], cost: 11 },
        { nodes: [Cities.Aberystwyth, Cities.Bangor], cost: 11 },
        { nodes: [Cities.Bangor, Cities.Liverpool], cost: 9 },
        { nodes: [Cities.Liverpool, Cities.Aberystwyth], cost: 16 },
        { nodes: [Cities.Aberystwyth, Cities.Newportcasnewydd], cost: 14 },
        { nodes: [Cities.Aberystwyth, Cities.Birmingham], cost: 16 },
        { nodes: [Cities.Birmingham, Cities.Liverpool], cost: 12 },
        { nodes: [Cities.Birmingham, Cities.Newportcasnewydd], cost: 9 },
        { nodes: [Cities.London1, Cities.Norwich], cost: 11 },
        { nodes: [Cities.Norwich, Cities.Leicester], cost: 12 },
        { nodes: [Cities.Leicester, Cities.London1], cost: 10 },
        { nodes: [Cities.London1, Cities.Birmingham], cost: 13 },
        { nodes: [Cities.Birmingham, Cities.Leicester], cost: 6 },
        { nodes: [Cities.Birmingham, Cities.Nottingham], cost: 7 },
        { nodes: [Cities.Nottingham, Cities.Sheffield], cost: 6 },
        { nodes: [Cities.Sheffield, Cities.Leeds], cost: 5 },
        { nodes: [Cities.Leeds, Cities.Manchester], cost: 8 },
        { nodes: [Cities.Manchester, Cities.Sheffield], cost: 8 },
        { nodes: [Cities.Sheffield, Cities.Liverpool], cost: 12 },
        { nodes: [Cities.Liverpool, Cities.Nottingham], cost: 15 },
        { nodes: [Cities.Manchester, Cities.Dumfries], cost: 18 },
        { nodes: [Cities.Manchester, Cities.Newcastleupontyne], cost: 15 },
        { nodes: [Cities.Newcastleupontyne, Cities.Dumfries], cost: 12 },
        { nodes: [Cities.Dumfries, Cities.Edinburgh], cost: 12 },
        { nodes: [Cities.Edinburgh, Cities.Newcastleupontyne], cost: 13 },
        { nodes: [Cities.Newcastleupontyne, Cities.Leeds], cost: 13 },
        { nodes: [Cities.Dumfries, Cities.Glasgow], cost: 11 },
        { nodes: [Cities.Glasgow, Cities.Edinburgh], cost: 7 },
        { nodes: [Cities.Glasgow, Cities.Perthpeairt], cost: 10 },
        { nodes: [Cities.Perthpeairt, Cities.Dundeedundeach], cost: 3 },
        { nodes: [Cities.Glasgow, Cities.Invernessinbhirnis], cost: 20 },
        { nodes: [Cities.Invernessinbhirnis, Cities.Perthpeairt], cost: 14 },
        { nodes: [Cities.Invernessinbhirnis, Cities.Dundeedundeach], cost: 14 },
        { nodes: [Cities.Invernessinbhirnis, Cities.Aberdeenobardheathain], cost: 15 },
        { nodes: [Cities.Aberdeenobardheathain, Cities.Dundeedundeach], cost: 10 },
        { nodes: [Cities.Limerick, Cities.Cork], cost: 12 },
        { nodes: [Cities.Cork, Cities.Waterford], cost: 8 },
        { nodes: [Cities.Waterford, Cities.Limerick], cost: 11 },
        { nodes: [Cities.Limerick, Cities.Galway], cost: 10 },
        { nodes: [Cities.Galway, Cities.Sligo], cost: 10 },
        { nodes: [Cities.Sligo, Cities.Derry], cost: 10 },
        { nodes: [Cities.Derry, Cities.Coleraine], cost: 6 },
        { nodes: [Cities.Coleraine, Cities.Belfast], cost: 8 },
        { nodes: [Cities.Belfast, Cities.Newry], cost: 6 },
        { nodes: [Cities.Newry, Cities.Dublin], cost: 10 },
        { nodes: [Cities.Dublin, Cities.Waterford], cost: 13 },
        { nodes: [Cities.Galway, Cities.Athlone], cost: 8 },
        { nodes: [Cities.Athlone, Cities.Sligo], cost: 9 },
        { nodes: [Cities.Athlone, Cities.Limerick], cost: 9 },
        { nodes: [Cities.Limerick, Cities.Dublin], cost: 16 },
        { nodes: [Cities.Dublin, Cities.Athlone], cost: 9 },
        { nodes: [Cities.Athlone, Cities.Newry], cost: 12 },
        { nodes: [Cities.Athlone, Cities.Omagh], cost: 14 },
        { nodes: [Cities.Omagh, Cities.Newry], cost: 8 },
        { nodes: [Cities.Omagh, Cities.Belfast], cost: 10 },
        { nodes: [Cities.Belfast, Cities.Derry], cost: 10 },
        { nodes: [Cities.Omagh, Cities.Derry], cost: 5 },
        { nodes: [Cities.Omagh, Cities.Sligo], cost: 10 },
    ],
};

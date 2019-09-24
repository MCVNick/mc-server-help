const createItems = () => {
    const calcPrice = (price) => {
        if(price < 64) {
            return `${price}B`
        } else if (price < 4096) {
            return `${Math.floor(price/64)}C ${(price - Math.floor(price/64)*64)}B`
        } else if (price < 262144) {
            return `${Math.floor(price/(64*64))}S ${(price - Math.floor(price/(64*64))*64*64)/64}C`
        } else if (price < 16777216) {
            return `${Math.floor(price/(64*64*64))}G ${(price - Math.floor(price/(64*64*64))*64*64*64)/(64*64)}S`
        } else {
            return `${Math.floor(price/(64*64*64*64))}P ${(price - Math.floor(price/(64*64*64*64))*64*64*64*64)/(64*64*64)}S`
        }
    }
    
    const multipliers = {
        // buyTax: .12,
        // saleTax: .12,
        // buy: {
        //     gradeS: 0.90,
        //     gradeA: 0.95,
        //     gradeB: 1.00,
        //     gradeC: 1.00,
        //     gradeD: 1.05,
        //     gradeF: 1.10
        // },
        // sell: {
        //     gradeS: 1.10,
        //     gradeA: 1.05,
        //     gradeB: 1.00,
        //     gradeC: 1.00,
        //     gradeD: 0.95,
        //     gradeF: 0.90
        // },
        smelt: {
            gradeS: 1.30,
            gradeA: 1.20,
            gradeB: 1.10,
            gradeC: 0.90,
            gradeD: 0.80,
            gradeF: 0.70
        },
        craft: {
            gradeS: 1.45,
            gradeA: 1.30,
            gradeB: 1.15,
            gradeC: 0.90,
            gradeD: 0.80,
            gradeF: 0.70
        },
        grow: {
            gradeS: 2.50,
            gradeA: 2.00,
            gradeB: 1.50,
            gradeC: 0.75,
            gradeD: 0.50,
            gradeF: 0.25
        },
        tier: {
            gradeS: 1.45,
            gradeA: 1.30,
            gradeB: 1.15,
            gradeC: 1.00,
            gradeD: 1.00,
            gradeF: 1.00
        }
    }

    const { smelt, craft, grow, tier } = multipliers

    const tierF = {
        gravel: {
            "id": "gravel",
            "name": "Gravel",
            "meta": 0,
            "base_price": 1,
            "price": calcPrice(1)
        },
        cobblestone: {
            "id": "cobblestone",
            "name": "Cobblestone",
            "meta": 0,
            "base_price": 1,
            "price": calcPrice(1)
        },
        dirt: {
            "id": "dirt",
            "name": "Dirt",
            "meta": 0,
            "base_price": 1,
            "price": calcPrice(1)
        },
        oak_sapling: {
            "id": "sapling",
            "name": "Oak Sapling",
            "meta": 0,
            "base_price": 4,
            "price": calcPrice(4)
        },
        spruce_sapling: {
            "id": "sapling",
            "name": "Spruce Sapling",
            "meta": 1,
            "base_price": 4,
            "price": calcPrice(4)
        },
        birch_sapling: {
            "id": "sapling",
            "name": "Birch Sapling",
            "meta": 2,
            "base_price": 4,
            "price": calcPrice(4)
        },
        jungle_sapling: {
            "id": "sapling",
            "name": "Jungle Sapling",
            "meta": 3,
            "base_price": 4,
            "price": calcPrice(4)
        },
        acacia_sapling: {
            "id": "sapling",
            "name": "Acacia Sapling",
            "meta": 4,
            "base_price": 4,
            "price": calcPrice(4)
        },
        dark_oak_sapling: {
            "id": "sapling",
            "name": "Dark Oak Sapling",
            "meta": 5,
            "base_price": 4,
            "price": calcPrice(4)
        },
        sand: {
            "id": "sand",
            "name": "Sand",
            "meta": 0,
            "base_price": 1,
            "price": calcPrice(1)
        },
        wet_sponge: {
            "id": "sponge",
            "name": "Wet Sponge",
            "meta": 1,
            "base_price": 1,
            "price": calcPrice(1)
        },
    }
    
    const tierD = {
        coarse_dirt: {
            "id": "dirt",
            "name": "Coarse Dirt",
            "meta": 1,
            "base_price": ((tierF.dirt.base_price * 2 + tierF.gravel.base_price * 2) / 4) * tier.gradeD * craft.gradeC,
            "price": calcPrice(((tierF.dirt.base_price * 2 + tierF.gravel.base_price * 2) / 4) * tier.gradeD * craft.gradeC)
        },
        stone: {
            "id": "stone",
            "name": "Stone",
            "meta": 0,
            "base_price": tierF.cobblestone.base_price * tier.gradeD * smelt.gradeB,
            "price": calcPrice(tierF.cobblestone.base_price * tier.gradeD * smelt.gradeB)
        },
        red_sand: {
            "id": "sand",
            "name": "Red Sand",
            "meta": 1,
            "base_price": tierF.cobblestone.base_price * tier.gradeD * smelt.gradeB,
            "price": calcPrice(tierF.cobblestone.base_price * tier.gradeD * smelt.gradeB)
        },
        oak_wood: {
            "id": "log",
            "name": "Oak Wood",
            "meta": 0,
            "base_price": tierF.oak_sapling.base_price * 4 * tier.gradeD,
            "price": calcPrice(tierF.oak_sapling.base_price * 4 * tier.gradeD)
        },
        spruce_wood: {
            "id": "log",
            "name": "Spruce Wood",
            "meta": 1,
            "base_price": tierF.spruce_sapling.base_price * 4 * tier.gradeD,
            "price": calcPrice(tierF.spruce_sapling.base_price * 4 * tier.gradeD)
        },
        birch_wood: {
            "id": "log",
            "name": "Birch Wood",
            "meta": 2,
            "base_price": tierF.birch_sapling.base_price * 4 * tier.gradeD,
            "price": calcPrice(tierF.birch_sapling.base_price * 4 * tier.gradeD)
        },
        jungle_wood: {
            "id": "log",
            "name": "Jungle Wood",
            "meta": 3,
            "base_price": tierF.jungle_sapling.base_price * 4 * tier.gradeD,
            "price": calcPrice(tierF.jungle_sapling.base_price * 4 * tier.gradeD)
        },
        oak_leaves: {
            "id": "leaves",
            "name": "Oak Leaves",
            "meta": 0,
            "base_price": tierF.oak_sapling.base_price * tier.gradeD / 4,
            "price": calcPrice(tierF.oak_sapling.base_price * tier.gradeD / 4)
        },
        spruce_leaves: {
            "id": "leaves",
            "name": "Spruce Leaves",
            "meta": 1,
            "base_price": tierF.spruce_sapling.base_price * tier.gradeD / 4,
            "price": calcPrice(tierF.spruce_sapling.base_price * tier.gradeD / 4)
        },
        birch_leaves: {
            "id": "leaves",
            "name": "Birch Leaves",
            "meta": 2,
            "base_price": tierF.birch_sapling.base_price * tier.gradeD / 4,
            "price": calcPrice(tierF.birch_sapling.base_price * tier.gradeD / 4)
        },
        jungle_leaves: {
            "id": "leaves",
            "name": "Jungle Leaves",
            "meta": 3,
            "base_price": tierF.jungle_sapling.base_price * tier.gradeD / 4,
            "price": calcPrice(tierF.jungle_sapling.base_price * tier.gradeD / 4)
        },
        glass: {
            "id": "glass",
            "name": "Glass",
            "meta": 0,
            "base_price": tierF.sand.base_price * tier.gradeD * smelt.gradeA,
            "price": calcPrice(tierF.sand.base_price * tier.gradeD * smelt.gradeA)
        },
        sandstone: {
            "id": "sandstone",
            "name": "Sandstone",
            "meta": 0,
            "base_price": tierF.sand.base_price * tier.gradeD * 4 * craft.gradeB,
            "price": calcPrice(tierF.sand.base_price * tier.gradeD * 4 * craft.gradeB)
        },
    }

    const tierC = {
        granite: {
            "id": "stone",
            "name": "Granite",
            "meta": 1,
            "base_price": tierD.stone.base_price * tier.gradeC,
            "price": calcPrice(tierD.stone.base_price * tier.gradeC)
        },
        oak_wood_planks: {
            "id": "planks",
            "name": "Oak Wood Planks",
            "meta": 0,
            "base_price": tierD.oak_wood.base_price * tier.gradeC * craft.gradeB / 4,
            "price": calcPrice(tierD.oak_wood.base_price * tier.gradeC * craft.gradeB / 4)
        },
        spruce_wood_planks: {
            "id": "planks",
            "name": "Spruce Wood Planks",
            "meta": 1,
            "base_price": tierD.spruce_wood.base_price * tier.gradeC * craft.gradeB / 4,
            "price": calcPrice(tierD.spruce_wood.base_price * tier.gradeC * craft.gradeB / 4)
        },
        birch_wood_planks: {
            "id": "planks",
            "name": "Birch Wood Planks",
            "meta": 2,
            "base_price": tierD.birch_wood.base_price * tier.gradeC * craft.gradeB / 4,
            "price": calcPrice(tierD.birch_wood.base_price * tier.gradeC * craft.gradeB / 4)
        },
        jungle_wood_planks: {
            "id": "planks",
            "name": "Jungle Wood Planks",
            "meta": 3,
            "base_price": tierD.jungle_wood.base_price * tier.gradeC * craft.gradeB / 4,
            "price": calcPrice(tierD.jungle_wood.base_price * tier.gradeC * craft.gradeB / 4)
        },
        acacia_wood_planks: {
            "id": "planks",
            "name": "Acacia Wood Planks",
            "meta": 4,
            "base_price": tierD.oak_wood.base_price * tier.gradeC * craft.gradeB / 4,
            "price": calcPrice(tierD.oak_wood.base_price * tier.gradeC * craft.gradeB / 4)
        },
        dark_oak_wood_planks: {
            "id": "planks",
            "name": "Dark Oak Wood Planks",
            "meta": 5,
            "base_price": tierD.oak_wood.base_price * tier.gradeC * craft.gradeB / 4,
            "price": calcPrice(tierD.oak_wood.base_price * tier.gradeC * craft.gradeB / 4)
        },
        chiseled_sandstone: {
            "id": "sandstone",
            "name": "Chiseled Sandstone",
            "meta": 1,
            "base_price": tierD.sandstone.base_price * tier.gradeC,
            "price": calcPrice(tierD.sandstone.base_price * tier.gradeC)
        },
    }

    const tierB = {
        polished_granite: {
            "id": "stone",
            "name": "Polished Granite",
            "meta": 2,
            "base_price": tierC.granite.base_price * tier.gradeB * craft.gradeB,
            "price": calcPrice(tierC.granite.base_price * tier.gradeB * craft.gradeB)
        },
        diorite: {
            "id": "stone",
            "name": "Diorite",
            "meta": 3,
            "base_price": tierC.granite.base_price * tier.gradeB,
            "price": calcPrice(tierC.granite.base_price * tier.gradeB)
        },
        grass: {
            "id": "grass",
            "name": "Grass",
            "meta": 0,
            "base_price": tierF.dirt.base_price * tier.gradeB * grow.gradeB,
            "price": calcPrice(tierF.dirt.base_price * tier.gradeB * grow.gradeB)
        },
        sponge: {
            "id": "sponge",
            "name": "Sponge",
            "meta": 0,
            "base_price": tierF.wet_sponge.base_price * tier.gradeB * smelt.gradeB,
            "price": calcPrice(tierF.wet_sponge.base_price * tier.gradeB * smelt.gradeB)
        },
        smooth_sandstone: {
            "id": "sandstone",
            "name": "Smooth Sandstone",
            "meta": 2,
            "base_price": tierD.sandstone.base_price * tier.gradeB * smelt.gradeA,
            "price": calcPrice(tierD.sandstone.base_price * tier.gradeB * smelt.gradeA)
        },
    }

    const tierA = {
        polished_diorite: {
            "id": "stone",
            "name": "Polished Diorite",
            "meta": 4,
            "base_price": tierB.diorite.base_price * tier.gradeA * craft.gradeB,
            "price": calcPrice(tierB.diorite.base_price * tier.gradeA * craft.gradeB)
        },
        andesite: {
            "id": "stone",
            "name": "Andesite",
            "meta": 5,
            "base_price": tierB.diorite.base_price * tier.gradeA,
            "price": calcPrice(tierB.diorite.base_price * tier.gradeA)
        },
    }

    const tierS = {
        polished_andesite: {
            "id": "stone",
            "name": "Polished Andesite",
            "meta": 6,
            "base_price": tierA.andesite.base_price * tier.gradeS * craft.gradeB,
            "price": calcPrice(tierA.andesite.base_price * tier.gradeS * craft.gradeB)
        },
        podzol: {
            "id": "dirt",
            "name": "Podzol",
            "meta": 2,
            "base_price": tierB.grass.base_price * tier.gradeS,
            "price": calcPrice(tierB.grass.base_price * tier.gradeS)
        },
        bedrock: {
            "id": "bedrock",
            "name": "Bedrock",
            "meta": 0,
            "base_price": 0,
            "price": calcPrice(0)
        },
        flowing_water: {
            "id": "flowing_water",
            "name": "Flowing Water",
            "meta": 0,
            "base_price": 0,
            "price": calcPrice(0)
        },
        still_water: {
            "id": "water",
            "name": "Still Water",
            "meta": 0,
            "base_price": 0,
            "price": calcPrice(0)
        },
        flowing_lava: {
            "id": "flowing_lava",
            "name": "Flowing Lava",
            "meta": 0,
            "base_price": 0,
            "price": calcPrice(0)
        },
        still_lava: {
            "id": "lava",
            "name": "Still Lava",
            "meta": 0,
            "base_price": 0,
            "price": calcPrice(0)
        },
        bed: {
            "id": "bed",
            "name": "Bed",
            "meta": 0,
            "base_price": 0,
            "price": calcPrice(0)
        },
    }

    const arrayOfF = Object.values(tierF)
    const arrayOfD = Object.values(tierD)
    const arrayOfC = Object.values(tierC)
    const arrayOfB = Object.values(tierB)
    const arrayOfA = Object.values(tierA)
    const arrayOfS = Object.values(tierS)

    newArr = [...arrayOfS, ...arrayOfA, ...arrayOfB, ...arrayOfC, ... arrayOfD, ...arrayOfF]
    newArr = newArr.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    newArr = newArr.map((element) => {
        moneyTier = element['price'].split(' ')
        
        moneyTier.forEach((tier, index, arr) => {
            const tierArr = tier.split(/([a-zA-Z])/g)
            tierArr[0] = Math.round(Number(tierArr[0]))
            arr[index] = tierArr.join('')
        })
        
        element['price'] = `${moneyTier.join(' ')}`
        return element
    })

    return newArr
}

module.exports = createItems()

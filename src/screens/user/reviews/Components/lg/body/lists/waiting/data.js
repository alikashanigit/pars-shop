export const products = [
    {
        name: 'MacBook Pro M2 14“ / 16“',
        brand: 'اپل',
        year: '۲۰۲۲',
        minPrice: 65000000,
        model: 'MGN65',
        description: '',
        category: 'لپتاپ',
        type: 'مک‌بوک',

        userTypes: ['برنامه‌نویسی', 'گرافیک و رندرینگ'],

        feedbacks: {
            users: {
                rating: 4,
            },
            customers: {
                rating: 4.5,
            },
            recommends: [1,2,3,4,5,6,7,8,9,1,2,3,4,1,2,3,4],
        },

        colors: [
            {
                name: 'خاکستری',
                code: '#555',
                price: '',
            },
            {
                name: 'نقره‌ای',
                code: '#999',
                price: '',
            },
        ],

        cover: 'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
        
        photos: [
            {
                color: 'خاکستری',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                ],
            },
            {
                color: 'نقره‌ای',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                ],
            },
        ],

        featured: {
            discount: {
                price: 64500000,
                percentage: 5,
            },
            limitSale: {
                price: 62500000,
                timeLeft: 86400000,
            },
            isRecommendedByShop: true,
        },

        related: {
            videos: [],
            articles: [],
            products: []
        },
        
        specs: {
            display: {
                sizes: [
                    {
                        value: '۱۴',
                        price: 65000000,
                    },
                    {
                        value: '۱۶',
                        price: 75000000,
                    },
                ],           
                panelType: 'Liquid Retina XDR display',
                hdType: '',
                ledBacklight: '',
                touchscreen: false,
                resolution: '3024 x 1964',
                aspectRatio: '۱۶:۹',
                others: [
                    'نسبت تصویر: 16:10',
                    'نمایشگر براق با پوشش ضد انعکاس نور',
                    'میزان روشنایی: از 500 تا cd/m2 1600',
                    'تکنولوژی Apple ProMotion',
                    'نرخ به‌روزرسانی تصویر: 120 هرتز',
                    'کنتراست: 1,000,000:1'
                ],
            },
            processor: {
                cpu: {
                    manufacturer: 'Apple',
                    family: 'M1',
                    speed: '',
                    model: 'M1 Max ',
                    cache: '۱۲ مگابایت',
                    frequency: '۲.۸ گیگاهرتز و بیشتر ',
                    description: '۱۰ هسته (هشت هسته‌ی Performance + دو هسته Efficiency)',
                },
                gpu: {
                    manufacturer: 'Apple', // 'Intel'
                    family: 'Apple (۲۴-Core)', // 'Core i7'
                    speed: '', // 'تا ۲.۰GHz'
                    cache: '', // '4'
                    frequency: '', // '۱.۳ تا ۶.۳'
                },
            },
            memory: {
                cache: '۱۲ مگابایت',
                ram: 'هشت گیگابایت ',
                ramModel: 'Unified',
                ramDescription: 'Embedded DRAM',
                capacities: [
                    {
                        value: '256',
                        unit: 'گیگابایت',
                        price: 65000000,
                    },
                    {
                        value: '512',
                        unit: 'گیگابایت',
                        price: 75000000,
                    },
                ],
                capacityModel: 'SSD',
                capacitySpecs: 'حافظه از نوع Proprietary Apple NVMe',
            },
            userTypes: ['برنامه‌نویس', 'گرافیست'],
            classification: ['حرفه‌ای', 'امور عادی'],
            network: {
                wlan: '',
                wifi: '۸۰۲.۱۱ax Wi-Fi ۶ wireless networking IEEE ۸۰۲.۱۱a/b/g/n/ac compatible', // ['802.11a','802.11b','802.11g']
                bluetooth: true,
                bluetoothVersion: '4.0',
            },
            ports: {
                thunderbolt: 'Thunderbolt 3 (up to 40Gb/s)'
            },
            trackPad: true,
            os: 'macOs',
        },

        countInStock: 10,
    },
    {
        
        name: 'MacBook Air M1 13“',
        brand: 'اپل',
        year: '۲۰۲۲',
        minPrice: 45000000,
        model: 'MGN65',
        description: '',
        category: 'لپتاپ',
        type: 'مک‌بوک',

        userTypes: ['برنامه‌نویسی', 'امور روزانه'],

        feedbacks: {
            users: {
                rating: 2,
            },
            customers: {
                rating: 5,
            },
            recommends: [3,4,1,2,3,4],
        },

        colors: [
            {
                name: 'قرمز',
                code: '#ff5555',
                price: '',
            },
            {
                name: 'نقره‌ای',
                code: '#999',
                price: '',
            },
        ],

        cover: 'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
        
        photos: [
            {
                color: 'قرمز',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                ],
            },
            {
                color: 'نقره‌ای',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                ],
            },
        ],

        featured: {
            discount: {},
            limitSale: {},
            isRecommendedByShop: true,
        },

        related: {
            videos: [],
            articles: [],
            products: []
        },
        
        specs: {
            display: {
                sizes: [
                    {
                        value: '۱۳',
                        price: 45000000,
                    },,
                ],           
                panelType: 'Liquid Retina XDR display',
                hdType: '',
                ledBacklight: '',
                touchscreen: false,
                resolution: '3024 x 1964',
                aspectRatio: '۱۶:۹',
                others: [
                    'نسبت تصویر: 16:10',
                    'نمایشگر براق با پوشش ضد انعکاس نور',
                    'میزان روشنایی: از 500 تا cd/m2 1600',
                    'تکنولوژی Apple ProMotion',
                    'نرخ به‌روزرسانی تصویر: 120 هرتز',
                    'کنتراست: 1,000,000:1'
                ],
            },
            processor: {
                cpu: {
                    manufacturer: 'Apple',
                    family: 'M1',
                    speed: '',
                    model: 'M1',
                    cache: '۸ مگابایت',
                    frequency: '۲.۸ گیگاهرتز و بیشتر ',
                    description: '۱۰ هسته (هشت هسته‌ی Performance + دو هسته Efficiency)',
                },
                gpu: {
                    manufacturer: 'Apple', // 'Intel'
                    family: 'Apple (8-Core)', // 'Core i7'
                    speed: '', // 'تا ۲.۰GHz'
                    cache: '', // '4'
                    frequency: '', // '۱.۳ تا ۶.۳'
                },
            },
            memory: {
                cache: '۱۲ مگابایت',
                ram: 'هشت گیگابایت ',
                ramModel: 'Unified',
                ramDescription: 'Embedded DRAM',
                capacities: [
                    {
                        value: '256',
                        unit: 'گیگابایت',
                        price: 45000000,
                    },
                    {
                        value: '1',
                        unit: 'ترابایت',
                        price: 48000000,
                    },
                ],
                capacityModel: 'SSD',
                capacitySpecs: 'حافظه از نوع Proprietary Apple NVMe',
            },
            userTypes: ['برنامه‌نویس', 'گرافیست'],
            classification: ['حرفه‌ای', 'امور عادی'],
            network: {
                wlan: '',
                wifi: '۸۰۲.۱۱ax Wi-Fi ۶ wireless networking IEEE ۸۰۲.۱۱a/b/g/n/ac compatible', // ['802.11a','802.11b','802.11g']
                bluetooth: true,
                bluetoothVersion: '4.0',
            },
            ports: {
                thunderbolt: 'Thunderbolt 3 (up to 40Gb/s)'
            },
            trackPad: true,
            os: 'macOs',
        },

        countInStock: 5,
    },
    {
        
        name: 'Surface Pro',
        brand: 'مایکروسافت',
        year: '۲۰۲۲',
        minPrice: 35000000,
        model: 'MGN65',
        description: '',
        category: 'لپتاپ',
        type: 'سرفیس',

        userTypes: ['طراحی', 'گرافیک و رندرینگ'],

        feedbacks: {
            users: {
                rating: 4,
            },
            customers: {
                rating: 4.5,
            },
            recommends: [1,2,3,4,5,6,7,8,9,1,2,3,4,1,2,3,4],
        },

        colors: [
            {
                name: 'خاکستری',
                code: '#555',
                price: '',
            },
            {
                name: 'نقره‌ای',
                code: '#999',
                price: '',
            },
        ],

        cover: 'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
        
        photos: [
            {
                color: 'خاکستری',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                ],
            },
            {
                color: 'نقره‌ای',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                ],
            },
        ],

        featured: {
            discount: {
                price: 64500000,
                percentage: 5,
            },
            limitSale: {
                price: 62500000,
                timeLeft: 86400000,
            },
            isRecommendedByShop: true,
        },

        related: {
            videos: [],
            articles: [],
            products: []
        },
        
        specs: {
            display: {
                sizes: [
                    {
                        value: '۱۴',
                        price: 65000000,
                    },
                    {
                        value: '۱۶',
                        price: 75000000,
                    },
                ],           
                panelType: 'Liquid Retina XDR display',
                hdType: '',
                ledBacklight: '',
                touchscreen: false,
                resolution: '3024 x 1964',
                aspectRatio: '۱۶:۹',
                others: [
                    'نسبت تصویر: 16:10',
                    'نمایشگر براق با پوشش ضد انعکاس نور',
                    'میزان روشنایی: از 500 تا cd/m2 1600',
                    'تکنولوژی Apple ProMotion',
                    'نرخ به‌روزرسانی تصویر: 120 هرتز',
                    'کنتراست: 1,000,000:1'
                ],
            },
            processor: {
                cpu: {
                    manufacturer: 'Apple',
                    family: 'M1',
                    speed: '',
                    model: 'M1 Max ',
                    cache: '۱۲ مگابایت',
                    frequency: '۲.۸ گیگاهرتز و بیشتر ',
                    description: '۱۰ هسته (هشت هسته‌ی Performance + دو هسته Efficiency)',
                },
                gpu: {
                    manufacturer: 'Apple', // 'Intel'
                    family: 'Apple (۲۴-Core)', // 'Core i7'
                    speed: '', // 'تا ۲.۰GHz'
                    cache: '', // '4'
                    frequency: '', // '۱.۳ تا ۶.۳'
                },
            },
            memory: {
                cache: '۱۲ مگابایت',
                ram: 'هشت گیگابایت ',
                ramModel: 'Unified',
                ramDescription: 'Embedded DRAM',
                capacities: [
                    {
                        value: '256',
                        unit: 'گیگابایت',
                        price: 65000000,
                    },
                    {
                        value: '512',
                        unit: 'گیگابایت',
                        price: 75000000,
                    },
                ],
                capacityModel: 'SSD',
                capacitySpecs: 'حافظه از نوع Proprietary Apple NVMe',
            },
            userTypes: ['برنامه‌نویس', 'گرافیست'],
            classification: ['حرفه‌ای', 'امور عادی'],
            network: {
                wlan: '',
                wifi: '۸۰۲.۱۱ax Wi-Fi ۶ wireless networking IEEE ۸۰۲.۱۱a/b/g/n/ac compatible', // ['802.11a','802.11b','802.11g']
                bluetooth: true,
                bluetoothVersion: '4.0',
            },
            ports: {
                thunderbolt: 'Thunderbolt 3 (up to 40Gb/s)'
            },
            trackPad: true,
            os: 'macOs',
        },

        countInStock: 10,
    },
    {
        
        name: 'ProArt 3D OLED',
        brand: 'ایسوس',
        year: '۲۰۲۲',
        minPrice: 35000000,
        model: 'MGN65',
        description: '',
        category: 'لپتاپ',
        type: 'الترابوک',

        userTypes: ['طراحی', 'گرافیک و رندرینگ'],

        feedbacks: {
            users: {
                rating: 4,
            },
            customers: {
                rating: 4.5,
            },
            recommends: [1,2,3,4,5,6,7,8,9,1,2,3,4,1,2,3,4],
        },

        colors: [
            {
                name: 'خاکستری',
                code: '#555',
                price: '',
            },
            {
                name: 'نقره‌ای',
                code: '#999',
                price: '',
            },
        ],

        cover: 'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
        
        photos: [
            {
                color: 'خاکستری',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                ],
            },
            {
                color: 'نقره‌ای',
                list: [
                    'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                    'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                ],
            },
        ],

        featured: {
            discount: {
                price: 64500000,
                percentage: 5,
            },
            limitSale: {
                price: 62500000,
                timeLeft: 86400000,
            },
            isRecommendedByShop: true,
        },

        related: {
            videos: [],
            articles: [],
            products: []
        },
        
        specs: {
            display: {
                sizes: [
                    {
                        value: '۱۴',
                        price: 65000000,
                    },
                    {
                        value: '۱۶',
                        price: 75000000,
                    },
                ],           
                panelType: 'Liquid Retina XDR display',
                hdType: '',
                ledBacklight: '',
                touchscreen: false,
                resolution: '3024 x 1964',
                aspectRatio: '۱۶:۹',
                others: [
                    'نسبت تصویر: 16:10',
                    'نمایشگر براق با پوشش ضد انعکاس نور',
                    'میزان روشنایی: از 500 تا cd/m2 1600',
                    'تکنولوژی Apple ProMotion',
                    'نرخ به‌روزرسانی تصویر: 120 هرتز',
                    'کنتراست: 1,000,000:1'
                ],
            },
            processor: {
                cpu: {
                    manufacturer: 'Apple',
                    family: 'M1',
                    speed: '',
                    model: 'M1 Max ',
                    cache: '۱۲ مگابایت',
                    frequency: '۲.۸ گیگاهرتز و بیشتر ',
                    description: '۱۰ هسته (هشت هسته‌ی Performance + دو هسته Efficiency)',
                },
                gpu: {
                    manufacturer: 'Apple', // 'Intel'
                    family: 'Apple (۲۴-Core)', // 'Core i7'
                    speed: '', // 'تا ۲.۰GHz'
                    cache: '', // '4'
                    frequency: '', // '۱.۳ تا ۶.۳'
                },
            },
            memory: {
                cache: '۱۲ مگابایت',
                ram: 'هشت گیگابایت ',
                ramModel: 'Unified',
                ramDescription: 'Embedded DRAM',
                capacities: [
                    {
                        value: '256',
                        unit: 'گیگابایت',
                        price: 65000000,
                    },
                    {
                        value: '512',
                        unit: 'گیگابایت',
                        price: 75000000,
                    },
                ],
                capacityModel: 'SSD',
                capacitySpecs: 'حافظه از نوع Proprietary Apple NVMe',
            },
            userTypes: ['برنامه‌نویس', 'گرافیست'],
            classification: ['حرفه‌ای', 'امور عادی'],
            network: {
                wlan: '',
                wifi: '۸۰۲.۱۱ax Wi-Fi ۶ wireless networking IEEE ۸۰۲.۱۱a/b/g/n/ac compatible', // ['802.11a','802.11b','802.11g']
                bluetooth: true,
                bluetoothVersion: '4.0',
            },
            ports: {
                thunderbolt: 'Thunderbolt 3 (up to 40Gb/s)'
            },
            trackPad: true,
            os: 'macOs',
        },

        countInStock: 10,
    },
]


export const product = {
    name: 'MacBook Pro M2 14“',
    brand: 'اپل',
    category: 'مک‌بوک',
    cover: '',
    colors: [
        {
            name: 'grey',
            code: '#555',
        },
        {
            name: 'silver',
            code: '#aaa',
        },
    ],
    photos: [
        'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
        'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
        'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
        'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
    ],
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
};
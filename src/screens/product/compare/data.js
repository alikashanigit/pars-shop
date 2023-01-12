const ChipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" 
    width="35" height="35" fill="#222" class="bi bi-cpu" viewBox="0 0 16 16">
    <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
</svg>;
const RAMIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#222" class="bi bi-memory" viewBox="0 0 16 16">
<path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"/>
</svg>;

const ResolutionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#222" class="bi bi-fullscreen" viewBox="0 0 16 16">
<path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
</svg>;



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
    photos: {
        grey: {
            photos: [
                'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
                'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
            ],
        }, 
        silver: {
            photos: [
                'https://res.cloudinary.com/phase-1/image/upload/v1671926956/tech-shop/png/05_jxsvdc.png',
                'https://res.cloudinary.com/phase-1/image/upload/v1672780221/tech-shop/png/04_diqs2x.png',
                'https://res.cloudinary.com/phase-1/image/upload/v1671142086/tech-shop/png/02_zolhyc.png',
                'https://res.cloudinary.com/phase-1/image/upload/v1671299499/tech-shop/png/mbp14-spacegray-gallery1-202110_ijmzbm.png',
            ],
        }, 
    },
    ratings: {
        users: [3,5,1,4,5,2,3,4,1,2,3,5,2,4,4,4,3,2,4,3,2,5,5,5,5,1,4,3,2,4,3,2,3,4],
        customers: [4,3,2,5,5,5,5,1,4,3,2,4,3,2,3,4],
        experts: [3,5,5],
        global: [3,3,5,1,5,3],
    },
    sizes: [
        {
            option: '14',
            price: 76000000,
        },
        {
            option: '16',
            price: 85450000,
        },
    ],
    features: [
        {
            icon: () => <ChipIcon />,
            title: 'سری پردازنده',
            value: 'M2',
        },
        {
            icon: () => <RAMIcon />,
            title: 'حافظه‌ی RAM',
            value: '۸',
            unit: 'گیگابایت',
        },
        {
            icon: () => <ResolutionIcon />,
            title: 'وضوح تصویر (رزولوشن)',
            value: '۲۵۶۰ x ۱۶۶۴',
        },
        {
            icon: () => <ChipIcon />,
            title: 'حافظه‌ی داخلی',
            value: '۵۱۲',
            unit: 'گیگایایت',
        },
    ],
    specs: [
        {
            title: 'وزن',
            values: [{
                value: '۱.۲۴',
                unit: 'کیلوگرم',
            }],
        },
        {
            title: 'ابعاد',
            values: [{
                value: '۱۱.۳ × ۲۱۵ × ۳۰۴.۱ ',
                unit: 'میلی‌متر',
            }],
        },
        {
            title: 'سازنده‌ی پردازنده',
            values: [{
                value: 'Apple',
                unit: '',
            }],
        },
        {
            title: 'سری پردازنده',
            values: [{
                value: 'M2',
                unit: '',
            }],
        },
        {
            title: 'مدل پردازنده',
            values: [{
                value: '۸ هسته‌ای',
                unit: '',
            }],
        },
        {
            title: 'محدوده سرعت پردازنده',
            values: [{
                value: '۲.۸ گیگاهرتز و بیشتر ',
                unit: '',
            }],
        },
        {
            title: 'حافظه کش (cache)',
            values: [{
                value: '۲۰',
                unit: 'مگابایت',
            }],
        },
        {
            title: 'سایر توضیحات پردازنده مرکزی (CPU)',
            values: [{
                value: '۸ هسته (۴ هسته‌ی Performance و ۴ هسته‌ی Efficiency) ۱۶ مگابایت کش L2 و ۴ مگابایت کش L3',
                unit: '',
            }],
        },
        {
            title: 'حافظه‌ی RAM',
            values: [{
                value: '۸',
                unit: 'مگابایت',
            }],
        },
        {
            title: 'نوع حافظه‌ی RAM',
            values: [{
                value: 'Unified',
                unit: '',
            }],
        },
        {
            title: 'حافظه‌ی داخلی',
            values: [{
                value: '۲۵۶',
                unit: 'گیگابایت',
            }],
        },
        {
            title: 'نوع حافظه‌ی داخلی',
            values: [{
                value: 'SSD',
                unit: '',
            }],
        },
        {
            title: 'سازنده پردازنده گرافیکی',
            values: [{
                value: 'Apple',
                unit: '',
            }],
        },
        {
            title: 'مدل پردازنده گرافیکی',
            values: [{
                value: 'M2 ۱۰ هسته‌ای',
                unit: '',
            }],
        },
        {
            title: 'حافظه اختصاصی پردازنده گرافیکی',
            values: [{
                value: 'ندارد',
                unit: '',
            }],
        },
        {
            title: 'اندازه صفحه نمایش',
            values: [{
                value: '۱۳.۶',
                unit: 'اینچ',
            }],
        },
        {
            title: 'نوع صفحه نمایش',
            values: [{
                value: 'Liquid Retina XDR ',
                unit: '',
            }],
        },
        {
            title: 'دقت صفحه نمایش',
            values: [{
                value: '۲۵۶۰ x ۱۶۶۴ ',
                unit: '',
            }],
        },
        {
            title: 'توضیحات صفحه نمایش',
            values: [{
                value: '۲۲۴ پیکسل بر اینچ پشتیبانی از HDR با Dolby Vision, HDR10 و HLG میزان روشنایی: ۵۰۰ نیت تکنولوژی True Tone پشتیبانی از ۱ میلیارد رنگ Wide color (P3)',
                unit: '',
            }],
        },
        {
            title: 'قابلیت‌های دستگاه',
            values: [
                {
                    value: 'حسگر اثر انگشت',
                    unit: '',
                },
                {
                    value: 'کیبورد با نور پس زمینه',
                    unit: '',
                },
                {
                    value: 'وبکم',
                    unit: '',
                },
                {
                    value: 'اسپیکر',
                    unit: '',
                },
            ],
        },
        {
            title: 'درایو نوری',
            values: [{
                value: 'ندارد',
                unit: '',
            }],
        },
        {
            title: 'وب‌کم',
            values: [{
                value: 'دوربین 1080p FaceTime HD ',
                unit: '',
            }],
        },
        {
            title: 'اسپیکر',
            values: [{
                value: 'چهار اسپیکر استریوی Wide',
                unit: '',
            }],
        },
        {
            title: 'تاچ پد',
            values: [{
                value: 'پشتیبانی از فرمان‌های چند لمسی و Force Touch',
                unit: '',
            }],
        },
        {
            title: 'درگاه‌های ارتباطی',
            values: [
                {
                    value: 'WiFi',
                    unit: '',
                },
                {
                    value: 'Bluetooth',
                    unit: '',
                },
                {
                    value: 'USB Type-C',
                    unit: '',
                },
                {
                    value: 'USB 4.0',
                    unit: '',
                },
                {
                    value: 'Thunderbolt 4',
                    unit: '',
                },
            ],
        },
        {
            title: 'مودم',
            values: [{
                value: 'داخلی',
                unit: '',
            }],
        },
        {
            title: 'توضیحات شبکه بی سیم Wi-Fi',
            values: [{
                value: 'پشتیبانی از ۸۰۲.۱۱ax Wi-Fi ۶ و IEEE ۸۰۲.۱۱a/b/g/n/ac',
                unit: '',
            }],
        },
        {
            title: 'تعداد پورت USB Type-C',
            values: [{
                value: '۲',
                unit: '',
            }],
        },
        {
            title: 'طبقه‌بندی',
            values: [
                {
                    value: 'باریک و سبک',
                    unit: '',
                },
                {
                    value: 'کاربری مالتی‌مدیا',
                    unit: '',
                },
                {
                    value: 'کاربری عمومی',
                    unit: '',
                },
            ],
        },
        {
            title: 'نوع باتری',
            values: [{
                value: 'لیتیوم پلیمری',
                unit: '',
            }],
        },
        {
            title: 'توضیحات باتری',
            values: [{
                value: '۵۲.۶',
                unit: 'وات‌ساعت',
            }],
        },
        {
            title: 'سیستم عامل',
            values: [{
                value: 'MacOS',
                unit: '',
            }],
        },
        {
            title: 'امکانات دیگر',
            values: [
                {
                    value: 'پشتیبانی از بلوتوث 5.0',
                    unit: '',
                },
                {
                    value: 'دو پورت USB Type-C با پشتیبانی از DisplayPort',
                    unit: '',
                },
                {
                    value: 'Thunderbolt 3',
                    unit: '',
                },
                {
                    value: 'USB 4 MagSafe ۳ با پشتیبانی از شارژ سریع ۶۷ واتی جنس بدنه‌ی آلومینیومی پشتیبانی از پورت‌های VGA و HDMI به همراه DVI و Thunderbolt ۲ از طریق آداپتور (قابل خرید به صورت جداگانه)',
                    unit: '',
                },
                {
                    value: 'شارژر USB 3.1',
                    unit: '',
                },
                {
                    value: 'ارای جک هدفون ۳.۵ میلی‌متری',
                    unit: '',
                },
                {
                    value: 'Thunderbolt ۲ از طریق آداپتور (قابل خرید به صورت جداگانه)',
                    unit: '',
                },
                {
                    value: 'پورت شارژ MagSafe 3',
                    unit: '',
                },
                {
                    value: 'با پشتیبانی از شارژ سریع',
                    unit: '',
                },
                {
                    value: 'جنس بدنه‌ی آلومینیومی',
                    unit: '',
                },
                {
                    value: 'پشتیبانی از پورت‌های ۶۷ واتی',
                    unit: '',
                },
                {
                    value: 'VGA و HDMI به همراه DVI',
                    unit: '',
                },
            ],
        },
        {
            title: 'اقلام همراه',
            values: [{
                value: 'شارژر',
                unit: '',
            }],
        },
    ],
       
};
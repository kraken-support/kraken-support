const CAMPAIGN = {
  image: 'icons/photo.jpg',
  title: {
    uk: 'Терміновий збір для роти бпла Kraken ГУР МО!',
    en: 'Urgent fundraiser for the KRAKEN DIU drone company!'
  },
  description: {
    uk: 'Збираємо кошти на планшети для підтримки якісного звʼязку і підтримки бойових програм та на ремонт авто.',
    en: 'Raising funds for tablets to support quality communication and combat software, and for vehicle repair.'
  },
  goal: '580 000',
  date: '06.2026',
}

const Data = [
  {
    enable: false,
    name: 'Монобанк',
    logo: 'icons/monobank.webp',
    fields: [
      { label: { uk: 'Банка', en: 'Jar' }, value: 'send.monobank.ua/jar/7iRdML6ah8', type: 'link' },
      { label: { uk: 'Картка', en: 'Card' }, value: '5375 4112 0571 5407', type: 'copy' },
    ]
  },
  {
    enable: true,
    name: 'Приват Банк',
    logo: 'icons/privat.png',
    fields: [
      { label: { uk: 'Конверт', en: 'Envelope' }, value: 'privat24.ua/send/18p5n', type: 'link' },
      { label: { uk: 'Картка', en: 'Card' }, value: '5168 7521 0687 0523', type: 'copy' },
    ]
  },
  {
    enable: true,
    name: 'PayPal',
    logo: 'icons/paypal.webp',
    fields: [
      { label: { uk: 'Єва', en: 'Eva' }, value: 'evakh2017@gmail.com', type: 'copy' },
    ]
  },
  {
    enable: false,
    name: 'Revolut',
    logo: 'icons/revolut.webp',
    fields: [
      { label: { uk: 'Картка', en: 'Card' }, value: '5168 7521 0687 0523', type: 'copy' }
    ]
  },
  {
    enable: false,
    name: 'Wise',
    logo: 'icons/wise.webp',
    fields: [
      { label: { uk: 'Картка', en: 'Card' }, value: '5168 7521 0687 0523', type: 'copy' }
    ]
  },
]

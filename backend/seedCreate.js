const fetch = require("node-fetch");
const bcrypt = require("bcryptjs")

async function createUsers () {
    let users = [];
    for (let i = 0; i < 30; i++){
        let res = await fetch('https://randomuser.me/api/')
        let data = await res.json();
        let user = {
            username: data.results[0].login.username,
            email: data.results[0].email,
            hashedPassword: bcrypt.hashSync(data.results[0].login.password),
            profilePhoto: data.results[0].picture.large,
        }
        users.push(user);
    }
    console.log(users);
   
}

// createUsers();

let users = [
    {
      username: 'blackzebra229',
      email: 'sasha.simon@example.com',
      hashedPassword: '$2a$10$a0utxS7DV1RbfOy3rkFo/.nO3OdP6fW5NT20TMc2WpfMYES6cr0ja',
      profilePhoto: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
      username: 'whitewolf141',
      email: 'mhmdmhdy.khwty@example.com',
      hashedPassword: '$2a$10$R.Jv9Ee7DFudkIGOwLXbbeJ7LOGOeAo6EKVScxdmhoVgikUltUORq',
      profilePhoto: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
      username: 'purplefish336',
      email: 'swen.meijs@example.com',
      hashedPassword: '$2a$10$4GDUvKZwQmLKkqpja40YFOzsyKT3J4W4/clhWVUbuDPZ9.CB1w0q2',
      profilePhoto: 'https://randomuser.me/api/portraits/men/26.jpg'
    },
    {
      username: 'greenpanda412',
      email: 'xuxa.castro@example.com',
      hashedPassword: '$2a$10$LtJTBUroH6R2qsGvdRtef.SUb857DtLVQ/04QN5rMgmz9.1tXM99.',
      profilePhoto: 'https://randomuser.me/api/portraits/women/13.jpg'
    },
    {
      username: 'yellowtiger493',
      email: 'susi.haufe@example.com',
      hashedPassword: '$2a$10$s1h.kzP1rn41sRO0TR6by.vRgmZ.59QncgRTBLZf/jw4CjGj4LDNW',
      profilePhoto: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
      username: 'ticklishrabbit964',
      email: 'zachary.morris@example.com',
      hashedPassword: '$2a$10$GMbFje1cguxZ7xaNVHoJs.4K7iS3/U0CRD/6rdbWtmja7fz9XNZVO',
      profilePhoto: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
      username: 'beautifuldog386',
      email: 'julia.justi@example.com',
      hashedPassword: '$2a$10$1MYW9FHIL5wm6jYh7mHek.f/ZFceE1Yi4NKx6SKTj5CP3Aen8xvWC',
      profilePhoto: 'https://randomuser.me/api/portraits/women/78.jpg'
    },
    {
      username: 'crazymouse458',
      email: 'allison.gonzalez@example.com',
      hashedPassword: '$2a$10$B5PYBNoeOScgzjNJ7bFR7ehORN/3InJkZ8zxUdOPGdthGksMmC6RW',
      profilePhoto: 'https://randomuser.me/api/portraits/women/91.jpg'
    },
    {
      username: 'beautifulbear391',
      email: 'esat.candan@example.com',
      hashedPassword: '$2a$10$1Exk9PRRqDBB7k/gkECNHei2HZcZTqIELS8.t0SBhaT1C9x437uta',
      profilePhoto: 'https://randomuser.me/api/portraits/men/58.jpg'
    },
    {
      username: 'ticklishgorilla379',
      email: 'robert.foster@example.com',
      hashedPassword: '$2a$10$9/.Q2A.2KSDoNfJSdosgg.LVEnhOdDRcY7/ETuumsl1Y9oCmSFOWe',
      profilePhoto: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
      username: 'orangeostrich279',
      email: 'brianna.ferguson@example.com',
      hashedPassword: '$2a$10$yBWrjWYeLlbFm.RxncjJM.MDMKfmT.U6IvyLuIk4cc/VyW2IDW/1i',
      profilePhoto: 'https://randomuser.me/api/portraits/women/39.jpg'
    },
    {
      username: 'brownmeercat572',
      email: 'mehmet.gumuspala@example.com',
      hashedPassword: '$2a$10$7z6qEAQ29B25xYPKE.1R1.HbocdmZV/.513r/vpbtfxp9Ovh8Bmf6',
      profilePhoto: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
      username: 'heavyduck131',
      email: 'isabel.skevik@example.com',
      hashedPassword: '$2a$10$w/hP07FCpm/tZeXHevNIRuAk5u5JKgi.1v.sRzxwZLOCnwA0eutFy',
      profilePhoto: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      username: 'crazyzebra488',
      email: 'keith.craig@example.com',
      hashedPassword: '$2a$10$YKN/tUAWT5tYB7gT2RdFSO.Xlqz5tps6q4qm/hIVvqKD8FqioRPKm',
      profilePhoto: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
      username: 'silverpanda765',
      email: 'ian.walker@example.com',
      hashedPassword: '$2a$10$At9xTlLS4dfkh/EBcFhjzuzS8cTx1qTWsBPbcX2TgL7NoNS6zLp32',
      profilePhoto: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
      username: 'silverbird357',
      email: 'efe.mertoglu@example.com',
      hashedPassword: '$2a$10$2dMszXntVNcORlc4m.iKhOK9eYLvR/wisc/r51F94snDgvqaMGLTG',
      profilePhoto: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    {
      username: 'silverfrog395',
      email: 'brandie.gordon@example.com',
      hashedPassword: '$2a$10$aaoSsFO3W5IsOkc/LEJCyuREMbMPoyaIBNgbDE6PyleyZqFiVdFEO',
      profilePhoto: 'https://randomuser.me/api/portraits/women/38.jpg'
    },
    {
      username: 'orangebutterfly438',
      email: 'melissa.vorwerk@example.com',
      hashedPassword: '$2a$10$ra24DRO8Hk0TMORQ4GQklOOpg/dX4FN8kdPuhCZtWyDlQu9B5t4SK',
      profilePhoto: 'https://randomuser.me/api/portraits/women/29.jpg'
    },
    {
      username: 'tinyduck294',
      email: 'nils.gauthier@example.com',
      hashedPassword: '$2a$10$R2bdz4ZX.mpqYgG/ZTvtTu8g1CHTLlRgyZIq4A.5lZHMAhPCE5ur6',
      profilePhoto: 'https://randomuser.me/api/portraits/men/21.jpg'
    },
    {
      username: 'angrypeacock723',
      email: 'nyysh.hmdy@example.com',
      hashedPassword: '$2a$10$BRwA7EGQ08Cs39uIzUAx2OSR1jmfWUUAg84pKxtEyBkHhacOPZOim',
      profilePhoto: 'https://randomuser.me/api/portraits/women/64.jpg'
    },
    {
      username: 'blackfish123',
      email: 'morgane.dumas@example.com',
      hashedPassword: '$2a$10$8LDb4lX.DPci0I585Xzjt.H3n9/9z5BHb/o33DAizb0hd.AsnFhJS',
      profilePhoto: 'https://randomuser.me/api/portraits/women/41.jpg'
    },
    {
      username: 'whiteelephant232',
      email: 'tacio.monteiro@example.com',
      hashedPassword: '$2a$10$bf1DePRU4AOMT0Jd5n8/2uPZSAO85XQ2MddlLnL.hlHowp1na4Bbi',
      profilePhoto: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
      username: 'beautifulgoose789',
      email: 'sofia.thomsen@example.com',
      hashedPassword: '$2a$10$r7pntDdbd3Vrpdd.y7hpRe1mB1wwObIehFsth2Qg4aXGUakAJCxki',
      profilePhoto: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      username: 'organickoala116',
      email: 'vilma.suomi@example.com',
      hashedPassword: '$2a$10$Fug6OmEZuYX3hrsf3tkMj.K2u8Cf6xgbd.UybHyKUIEXd8AUqAzmu',
      profilePhoto: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    {
      username: 'organicrabbit411',
      email: 'sebastian.newman@example.com',
      hashedPassword: '$2a$10$4gpIR.dSSyT2O763ZnBuQuyBp3RWoahcLjrb9cc2yjGJn0MHhE/wi',
      profilePhoto: 'https://randomuser.me/api/portraits/men/26.jpg'
    },
    {
      username: 'greenrabbit486',
      email: 'jonas.christensen@example.com',
      hashedPassword: '$2a$10$SFgNPFiHubd88hABHk4siuMhJMLB9Lr.yRjLiun/D16mkVQ6fXq6O',
      profilePhoto: 'https://randomuser.me/api/portraits/men/96.jpg'
    },
    {
      username: 'redmeercat886',
      email: 'brn.mwswy@example.com',
      hashedPassword: '$2a$10$l9ksJG25AgfPRvOEtI48feGR9pMjqPe0FEwV3y8Noiatc1Vb.gcc2',
      profilePhoto: 'https://randomuser.me/api/portraits/women/57.jpg'
    },
    {
      username: 'blackpanda540',
      email: 'nanna.ulvestad@example.com',
      hashedPassword: '$2a$10$9oEwP8Tax4vtGtUewFnjM.M34zkhlhY/VVVUA15Gd4nFgwN4COaHW',
      profilePhoto: 'https://randomuser.me/api/portraits/women/87.jpg'
    },
    {
      username: 'orangewolf186',
      email: 'marilou.margaret@example.com',
      hashedPassword: '$2a$10$odUHO7goloNvKA6caY3lxekw.bn3x4Xf6YPzw1jQIaNnQGo3K2OFS',
      profilePhoto: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      username: 'beautifulpeacock734',
      email: 'tania.caldeira@example.com',
      hashedPassword: '$2a$10$3DMPZ8O/IS3VmkZqX6iIY.6xhUD2JWLOsRk/E0gyeNpxzgFOdouSq',
      profilePhoto: 'https://randomuser.me/api/portraits/women/58.jpg'
    }
  ]
let hashedPassword = bcrypt.hashSync('password')
  console.log(hashedPassword)
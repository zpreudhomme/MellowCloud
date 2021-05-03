'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Tracks', [
    {
      title: 'Ethereal Guitar',
      artistId: 11,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718113/322569__burning-mir__ethereal-guitar-playing_z5pmmr.mp3',
      genreId: 2
    },
    {
      title: 'Sad Melody',
      artistId: 25,
      artwork: 'https://images.unsplash.com/photo-1559244673-9cee88d551f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718128/467936__sofialomba__sad-melody_bv6cda.mp3',
      genreId: 3
    },
    {
      title: 'Slow Guitar Piano Melody',
      artistId: 6,
      artwork: 'https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718151/559835__migfus20__sad-guitar-piano-music_o9brxc.mp3',
      genreId: 1
    },
    {
      title: 'Lo-Fi Guitar 1',
      artistId: 8,
      artwork: 'https://images.unsplash.com/photo-1583125311319-300af4db4abc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1398&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718150/569496__migfus20__lo-fi-music-guitar-short-version_i4gvrm.mp3',
      genreId: 2
    },
    {
      title: 'Prayer',
      artistId: 29,
      artwork: 'https://images.unsplash.com/photo-1579215176023-00341ea5ea67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718032/TRG_Banks_-_Prayer_qtzt6g.mp3',
      genreId: 1
    },
    {
      title: 'Ambient Piano Pad',
      artistId: 8,
      artwork: 'https://images.unsplash.com/photo-1523297554394-dc159677ffe1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2083&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717299/ambient-piano-pad-ambient-piano-music-1133_g0yoh4.mp3',
      genreId: 1
    },
    {
      title: 'Chill',
      artistId: 18,
      artwork: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717775/chill-3612_vt0gxc.mp3',
      genreId: 4
    },
    {
      title: 'Moog Motion',
      artistId: 26,
      artwork: 'https://images.unsplash.com/photo-1439902315629-cd882022cea0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717939/cinematic-moog-motion-3507_fclfys.mp3',
      genreId: 3
    },
    {
      title: 'Cloudy Bay Ambient',
      artistId: 8,
      artwork: 'https://images.unsplash.com/photo-1571077597848-75f6d8a55b3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717727/cloudy-bay-ambient-chill-3596_vut3ho.mp3',
      genreId: 3
    },
    {
      title: 'Dreamy Piano',
      artistId: 9,
      artwork: 'https://images.unsplash.com/photo-1568354058198-064f43a19399?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1398&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718103/dreamy-piano-soft-sound-ambient-background-4049_nun2ww.mp3',
      genreId: 1
    },
    {
      title: 'That Peace',
      artistId: 29,
      artwork: 'https://images.unsplash.com/photo-1590944391918-8737b559b7ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2969&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718076/geovane-bruno-that-peace-2710_k3xabi.mp3',
      genreId: 4
    },
    {
      title: 'Modular Ambient 1',
      artistId: 17,
      artwork: 'https://images.unsplash.com/photo-1581922813492-8199c9bcc5cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718118/modular-ambient-01-789_dph93g.mp3',
      genreId: 3
    },
    {
      title: 'Modular Ambient 2',
      artistId: 17,
      artwork: 'https://images.unsplash.com/photo-1578309743751-5f1780eaf1dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717972/modular-ambient-02-790_o8ctww.mp3',
      genreId: 3
    },
    {
      title: 'Modular Ambient 3',
      artistId: 17,
      artwork: 'https://images.unsplash.com/photo-1555580168-9fb9646a8a1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718112/modular-ambient-03-791_frbxua.mp3',
      genreId: 3
    },
    {
      title: 'Modular Ambient 4',
      artistId: 17,
      artwork: 'https://images.unsplash.com/photo-1579159279755-14622f5ee61b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718133/modular-ambient-04-792_d2jtqi.mp3',
      genreId: 3
    },
    {
      title: 'Modular Ambient 5',
      artistId: 17,
      artwork: 'https://images.unsplash.com/photo-1578589385589-c94a956e2450?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717920/modular-ambient-05-3506_rntlcu.mp3',
      genreId: 3
    },
    {
      title: 'Piano in the Great Hall',
      artistId: 2,
      artwork: 'https://images.unsplash.com/photo-1515333437113-6464312e1885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717765/piano-in-the-great-hall-2295_jt4nw2.mp3',
      genreId: 1
    },
    {
      title: 'Release',
      artistId: 24,
      artwork: 'https://images.unsplash.com/photo-1617140242448-33f9ae467da1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717937/release-3929_waj88u.mp3',
      genreId: 3
    },
    {
      title: 'Soft Meditation',
      artistId: 7,
      artwork: 'https://images.unsplash.com/photo-1606498236653-daa6690c21ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717896/soft-meditation-3788_puq5vp.mp3',
      genreId: 4
    },
    {
      title: 'Teardrops',
      artistId: 15,
      artwork: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717861/teardrops-sad-song-piano-and-softpad-2763_f283p1.mp3',
      genreId: 1
    },
    {
      title: 'The Journey',
      artistId: 30,
      artwork: 'https://images.unsplash.com/photo-1574684255043-6a88582faa3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717830/the-journey-2582_qlxvmu.mp3',
      genreId: 4
    },
    {
      title: 'Traveling Through Space',
      artistId: 15,
      artwork: 'https://images.unsplash.com/photo-1550985607-b636cef44ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717785/traveling-through-space-3281_t4m7r8.mp3',
      genreId: 3
    },
    {
      title: 'Beautiful Life',
      artistId: 12,
      artwork: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024380/beautiful-life-4108_benjkq.mp3',
      genreId: 2
    },
    {
      title: 'Sunbeam',
      artistId: 21,
      artwork: 'https://images.unsplash.com/photo-1534369389317-fc8966b8c19d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024373/sunbeam-2491_fhpekw.mp3',
      genreId: 1
    },
    {
      title: 'Depths of Time',
      artistId: 3,
      artwork: 'https://images.unsplash.com/photo-1531669529299-14f929f51fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024365/depths-of-time-4105_myfptb.mp3',
      genreId: 4
    },
    {
      title: 'Misty Meadow',
      artistId: 24,
      artwork: 'https://images.unsplash.com/photo-1431965400057-a84b80cfdbff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024358/misty-meadow-1279_uckvim.mp3',
      genreId: 3
    },
    {
      title: 'Deep Space',
      artistId: 18,
      artwork: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024348/deep-space-9-1594_pirmr1.mp3',
      genreId: 2
    },
    {
      title: 'Helix',
      artistId: 22,
      artwork: 'https://images.unsplash.com/photo-1579684256060-d5a308109e21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024342/helix-1577_cnssvr.mp3',
      genreId: 4
    },
    {
      title: 'Milky Way Ambient',
      artistId: 16,
      artwork: 'https://images.unsplash.com/photo-1530139963092-abc04e3e371b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024335/milky-way-ambient-space-music-1395_pygs7g.mp3',
      genreId: 3
    },
    {
      title: 'Fairy Chant',
      artistId: 26,
      artwork: 'https://images.unsplash.com/photo-1597950842598-312552487a15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024283/fairy-chant-elven-song-epic-music-vocals-1229_uhu4uw.mp3',
      genreId: 4
    },
    {
      title: 'One Day',
      artistId: 15,
      artwork: 'https://images.unsplash.com/photo-1599480189969-ae93eea51672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024271/one-day-3967_zystbp.mp3',
      genreId: 2
    },
    {
      title: 'Waves',
      artistId: 21,
      artwork: 'https://images.unsplash.com/photo-1517333875887-5dfcf16f3d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1058&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024253/waves-michael-kobrin-3782_s7pbc5.mp3',
      genreId: 2
    },
    {
      title: 'Happy Go Lucky',
      artistId: 24,
      artwork: 'https://images.unsplash.com/photo-1566108254145-a8813d68d395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024235/happy-go-lucky-2621_p22hai.mp3',
      genreId: 4
    },
    {
      title: 'Morning Dew',
      artistId: 14,
      artwork: 'https://images.unsplash.com/photo-1492673159297-bbf1078921fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024233/morning-dew-delicate-grand-piano-music-3392_vy0jg4.mp3',
      genreId: 1
    },
    {
      title: 'Blues Vibes',
      artistId: 21,
      artwork: 'https://images.unsplash.com/photo-1551909496-d9d4a69d4ecd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024233/blues-vibes-100-bpm-michael-kobrin-3780_rclbyb.mp3',
      genreId: 2
    },
    {
      title: 'The Sun',
      artistId: 23,
      artwork: 'https://images.unsplash.com/photo-1615593249042-a46adf984024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024220/the-sun-468_fxqabf.mp3',
      genreId: 2
    },
    {
      title: 'Dramatic Chillout',
      artistId: 12,
      artwork: 'https://images.unsplash.com/photo-1603730347631-6aacbfef195a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024172/dramatic-chill-out-524_jnc4ad.mp3',
      genreId: 2
    },
    {
      title: 'Piano and Cello',
      artistId: 19,
      artwork: 'https://images.unsplash.com/photo-1508025690966-2a9a1957da31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024158/pianocello-4102_owlwbs.mp3',
      genreId: 1
    },
    {
      title: 'Melancholy Piano',
      artistId: 24,
      artwork: 'https://images.unsplash.com/photo-1541664430123-3b0399d4f95a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1081&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024142/melancholy-sad-piano-music-3802_cnfoqb.mp3',
      genreId: 1
    },
    {
      title: 'Ocean Waves Ambient',
      artistId: 25,
      artwork: 'https://images.unsplash.com/photo-1547091129-d8cd27acbb47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1620024129/ocean-waves-ambient-music-1831_mllwp8.mp3',
      genreId: 3
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tracks', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Tracks', [
    {
      title: 'Ethereal Guitar',
      artistId: 11,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718113/322569__burning-mir__ethereal-guitar-playing_z5pmmr.mp3',
      genreId: 4
    },
    {
      title: 'Sad Melody',
      artistId: 25,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718128/467936__sofialomba__sad-melody_bv6cda.mp3',
      genreId: 2
    },
    {
      title: 'Slow Guitar Piano Melody',
      artistId: 6,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718151/559835__migfus20__sad-guitar-piano-music_o9brxc.mp3',
      genreId: 3
    },
    {
      title: 'Lo-Fi Guitar 1',
      artistId: 8,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718150/569496__migfus20__lo-fi-music-guitar-short-version_i4gvrm.mp3',
      genreId: 3
    },
    {
      title: 'Prayer',
      artistId: 29,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718032/TRG_Banks_-_Prayer_qtzt6g.mp3',
      genreId: 1
    },
    {
      title: 'Ambient Piano Pad',
      artistId: 8,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717299/ambient-piano-pad-ambient-piano-music-1133_g0yoh4.mp3',
      genreId: 2
    },
    {
      title: 'Chill',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717775/chill-3612_vt0gxc.mp3',
      genreId: 4
    },
    {
      title: 'Moog Motion',
      artistId: 26,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717939/cinematic-moog-motion-3507_fclfys.mp3',
      genreId: 3
    },
    {
      title: 'Cloudy Bay Ambient',
      artistId: 8,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717727/cloudy-bay-ambient-chill-3596_vut3ho.mp3',
      genreId: 4
    },
    {
      title: 'Dreamy Piano',
      artistId: 9,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718103/dreamy-piano-soft-sound-ambient-background-4049_nun2ww.mp3',
      genreId: 4
    },
    {
      title: 'That Peace',
      artistId: 29,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718076/geovane-bruno-that-peace-2710_k3xabi.mp3',
      genreId: 4
    },
    {
      title: 'Modular Ambient 1',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718118/modular-ambient-01-789_dph93g.mp3',
      genreId: 3
    },
    {
      title: 'Modular Ambient 2',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717972/modular-ambient-02-790_o8ctww.mp3',
      genreId: 4
    },
    {
      title: 'Modular Ambient 3',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718112/modular-ambient-03-791_frbxua.mp3',
      genreId: 2
    },
    {
      title: 'Modular Ambient 4',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619718133/modular-ambient-04-792_d2jtqi.mp3',
      genreId: 2
    },
    {
      title: 'Modular Ambient 5',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717920/modular-ambient-05-3506_rntlcu.mp3',
      genreId: 2
    },
    {
      title: 'Piano in the Great Hall',
      artistId: 2,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717765/piano-in-the-great-hall-2295_jt4nw2.mp3',
      genreId: 1
    },
    {
      title: 'Release',
      artistId: 24,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717937/release-3929_waj88u.mp3',
      genreId: 3
    },
    {
      title: 'Soft Meditation',
      artistId: 7,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717896/soft-meditation-3788_puq5vp.mp3',
      genreId: 4
    },
    {
      title: 'Teardrops',
      artistId: 15,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717861/teardrops-sad-song-piano-and-softpad-2763_f283p1.mp3',
      genreId: 2
    },
    {
      title: 'The Journey',
      artistId: 30,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717830/the-journey-2582_qlxvmu.mp3',
      genreId: 3
    },
    {
      title: 'Traveling Through Space',
      artistId: 15,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://res.cloudinary.com/mellowcloud123/video/upload/v1619717785/traveling-through-space-3281_t4m7r8.mp3',
      genreId: 1
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tracks', null, {});
  }
};

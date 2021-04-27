'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Tracks', [
    {
      title: 'Ethereal Guitar',
      artistId: 11,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/322569__burning-mir__ethereal-guitar-playing.mp3',
      genreId: 4
    },
    {
      title: 'Sad Melody',
      artistId: 25,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/467936__sofialomba__sad-melody.mp3',
      genreId: 2
    },
    {
      title: 'Slow Guitar Piano Melody',
      artistId: 6,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/559835__migfus20__sad-guitar-piano-music.mp3',
      genreId: 3
    },
    {
      title: 'Lo-Fi Guitar 1',
      artistId: 8,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/569496__migfus20__lo-fi-music-guitar-short-version.mp3',
      genreId: 3
    },
    {
      title: 'Prayer',
      artistId: 29,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/TRG+Banks+-+Prayer.mp3',
      genreId: 1
    },
    {
      title: 'Ambient Piano Pad',
      artistId: 8,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/ambient-piano-pad-ambient-piano-music-1133.mp3',
      genreId: 2
    },
    {
      title: 'Chill',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/chill-3612.mp3',
      genreId: 4
    },
    {
      title: 'Moog Motion',
      artistId: 26,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/cinematic-moog-motion-3507.mp3',
      genreId: 3
    },
    {
      title: 'Cloudy Bay Ambient',
      artistId: 8,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/cloudy-bay-ambient-chill-3596.mp3',
      genreId: 4
    },
    {
      title: 'Dreamy Piano',
      artistId: 9,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/dreamy-piano-soft-sound-ambient-background-4049.mp3',
      genreId: 4
    },
    {
      title: 'That Peace',
      artistId: 29,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/geovane-bruno-that-peace-2710.mp3',
      genreId: 4
    },
    {
      title: 'Modular Ambient 1',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/modular-ambient-01-789.mp3',
      genreId: 3
    },
    {
      title: 'Modular Ambient 2',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/modular-ambient-02-790.mp3',
      genreId: 4
    },
    {
      title: 'Modular Ambient 3',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/modular-ambient-03-791.mp3',
      genreId: 2
    },
    {
      title: 'Modular Ambient 4',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/modular-ambient-04-792.mp3',
      genreId: 2
    },
    {
      title: 'Modular Ambient 5',
      artistId: 17,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/modular-ambient-05-3506.mp3',
      genreId: 2
    },
    {
      title: 'Piano in the Great Hall',
      artistId: 2,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/piano-in-the-great-hall-2295.mp3',
      genreId: 1
    },
    {
      title: 'Release',
      artistId: 24,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/release-3929.mp3',
      genreId: 3
    },
    {
      title: 'Soft Meditation',
      artistId: 7,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/soft-meditation-3788.mp3',
      genreId: 4
    },
    {
      title: 'Teardrops',
      artistId: 15,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/teardrops-sad-song-piano-and-softpad-2763.mp3',
      genreId: 2
    },
    {
      title: 'The Journey',
      artistId: 30,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/the-journey-2582.mp3',
      genreId: 3
    },
    {
      title: 'Traveling Through Space',
      artistId: 15,
      artwork: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg',
      audioSrc: 'https://mellowcloud.s3-us-west-1.amazonaws.com/traveling-through-space-3281.mp3',
      genreId: 1
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tracks', null, {});
  }
};

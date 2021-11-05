export const routes = {
  home: '/',
  endimB1: {
    home: '/endim-b1',
    get links() {
      return this.home + '/links';
    },
    get rehearsal() {
      return this.home + '/rehearsal';
    },
    get newSolution() {
      return this.home + '/new-solution';
    },
    extentor: {
      home: '/endim-b1/extentor',
      get _20210818() {
        return this.home + '/2021-08-18';
      },
    },
  },
  endimB2: {
    home: '/endim-b2',
    get newSolution() {
      return this.home + '/new-solution';
    },
    bookSolutions: {
      home: '/endim-b2/book-solutions',
      chapter6: {
        home: '/endim-b2/book-solutions/chapter6',
        partOne: '/endim-b2/book-solutions/chapter6/part-one',
        partTwo: '/endim-b2/book-solutions/chapter6/part-two',
      },
    },
  },
};

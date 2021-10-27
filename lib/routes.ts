export const routes = {
  home: '/',
  endim: {
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
};

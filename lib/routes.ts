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
  },
};

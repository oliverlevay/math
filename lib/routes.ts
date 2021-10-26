export const routes = {
  home: '/',
  endim: {
    home: '/endim',
    get links() {
      return this.home + '/links';
    },
    get rehearsal() {
      return this.home + '/rehearsal';
    },
  },
};

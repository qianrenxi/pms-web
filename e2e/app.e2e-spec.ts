import { PmsWebPage } from './app.po';

describe('pms-web App', () => {
  let page: PmsWebPage;

  beforeEach(() => {
    page = new PmsWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to pms!!'))
      .then(done, done.fail);
  });
});

import { MeanBeltAppPage } from './app.po';

describe('mean-belt-app App', () => {
  let page: MeanBeltAppPage;

  beforeEach(() => {
    page = new MeanBeltAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

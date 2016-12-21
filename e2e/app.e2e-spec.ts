import { TwodrivePage } from './app.po';

describe('twodrive App', function() {
  let page: TwodrivePage;

  beforeEach(() => {
    page = new TwodrivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

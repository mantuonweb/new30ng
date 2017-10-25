import { Start30Page } from './app.po';

describe('start30 App', function() {
  let page: Start30Page;

  beforeEach(() => {
    page = new Start30Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

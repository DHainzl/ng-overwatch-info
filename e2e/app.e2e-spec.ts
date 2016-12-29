import { NgOverwatchInfoPage } from './app.po';

describe('ng-overwatch-info App', function() {
  let page: NgOverwatchInfoPage;

  beforeEach(() => {
    page = new NgOverwatchInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { UserRequest } from './user-request';



describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='Jora';
    expect(userData.name).toEqual('Jora');
  });

  it('nameProd is accessible', () => {
    expect(userData.nameProd).toEqual('');
    userData.nameProd='Jora';
    expect(userData.nameProd).toEqual('Jora');
  });

  it('format is accessible', () => {
    expect(userData.format).toEqual('');
    userData.format='Jora';
    expect(userData.format).toEqual('Jora');
  });

  it('ink is accessible', () => {
    expect(userData.ink).toEqual('');
    userData.ink='123';
    expect(userData.ink).toEqual('123');
  });

  it('paper is accessible', () => {
    expect(userData.paperQ).toEqual('');
    userData.paperQ='Jora';
    expect(userData.paperQ).toEqual('Jora');
  });

  // it('url is accessible', () => {
  //   expect(userData.url).toEqual('');
  //   userData.url='Jora';
  //   expect(userData.url).toEqual('Jora');
  // });

  // it('card is accessible', () => {
  //   expect(userData.card).toEqual('');
  //   userData.card='Jora';
  //   expect(userData.card).toEqual('Jora');
  // });

  it('ekz q is accessible', () => {
    expect(userData.ekzQ).toEqual('');
    userData.ekzQ='Jora';
    expect(userData.ekzQ).toEqual('Jora');
  });

  it('sidesQ is accessible', () => {
    expect(userData.sidesQ).toEqual('');
    userData.sidesQ='Jora';
    expect(userData.sidesQ).toEqual('Jora');
  });

  it('masterQ is accessible', () => {
    expect(userData.masterQ).toEqual('');
    userData.masterQ='Jora';
    expect(userData.masterQ).toEqual('Jora');
  });

});

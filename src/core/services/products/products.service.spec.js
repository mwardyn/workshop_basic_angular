import ProductsService from './products.service';

describe('ProductsService', function() {
  var $httpMock;

  beforeEach(() => {
    $httpMock = {
      get: jasmine.createSpy('$http.get'),
      post: jasmine.createSpy('$http.post'),
      update: jasmine.createSpy('$http.update'),
      delete: jasmine.createSpy('$http.delete')
    };

    this.subject = new ProductsService($httpMock);
    this.subject.url = '//test';
  });

  it('should be able to get data from API', () => {
    this.subject.read();

    expect($httpMock.get).toHaveBeenCalledWith('//test');
  });

  it('should be able to get data from API', () => {
    this.subject.create('something');

    expect($httpMock.post).toHaveBeenCalledWith('//test', 'something');
  });

  it('should be able to update data from API', () => {
    this.subject.update(33, 'something');

    expect($httpMock.update).toHaveBeenCalledWith('//test/33', 'something');
  });

  it('should be able to delete data from API', () => {
    this.subject.delete(42);

    expect($httpMock.delete).toHaveBeenCalledWith('//test/42');
  });

});

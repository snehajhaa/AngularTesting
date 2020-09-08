import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], 
        providers: [CommonService]
    });
    // service = TestBed.inject(CommonService); 
    // 
  });

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
        expect(service).toBeTruthy();
  });
});

/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ValueModel as PencilFactoryCustomModuleEndpointsModelsValueModel } from '../models/PencilFactory/CustomModule/Endpoints/Models/value-model';

@Injectable({
  providedIn: 'root',
})
export class CustomModuleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getValue
   */
  static readonly GetValuePath = '/api/moryx/custom-module/value';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getValue$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getValue$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PencilFactoryCustomModuleEndpointsModelsValueModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomModuleService.GetValuePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PencilFactoryCustomModuleEndpointsModelsValueModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getValue$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getValue$Plain(params?: {
    context?: HttpContext
  }
): Observable<PencilFactoryCustomModuleEndpointsModelsValueModel> {

    return this.getValue$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PencilFactoryCustomModuleEndpointsModelsValueModel>) => r.body as PencilFactoryCustomModuleEndpointsModelsValueModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getValue$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getValue$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PencilFactoryCustomModuleEndpointsModelsValueModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomModuleService.GetValuePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PencilFactoryCustomModuleEndpointsModelsValueModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getValue$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getValue$Json(params?: {
    context?: HttpContext
  }
): Observable<PencilFactoryCustomModuleEndpointsModelsValueModel> {

    return this.getValue$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PencilFactoryCustomModuleEndpointsModelsValueModel>) => r.body as PencilFactoryCustomModuleEndpointsModelsValueModel)
    );
  }

}

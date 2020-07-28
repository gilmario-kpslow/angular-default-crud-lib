import { Resource } from '../generic/resource';
import { Serializer } from './serializer';

export class  DomainSerializer< T extends Resource> implements Serializer {

  constructor(private domain: new () => T) {}

  getDomain(): T {
    return new this.domain();
  }

  public fromJson(json: any): T {
      const domain = this.getDomain();
      Object.keys(json).forEach(k => domain[k] = json[k]);
      return domain;
  }

  public toJson(domain: T): any {
      const json: any = {};
      Object.keys(domain).forEach(k => json[k] = domain[k]);
      return json;
  }
}

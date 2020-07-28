import { Resource } from '../generic/resource';

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}

import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  video?: string;
  location?: string;
  time?: any;
  is_verified?: boolean;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  video?: string;
  location?: string;
  organization_id?: string;
}

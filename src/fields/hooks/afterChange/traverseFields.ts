import { Field, TabAsField } from '../../config/types';
import { promise } from './promise';
import { PayloadRequest } from '../../../express/types';

type Args = {
  data: Record<string, unknown>
  doc: Record<string, unknown>
  fields: (Field | TabAsField)[]
  operation: 'create' | 'update'
  req: PayloadRequest
  siblingData: Record<string, unknown>
  siblingDoc: Record<string, unknown>
}

export const traverseFields = async ({
  data,
  doc,
  fields,
  operation,
  req,
  siblingData,
  siblingDoc,
}: Args): Promise<void> => {
  const promises = [];

  fields.forEach((field) => {
    promises.push(promise({
      data,
      doc,
      field,
      operation,
      req,
      siblingData,
      siblingDoc,
    }));
  });

  await Promise.all(promises);
};

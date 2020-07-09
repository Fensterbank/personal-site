import { FunctionComponent } from 'react';

export const Hidden: FunctionComponent = (props) => (
  <div className="hidden" style={{ display: 'none' }} {...props} />
);

import { FunctionComponent } from 'react';

export const Hidden: FunctionComponent = (props) => (
  <div className="hidden-for-script" style={{ display: 'none' }} {...props} />
);

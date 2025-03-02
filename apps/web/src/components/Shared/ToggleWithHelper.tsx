import { Toggle } from '@hey/ui';
import { type FC, type ReactNode } from 'react';

interface ToggleWithHelperProps {
  on: boolean;
  setOn: (on: boolean) => void;
  heading?: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
}

const ToggleWithHelper: FC<ToggleWithHelperProps> = ({
  on,
  setOn,
  heading,
  description,
  icon
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        {icon ? <span className="text-brand-500">{icon}</span> : null}
        {heading ? <span>{heading}</span> : null}
      </div>
      <div className="flex items-center space-x-2">
        <Toggle on={on} setOn={setOn} />
        <div className="ld-text-gray-500 text-sm font-bold">{description}</div>
      </div>
    </div>
  );
};

export default ToggleWithHelper;

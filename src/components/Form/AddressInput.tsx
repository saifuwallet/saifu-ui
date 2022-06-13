import clsx from 'clsx';
import Card from '../Elements/Card';
import Text from '../Elements/Text';
import Input from './Input';

const AddressInput = ({
  value,
  setValue,
  description,
  endIcon,
}: {
  value: string;
  setValue: (v: string) => void;
  description?: string;
  endIcon?: JSX.Element;
}) => {
  return (
    <Card variant="flat" className="p-2">
      <div className="flex justify-between">
        <div className="flex-grow w-52">
          <div>
            <Input
              className={clsx('form-input text-lg text-ellipsis dark:text-white')}
              type="text"
              variant="transparent"
              placeholder="Recipient"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-none m-auto px-2">{endIcon}</div>
      </div>
      <div className="px-2 pb-2">
        <Text variant="secondary" size="sm">
          {description}
        </Text>
        &nbsp;
      </div>
    </Card>
  );
};

export default AddressInput;

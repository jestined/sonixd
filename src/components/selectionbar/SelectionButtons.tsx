import React from 'react';
import { IconButton, Icon, Tooltip, Whisper } from 'rsuite';
import { useAppDispatch } from '../../redux/hooks';
import { clearSelected } from '../../redux/multiSelectSlice';

const tooltip = (text: string) => <Tooltip>{text}</Tooltip>;

const CustomIconButton = ({ tooltipText, icon, handleClick, ...rest }: any) => {
  return (
    <>
      {tooltipText ? (
        <Whisper
          placement="top"
          trigger="hover"
          delay={300}
          speaker={tooltip(tooltipText)}
        >
          <IconButton
            size="xs"
            {...rest}
            icon={<Icon icon={icon} {...rest} />}
            onClick={handleClick}
          />
        </Whisper>
      ) : (
        <IconButton size="xs" icon={<Icon icon={icon} {...rest} />} />
      )}
    </>
  );
};

export const MoveUpButton = ({ handleClick }: any) => {
  return (
    <CustomIconButton
      handleClick={handleClick}
      tooltipText="Move up"
      icon="arrow-up2"
    />
  );
};

export const MoveDownButton = ({ handleClick }: any) => {
  return (
    <CustomIconButton
      handleClick={handleClick}
      tooltipText="Move down"
      icon="arrow-down2"
    />
  );
};

export const MoveManualButton = ({ handleClick }: any) => {
  return (
    <CustomIconButton
      handleClick={handleClick}
      tooltipText="Move to index"
      icon="arrows-v"
    />
  );
};

export const DeselectAllButton = ({ handleClick }: any) => {
  const dispatch = useAppDispatch();

  return (
    <CustomIconButton
      handleClick={handleClick}
      tooltipText="Deselect All"
      icon="close"
      onClick={() => dispatch(clearSelected())}
      color="red"
    />
  );
};